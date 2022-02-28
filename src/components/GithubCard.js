import * as React from "react"
import PropTypes from 'prop-types';
import { AspectRatio, Box, LinkBox, LinkOverlay, Stack, HStack, Tag, TagLabel, Flex, Spacer, useBreakpointValue } from "@chakra-ui/react"
import { motion } from "framer-motion"

const MotionLinkBox = motion(LinkBox)


export default function GithubCard (props) {

	// fixes a weird tag size bug
	const tagSize = useBreakpointValue({ base: 'lg', sm: 'md' })

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
				bgGradient='linear(to-tr, red.600, pink.600)' >
				<LinkOverlay href={props.repo.url} height='full' width='full' >
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

						<HStack>
							<Tag
								size={tagSize}
								borderRadius='full'
								variant='solid'
								colorScheme={'red'}
							>
								<TagLabel>Unity</TagLabel>
							</Tag>
							<Tag
								size={tagSize}
								borderRadius='full'
								variant='solid'
								variant='solid'
								colorScheme={'red'}
							>
								<TagLabel>C#</TagLabel>
							</Tag>
						</HStack>
					</Flex>
				</LinkOverlay>
			</MotionLinkBox >
		</AspectRatio>
	)

	
	/* return(
		<AspectRatio ratio={1}>
			<MotionLinkBox 
				{...animations} 
				borderRadius='lg' 
				shadow='lg' 
				overflow='hidden'
				bgGradient='linear-gradient(45deg, #FC8181 30%, #ED8936 90%)' >
				<LinkOverlay href={props.repo.url} >
					<Box p='6' display='flex'>
						<Stack align={{ base: "center", md: "stretch" }} textAlign={{ base: "center", md: "left" }}>
							<Box 
								fontWeight='bold' 
								as='h4' 
								lineHeight='tight' 
								fontSize={{ sm: 'xl', md: 'lg' }}>
								{props.repo.name}
							</Box>
							<Box colorScheme='teal' fontSize='sm' noOfLines={4}>
								{props.repo.description}
							</Box>

							<HStack>
								<Tag
									size='md'
									borderRadius='full'
									variant='solid'
								>
									<TagLabel>Unity</TagLabel>
								</Tag>
								<Tag
									size='md'
									borderRadius='full'
									variant='solid'
								>
									<TagLabel>C#</TagLabel>
								</Tag>
							</HStack>
						</Stack>
					</Box>
				</LinkOverlay>
			</MotionLinkBox >
		</AspectRatio>
	) */
}

GithubCard.propTypes = {
	repo: PropTypes.object.isRequired,
	delay: PropTypes.number,
	props: PropTypes.object
  }

  GithubCard.defaultProps = {
	  delay: 0
  }