import React, { Component } from 'react';

import Screen from '../../components/Screen';
import Container from '../../components/Container';
import VideoContainer from '../../components/VideoContainer';
import ImagePartial from '../../components/ImagePartial';

import pakistanMap from "../../assets/images/pakistan-map.gif";

export class Projects extends Component {
  render() {
    return (
      <Screen>
        <ImagePartial
          pageTitle
          src="https://res.cloudinary.com/nineteesvintage/image/upload/v1567714698/Sunny%20Side%20Up/Project%20Images/20180701_132238.jpg"
          opacity={0.42}
        >
          <Container
            pageTitle
          >
            <h1 className="page-title">Projects</h1>
          </Container>
        </ImagePartial>
        <Container>
          <h1>Projects</h1>
          <div>
            <h3>
              Sunny Side Up! is a global organization dedicated to making the World
              a more sustainable place to live in - especially for those whom do not
              have access to tools or education to make this happen.
            </h3>
          </div>

          <div className="img-text-container">
            <p>
              The irrationality of human consumption has resulted in climate change
              becoming increasingly noticeable thus the dire need to switch to more
              sustainable methods of living. By scaling agriculture & cottage industries
              through clean, localized grids, demand for power would increase.
              This would not only bring down the costs for household access to power,
              but also enable the extension of electricity to street lighting,
              community centers, hospitals, and schools.
            </p>
            <img
              className="img-bubble"
              src="https://res.cloudinary.com/nineteesvintage/image/upload/v1567714693/Sunny%20Side%20Up/Project%20Images/20180701_132103_0.jpg"
            />
          </div>

          <div className="img-text-container">
            <img
              className="img-bubble"
              src="https://res.cloudinary.com/nineteesvintage/image/upload/v1567714703/Sunny%20Side%20Up/Project%20Images/20180701_134220.jpg"
            />
            <p>
              Our future projects aim to provide grid-like structures to provide
              clean energy to a wider population i.e entire villages with minimal effort.
              Donate or attend our events to help us reach our goals.
            </p>
          </div>
        </Container>
        <Container
          textAlign="center"
        >
          <h1>Sunny Side Up! project locations in Pakistan</h1>
          <img
            src={pakistanMap}
          />
          <p>Click on each location for more info</p>
          <p>More coming soon!</p>
        </Container>
        <VideoContainer
          src=""
        />
      </Screen>
    );
  }
}

export default Projects;
