import * as React from "react"
import { useState, useEffect } from "react"
import { Container, Box, SimpleGrid, Heading, Text, Link, Button, Center } from "@chakra-ui/react"
import { useBoolean } from "@chakra-ui/react"

import { ExternalLinkIcon } from "@chakra-ui/icons"
import {FaGithub} from '@react-icons/all-files/fa/FaGithub'

import { useStaticQuery, graphql } from 'gatsby'

import { motion } from "framer-motion"

import GithubCard from "../github-card/"

const MotionButton = motion(Button)
const MotionGrid = motion(SimpleGrid)

export default function Github() {
	const data = useStaticQuery(
	  graphql`
	  query MyQuery {
		allGithubData {
		  nodes {
			data {
			  user {
				repositories {
				  nodes {
					id
        			name
        			description
        			url
        			openGraphImageUrl
        			usesCustomOpenGraphImage
       				stargazerCount
					repositoryTopics {
						nodes {
							topic {
								id
								name
							}
						}
					}
				  }
				}
			  }
			}
		  }
		}
	  }
	  `
	)
  
	const loadAmount = 6
	const repos = data.allGithubData.nodes[0].data.user.repositories.nodes

	// State for the list
	const [list, setList] = useState([...repos.slice(0, loadAmount)])

	// State to trigger load more
	const [loadMore, setLoadMore] = useState(false)

	// State of whether there is more to load
	const [hasMore, setHasMore] = useState(repos.length > loadAmount)

	// Load more button click
	const handleLoadMore = () => {
		setLoadMore(true)
	}

	// Handle loading more articles
	useEffect(() => {
		if (loadMore && hasMore) {
		const currentLength = list.length
		const isMore = currentLength < repos.length
		const nextResults = isMore
			? repos.slice(currentLength, currentLength + loadAmount)
			: []
		setList([...list, ...nextResults])
		setLoadMore(false)
		}
	}, [loadMore, hasMore]) //eslint-disable-line

	//Check if there is more
	useEffect(() => {
		const isMore = list.length < repos.length
		setHasMore(isMore)
	}, [list]) //eslint-disable-line

	const animations = {
		initial: "out",
		animate: "in",
		variants: {
			in: {
				transition: {
					staggerChildren: 0.1
				}
			}
		}
	  }
  
	return (
		<Container py='5' maxW='container.md'>
			<Box>
			<Heading paddingY={2}>Github</Heading>
			<Text paddingY={2} color='gray.500'>
				You can find all my projects on&nbsp;
				<Link href='https://Github.com/Sokka06' isExternal>GitHub<ExternalLinkIcon mx='2px' /></Link>
			</Text>
		</Box>

		{list.length > 0 ? 
			<Box>
				<MotionGrid
				{...animations}
				columns={{sm: 2, md: 3}} 
				spacing={5}>
				{
				list.map((repo, index) =>
					<GithubCard repo={repo} delay={index * 1000} key={repo.id} />
				)
				}
				</MotionGrid>

				<Box py='5'>
					<Center>
						{hasMore && (
							<MotionButton 
							whileHover={{ scale: 1.1 }}
							variant='outline' 
							colorScheme='teal' 
							size='lg' 
							onClick={handleLoadMore}>
								Show More
							</MotionButton>
						)}
					</Center>
				</Box>
			</Box> 
		  :
		  	<Text>Nothing to see here yet...</Text>
		}
		</Container>
	)
}