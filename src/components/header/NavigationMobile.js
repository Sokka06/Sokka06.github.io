import * as React from "react"
import PropTypes from 'prop-types';

import { Menu, MenuButton, MenuList, MenuItem, IconButton  } from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons";

export default function NavigationMobile (props) {
	return(
		<Menu placement='auto'>
			<MenuButton
				as={IconButton}
				aria-label='Options'
				icon={<HamburgerIcon />}
				variant='outline'
				boxSize={'12'}
			/>
			<MenuList>
			{props.links.map((item) => (
							<MenuItem as='a' href={item.href} key={item.name}>
							{item.name}
							</MenuItem>
							))}
				
			</MenuList>
			</Menu>
	)
}


NavigationMobile.propTypes = {
	space: PropTypes.number,
	props: PropTypes.object
  }

  NavigationMobile.defaultProps = {
	space: 2,
	props: {}
  }