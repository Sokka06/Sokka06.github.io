import * as React from "react"
import PropTypes from "prop-types"
import { Flex  } from "@chakra-ui/react"
import { useDisclosure, useColorMode, useBreakpointValue } from '@chakra-ui/react'

import NavigationDesktop from "./NavigationDesktop"
import NavigationMobile from "./NavigationMobile"

const navigation = [
	{ name: 'Hello', href: '#hello' },
	{ name: 'Github', href: '#github' },
	{ name: 'Projects', href: '#projects' },
	{ name: 'Contact', href: '#contact' },
  ]

function Header(props) {
	const { colorMode, toggleColorMode } = useColorMode()
	const { isOpen, onOpen, onClose, onToggle } = useDisclosure()
	const mobile = useBreakpointValue({ base: true, sm: false })

	return (
		<Flex 
			as="header" 
			/* position="fixed"  */
			w="100%" 
			p='2'
			color={'gray.500'}/* 
			shadow='md' 
			roundedBottom='md' 
			bgGradient='linear-gradient(38deg, #171923 0%, #1A202C 46%, #171923 100%)'  */
			zIndex='docked'
			justify={!mobile ? 'center' : 'flex-end'}>
				{!mobile ?
					<NavigationDesktop links={navigation}/> : <NavigationMobile links={navigation}/>
			}
			</Flex>
	)
  }

  Header.defaultProps = {
  }
  
  Header.propTypes = {
  }

export default Header
