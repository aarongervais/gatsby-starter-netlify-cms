import React from 'react'
import Navbar from '../components/Navbar'


const Hero = ({image, heading, subheading}) => (
  <section 
    className="hero is-large"
    style={{
      backgroundImage: `url(${
        !!image && 
        !!image.childImageSharp 
          ? image.childImageSharp.fluid.src 
          : image
      })`,
      backgroundPosition: `bottom right`,
      backgroundAttachment: `fixed`,
      backgroundSize: `cover`,
      backgroundRepeat: `no-repeat`
    }}
  >
    <div className="hero-head"><Navbar /></div>

    <div className="hero-body">
      <div className="container">
        <h1>{heading}</h1>
        <span className="subtitle">{subheading}</span>
      </div>
    </div>

  </section>
)

export default Hero