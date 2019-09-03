import React, { Component } from 'react';

import './styles/Screen.scss';

import Header from './Header';
import Footer from './Footer';

export class Screen extends Component {
  render() {
    return (
      <div className="screen">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Screen;
