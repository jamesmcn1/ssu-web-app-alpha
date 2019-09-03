import React, { Component } from 'react';

import './styles/Footer.scss';
import logo from '../assets/images/logo.png'

export class Header extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="footer-div">
          <img src={logo} />
          <h2>
            Sunny Side Up
          </h2>        
        </div>
      </div>
    );
  }
}

export default Header;
