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
          <div className="info-content">
            <h1>{name}</h1>
            <div className="venue-and-date">
              <h3>{date}</h3>
              <h3>{venue}</h3>
            </div>
            <p>{description}</p>
          </div>
          <div className="link"></div>
        </div>
      </div>
    );
  }
}

export default EventCard;
