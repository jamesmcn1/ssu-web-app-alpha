import React, { Component } from 'react';

import Screen from '../../components/Screen';
import Container from '../../components/Container';
import EventCard from './EventCard';
// import ImagePartial from '../../components/ImagePartial';

export class Events extends Component {
  render() {
    return (
      <Screen>
        <Container>
          <h1 className="page-title">Events</h1>
          <EventCard
            name=""
            src="https://res.cloudinary.com/nineteesvintage/image/upload/v1567634931/Sunny%20Side%20Up/Club%20Night%20Posters/Club%20Night%20Posters/SUNNY_SIDE_UP_ZAPATA_RED_A3.jpg"
          />
          <EventCard
            name=""
            src="https://res.cloudinary.com/nineteesvintage/image/upload/v1567634931/Sunny%20Side%20Up/Club%20Night%20Posters/Club%20Night%20Posters/SUNNY_SIDE_UP_ZAPATA_RED_A3.jpg"
          />
          <EventCard
            name=""
            src="https://res.cloudinary.com/nineteesvintage/image/upload/v1567634931/Sunny%20Side%20Up/Club%20Night%20Posters/Club%20Night%20Posters/SUNNY_SIDE_UP_ZAPATA_RED_A3.jpg"
          />
        </Container>
      </Screen>
    );
  }
}

export default Events;
