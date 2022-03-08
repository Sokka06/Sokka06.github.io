import * as React from "react"
import PropTypes from "prop-types"
import { Flex  } from "@chakra-ui/react"
import { useBreakpointValue } from '@chakra-ui/react'

import NavigationDesktop from "./NavigationDesktop"
import NavigationMobile from "./NavigationMobile"

const navigation = [
	{ name: 'Hello', href: 'hello' },
	{ name: 'Github', href: 'github' },
	{ name: 'Projects', href: 'projects' },
	{ name: 'Contact', href: 'contact' },
  ]

function Header(props) {
	const mobile = useBreakpointValue({ base: true, sm: false })

	return (
		<Flex 
			as="header"
			w="100%" 
			p='2'
			color={'gray.500'}
			zIndex='docked'
			justify={'center'}>
				<NavigationDesktop links={navigation}/>
				{/* !mobile ? <NavigationDesktop links={navigation}/> : <NavigationMobile links={navigation}/> */}
			</Flex>
	)
}

Header.defaultProps = {

}

Header.propTypes = {

}

export default Header
