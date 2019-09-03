import React, { Component } from 'react';

import './styles/Header.scss';
import logo from '../assets/images/logo.png'

export class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-div">
          <img src={logo} />
          <h2>
            People
          </h2>
        </div>
      </div>
    );
  }
}

export default Header;
