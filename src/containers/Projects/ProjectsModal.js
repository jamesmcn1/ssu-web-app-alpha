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
        style={{ backgroundImage: `url(${x})`, backgroundColor: 'red' }}
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
            <div className="main-copy">
              <h1 className="name">{name}</h1>
              <h3 className="province">{province}</h3>
              <p className="desc">
                {description}
              </p>
            </div>
            <div className="extra-info">
              <h3 className="completed">Completed: {dateCompleted}</h3>
              <h2 className="maps">Click to see on Google maps</h2>
            </div>
          </div>
          <div className="modal-images">
            <div className="main-image">
              <div
                className="img-bubble"
                style={{ backgroundImage: `url(${imageArray[this.state.imgIndex]})`, backgroundColor: 'red' }}
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
