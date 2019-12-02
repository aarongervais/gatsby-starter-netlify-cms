import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const query = useStaticQuery(
    graphql`
      query BeerListQuery {
        allMarkdownRemark(
          filter: {frontmatter: {templateKey: {eq: "beer-profile"}}}, 
          sort: {order: DESC, fields: frontmatter___releaseDate}
        ) {
          edges {
            node {
              id
              html
              frontmatter {
                name
                styles
                releaseDate(formatString: "MMM DD, YYYY")
                abv
                ibu
                fermentables
                excerpt
                currentlyAvailable
                beerImage {
                  childImageSharp {
                    fluid(maxWidth: 120, maxHeight: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              fields {
                slug
              }
            }
          }
        }
      }

    `
  )
  return query.allMarkdownRemark.edges
}