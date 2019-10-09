import React, { Component } from 'react';

import Screen from '../../components/Screen';
import ImagePartial from '../../components/ImagePartial';
import Container from '../../components/Container';

export class Home extends Component {
  render() {
    return (
      <Screen>
        <ImagePartial
          src="https://res.cloudinary.com/nineteesvintage/image/upload/v1567537991/Sunny%20Side%20Up/american-public-power-association-419672-unsplash.jpg"
        >
          <Container
            textAlign="center"
          >
            <h1>Sunny Side Up</h1>
            <h3>Working today for a brighter & better tomorrow</h3>
          </Container>
        </ImagePartial>
        <ImagePartial
          src="https://res.cloudinary.com/nineteesvintage/image/upload/v1567883250/Sunny%20Side%20Up/Project%20Images/rita-PP9m6__g1Ng-unsplash.jpg"
        >
          <Container>
            <h2>Approximately 1.1 billion people in the World live without access to electricity.</h2>
            <h3>The majority of these individuals live in rural areas of our planet.</h3>
          </Container>
        </ImagePartial>
        <ImagePartial
          src="https://res.cloudinary.com/nineteesvintage/image/upload/v1567883790/Sunny%20Side%20Up/Project%20Images/homepage_photo.jpg"
        >
          <Container
            textAlign="right"
          >
            <h2>Our founders have lived across the World, being exposed to communities stricken with poverty.</h2>
            <h3>After conducting research, they found that many off-grid communities have limited access to light during productive hours of their days.</h3>
          </Container>
        </ImagePartial>
        <Container
          textAlign="center"
        >
          <h1>How we help</h1>
          <h3>Sunny Side Up aims to tackle this by installing solar panels in rural communities, allowing them access to a reliable and sustainable source of energy.</h3>
          <div class="home-stat-container">
            <div class="home-stat-card-container">
              <div class="home-stat-card">
                <div class="triangle top"></div>
                <div class="triangle bottom"></div>
              </div>
              <h1>75</h1>
              <h2>Solar panels</h2>
            </div>
            <div class="home-stat-card-container">
              <div class="home-stat-card">
                <div class="triangle top"></div>
                <div class="triangle bottom"></div>
              </div>
              <h1>5000</h1>
              <h2>Raised</h2>
            </div>
            <div class="home-stat-card-container">
              <div class="home-stat-card">
                <div class="triangle top"></div>
                <div class="triangle bottom"></div>
              </div>
              <h1>3</h1>
              <h2>Communities</h2>
            </div>
          </div>
        </Container>
        <ImagePartial
          src="https://res.cloudinary.com/nineteesvintage/image/upload/v1567883201/Sunny%20Side%20Up/Project%20Images/lyla.jpg"
        >
          <Container
            textAlign="right"
          >
            <h2>We fundraise with help from our charity club nights, sponsors, and private donors.</h2>
          </Container>
        </ImagePartial>
      </Screen>
    );
  }
}

export default Home;
