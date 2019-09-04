import React, { Component } from 'react';

import './styles/Screen.scss';

import Header from './Header';
import Footer from './Footer';

export class Screen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      noMaxWidth: this.props.noMaxWidth ? 'noMaxWidth' : '',
    };
  }
  render() {
    return (
      <div className={`screen ${this.state.noMaxWidth}`}>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Screen;
