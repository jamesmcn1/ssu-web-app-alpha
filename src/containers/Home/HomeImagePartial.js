import React, { Component } from 'react';


export class HomeImagePartial extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundImage: this.props.src ? `url(${this.props.src})` : '',
      opacity: this.props.opacity || 1,
    };
  }

  render() {
    let containerClasses = ['image-partial', 'home-screen'];
    let backgroundImageClasses = ['background-img', 'home-screen'];

    if (!!this.props.pageTitle) {
      containerClasses.push('page-title');
    }
    if (!!this.props.borderTop) {
      containerClasses.push('border-top');
    }

    return (
      <div className={containerClasses.join(' ')}>
        <div className={backgroundImageClasses.join(' ')} style={this.state}></div>
        {this.props.children}
      </div>
    );
  }
}

export default HomeImagePartial;
