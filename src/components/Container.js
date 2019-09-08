import React, { Component } from 'react';

export class Container extends Component {
  render() {

    let classes = ['container'];

    if (this.props.flexDirection === 'row') {
      classes.push('flex-row');
    }

    if (!!this.props.pageTitle) {
      classes.push('page-title');
    }

    return (
      <div className={classes.join(' ')} style={{ textAlign: this.props.textAlign || "left" }}>
        {this.props.children}
      </div>
    );
  }
}

export default Container;
