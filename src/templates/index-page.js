import React, {Fragment} from 'react'
import uniqid from 'uniqid'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import scrollTo from '../hooks/useSmoothScroll';
import Img from 'gatsby-image'
import Hero from '../components/Hero'
import MailingListForm from '../components/MailChimp'
import Layout from '../components/Layout'
import BeerList from '../components/BeerList'
import InstaTiles from '../components/InstaTiles'
import { HTMLContent } from '../components/Content'


const ValueProp = ({image, alt, alignment, text_MD}) => {
  
  const imgCol = (
    <div className={`column value-prop-image image-${alignment}`}>
      <div style={{ maxWidth: '420px', margin: 'auto'}}>
      { image && 
        image.childImageSharp && 
        <Img fluid={image.childImageSharp.fluid} alt={alt} /> 
      }
      </div>
    </div>
  )

  const textCol = <div className='column value-prop-text v-align-content'> 
                    <HTMLContent 
                      content={text_MD} 
                      style={{ maxWidth: '400px', margin: 'auto'}}
                    />
                  </div>

  const classes = [
    'value-prop',
    'img-text-cols',
    'columns',
    `image-${alignment}`,
    alignment === 'left' ? 'is-reversed-mobile' : '' 
  ].filter( item => item)
   .join(' ')

  switch( alignment ) {
    case 'left': 
      return <div className={classes}>{imgCol}{textCol}</div>
    case 'right':
    default:
      return <div className={classes}>{textCol}{imgCol}</div>
  }

}

export const IndexPageTemplate = ({
  featuredImage,
  hero,
  missionStatement,
  valueProps,
}) => (
  <Fragment>
    
    <Hero 
      featuredImage={featuredImage} 
      header={hero.header} 
      subheader={hero.subheader_MD} 
    >
      <div className='hero-cta'>
        <p className='hero-cta-pretext'>Get notifications for beer releases and special events</p>
        <MailingListForm basename='homepage-hero-mailinglist' groups={['announcements']} />
      </div>
    </Hero>

    <section className='section home-mission-statement no-padding-bottom'>
      <div className='container max600'>
        <HTMLContent className='mission-statement' content={missionStatement.text_MD} />
        <div className='has-text-centered' style={{ padding: '1rem 0' }}>
          <button 
            className='button is-ow-red' 
            onClick={ () => scrollTo('#where-to-find') }
          >Try our Beer</button>
        </div>
      </div>
    </section>

    <section className='section'><hr /></section>

    <section className='section home-value-props no-padding-top'>
      <div className='container  max1000'>
        <h2 className='has-text-centered'>Our core values</h2>
        { !!valueProps && valueProps.map( ({image, alt, alignment, text_MD}) => (
          <ValueProp 
            key={'valueProps-' + uniqid()}
            image={image} 
            alt={alt} 
            alignment={alignment} 
            text_MD={text_MD} 
          />
        ))}
      </div>
    </section>

    <section  id='where-to-find' className='section where-to-find' style={{ position:'relative', padding: '0'}}>

      <div className='has-text-centered has-text-white container max1000' style={{ padding: '3rem 1.5rem' }}>
        <h2>Where to find our beer</h2>
        <div style={{ paddingBottom: '1.5rem', maxWidth: '400px', margin: 'auto'}}>
          <p>Our beer is available on tap and in cans at fine retailers and drinking establishments throughout the Bay Area.</p>
        </div>
        <div style={{ 
          width: '80%', 
          minHeight: '300px', 
          background: 'grey', 
          color: 'white', 
          margin: 'auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
            beer map placeholder
        </div>
      </div>

      <div className='image-underlay-wrapper'>
        <Img 
          className='inline-bg-image' 
          fluid={missionStatement.image.childImageSharp.fluid}
          alt={missionStatement.alt}
          style={{position: 'static'}}
        />
        <div className='is-overlay' style={{ backgroundColor: 'rgba(0,0,0,0.65)'}}></div>
      </div>

    </section>

    <section className='section beer-list'>
      <div className='container max1000'>
        <h2 id='beer-list' className='has-text-centered'>Our current beer offerings</h2>
        <BeerList maxItems={3} />
        <div className='has-text-centered' style={{ padding: '1rem 0' }}>
          <Link to='/beers' className='button is-ow-red'>Explore all our beers</Link>
        </div>

      </div>
    </section>

    <section className='section'><hr /></section>

    <section className='section instagram'>
      <div className='container max1000'>
      
        <h2 className='has-text-centered'>Follow us on Instagram <a href='https://www.instagram.com/otherwisebrewing/' target='_blank' rel='noopener noreferrer'>@otherwisebrewing</a></h2>
        <InstaTiles />
      </div>
    </section>

    <section className='section mailing-list-bottom' style={{ position:'relative', padding: '0', minHeight: '500px'}}>
      <div className='has-text-white max600 is-overlay' style={{ padding: '3rem 1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h2 className='has-text-centered'>Sign up for our mailing list</h2>
        <p>Be the first to know about new beer releases and special events! And don’t worry—we won’t bombard your inbox. We only send out updates about the stuff you care about.</p>
        <MailingListForm basename='footer-mailinglist' groups={['announcements']} />
      </div>

      <div className='image-underlay-wrapper'>
        <Img 
          className='inline-bg-image' 
          fluid={missionStatement.image.childImageSharp.fluid}
          alt={missionStatement.alt}
          style={{position: 'static'}}
        />
        <div className='is-overlay' style={{ backgroundColor: 'rgba(0,0,0,0.65)'}}></div>
      </div>

    </section>


  </Fragment>
)

IndexPageTemplate.propTypes = {
  seoTitle: PropTypes.string,
  seoDescription: PropTypes.string,
  featuredImage: PropTypes.shape({
    imageDesktop: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    imageMobile: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    alt: PropTypes.string
  }),
  hero: PropTypes.shape({
    header: PropTypes.string,
    subheader_MD: PropTypes.string 
  }),
  missionStatement: PropTypes.shape({
    text_MD: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    alt: PropTypes.string 
  }),
  valueProps: PropTypes.array
}

const IndexPage = ({ data }) => {

  const { 
    seoTitle,
    seoDescription,
    featuredImage,
    hero,
    missionStatement,
    valueProps
  } = data.markdownRemark.frontmatter

  const layoutProps = {
    seoTitle, 
    seoDescription, 
    featuredImage,
  }

  const pageProps = {
    featuredImage,
    hero,
    missionStatement,
    valueProps
  }

  return (
    <Layout {...layoutProps} >
      <IndexPageTemplate {...pageProps} />
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
        seoTitle,
        seoDescription,
        featuredImage {
          imageDesktop {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          imageMobile {
            childImageSharp {
              fluid(maxWidth: 828, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
        }
        hero {
          header
          subheader_MD
        }
        missionStatement {
          text_MD
          image {
            childImageSharp {
              fluid(maxWidth: 1048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
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
          alignment
          text_MD
        }
      }
    }
  }
`
