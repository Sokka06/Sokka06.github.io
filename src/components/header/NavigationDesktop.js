import * as React from "react"
import PropTypes from 'prop-types';

import { Box, Link, Button, HStack  } from "@chakra-ui/react"

import { motion } from "framer-motion"
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import {IconButton } from '@chakra-ui/react'


function NavLink({ text, href, ...props })  {
	return (
		<Box p='2'>
			<Link href={href} fontWeight='bold' colorScheme='teal'>{text}</Link>
		</Box>	
	)
}

const MotionLink = motion(Link)

function NavButton({ text, href, ...props }) {
	return (
	  <MotionLink whileHover={{ scale: 1.1 }} href={href} >
		  <Button size='md' variant='ghost' {...props}>{text}</Button>
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