import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"
import Hero from '../components/Hero'
import Layout from '../components/Layout'
// import Features from '../components/Features'


export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  intro,
  valueProps,
}) => (
  <Fragment>
    
    <Hero image={image} heading={heading} subheading={subheading} />

    <section className="section home-intro">
      <div className="container">
        <h2>{intro.title}</h2>
        <p>{intro.description}</p>
      </div>
    </section>

    { !!valueProps &&
      <section className="section home-value-props">
        { valueProps.map( item => {
            // const {src, sizes, srcSet} = item.image.childImageSharp.fluid
            return <div>
              { item.image && 
                item.image.childImageSharp && 
                <Img fluid={item.image.childImageSharp.fluid} /> 
              }
              <h3>{item.subheader}</h3>
              <p>{item.text}</p>
            </div>
        })}
      </section>
    }
    
  </Fragment>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  intro: PropTypes.object,
  description: PropTypes.string,
  valueProps: PropTypes.array
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        intro={frontmatter.intro}
        valueProps={frontmatter.valueProps}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        intro {
          title
          description
        }
        valueProps {
          image {
            childImageSharp {
              fluid(maxWidth: 360, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
          subheader
          text
        }
      }
    }
  }
`
