import React, { Component } from 'react';

// import ImagePartial from '../../components/ImagePartial';

export class EventCard extends Component {
  render() {
    return (
      <div className="event-card-container">
        <img src={this.props.src} className="img"/>
        <div class="info">
          Hello
        </div>
      </div>
    );
  }
}

export default EventCard;
