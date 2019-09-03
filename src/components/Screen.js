import React, { Component } from 'react';

import './styles/Screen.scss';

import Header from './Header';

export class Screen extends Component {
  render() {
    return (
      <div className="screen">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default Screen;
