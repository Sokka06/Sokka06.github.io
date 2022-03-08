import React, {useEffect} from "react"
import PropTypes from 'prop-types';
import { Box, IconButton, Fade, useBoolean } from "@chakra-ui/react";
import { motion } from "framer-motion"
import {animateScroll as scroll} from 'react-scroll'

import { ChevronUpIcon } from '@chakra-ui/icons'

const MotionIconButton = motion(IconButton)

export default function ScrollToTopButton(props) {

	const [isVisible, setVisible] = useBoolean(false)

	const HandleScroll = () => {
		if (isVisible !== (window.pageYOffset > props.minScroll))
			setVisible.toggle()
    }

	function OnClick() {
		scroll.scrollToTop({
			duration: 500,
			delay: 100
		  });
	}

	useEffect(() => {
        window.addEventListener('scroll', HandleScroll)

        return () => window.removeEventListener('scroll', HandleScroll)
    })

	return (
		<Fade in={isVisible}>
			<Box
			as='button'
			zIndex={'toast'}
			position={'fixed'}
			right={props.offset.x}
			bottom={props.offset.y}
			height={props.size}
			padding={'0'}
			borderRadius={'full'}
			shadow={'dark-lg'}
			bgGradient={'linear(to-tr, red.500, pink.400)'}
			color='gray.100'
			opacity={'0.75'}
			transition='all 0.1s cubic-bezier(.08,.52,.52,1)'
			_hover={{ /* bg: '#ebedf0' */ }}
			_active={{
				opacity: '1',
				transform: 'scale(0.9)',
				borderColor: '#bec3c9',
			}}
			_focus={{/* 
				boxShadow:
				'0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)', */
			}}
			onClick={OnClick}
			>
			<ChevronUpIcon width={'full'} height={'full'} />
			</Box>
		</Fade>
	)
}

ScrollToTopButton.propTypes = {
	minScroll: PropTypes.number,
	offset: PropTypes.shape({x: PropTypes.number, y: PropTypes.number}),
	size: PropTypes.number
}

ScrollToTopButton.defaultProps = {
	minScroll: 512,
	offset: {x: 8, y: 16},
	size: 16
}