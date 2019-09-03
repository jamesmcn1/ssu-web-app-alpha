import React, { Component } from 'react';

import Header from './Header';

export class Screen extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default Screen;
