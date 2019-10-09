import React, { Component } from 'react';
import Modal from 'react-modal';

import close from "../../assets/images/close-icon.png";

export class ProjectsModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgIndex: 0,
    };
  }

  onPressImage

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
        style={{ backgroundImage: `url(${x})` }}
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
        <div className="project-modal-content">
          <div className="modal-copy">
            <h1>{name}</h1>
            <h3>{province}</h3>
            <p>
              {description}
            </p>
            <h3>Completed: {dateCompleted}</h3>
            <h2>Click to see on Google maps</h2>
          </div>
          <div className="modal-images">
            <div className="main-image">
              <div
                className="img-bubble"
                style={{ backgroundImage: `url(${imageArray[this.state.imgIndex]})` }}
              />
            </div>
            <div className="thumbnail-container">
              {thumbnails}
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default ProjectsModal;
