import React, {Fragment} from 'react'

import Facebook from '../img/social/facebook.svg'
import Instagram from '../img/social/instagram.svg'
import Twitter from '../img/social/twitter.svg'

const SocialIcons = ( 
  <Fragment>
    <a className="navbar-item navbar-item-social" href="https://www.facebook.com/Otherwise-Brewing-118282092901721">
      <Facebook className="social-icon" />
    </a>
    <a className="navbar-item navbar-item-social" href="https://twitter.com/otherwisebrewing">
      <Twitter className="social-icon" />
    </a>
    <a className="navbar-item navbar-item-social" href="https://www.instagram.com/otherwisebrewing">
      <Instagram className="social-icon" />
    </a>
  </Fragment>
)

export default SocialIcons