/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react"

// Base Layout
import { Layout } from "./src/components/global/Layout"

import { ChakraProvider } from "@chakra-ui/provider"
import theme from "./src/@chakra-ui/gatsby-plugin/theme"

import "./styles.css"

/* 
export const wrapPageElement = ({ element }) => <Layout>{element}</Layout> */

export const wrapRootElement = ({ element }) => (
    <ChakraProvider theme={theme}>
        {element}
    </ChakraProvider>
)