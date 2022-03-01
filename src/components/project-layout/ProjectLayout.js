import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import PropTypes from 'prop-types';

// Importing all the styled components as Components.
// You can import specific styled components that you need
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Container, Heading, HStack, Tag, TagLabel, Text, Box, Flex, useBreakpointValue, VStack, AspectRatio, Link, Image, Spacer, Divider } from "@chakra-ui/react";

import MediaCarousel from "../media-carousel/MediaCarousel"

const components = {
	h1: Heading,
	h2: props => <Heading {...props} size='sm' />,
	p: props => <Text {...props} pb={'2'} />,
	a: props => <Link {...props} color='teal.500'/>,
}

export default function ProjectLayout (props) {

	const useCompact = useBreakpointValue({ base: true, md: false })

	return (
		<>
		<Heading as={'h4'} size='md'>{props.mdx.frontmatter.title}</Heading>
		<Box color='teal.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='md'>{props.mdx.frontmatter.date}
		</Box>
		<HStack pb={'2'}>
			{props.mdx.frontmatter.tags.map(tag => (
				<Tag
				size='md'
				borderRadius='full'
				variant='solid'
				key={tag}
				>
				{tag}
			</Tag>
			))}
		</HStack>

		{useCompact ? (
			<VStack>
				<Container>
					<MediaCarousel media={props.mdx.frontmatter.media}/>
				</Container>
				<Box>
					<MDXProvider components={components}>
						<MDXRenderer>{props.mdx.body}</MDXRenderer>
					</MDXProvider>
				</Box>
			</VStack>
		) : (
			<Flex>
				{(!props.flip ? (
					<>
					<Box flex={1}>
						<MDXProvider components={components}>
							<MDXRenderer>{props.mdx.body}</MDXRenderer>
						</MDXProvider>
					</Box>

					<Spacer maxW={'10'} />
					
					<Box flex={1}>
						<MediaCarousel flex={1} media={props.mdx.frontmatter.media}/>
					</Box>
					</>
				) : (
					<>
					<Box flex={1}>
						<MediaCarousel flex={1} media={props.mdx.frontmatter.media}/>
					</Box>

					<Spacer maxW={'10'} />

					<Box flex={1}>
						<MDXProvider components={components}>
							<MDXRenderer>{props.mdx.body}</MDXRenderer>
						</MDXProvider>
					</Box>
					</>
				))}
			</Flex>
		)}
	  </>
	)
}

ProjectLayout.propTypes = {
	mdx: PropTypes.object.isRequired,
	flip: PropTypes.bool
}

ProjectLayout.defaultProps = {
	flip: false
}