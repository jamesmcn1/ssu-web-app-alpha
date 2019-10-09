import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/images/logo.png';

export class Header extends Component {
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
    let classes = ['header-container-mobile-only'];

    if (!!this.state.isOpen) {
      classes.push('open');
    }

    return (
      <div>
        <div className={classes.join(' ')}>
          <span onClick={this.openMenu}>
            <img src={logo} />
          </span>
          <div className="menu-div">
            <div onClick={this.closeMenu}>
              <img src={logo} />
            </div>
            <h2>
              Sunny Side Up!
            </h2>
            <hr />
            <Link className="link" to="/projects" onClick={this.closeMenu}>
              <p>Projects</p>
            </Link>
            <hr />
            <Link className="link" to="/events" onClick={this.closeMenu}>
              <p>Events</p>
            </Link>
            <hr />
            <Link className="link" to="/people" onClick={this.closeMenu}>
              <p>People</p>
            </Link>
            <hr />
          </div>
        </div>
        <div className="header-container-not-mobile">
          <div className="header-div not-mobile">
            <Link className="link" to="/">
              <img src={logo} />
            </Link>
            <Link className="link" to="/projects">
              Projects
            </Link>
            <Link className="link" to="/events">
              Events
            </Link>
            <Link className="link" to="/people">
              People
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
