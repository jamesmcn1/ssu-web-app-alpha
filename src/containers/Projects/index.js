import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import MapWidget from './MapWidget';
import Screen from '../../components/Screen';
import Container from '../../components/Container';
import VideoContainer from '../../components/VideoContainer';
import ImagePartial from '../../components/ImagePartial';


export class Projects extends Component {
  render() {
    return (
      <Screen className="projects-screen">
        <ImagePartial
          pageTitle
          src="https://res.cloudinary.com/nineteesvintage/image/upload/v1567714703/Sunny%20Side%20Up/Project%20Images/20180701_134220.jpg"
          opacity={0.42}
        >
          <Container pageTitle>
            <h1 className="page-title">Projects</h1>
          </Container>
        </ImagePartial>
        <Container className="projects-text-container" divider>
          <Fade>
            <div className="subtitle-container">
              <h3 className="projects-subtitle">
                Sunny Side Up! is a global organization dedicated to making the World
                a more sustainable place to live in - especially for those whom do
                not have access to tools or education to make this happen.
              </h3>
            </div>

            <div className="body-container">
              <p className="body-text">
              The irrationality of human consumption has resulted in climate change becoming
              increasingly noticeable thus the dire need to switch to more sustainable methods of living.<br/><br/>
              By scaling agriculture & cottage industries through clean, localized grids, demand for power would increase.
              This would not only bring down the costs for household access to power,
              but also enable the extension of electricity to street lighting, community centers, hospitals,
              and schools.<br/><br/>
              Our future projects aim to provide grid-like structures to provide clean energy to a wider population i.e entire villages with minimal effort.
              </p>
            </div>
            <div className="donate-container">
              <p className="donate-text"><span>Donate</span> or attend our events to help achieve our goals.</p>
            </div>
          </Fade>

        </Container>
        <VideoContainer
          src="https://res.cloudinary.com/nineteesvintage/video/upload/v1567971094/Sunny%20Side%20Up/Pano_aqil.mp4"
        />
        <MapWidget />
      </Screen>
    );
  }
}

export default Projects;
