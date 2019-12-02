import { useStaticQuery, graphql } from "gatsby"

export const useCheersImage = () => {
  const query = useStaticQuery(
    graphql`
      query CheersImageQuery {
        image: file(absolutePath: { 
          regex: "/alcoholic-beverage-bar-beer-beverage-1269025.jpg/" 
        }) {
          childImageSharp {
            fluid(maxWidth: 1440) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }

    `
  )
  query.image.alt = 'A group of friends cheersing beer'
  return query.image
}