import React, { Component } from 'react';

// import ImagePartial from '../../components/ImagePartial';

export class EventCard extends Component {
  render() {
    const {
      src,
      name,
      date,
      venue,
      description,
    } = this.props;

    return (
      <div className="event-card-container">
        <img src={src} className="img"/>
        <div class="info">
          <h1>{name}</h1>
          <h3>{date}</h3>
          <h3>{venue}</h3>
          <p>{description}</p>
          <div className="link"></div>
        </div>
      </div>
    );
  }
}

export default EventCard;
