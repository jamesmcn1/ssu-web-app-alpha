import React, { Component } from 'react';

import './styles/Container.scss';

export class Container extends Component {
  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}

export default Container;
