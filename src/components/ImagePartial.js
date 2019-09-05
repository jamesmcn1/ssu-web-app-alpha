import React, { Component } from 'react';

import './styles/ImagePartial.scss';

export class ImagePartial extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundImage: this.props.src ? `url(${this.props.src})` : '',
    };
  }
  render() {
    return (
      <div className="image-partial" style={this.state}>
        {this.props.children}
      </div>
    );
  }
}

export default ImagePartial;
