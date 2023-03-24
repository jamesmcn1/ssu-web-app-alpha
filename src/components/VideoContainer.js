import React, { Component } from 'react';
import ReactPlayer from 'react-player'

import playIcon from '../assets/images/icons8-play-96.png'


export class VideoContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false,
      height: props.height
    };

    this.playOrPause = this.playOrPause.bind(this);
  }

  componentWillMount() {
    this.setState({ height: window.innerHeight + 'px' });
  }

  playOrPause() {
    this.setState({ playing: !this.state.playing });
  }

  render() {

    let playIconClasses = ['play-icon'];

    if (!!this.state.playing) { playIconClasses.push('hide'); }

    return (
      <div className="container video" style={{ padding: 0, maxWidth: 'none' }} onClick={this.playOrPause}>
        <ReactPlayer
          url={this.props.src}
          width='100%'
          height={this.state.height > 650 ? '100vh' : 650 }
          style={this.state.height > 650 ? {height: '100vh'}  : {height: 650} }
          playing={this.state.playing}
          playIcon={<img className={playIconClasses.join(' ')} src={playIcon} />}
          light="../assets/images/icons8-play-96.png"
        />
      </div>
    );
  }
}

export default VideoContainer;
