import React, { Component } from 'react';

import Screen from '../../components/Screen';
import ImagePartial from '../../components/ImagePartial';
import Container from '../../components/Container';

export class Home extends Component {
  render() {
    return (
      <Screen>
        <ImagePartial
          src="https://res.cloudinary.com/nineteesvintage/image/upload/v1567537991/Sunny%20Side%20Up/american-public-power-association-419672-unsplash.jpg"
        >
          <Container>
            <h1>Sunny Side Up</h1>
          </Container>
        </ImagePartial>
        <ImagePartial
          src="https://res.cloudinary.com/nineteesvintage/image/upload/v1567883250/Sunny%20Side%20Up/Project%20Images/rita-PP9m6__g1Ng-unsplash.jpg"
        >
          <Container>
          </Container>
        </ImagePartial>
        <ImagePartial
          src="https://res.cloudinary.com/nineteesvintage/image/upload/v1567883790/Sunny%20Side%20Up/Project%20Images/homepage_photo.jpg"
        >
          <Container>
          </Container>
        </ImagePartial>
        <Container>
        </Container>
        <ImagePartial
          src="https://res.cloudinary.com/nineteesvintage/image/upload/v1567883201/Sunny%20Side%20Up/Project%20Images/lyla.jpg"
        >
          <Container>
          </Container>
        </ImagePartial>
      </Screen>
    );
  }
}

export default Home;
