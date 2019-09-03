import React, { Component } from 'react';


import './styles/Header.scss';
import logo from '../assets/images/logo.png'

export class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-div">
          <a href="../containers/Home/index">
            <img src={logo} />
          </a>
          <a href="../containers/Projects/index">
            Projects
          </a>
          <a href="../containers/Events/index">
            Events
          </a>
          <a href="../containers/People/index">
            People
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
