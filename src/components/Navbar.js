import React, { useState, useEffect, Fragment } from 'react'
import { Link } from 'gatsby'
import logo from '../img/otherwise-logo.svg'
import SocialIcons from './SocialIcons'

const Navbar = () => {

  const [active, setActive] = useState(false)
  const [navBarActiveClass, setNavBarActiveClass] = useState('')
  const [scrollClass, setScrollClass] = useState('')

  useEffect(() => {
    setNavBarActiveClass(active ? 'is-active' : '')
  }, [active])

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 72
      if (scrollCheck && !scrollClass) {
        setScrollClass('is-scrolling')
      }
      else if ( !scrollCheck && scrollClass ) {
        setScrollClass('')
      }
    })
  })

  const subnavItems = (
    <Fragment>
      <Link className="navbar-item" to="/about">Our Story</Link>
      <Link className="navbar-item" to="/faq">FAQs</Link>                
      <Link className="navbar-item" to="/blog">Blog</Link>
      <Link className="navbar-item" to="/vendors">Sell our Beer</Link>                 
      <Link className="navbar-item" to="/contact">Contact</Link>
    </Fragment>
  )

  return (
    <nav
      className={`navbar is-fixed-top ${scrollClass}`}
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">

        <div className="navbar-brand">
          <Link to="/" className="navbar-item navbar-logo-holder">
          <img 
            className="logo" 
            src={logo} 
            alt="Otherwise Brewing Logo" 
            style={{ 
              width: '140px',
              maxHeight: 'none' 
            }} 
          />
          </Link>
          {/* Hamburger menu */}
          <div
            className={`navbar-burger burger ${navBarActiveClass}`}
            data-target="navMenu"
            onClick={() => setActive(!active)}
          >
            <span />
            <span />
            <span />
          </div>
        </div>

        <div id="navMenu" className={`navbar-menu ${navBarActiveClass}`} >

          <div className="navbar-start has-text-centered">
            <Link className="navbar-item is-hidden-tablet" to="/">Home</Link>
            <Link className="navbar-item" to="/beers">Our Beers</Link>
            <Link className="navbar-item" to="/where">Where to Find</Link> 

            {/* desktop/tablet menu */}
            <div className="navbar-item has-dropdown is-hoverable is-hidden-mobile">
              <span className="navbar-link">More</span>
              <div className="navbar-dropdown">{subnavItems}</div>
            </div>

            {/* mobile menu */}
            <div className="is-hidden-tablet">{subnavItems}</div>

          </div>

          <div className="navbar-end navbar-social-icons">{SocialIcons}</div>

        </div>

      </div>
    </nav>
  )
}

export default Navbar
