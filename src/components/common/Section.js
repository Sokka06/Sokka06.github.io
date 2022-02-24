import * as React from "react"
import PropTypes from 'prop-types';
import { InView  } from 'react-intersection-observer';

import { Box, Fade } from "@chakra-ui/react"

export default function Section (props) {

	const [show, setShow] = React.useState(false)

	return(
		<Box id={props.name} >
			<InView onChange={() => setShow(true)} triggerOnce>
			<Fade in={show} delay={0}>
			{props.children}
      </Fade>
				
			</InView>
		</Box>
	)
}

Section.propTypes = {
	name: PropTypes.string,
	children: PropTypes.node.isRequired,
  }

Section.defaultProps = {
	name: ''
  }