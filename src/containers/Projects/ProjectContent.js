import React, { Component } from 'react';

export class ProjectContent extends Component {
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
        style={{ backgroundImage: `url(${x})`, backgroundColor: 'red' }}
      />
    );

    return (
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
            <h2 className="maps">Completed: {dateCompleted}</h2>
          </div>
        </div>
        <div className="modal-images">
          <div className="main-image">
            <div
              className="img-bubble"
              style={{ backgroundImage: `url(${imageArray[this.state.imgIndex]})`}}
            />
          </div>
          <div className="thumbnail-container">
            {thumbnails}
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectContent;