import React, { Component } from 'react';


import Header from './Header';
import Footer from './Footer';

export class Screen extends Component {
  render() {
    let classes = [''];

    if (this.props.className) { classes.push(this.props.className); }
    if (this.props.noMaxWidth) { classes.push('noMaxWidth'); }

    return (
      <div className='screen'>
        <Header />
        <div className={classes.join(' ')}>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Screen;
