/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import {Flex, Container, Spacer, Box } from "@chakra-ui/react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../header"
import Footer from "../sections/Footer"
import Background from "../background";
import * as Scroll from 'react-scroll';
import ScrollToTopButton from '../scroll-to-top'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  
	return (
	<>
		<Background/>
		<ScrollToTopButton/>
		<Header />
		<Flex direction="column" align="center" maxW={{ xl: "1200px" }} m="0 auto">
			<Container as="main" maxW='container.lg'>
				{children}
			</Container>
			<Footer/>
		</Flex>
		</>
	)
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout