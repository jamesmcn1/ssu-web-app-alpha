import React, { Component } from 'react';

// import ImagePartial from '../../components/ImagePartial';

export class EventCard extends Component {
  render() {
    return (
      <img src={this.props.src} className="img"/>
    );
  }
}

export default EventCard;
