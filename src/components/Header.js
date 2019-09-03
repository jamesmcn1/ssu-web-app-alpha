import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Home from "../containers/Home/index";
import People from "../containers/People/index";

import './styles/Header.scss';
import logo from '../assets/images/logo.png'

export class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-div">
          <Link exact className="link" to="/">
            <img src={logo} />
          </Link>
          <Link exact className="link" to="/projects">
            Projects
          </Link>
          <Link className="link" to="/events">
            Events
          </Link>
          <Link className="link" to="/people">
            People
          </Link>

          <Route exact path="/people" component={People} />
        </div>
      </div>
    );
  }
}

export default Header;
