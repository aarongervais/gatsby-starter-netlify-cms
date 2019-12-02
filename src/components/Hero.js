import React from 'react'
import Img from "gatsby-image"
import Navbar from '../components/Navbar'
import { HTMLContent } from '../components/Content'

const Hero = ({featuredImage, header, subheader, isPreview, children}) => {

  
  // find out if we have separate mobile/desktop files or just one
  const desktop = featuredImage.src.desktop && 
                  featuredImage.src.desktop.childImageSharp 
                    ? featuredImage.src.desktop.childImageSharp
                    : null
  const mobile = featuredImage.src.mobile &&
                 featuredImage.src.mobile.childImageSharp
                   ? featuredImage.src.mobile.childImageSharp
                   : featuredImage.mobileFallback &&
                     featuredImage.mobileFallback.childImageSharp
                       ? featuredImage.mobileFallback.childImageSharp
                       : null

  // create hero wrapper classes                       
  const heroClasses = [
    'hero',
    (desktop || mobile) ? 'has-hero-image' : '',
    desktop ? 'has-hero-image-desktop' : '',
    mobile ? 'has-hero-image-mobile' : ''
  ]
  .filter( item => item )
  .join(' ')

  // create the responsive breakpoint array
  const fluid = mobile && desktop 
    ? [ mobile.fluid, { ...desktop.fluid, media: `(min-width: 768px)` } ]
    : mobile 
      ? mobile.fluid
      : desktop
        ? desktop.fluid
        : null
  
  return (
    <section className={heroClasses}>

      { !isPreview && 
        <div className="hero-head">
          <Navbar />
        </div> 
      }

      <div className="hero-body">
        <div className="container">
          <h1 className='hero-header'>{header}</h1>
          <HTMLContent className="hero-subheader" content={subheader} />
          { children }
        </div>
      </div>

      {
        ( desktop || mobile ) && 
        <div className="hero-image-container">
          <Img 
            className='hero-image' 
            fluid={fluid} 
            alt={featuredImage.alt}
            style={{position: 'static'}}
          /> 
        </div>
      }

    </section>
  )
}

export default Hero