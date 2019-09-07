import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png';

export class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false,
    };
  }


  openMenu = () => {
    this.setState({ isOpen: true });
  };
  closeMenu = () => {
    this.setState({ isOpen: false });
  };


  render() {
    let classes = ['menu-container'];

    if (!!this.state.isOpen) {
      classes.push('open');
    }

    return (
      <div className={classes.join(' ')}>
        <span onClick={() => this.openMenu()}>
          <img src={logo} />
        </span>
        <div className="menu-div">
          <div onClick={() => this.closeMenu()}>
            <img src={logo} />
          </div>
          <h2>
            Sunny Side Up!
          </h2>
          <hr />
          <Link className="link" to="/projects">
            Projects
          </Link>
          <hr />
          <Link className="link" to="/events">
            Events
          </Link>
          <hr />
          <Link className="link" to="/people">
            People
          </Link>
          <hr />
        </div>
      </div>
    );
  }
}

export default Menu;
