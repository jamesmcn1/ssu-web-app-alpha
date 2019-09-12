import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/images/logo.png'

export class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="footer-div mobile-only">
          <div>
            <img src={logo} />
          </div>
          <h2>
            Sunny Side Up!
          </h2>
          <p>
            Working today for a brighter & better tomorrow
          </p>
          <hr />
          <Link className="link" to="/projects">
            Projects
          </Link>
          <hr />
          <Link className="link" to="/events">
            Events
          </Link>
          <hr />
          <Link className="link" to="/people">
            People
          </Link>
          <hr />
          <p className="enquiries">
            General Enquiries: <span>info@sunnysideupglobal.org</span>
          </p>
          <p>
            © Sunny Side Up! 2019
          </p>
          <p>
            <span>Website</span> by James McNamara
          </p>
        </div>
        <div className="footer-div not-mobile">
          <div class="top-row">
            <div className="link-container">
              <h2>
                Sunny Side Up!
              </h2>
              <div className="links">
                 <p>Explore</p>
                <Link className="link" to="/projects">
                  Projects
                </Link>
                <hr />
                <Link className="link" to="/events">
                  Events
                </Link>
                <hr />
                <Link className="link" to="/people">
                  People
                </Link>
              </div>
            </div>
            <div className="icon-container">
              <img src={logo} />
              <p>
                Working today for a brighter & better tomorrow
              </p>
            </div>
          </div>
          <hr />
          <div className='second-row'>
            <p className="enquiries">
              General Enquiries: <span>info@sunnysideupglobal.org</span>
            </p>
            <p>
              © Sunny Side Up! 2019
            </p>
          </div>
          <hr />
          <div className='third-row'>
            <p>
              <span>Website</span> by James McNamara
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
