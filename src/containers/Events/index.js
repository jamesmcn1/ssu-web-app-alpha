import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';

import Screen from '../../components/Screen';
import Container from '../../components/Container';
import EventCard from './EventCard';
import { events } from './EventsData.js';

export class Events extends Component {
  render() {

    const eventCards = events.map((x, i) =>
      <EventCard
        name={x.name}
        src={x.posterURL}
        date={x.date}
        venue={x.venue}
        eventLink={x.eventLink}
      />
    );


    return (
      <Screen>
        <Container>
          <div className="event-card-list">
            <GridList
              cellHeight='auto'
              cols={1}
              spacing={0}
            >
              {eventCards}
            </GridList>
          </div>
        </Container>
      </Screen>
    );
  }
}

export default Events;
