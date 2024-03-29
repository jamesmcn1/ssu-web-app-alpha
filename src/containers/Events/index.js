import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';

import Screen from '../../components/Screen';
import Container from '../../components/Container';
import EventCard from './EventCard';
import { events } from './EventsData.js';

export class Events extends Component {
  render() {

    const eventCards = events.sort((a,b) => b.date - a.date).map((x, i) =>
      <EventCard
        name={x.name}
        posterImgURL={x.posterImgURL}
        date={x.date}
        venue={x.venue}
        eventLink={x.eventLink}
      />
    );


    return (
      <Screen
        className="events-screen"
      >
        <Container>
          <div className="event-card-list">
            <GridList
              cellHeight='auto'
              cols={2}
              spacing={0}
            >
              <div className="event-card-container empty">
                <h1 className="page-title">Events</h1>
              </div>
              {eventCards}
            </GridList>
          </div>
        </Container>
      </Screen>
    );
  }
}

export default Events;
