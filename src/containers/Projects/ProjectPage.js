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
        <iframe width="100%" height="450" frameborder="0" src={this.props.project.googleMapIFrameURL} allowfullscreen></iframe>
      </Screen>
    );
  }
}

export default ProjectPage;
