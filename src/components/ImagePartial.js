import React, { Component } from 'react';

import './styles/ImagePartial.scss';

export class ImagePartial extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundImage: 'url(https://res.cloudinary.com/nineteesvintage/image/upload/v1567537991/Sunny%20Side%20Up/american-public-power-association-419672-unsplash.jpg)',
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
