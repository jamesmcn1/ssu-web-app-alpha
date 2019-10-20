import React, { Component } from 'react';

import Container from '../../components/Container';
import ProjectsModal from './ProjectsModal';

import { projects } from './ProjectsData.js';

import pakistanMap from "../../assets/images/pakistan-map.gif";
import sun from "../../assets/images/logo.png";


export class MapWidget extends Component {
  constructor() {
    super();

    this.state = {
      selectedProjectIndex: 0,
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(i) {
    this.setState({
      selectedProjectIndex: i,
      modalIsOpen: true
    });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }
  render() {

    const projectSunIcons = projects.map((x, i) =>
      <div
        className="sun-container"
        style={{ top: x.mapPositionTop, left: x.mapPositionLeft }}
      >
        <img
          onClick={() => this.openModal(i)}
          className="sun"
          src={sun}
        />
        <p className="sun-text">{x.name}</p>
      </div>
    );

    return (
      <Container
        textAlign="center"
        className="map-widget-container"
      >
        <div className="map-widget">
          <h1 class="map">Sunny Side Up! project locations in Pakistan</h1>
          <div className="map-container">
            <img
              className="map"
              src={pakistanMap}
            />
            {projectSunIcons}
          </div>
          <p className="more-coming">More coming soon!</p>
        </div>
        <ProjectsModal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          project={projects[this.state.selectedProjectIndex]}
        />
      </Container>
    );
  }
}


export default MapWidget;
