import React, { Component } from 'react';

export class Container extends Component {
  render() {


    return (
      <div className="container" style={{ textAlign: this.props.textAlign || "left" }}>
        {this.props.children}
      </div>
    );
  }
}

export default Container;
