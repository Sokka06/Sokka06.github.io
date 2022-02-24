import * as React from "react"
import { ChakraProvider } from "@chakra-ui/provider"
import theme from "../@chakra-ui/gatsby-plugin/theme"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import Github from "../components/github"
import Projects from "../components/projects"
import Skills from "../components/skills"
import Contact from "../components/contact"
import Empty from "../components/common/Empty"
import Section from "../components/common/Section"

const IndexPage = () => (
	<ChakraProvider theme={theme}>
		<Seo title="Portfolio" />
		<Layout>
			<Empty space={3} />

			<Section name='hello'>
				<Hero/>
				<Skills/>
			</Section>

			<Empty space={10} />

			<Section name='github'>
				<Github/>
			</Section>
			
			<Section name='projects'>
				<Projects/>
			</Section>

			<Section name='contact'>
				<Contact/>
			</Section>
		</Layout>
	</ChakraProvider>
)

export default IndexPage