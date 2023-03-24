import React, { Component } from 'react';

import Screen from '../../components/Screen';
import HomeImagePartial from './HomeImagePartial';
import Container from '../../components/Container';
import InAppLink from '../../components/InAppLink';
import VideoContainer from '../../components/VideoContainer';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

import charityIcon from '../../assets/images/icons8-charity-100.png';
import peopleIcon from '../../assets/images/icons8-people-100.png';
import solarIcon from '../../assets/images/icons8-solar-panel-96.png';



// eslint-disable-next-line react/prefer-stateless-function
export class Home extends Component {
  render() {
    return (
      <Screen
        className="home-screen"
      >
        <HomeImagePartial
          src="https://res.cloudinary.com/nineteesvintage/image/upload/q_auto,f_auto/v1567537991/Sunny%20Side%20Up/american-public-power-association-419672-unsplash.jpg"
          opacity={0.9}
        >
          <Container
            className="home-title-partial"
            textAlign="center"
          >
            <div className="text-box">
              <Fade>
                <h1>Sunny Side Up</h1>
                <h3>Working today for a brighter & better tomorrow</h3>
              </Fade>
            </div>
          </Container>
        </HomeImagePartial>
        <HomeImagePartial
          src="https://res.cloudinary.com/nineteesvintage/image/upload/q_auto,f_auto/v1567883250/Sunny%20Side%20Up/Project%20Images/rita-PP9m6__g1Ng-unsplash.jpg"
          opacity={0.7}
        >
          <Container>
            <Fade>
              <div className="partial-text">
                <h2>Approximately 1.1 billion people in the world live without access to electricity.</h2>
                <h3>The majority of these individuals live in rural areas of our planet.</h3>
              </div>
            </Fade>
          </Container>
        </HomeImagePartial>
        <HomeImagePartial
          src="https://res.cloudinary.com/nineteesvintage/image/upload/q_auto,f_auto/v1567883790/Sunny%20Side%20Up/Project%20Images/homepage_photo.jpg"
          opacity={0.7}
        >
          <Container
            textAlign="right"
          >
            <Fade>
              <div className="partial-text right-align">
                <h2>Our founders have lived across the world, being exposed to communities stricken with poverty.</h2>
                <h3>After conducting research, they found that many off-grid communities have limited access to light during productive hours of their days.</h3>
              </div>
            </Fade>
          </Container>
        </HomeImagePartial>
        <Container
          textAlign="center"
          className="home-stats"
          footerComponent={<InAppLink text="SEE OUR PROJECTS" link="/projects/1" />}
          divider
        >
          <Fade>
            <h1>How we help</h1>
            <h3 className="stats-subheading">Sunny Side Up aims to tackle this by installing solar panels in rural communities, allowing them access to a reliable and sustainable source of energy.</h3>
            <div className="home-stat-container">
              <div className="home-stat-card-container">
                <div className="home-stat-card">
                  <div className="triangle top" />
                  <img className="stat-icon" src={solarIcon} />
                  <div className="triangle bottom" />
                </div>
                <h1>75</h1>
                <p>Solar panels</p>
              </div>
              <div className="home-stat-card-container">
                <div className="home-stat-card">
                  <div className="triangle top" />
                  <img className="stat-icon" src={charityIcon} />
                  <div className="triangle bottom" />
                </div>
                <h1>&pound;5000</h1>
                <p>Raised</p>
              </div>
              <div className="home-stat-card-container">
                <div className="home-stat-card">
                  <div className="triangle top" />
                  <img className="stat-icon" src={peopleIcon} />
                  <div className="triangle bottom" />
                </div>
                <h1>3</h1>
                <p>Communities</p>
              </div>
            </div>
          </Fade>
        </Container>
        <VideoContainer
          src="https://res.cloudinary.com/nineteesvintage/video/upload/v1567971094/Sunny%20Side%20Up/Pano_aqil.mp4"
        />

        <HomeImagePartial
          src="https://res.cloudinary.com/nineteesvintage/image/upload/q_auto,f_auto/v1567883201/Sunny%20Side%20Up/Project%20Images/lyla.jpg"
          opacity={0.8}
        >
          <Container
            textAlign="right"
            footerComponent={<InAppLink text="SEE OUR EVENTS" link="/events" />}
          >
            <Fade>
              <div className="partial-text right-align">
                <h2>We fundraise with help from our charity club nights, sponsors and private donors.</h2>
              </div>
            </Fade>
          </Container>
        </HomeImagePartial>
      </Screen>
    );
  }
}

export default Home;
