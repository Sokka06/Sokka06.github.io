import * as React from "react"
import PropTypes from 'prop-types';

import { Container, Heading, HStack, Tag, TagLabel, Text, Box, Flex, useBreakpointValue, VStack, AspectRatio, Link, Image } from "@chakra-ui/react"


// Import Swiper React components
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

import ReactPlayer from 'react-player/lazy'
import './media.css'

const MediaSlide = ({media}) => {
	const swiperSlide = useSwiperSlide();
	console.log(media)
	const path = `./${media.publicURL}`
	return (
		(media.extension === 'jpg' ? (
			<Image src={path} objectFit='cover' height={'full'}/>
		) : (
			<ReactPlayer className='react-player' url={path} height={'100%'} width={'100%'} playing={swiperSlide.isActive} loop muted playsinline/>
		))
	)
}

export default function MediaCarousel (props) {
	return(
		<>
		<AspectRatio ratio={1} rounded={'lg'} shadow={'lg'} overflow='hidden' background={'gray.800'}>
		<Swiper navigation={true} pagination={{
          clickable: true,
        }} modules={[Navigation, Pagination]} grabCursor={true}>
			{props.media.map(item => (
			<SwiperSlide>
				<MediaSlide media={item}/>
			</SwiperSlide>
			))}
		</Swiper>
	</AspectRatio>
	</>
	)
}

MediaCarousel.propTypes = {
	media: PropTypes.array.isRequired
  }

  MediaCarousel.defaultProps = {
	  media: []
  }