import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/images/logo.png'

export class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="footer-div">
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
          <p>
            General Enquiries: <span>info@sunnysideupglobal.org</span>
          </p>
          <p>
            © Sunny Side Up! 2019
          </p>
          <p>
            Website by James McNamara
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
