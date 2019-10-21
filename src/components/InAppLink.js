import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export class InAppLink extends PureComponent {

  render() {
    return (
      <div className="in-app-link-container">
        <Link className="in-app-link" to={this.props.link}>
          <div className="text-container-top-border">
            <p className="in-app-text">{this.props.text}</p>
          </div>
        </Link>
      </div>
    );
  }
}


export default InAppLink;
