import React, { Component } from 'react';

import Screen from '../../components/Screen';
import Container from '../../components/Container';
import ImagePartial from '../../components/ImagePartial';

import PeopleWidget from './PeopleWidget';
// import ImagePartial from '../../components/ImagePartial';

export class People extends Component {
  render() {
    return (
      <Screen>
        <ImagePartial
          pageTitle
          src="https://res.cloudinary.com/nineteesvintage/image/upload/v1567943446/Sunny%20Side%20Up/Project%20Images/Demuja.jpg"
          opacity={0.42}
        >
          <Container
            pageTitle
          >
            <h1 className="page-title">People</h1>
            <h3 className="sub-title">Meet our team</h3>
          </Container>
        </ImagePartial>
        <PeopleWidget />
        <Container>
          <h3>Special Thanks</h3>
          <p>
            La Cheetah Club, Sub Club, Rum Shack, & Flat 0/1 for giving us a platform to share our vision.
            Countless DJs who have volunteered their time to share their music.
            Volunteers managing the door and helped with marketing for our events.
            Artists creating beautiful artwork to brand our project.
            DANCERS - for trusting us, donating, and making our nights absolutely amazing!{"\n"}
            Family & friends whom have given us positive and constructive output from the beginning.{"\n"}
            We would not have been able to achieve any of this without your love and support — we are forever grateful!
            <span>SSU Team</span>
          </p>
        </Container>
      </Screen>
    );
  }
}

export default People;
