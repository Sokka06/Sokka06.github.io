import React, { useState, useEffect } from "react"
import { Box, Heading, Divider, Container } from "@chakra-ui/react"
import Pagination from './pagination'

import { CgChevronLeft, CgChevronRight } from '@react-icons/all-files/'
import { useStaticQuery, graphql, Link } from "gatsby";
import ProjectLayout from "./ProjectLayout";

// https://codesandbox.io/s/88kf4?file=/src/ItemList.js pagination

export default function Projects () {
	const data = useStaticQuery(
		graphql`
		query ProjectsQuery {
			allMdx (
				sort: { fields: [frontmatter___date], order: DESC }
			  ) {
				nodes {
				  frontmatter {
					title
					date(formatString: "MM/YYYY")
					tags
					media {
						publicURL
						relativePath
						extension
						absolutePath
					  }
				  }
				  body
				  id
				}
			  }
		  }
		`
	   );
	  
	   const projects = data.allMdx.nodes

	   const itemsPerPage = 1

	   // We start with an empty list of items.
		const [currentItems, setCurrentItems] = useState(null);
		const [pageCount, setPageCount] = useState(0);
		// Here we use item offsets; we could also use page offsets
		// following the API or data you're working with.
		const [itemOffset, setItemOffset] = useState(0);

		useEffect(() => {
			// Fetch items from another resources.
			const endOffset = itemOffset + itemsPerPage;
			console.log(`Loading items from ${itemOffset} to ${endOffset}`);
			setCurrentItems(projects.slice(itemOffset, endOffset));
			setPageCount(Math.ceil(projects.length / itemsPerPage));
		}, [itemOffset, itemsPerPage]);

		// Invoke when user click to request another page.
		const handlePageClick = (event) => {
			const newOffset = (event.selected * itemsPerPage) % projects.length;
			console.log(
			`User requested page number ${event.selected}, which is offset ${newOffset}`
			);
			setItemOffset(newOffset);
		};

	return(
	<Box>
		<Box>
		<Heading py={'3'}>Projects</Heading>
		<Container centerContent py={'5'}>
			<Pagination
			breakLabel="..."
			nextLabel="next >"
			onPageChange={handlePageClick}
			pageRangeDisplayed={1}
			pageCount={pageCount}
			previousLabel="< previous"
			renderOnZeroPageCount={null}
			/>
		</Container>
		</Box>
		{currentItems && currentItems.map((project, index) => (
			<Box key={project.id}>
				<ProjectLayout mdx={project} index={index} flip={index % 2 !== 0}/>

				{((index + 1) < currentItems.length && (
					<Box py={'3'} px={'10'}>
						<Divider />
					</Box>
				))}
			</Box>
    	))}
	</Box>
	)
}

Projects.propTypes = {
}

Projects.defaultProps = {
}
