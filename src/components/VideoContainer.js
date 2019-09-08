import React, { Component } from 'react';
import ReactPlayer from 'react-player'

export class VideoContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false,
    };

    this.playOrPause = this.playOrPause.bind(this);
  }

  playOrPause() {
    this.setState({ playing: !this.state.playing });
  }

  render() {

    return (
      <div className="container video" style={{ padding: 0, maxWidth: 'none' }} onClick={this.playOrPause}>
        <ReactPlayer
          url={this.props.src}
          width='100%'
          height={650}
          playing={this.state.playing}
        />
      </div>
    );
  }
}

export default VideoContainer;
