import React, { Component } from 'react';


import Header from './Header';
import Footer from './Footer';

export class Screen extends Component {
  render() {
    let classes = ['screen'];

    if (this.props.className) { classes.push(this.props.className); }
    if (this.props.noMaxWidth) { classes.push('noMaxWidth'); }

    return (
      <div className={classes.join(' ')}>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Screen;
