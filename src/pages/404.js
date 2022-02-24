import * as React from "react"
import {ChakraProvider, Container, Box, Text, Heading } from "@chakra-ui/react"

import theme from "../@chakra-ui/gatsby-plugin/theme"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
	<ChakraProvider theme={theme}>
		<Seo title="Secret" />
		<Layout>
		<Container centerContent>
			<Box>
				<Heading py='5'>You just found a secret page!</Heading>
				<Text fontSize='xl'>Feel free to brag to all your friends.</Text>
			</Box>
			</Container>
		</Layout>
  </ChakraProvider>
)

export default NotFoundPage
