import * as React from "react"
import { Box, Container, Text, Heading, AspectRatio, Link } from "@chakra-ui/react"
import { StaticImage } from "gatsby-plugin-image"

import Empty from '../common/Empty'
import Hello from '../../content/hello.mdx'

import { MDXProvider } from "@mdx-js/react"

const AvatarImage = () => (
	<AspectRatio ratio={1} width='xs' shadow='lg' rounded='md' overflow={'hidden'}>
		{/* <Image src={AvatarImg} alt='Avatar' objectFit='cover' draggable='false'/> */}
		<StaticImage src="../../images/avatar.jpg" alt="Avatar" draggable={false} />
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
		<Container centerContent maxW={'container.md'} >
		<Box>
			<AvatarImage/>
		</Box>

		<Empty space={3} /> 

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