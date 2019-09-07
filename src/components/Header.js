import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Home from "../containers/Home/index";
import People from "../containers/People/index";

import logo from '../assets/images/logo.png'

export class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="not-mobile">
          <div className="header-div not-mobile">
            <Link className="link" to="/">
              <img src={logo} />
            </Link>
            <Link className="link" to="/projects">
              Projects
            </Link>
            <Link className="link" to="/events">
              Events
            </Link>
            <Link className="link" to="/people">
              People
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
