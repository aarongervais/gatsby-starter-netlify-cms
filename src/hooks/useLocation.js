import { useStaticQuery, graphql } from "gatsby"
import { globalHistory } from '@reach/router'

export default () => {
  const query = useStaticQuery(
    graphql`
      query QueryDocumentLocation {
        site {
          siteMetadata {
            location {
              origin
              hostname
              protocol
            }
          }
        }
      }
    `
  )

  return ( 
    globalHistory && 
    globalHistory.location && 
    globalHistory.location.origin 
  ) ? globalHistory.location 
    : query.site.siteMetadata.location
}