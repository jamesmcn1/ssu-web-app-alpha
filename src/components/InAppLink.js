import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export class InAppLink extends PureComponent {

  render() {
    return (
      <div className="in-app-link-container">
        <Link className="in-app-link" to="/events">
          <p className="in-app-text">SEE OUR EVENTS</p>
        </Link>
      </div>
    );
  }
}


export default InAppLink;
