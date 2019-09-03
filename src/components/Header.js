import React, { Component } from 'react';

import './styles/Header.scss';
import logo from '../assets/images/logo.png'

export class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-div">
          <img src={logo} />
          <a>
            Projects
          </a>
          <a>
            Events
          </a>
          <a>
            People
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
