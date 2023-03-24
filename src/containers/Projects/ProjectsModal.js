import React, { Component } from 'react';
import Modal from 'react-modal';
import ProjectContent from './ProjectContent';

import close from "../../assets/images/close-icon.png";

export class ProjectsModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgIndex: 0,
    };
  }

  render() {

    if (!this.props.project) { return <div />; }

    const {
      name,
      province,
      description,
      dateCompleted,
      imgUrlOne,
      imgUrlTwo,
      imgUrlThree,
      imgUrlFour,
    } = this.props.project;

    const imageArray = [imgUrlOne, imgUrlTwo, imgUrlThree, imgUrlFour];

    const thumbnails = imageArray.map((x, i) =>
      <div
        className="thumbnail-image"
        onClick={() => this.setState({ imgIndex: i })}
        style={{ backgroundImage: `url(${x})`, backgroundColor: 'white' }}
      />
    );

    return (
      <Modal
        isOpen={this.props.isOpen}
        onRequestClose={this.props.onRequestClose}
        className="projectModal"
        overlayClassName="projectOverlay"
        contentLabel="Example Modal"
      >

        <img
          src={close}
          className="close"
          onClick={this.props.onRequestClose}
        />
        <ProjectContent project={this.props.project} />
      </Modal>
    );
  }
}

export default ProjectsModal;
