import React, { Fragment } from 'react'
import uniqid from 'uniqid'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { useNavStructure, useCheersImage } from '../hooks'
import MailingListForm from '../components/MailChimp'
import logo from '../img/otherwise-logo-white.svg'

const Footer = () => {

  const navItems = useNavStructure()
  const date = new Date()
  const cheersImg = useCheersImage()

  return ( 
    <Fragment>
      <section className='section mailing-list-bottom' style={{ position:'relative', padding: '0', minHeight: '500px'}}>
        <div className='has-text-white max600 is-overlay' style={{ padding: '3rem 1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 className='has-text-centered'>Sign up for our mailing list</h2>
          <p>Be the first to know about new beer releases and special events! And don’t worry—we won’t bombard your inbox. We only send out updates for the stuff you care about.</p>
          <MailingListForm basename='footer-mailinglist' groups={['announcements']} />
        </div>
        <div className='image-underlay-wrapper'>
          <Img 
            className='inline-bg-image' 
            fluid={cheersImg.childImageSharp.fluid}
            alt={cheersImg.alt}
            style={{position: 'static'}}
          />
          <div className='is-overlay' style={{ backgroundColor: 'rgba(0,0,0,0.65)'}}></div>
        </div>
      </section>
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
    </Fragment>
  )
}

export default Footer
