import * as React from "react"
import PropTypes from 'prop-types';

import { Box, Link, Button, HStack  } from "@chakra-ui/react"
import { motion } from "framer-motion"

const MotionLink = motion(Link)

function NavButton({ text, href, ...props }) {
	return (
		<MotionLink whileHover={{ scale: 1.1 }} href={href}>
			<Button size='md' variant='ghost' aria-label={text} {...props}>{text}</Button>
		</MotionLink>
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