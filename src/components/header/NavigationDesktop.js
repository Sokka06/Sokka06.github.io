import * as React from "react"
import PropTypes from 'prop-types';

import { Box, Button, HStack  } from "@chakra-ui/react"
import { motion } from "framer-motion"

import {Link} from 'react-scroll'

const MotionLink = motion(Link)

function NavButton({ text, href, ...props }) {
	return (
		<Link to={href} smooth={true} delay={100} duration={500}>
			<Button size='md' variant='ghost' aria-label={text} {...props}>{text}</Button>
		</Link>
	);
  }

export default function NavigationDesktop (props) {
	return (
		<Box>
			<HStack>
				{props.links.map((item) => (
					<NavButton text={item.name} href={item.href} key={item.name} />
				))}
			</HStack>
		</Box>
	)
}

NavigationDesktop.propTypes = {
	links: PropTypes.array,
	props: PropTypes.object
}

NavigationDesktop.defaultProps = {
	links: [],
	props: {}
}