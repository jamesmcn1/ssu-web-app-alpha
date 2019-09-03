import React, { Component } from 'react';

export class ImagePartial extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundImage: 'url(https://res.cloudinary.com/nineteesvintage/image/upload/v1567537991/Sunny%20Side%20Up/american-public-power-association-419672-unsplash.jpg)',
      backgroundSize: '900px 1000px',
      height: '1000px',
      // width: '100%',
    };
  }
  render() {
    return (
      <div style={this.state}>
        {this.props.children}
      </div>
    );
  }
}

export default ImagePartial;
