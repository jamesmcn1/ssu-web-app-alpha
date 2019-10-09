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
      posterURL,
    } = this.props;

    return (
      <div className="event-card-container">
        <img src={src} className="img" />
        <div class="info">
          <div className="info-content">
            <h1>{name}</h1>
            <div className="venue-and-date">
              <h3>{date}</h3>
              <h3>{venue}</h3>
            </div>
            {
              description && <p>{description}</p>
            }
          </div>
          <a
            class="link-anchor"
            href={posterURL || ''}
            target="_blank"
          >
            <div className="link" />
          </a>
        </div>
      </div>
    );
  }
}

export default EventCard;
