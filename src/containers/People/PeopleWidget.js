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
      <div className="thumbnail-image" onClick={() => this.setState({ index: i })}>
        <img
          src={x.imgUrl}
        />
      </div>
    );

    return (
      <Container
        flexDirection="row"
      >
        <div class="people-widget-content">
          <p>{people[this.state.index].name}</p>
          <h3>{people[this.state.index].title}</h3>
          <p className="description">
            {people[this.state.index].description}
          </p>
          <div className="thumbnail-container">
            {thumbnails}
          </div>
        </div>
        <img
          className="img-bubble"
          src={people[this.state.index].imgUrl}
        />
      </Container>
    );
  }
}

export default PeopleWidget;
