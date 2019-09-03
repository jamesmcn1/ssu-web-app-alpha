import React, { Component } from 'react';

import './styles/Header.scss';

export class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-div">
          <h2>
            People
          </h2>
        </div>
      </div>
    );
  }
}

export default Header;
