exports.githubApiQuery = `
query($github_login: String!) {
    user(login: $github_login) {
      name
      repositories(first: 10, privacy: PUBLIC, orderBy: {field: CREATED_AT, direction: DESC}) {
        nodes {
			id
        	name
        	description
        	url
        	openGraphImageUrl
        	usesCustomOpenGraphImage
       		stargazerCount
			repositoryTopics(first: 5) {
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
`