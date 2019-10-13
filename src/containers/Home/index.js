import React, { Component } from 'react';

import Screen from '../../components/Screen';
import ImagePartial from '../../components/ImagePartial';
import Container from '../../components/Container';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';


export class Home extends Component {
  render() {
    return (
      <Screen
        className="home-screen"
      >
        <ImagePartial
          src="https://res.cloudinary.com/nineteesvintage/image/upload/v1567537991/Sunny%20Side%20Up/american-public-power-association-419672-unsplash.jpg"
          opacity={0.9}
        >
          <Container
            className="home-title-partial"
            textAlign="center"
          >
            <div>
              <Slide left>
                <h1>Sunny Side Up</h1>
                <h3>Working today for a brighter & better tomorrow</h3>
              </Slide>
            </div>
          </Container>
        </ImagePartial>
        <ImagePartial
          src="https://res.cloudinary.com/nineteesvintage/image/upload/v1567883250/Sunny%20Side%20Up/Project%20Images/rita-PP9m6__g1Ng-unsplash.jpg"
        >
          <Container>
            <Slide left>
              <h2>Approximately 1.1 billion people in the World live without access to electricity.</h2>
              <h3>The majority of these individuals live in rural areas of our planet.</h3>
            </Slide>
          </Container>
        </ImagePartial>
        <ImagePartial
          src="https://res.cloudinary.com/nineteesvintage/image/upload/v1567883790/Sunny%20Side%20Up/Project%20Images/homepage_photo.jpg"
        >
          <Container
            textAlign="right"
          >
            <Slide right>
              <h2>Our founders have lived across the World, being exposed to communities stricken with poverty.</h2>
              <h3>After conducting research, they found that many off-grid communities have limited access to light during productive hours of their days.</h3>
            </Slide>
          </Container>
        </ImagePartial>
        <Container
          textAlign="center"
          className="home-stats"
          divider
        >
          <Fade>
            <h1>How we help</h1>
            <h3 className="stats-subheading">Sunny Side Up aims to tackle this by installing solar panels in rural communities, allowing them access to a reliable and sustainable source of energy.</h3>
            <div className="home-stat-container">
              <div className="home-stat-card-container">
                <div className="home-stat-card">
                  <div className="triangle top" />
                  <div className="triangle bottom" />
                </div>
                <h1>75</h1>
                <p>Solar panels</p>
              </div>
              <div className="home-stat-card-container">
                <div className="home-stat-card">
                  <div className="triangle top" />
                  <div className="triangle bottom" />
                </div>
                <h1>&pound;5000</h1>
                <p>Raised</p>
              </div>
              <div className="home-stat-card-container">
                <div className="home-stat-card">
                  <div className="triangle top" />
                  <div className="triangle bottom" />
                </div>
                <h1>3</h1>
                <p>Communities</p>
              </div>
            </div>
          </Fade>
        </Container>
        <ImagePartial
          src="https://res.cloudinary.com/nineteesvintage/image/upload/v1567883201/Sunny%20Side%20Up/Project%20Images/lyla.jpg"
          borderTop
        >
          <Container
            textAlign="right"
          >
            <Slide right>
              <h2>We fundraise with help from our charity club nights, sponsors, and private donors.</h2>
            </Slide>
          </Container>
        </ImagePartial>
      </Screen>
    );
  }
}

export default Home;
