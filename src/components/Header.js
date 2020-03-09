import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Dropdown, DropdownButton } from 'react-bootstrap';

import SocialLinks from './SocialLinks';
import logo from '../assets/images/logo.png';
import { projects } from '../containers/Projects/ProjectsData.js';

// import 'bootstrap/dist/css/bootstrap.min.css';


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

    const projectDropdownLinks = projects.map((x, i) => {
      console.log('ping');
      const link = `/projects/${x.id}`;
      return (
        <Dropdown.Item>
          <Link className="link" to={link}>
              {x.name}
          </Link>
        </Dropdown.Item>
      )
    });

    const projectMobileLinks = projects.map((x, i) => {
      const link = `/projects/${x.id}`;
      return (
        <div>
          <Link className="link project" to={link}>
              <p>{x.name}</p>
          </Link>
          <hr />
        </div>
      )
    });

    return (
      <div>
        <div className={classes.join(' ')}>
          <span class="menu-icon" onClick={this.openMenu}>
            <img src={logo} />
          </span>
          <div className="menu-div">
            <div onClick={this.closeMenu}>
              <img src={logo} />
            </div>
            <h2>
              Sunny Side Up!
            </h2>
            <p className="motto-text">
              Working today for a brighter & better tomorrow
            </p>
            <hr />
            <p>Projects</p>
            <hr />
            {projectMobileLinks}
            <Link className="link" to="/events" onClick={this.closeMenu}>
              <p>Events</p>
            </Link>
            <hr />
            <Link className="link" to="/people" onClick={this.closeMenu}>
              <p>People</p>
            </Link>
            <hr />
            <p className="enquiries">
              General Enquiries: <span>info@sunnysideupglobal.org</span>
            </p>
            <div className="social-container">
              <SocialLinks />
            </div>
            <hr />
            <p className="small">
              <span>Website</span> by James McNamara
            </p>
            <p className="small">
              © Sunny Side Up! 2019
            </p>
          </div>
        </div>
        <div className="header-container-not-mobile">
          <div className="header-div not-mobile">
            <div className="logo-and-nav-links">
              <Link className="link" to="/">
                <img src={logo} />
              </Link>
              <DropdownButton id="dropdown-basic-button" title="Projects">
                {projectDropdownLinks}
              </DropdownButton>
              <Link className="link" to="/events">
                Events
              </Link>
              <Link className="link" to="/people">
                People
              </Link>
            </div>
            <div className="social-links">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
