import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

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
      comingSoon,
      description,
      dateCompleted,
      imgUrlOne,
      imgUrlTwo,
      imgUrlThree,
      imgUrlFour,
    } = this.props.project;

    const completedDate = comingSoon ? 'Coming soon!' : `Completed: ${dateCompleted}`;
    const imageArray = [imgUrlOne, imgUrlTwo, imgUrlThree, imgUrlFour];

    const thumbnails = imageArray.map((x, i) =>
      <div
        className="thumbnail-image"
        onClick={() => this.setState({ imgIndex: i })}
        style={{ backgroundImage: `url(${x})`, backgroundColor: 'white' }}
      />
    );

    return (
      <div className="project-modal-content">
        <div className="modal-copy">
          <div className="main-copy">
            <Fade>
              <h1 className="name">{name}</h1>
              <h3 className="province">{province}</h3>
              <p className="desc">
                {description}
              </p>
            </Fade>
          </div>
          <div className="extra-info">
            <Fade>
              <h2 className="maps">{completedDate}</h2>
            </Fade>
          </div>
        </div>
        {
          !comingSoon && (
            <Fade>
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
            </Fade>
          )
        }
      </div>
    );
  }
}

export default ProjectContent;
