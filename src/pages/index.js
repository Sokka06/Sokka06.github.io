import * as React from "react"

import Layout from "../components/global/Layout"
import Seo from "../components/global/Seo"
import Hero from "../components/sections/Hero"
import Github from "../components/sections/Github"
import Projects from "../components/sections/Projects"
import Skills from "../components/sections/Skills"
import Contact from "../components/sections/Contact"
import Empty from "../components/common/Empty"
import Section from "../components/common/Section"

const IndexPage = () => (
<>
		<Seo title="Portfolio" />
		<Layout>
			{/* <Empty space={3} /> */}

			<Section name='hello'>
				<Hero/>
				<Skills/>
			</Section>

			<Empty space={10} />

			<Section name='github'>
				<Github/>
			</Section>

			<Empty space={10} />
			
			<Section name='projects'>
				<Projects/>
			</Section>

			<Empty space={10} />

			<Section name='contact'>
				<Contact/>
			</Section>
		</Layout>
</>
)

export default IndexPage