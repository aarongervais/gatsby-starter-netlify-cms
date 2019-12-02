import React, { useState, useEffect, Fragment } from 'react'
import uniqid from 'uniqid'
import { Link } from 'gatsby'
import logo from '../img/otherwise-logo.svg'
import useNavStructure from '../hooks/useNavStructure'
import SocialIcons from './SocialIcons'

const Navbar = () => {

  const [active, setActive] = useState(false)
  const [navBarActiveClass, setNavBarActiveClass] = useState('')
  const [scrollClass, setScrollClass] = useState('')
  const navItems = useNavStructure()

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

  const mainItems = (
    <Fragment>
      { navItems
        .filter( item => item.options.indexOf('subnav') === -1 )
        .map( item => {
          const classnames =  ['navbar-item', item.options]
                                .filter(item => item)
                                .join(' ')
          return  <Link 
                    key={uniqid()}
                    className={classnames}
                    to={item.link}
                  >{item.label}</Link>   
        })
      }
    </Fragment>
  )

  const subnavLabel = navItems
                        .filter( item => item.options === 'subnav-toggle')
                        .map( item => item.label )

  const subnavItems = (
    <Fragment>
      { navItems
          .filter( item => item.options === 'subnav-item' ) 
          .map( item => (
            <Link 
              key={uniqid()}
              className='navbar-item'
              to={item.link}
            >{item.label}</Link>   
          ))
      }
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
            {mainItems}
            {/* desktop/tablet menu */}
            <div className="navbar-item has-dropdown is-hoverable is-hidden-mobile">
              <span className="navbar-link">{subnavLabel}</span>
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
