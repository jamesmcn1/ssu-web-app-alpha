import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import facebookIcon from '../assets/images/facebook-3-32.png'
import instagramIcon from '../assets/images/instagram-32.png'


export class SocialLinks extends PureComponent {

  render() {
    return (
      <div className="social-links">
        <a href="www.facebook.com" target="_blank">
          <img className="social-icon" src={facebookIcon} />
        </a>
        <a href="www.instagram.com" target="_blank">
          <img className="social-icon instagram" src={instagramIcon} />
        </a>
      </div>
    );
  }
}


export default SocialLinks;
