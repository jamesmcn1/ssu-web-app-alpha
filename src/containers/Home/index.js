import React, { Component } from 'react';

import Screen from '../../components/Screen';
import ImagePartial from '../../components/ImagePartial';
import Container from '../../components/Container';

export class Home extends Component {
  render() {
    return (
      <Screen>
        <ImagePartial>
          <Container>
          </Container>
        </ImagePartial>
      </Screen>
    );
  }
}

export default Home;
