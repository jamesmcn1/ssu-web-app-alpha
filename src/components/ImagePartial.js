import React, { Component } from 'react';


export class ImagePartial extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundImage: this.props.src ? `url(${this.props.src})` : '',
      opacity: this.props.opacity || 1,
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
