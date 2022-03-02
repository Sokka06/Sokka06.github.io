import * as React from "react"
import {Container, Box, Text, Heading } from "@chakra-ui/react"

import Layout from "../components/global/Layout"
import Seo from "../components/global/Seo"

const NotFoundPage = () => (
	<>
		<Seo title="Secret" />
		<Layout>
		<Container centerContent py={'10'}>
			<Box>
				<Heading py='5'>You just found a secret page!</Heading>
				<Text fontSize='xl'>Feel free to brag to all your friends.</Text>
			</Box>
			</Container>
		</Layout>
  </>
)

export default NotFoundPage
