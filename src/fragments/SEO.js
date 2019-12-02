import { graphql } from "gatsby"

export const seoFields = graphql`
  fragment seoFields on Frontmatter {
    seoTitle
    seoDescription
  }
`