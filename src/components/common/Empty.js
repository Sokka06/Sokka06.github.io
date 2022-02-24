import * as React from "react"
import PropTypes from 'prop-types';

import { Box } from "@chakra-ui/react"

export default function Empty (props) {
	return(
		<Box py={props.space} {...props.props} />
	)
}

Empty.propTypes = {
	space: PropTypes.number,
	props: PropTypes.object
  }

Empty.defaultProps = {
	space: 2,
	props: {}
  }