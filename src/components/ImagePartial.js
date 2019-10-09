import React, { Component } from 'react';


export class ImagePartial extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundImage: this.props.src ? `url(${this.props.src})` : '',
      opacity: this.props.opacity || 1,
    };
  }

  render() {
    let classes = ['image-partial'];

    if (!!this.props.pageTitle) {
      classes.push('page-title');
    }
    if (!!this.props.borderTop) {
      classes.push('border-top');
    }

    return (
      <div className={classes.join(' ')}>
        <div className="background-img" style={this.state}></div>
        {this.props.children}
      </div>
    );
  }
}

export default ImagePartial;
