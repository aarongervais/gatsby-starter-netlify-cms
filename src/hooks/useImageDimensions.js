import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const query = useStaticQuery(
    graphql`
      query QueryImageDimensions {
        site {
          siteMetadata {
            imageDimensions {
              hero {
                mobile {
                  width
                  height
                }
                desktop {
                  width
                  height
                }
              }
            }
          }
        }
      }
    `
  )
  return query.site.siteMetadata.imageDimensions
}