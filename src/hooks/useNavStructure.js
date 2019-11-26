import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const query = useStaticQuery(
    graphql`
      query QueryNavStructure {
        site {
          siteMetadata {
            nav {
              label
              link
              options
            }
          }
        }
      }
    `
  )
  return query.site.siteMetadata.nav
}