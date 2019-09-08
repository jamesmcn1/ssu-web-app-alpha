import React, { Component } from 'react';

import Screen from '../../components/Screen';
import Container from '../../components/Container';
// import ImagePartial from '../../components/ImagePartial';

export class People extends Component {
  render() {
    return (
      <Screen>
        <Container
          flexDirection="row"
        >
          <div>
            <h1>People</h1>
            <h3>Meet our team</h3>
          </div>
          <img
            className="img-bubble"
            src="https://res.cloudinary.com/nineteesvintage/image/upload/v1567943446/Sunny%20Side%20Up/Project%20Images/Demuja.jpg"
          />
        </Container>
        <Container
          flexDirection="row"
        >
          <div>
            <p>Mahnoor Lyla Saifi</p>
            <h3>Co Director</h3>
            <p>
              An entrepreneur and DJ, Mahnoor is an outgoing and ambitious asset to Sunny Side Up!
              Obtaining a MAHons in International Relations & Management from the University of St Andrews,
              she is a perfect fit for the sustainability and events management sector.
              Currently residing in Toronto she looks after our club nights and fundraising operations.
            </p>
          </div>
          <img
            className="img-bubble"
            src="https://res.cloudinary.com/nineteesvintage/image/upload/v1567943446/Sunny%20Side%20Up/Project%20Images/Demuja.jpg"
          />
        </Container>
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
