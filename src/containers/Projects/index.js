import React, { Component } from 'react';

import Screen from '../../components/Screen';
import Container from '../../components/Container';
import ImagePartial from '../../components/ImagePartial';

export class Projects extends Component {
  render() {
    return (
      <Screen>
        <ImagePartial>
          <Container>
            <h1>Projects</h1>
          </Container>
        </ImagePartial>
      </Screen>
    );
  }
}

export default Projects;
