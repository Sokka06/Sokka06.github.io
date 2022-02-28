import React, {useEffect} from "react"
import PropTypes from 'prop-types';
import { IconButton, Icon, Fade, useBoolean } from "@chakra-ui/react";
import { motion } from "framer-motion"

import { ChevronUpIcon } from '@chakra-ui/icons'

const MotionIconButton = motion(IconButton)

export default function ScrollToTopButton(props) {

	const [isVisible, setVisible] = useBoolean()

	const HandleScroll = () => {
		if (isVisible !== window.pageYOffset > props.minScroll)
			setVisible.toggle()
		
        /* if (window.pageYOffset > props.minScroll) 
		{
            if (!isVisible) setVisible.on()
        } else 
		{
            if (isVisible) setVisible.off()
        } */
    }

	function OnClick() {
		window['scrollTo']({ top: 0, behavior: 'smooth' })
	}

	useEffect(() => {
        window.addEventListener(`scroll`, HandleScroll)

        return () => window.removeEventListener(`scroll`, HandleScroll)
    })

	return (
		<Fade in={isVisible}>
			<IconButton
			zIndex={'toast'}
			position={'fixed'}
			colorScheme={'red'}
			isRound
			/* bgGradient={'linear(to-r, green.200, pink.500)'} */
			right={props.offset.x}
			bottom={props.offset.y}
			size={'lg'}
			onClick={OnClick}
			icon={<ChevronUpIcon width={'full'} height={'full'} />}/>
		</Fade>
	)
}

ScrollToTopButton.propTypes = {
	minScroll: PropTypes.number,
	offset: PropTypes.shape({x: PropTypes.number, y: PropTypes.number})
}

ScrollToTopButton.defaultProps = {
	minScroll: 256,
	offset: {x: 10, y: 10}
}