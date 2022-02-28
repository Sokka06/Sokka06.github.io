import * as React from "react"
import { Box, Container, Stack, Text, Heading, Image, Flex, Spacer, AspectRatio, Link } from "@chakra-ui/react"
import { StaticImage } from "gatsby-plugin-image"

import Hello from '../content/hello.mdx'
import AvatarImg from "../images/avatar.jpg"
import Section from "./common/Section";

import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

const AvatarImage = () => (
	<AspectRatio ratio={1} width='xs' shadow='lg'>
		<Image src={AvatarImg} alt='Avatar' rounded='md' objectFit='cover' draggable='false'/>
	</AspectRatio>
)

const components = {
	h1: props => <Heading {...props} py={'2'} />,
	h2: props => <Heading {...props} size='sm' py={'2'} />,
	p: props => <Text {...props} py={'2'} />,
	a: props => <Link {...props} color='teal.500'/>,
}

const Hero = () => {
	return(
		<Container centerContent>
		<Box>
			<AvatarImage/>
		</Box>
		<Box>
			<MDXProvider components={components}>
				<Hello />
			</MDXProvider>
		</Box>
	</Container>
	)
}

Hero.propTypes = {
}

Hero.defaultProps = {
}

export default Hero