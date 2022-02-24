// init. environment variables
/* const dotenv = require('dotenv');
dotenv.config(); */
require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
  })

const { githubApiQuery } = require('./src/github-api')

module.exports = {
siteMetadata: {
	title: `Santtu Niskala`,
	description: `Santtu Niskala's Portfolio. Made with Gatsby and Chakra UI.`,
	author: `@sokka06`,
	siteUrl: `https://sokka06.github.io`,
},
plugins: [
	{
		resolve: '@chakra-ui/gatsby-plugin',
		options: {
			/**
			 * @property {boolean} [resetCSS=true]
			 * if false, this plugin will not use `<CSSReset />
			 */
			resetCSS: true,
			/**
			 * @property {boolean} [isUsingColorMode=true]
			 * if false, this plugin will not use <ColorModeProvider />
			 */
			isUsingColorMode: true,
		},
	},
	`gatsby-plugin-react-helmet`,
	`gatsby-plugin-image`,
	{
		resolve: `gatsby-source-filesystem`,
		options: {
			name: `images`,
			path: `${__dirname}/src/images`,
		},
	},
	`gatsby-transformer-sharp`,
	`gatsby-plugin-sharp`,
	{
		resolve: `gatsby-plugin-manifest`,
		options: {
			name: `gatsby-starter-default`,
			short_name: `starter`,
			start_url: `/`,
			background_color: `#663399`,
			// This will impact how browsers show your PWA/website
			// https://css-tricks.com/meta-theme-color-and-trickery/
			// theme_color: `#663399`,
			display: `minimal-ui`,
			icon: `src/images/icon.png`, // This path is relative to the root of the site.
		},
	},
	{
		resolve: `gatsby-source-github-api`,
		options: {
		  url: "https://api.github.com/graphql", // default Github GraphQL v4 API endpoint
	
		  // token: required by the GitHub API
		  token: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
	
		  // GraphQLquery: defaults to a search query
		  graphQLQuery: githubApiQuery,
	
		  // variables: defaults to variables needed for a search query
		  variables: {
			github_login: process.env.GATSBY_GITHUB_LOGIN
		  }
		}
	  },
	  {
		resolve: `gatsby-source-filesystem`,
		options: {
		 name: `projects`,
		 path: `${__dirname}/src/projects/`,
		},
	   },
	   `gatsby-plugin-mdx`,
	   {
		resolve: `gatsby-source-filesystem`,
		options: {
		 name: `media`,
		 path: `${__dirname}/src/projects/media`,
		},
	   },
	// this (optional) plugin enables Progressive Web App + Offline functionality
	// To learn more, visit: https://gatsby.dev/offline
	// `gatsby-plugin-offline`,
],
}