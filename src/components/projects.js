import * as React from "react"
import { Box, Heading, Divider } from "@chakra-ui/react"
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
	  
	   const projects = data.allMdx.nodes;

	return(
	<Box>
		<Box>
		<Heading py={'3'}>Projects</Heading>
		</Box>
		{projects.map((project, index) => (
			<Box key={project.id}>
				<ProjectLayout mdx={project} index={index} flip={index % 2 !== 0}/>

				{((index + 1) < projects.length && (
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
