import * as React from "react"
import { Box, Heading } from "@chakra-ui/react"
import { useStaticQuery, graphql, Link } from "gatsby";
import ProjectLayout from "./ProjectLayout";

export default function Projects () {
	const data = useStaticQuery(
		graphql`
		query ProjectsQuery {
			allMdx {
				nodes {
				  frontmatter {
					title
					year
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
	  
	   const projects = data.allMdx.nodes;

	return(
	<>
		<Box>
		<Heading py={'3'}>Projects</Heading>
		</Box>
		{projects.map((project, index) => (
			<ProjectLayout mdx={project} index={index}/>
    	))}
	</>
	)
}

Projects.propTypes = {
}

Projects.defaultProps = {
}
