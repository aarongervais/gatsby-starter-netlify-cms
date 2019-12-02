import { graphql } from "gatsby"
// import useImageDimensions from './useImageDimensions'

export const desktopHeroImage = graphql`
  fragment desktopHeroImage on File {
    childImageSharp {
      fluid(maxWidth: 1440, maxHeight: 758, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`

export const mobileHeroImage = graphql`
  fragment mobileHeroImage on File {
    childImageSharp {
      fluid(maxWidth: 414, maxHeight: 736, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`