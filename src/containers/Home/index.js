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
          </Container>
        </ImagePartial>
      </Screen>
    );
  }
}

export default Home;
