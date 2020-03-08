import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import Screen from '../../components/Screen';
import Container from '../../components/Container';
import ProjectContent from './ProjectContent';

export class ProjectPage extends Component {
  render() {
    if (!this.props.project) { return <div />; }

    return (
      <Screen className="projects-screen">
        <Container>
          <ProjectContent project={this.props.project} />
        </Container>
      </Screen>
    );
  }
}

export default ProjectPage;
