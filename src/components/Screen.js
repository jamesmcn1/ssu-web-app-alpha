import React, { Component } from 'react';


export class Screen extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default Screen;
