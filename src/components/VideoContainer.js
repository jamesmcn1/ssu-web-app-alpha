import React, { Component } from 'react';
import ReactPlayer from 'react-player'

export class VideoContainer extends Component {
  render() {


    return (
      <div className="container video" style={{ padding: 0, maxWidth: 'none' }}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          width='100%'
          height={650}
        />
      </div>
    );
  }
}

export default VideoContainer;
