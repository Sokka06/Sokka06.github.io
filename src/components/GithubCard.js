import * as React from "react"
import { useState, useEffect } from "react"
import PropTypes from 'prop-types';
import { AspectRatio, Box, LinkBox, LinkOverlay, Stack, HStack, Tag, TagLabel, Flex, Spacer, useBreakpointValue, Wrap } from "@chakra-ui/react"
import { motion } from "framer-motion"

const MotionLinkBox = motion(LinkBox)


export default function GithubCard (props) {

	// fixes a weird tag size bug
	const tagSize = useBreakpointValue({ base: 'lg', sm: 'md' })

	const topics = props.repo.repositoryTopics.nodes

	const animations = {
		variants: {
			in: { opacity: 1},
			out: { opacity: 0 },
		  },
		  whileHover: { y: -5 },
	  }

	return(
		<AspectRatio ratio={1}>
			<MotionLinkBox 
				{...animations} 
				borderRadius='lg' 
				shadow='lg' 
				overflow='hidden'
				bgGradient='linear(to-tr, red.600, pink.500)' >
				<LinkOverlay href={props.repo.url} height='full' width='full' isExternal >
					<Flex p='3' direction={'column'} height='full'>
						<Box 
							fontWeight='bold' 
							as='h4' 
							lineHeight='tight' 
							fontSize={{ base: 'xl', md: 'lg' }}
							textAlign={'center'}>
							{props.repo.name}
						</Box>

						<Box 
							flex={'1'} 
							justifySelf={'stretch'} 
							alignSelf='stretch' 
							fontSize={{ base: 'lg', sm: 'md', md: 'sm' }}>
							{props.repo.description}
						</Box>

						<Wrap shouldWrapChildren>
							{topics.map(item =>
								<Tag
								size={tagSize}
								borderRadius='full'
								variant='solid'
								colorScheme={'pink'}
								key={item.topic.id}
							>
								{item.topic.name}
							</Tag>
							)}
						</Wrap>
					</Flex>
				</LinkOverlay>
			</MotionLinkBox >
		</AspectRatio>
	)
}

GithubCard.propTypes = {
	repo: PropTypes.object.isRequired,
	delay: PropTypes.number,
	props: PropTypes.object
  }

  GithubCard.defaultProps = {
	  delay: 0
  }