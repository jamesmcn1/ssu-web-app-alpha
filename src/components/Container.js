import React, { Component } from 'react';

export class Container extends Component {
  render() {

    const { footerComponent } = this.props;

    let classes = ['container'];

    if (this.props.className) {
      classes.push(this.props.className);
    }

    if (this.props.flexDirection === 'row') {
      classes.push('flex-row');
    }

    if (!!this.props.pageTitle) {
      classes.push('page-title');
    }

    if (!!footerComponent) {
      classes.push('with-footer');
    }

    // main container component
    const container = (
      <div className={classes.join(' ')} style={{ textAlign: this.props.textAlign || "left" }}>
        {this.props.children}
        {
          footerComponent && (
            <div className="footer-component">
              {footerComponent}
            </div>
          )
        }
      </div>
    );

    // divider needs to wrap around container
    if (this.props.divider) {
      return (
        <div className="divider">
          <div class="divider-triangle" />
          {container}
        </div>
      );
    }

    return container;
  }
}

export default Container;
