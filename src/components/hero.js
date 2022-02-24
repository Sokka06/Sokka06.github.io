import * as React from "react"
import { Box, Container, Stack, Text, Heading, Image, Flex, Spacer, AspectRatio } from "@chakra-ui/react"
import { StaticImage } from "gatsby-plugin-image"

import AvatarImg from "../images/avatar.jpg"
import Section from "./common/Section";

function Age() {
    let dob = new Date(1994, 4, 7);
    let diff_ms = Date.now() - dob.getTime();
    let age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

const AvatarImage = () => (
	<AspectRatio ratio={1} width='xs' shadow='lg'>
		<Image src={AvatarImg} alt='Avatar' rounded='md' objectFit='cover' draggable='false'/>
	</AspectRatio>
)

const Hero = () => (
<Container centerContent>
		<Box>
			<AvatarImage/>
		</Box>
		<Box>
			<Heading paddingY={2}>Hello!</Heading>
			<Text paddingY={2}>
				I'm a {Age()} year old programmer currently living in Oulu, Finland. I'm mostly focused in gamedev, but I also enjoy web stuff 2
			</Text>
		</Box>
		<Spacer />
	</Container>
)

Hero.propTypes = {
}

Hero.defaultProps = {
}

export default Hero