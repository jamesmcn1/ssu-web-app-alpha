import React, { Component } from 'react';
import Modal from 'react-modal';

import Screen from '../../components/Screen';
import Container from '../../components/Container';
import VideoContainer from '../../components/VideoContainer';
import ImagePartial from '../../components/ImagePartial';

import pakistanMap from "../../assets/images/pakistan-map.gif";
import sun from "../../assets/images/logo.png";
import close from "../../assets/images/close-icon.png";

const customStyles = {
  content : {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'black',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root'); // binds Modal to root div of App

export class MapWidget extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }
  render() {
    return (
      <Container
        textAlign="center"
      >
        <div className="map-widget-container">
          <h1 class="map">Sunny Side Up! project locations in Pakistan</h1>
          <div className="map-container">
            <img
              className="map"
              src={pakistanMap}
            />
            <div className="sun-container">
              <img
                onClick={this.openModal}
                className="sun"
                src={sun}
              />
              <p className="sun-text">Multan</p>
            </div>
          </div>
          <p className="more-coming">More coming soon!</p>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          // style={customStyles}
          className="projectModal"
          overlayClassName="projectOverlay"
          contentLabel="Example Modal"
        >

          <img src={close} className="close" onClick={this.closeModal} />
          <div className="project-modal-content">
            <div className="modal-copy">
              <h1>Pano Aqui</h1>
              <h3>Sindh</h3>
              <p>
                Pano Akil, Sindh is an off-grid village in the southern most province of Pakistan
                where there is extreme heat, no electricity, and a lack of clean water supply.
                Living there are pockets of communities doing their best to adapt with this harsh environment.
                Our projects have brought development to these remote populations so they
                are able to enjoy all aspects of life without having to worry about something
                as basic as a working lightbulb or a fan to cool down from the rough climate.
                We have been able to implement 45 solar units to the communities living in Pano Akil.
                Additionally, we were also able to distribute units to a neighboring Hindu village,
                power a mosque, and teach the community about the benefits of the project.
                We are currently in the process of sourcing 15 more solar units at
                which point the entire village will have access to sustainable energy in their homes.
              </p>
              <h3>Completed: June 2018</h3>
              <h2>Click to see on Google maps</h2>
            </div>
            <div className="modal-images">
              <div
                className="img-bubble"
                style={{ backgroundImage: `url(https://res.cloudinary.com/nineteesvintage/image/upload/v1567947199/Sunny%20Side%20Up/People/Samir_photo.jpg)` }}
              />

            </div>
          </div>
        </Modal>
      </Container>
    );
  }
}

export default MapWidget;
