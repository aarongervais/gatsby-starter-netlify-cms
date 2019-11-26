import React from 'react'
import Img from "gatsby-image/withIEPolyfill"
import Navbar from '../components/Navbar'
import { HTMLContent } from '../components/Content'

const Hero = ({featuredImage, header, subheader, children}) => (
  <section className={ 'hero' + ( !!featuredImage ? ' has-hero-image' : '' ) }>

    <div className="hero-head"><Navbar /></div>

    <div className="hero-body">
      <div className="container">
        <h1 className='hero-header'>{header}</h1>
        <HTMLContent className="hero-subheader" content={subheader} />
        { children }
      </div>
    </div>

    {
      featuredImage && 
      featuredImage.imageDesktop &&
      featuredImage.imageMobile && 
      <div className="hero-image-container">
        <Img 
          className='hero-image' 
          fluid={[
            featuredImage.imageMobile.childImageSharp.fluid,
            {
              ...featuredImage.imageDesktop.childImageSharp.fluid,
              media: `(min-width: 768px)`,
            },
          ]} 
          alt={featuredImage.alt}
          style={{position: 'static'}}
        /> 
      </div>
    }

  </section>
)

export default Hero