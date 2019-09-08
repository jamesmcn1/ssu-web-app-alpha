import React, { Component } from 'react';

import Container from '../../components/Container';

import { people } from './PeopleData.js';

export class PeopleWidget extends Component {

  constructor(props) {
    super(props);

    this.state = {
      index: 0,
    };
  }

  render() {
    console.log(people);

    const thumbnails = people.map((x, i) =>
      <div
        className="thumbnail-image"
        onClick={() => this.setState({ index: i })}
        style={{ backgroundImage: `url(${x.imgUrl})` }}
      />
    );

    return (
      <Container
        flexDirection="row"
      >
        <div className="people-widget-content">
          <h1 className="name">{people[this.state.index].name}</h1>
          <h3 className="title">{people[this.state.index].title}</h3>
          <p className="description">
            {people[this.state.index].description}
          </p>
          <div className="thumbnail-container not-mobile">
            {thumbnails}
          </div>
        </div>
        <div
          className="img-bubble"
          style={{ backgroundImage: `url(${people[this.state.index].imgUrl})` }}
        />
        <div className="thumbnail-container mobile-only">
          {thumbnails}
        </div>
      </Container>
    );
  }
}

export default PeopleWidget;
