import React from 'react'
import uniqid from 'uniqid'
import { Link } from 'gatsby'
import useNavStructure from '../hooks/useNavStructure'
import logo from '../img/otherwise-logo-white.svg'

const Footer = () => {

  const navItems = useNavStructure()
  const date = new Date()

  return ( 
    <footer className="footer has-background-ow-blue has-text-white">
      <div className="container max800 has-text-centered">
        <Link to='/' style={{ marginBottom: '2rem', display: 'block'}}>
          <img
            className='logo footer-logo'
            src={logo}
            alt="Otherwise Brewing Logo"
            style={{ 
              width: '140px',
              maxHeight: 'none' 
            }} 
          />
        </Link>
        <div className='footer-nav'>
          { navItems
              .filter( item => item.options !== 'subnav-toggle')
              .map( item => (
                <Link 
                  className='footer-nav-item' 
                  key={uniqid()} 
                  to={item.link}
                >{item.label}</Link>
               )) 
          }
        </div>

        <div className='footer-copyright'>
          <p>Copyright &copy; {date.getFullYear()} Otherwise Brewing LLC. All rights reserved.</p>
        </div>

      </div>   
    </footer>
  )
}

export default Footer
