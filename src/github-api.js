exports.githubApiQuery = `
query($github_login: String!) {
    user(login: $github_login) {
      name
      repositories(first: 10, privacy: PRIVATE, orderBy: {field: CREATED_AT, direction: DESC}) {
        nodes {
			id
        	name
        	description
        	url
        	openGraphImageUrl
        	usesCustomOpenGraphImage
       		stargazerCount
        }
      }
    }
  }
`