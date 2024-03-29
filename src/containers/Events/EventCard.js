import React, { Component } from 'react';
import { convertDate } from '../../services/utils/commonHelpers';

export class EventCard extends Component {
  render() {
    const {
      name,
      date,
      venue,
      description,
      posterImgURL,
      eventLink
    } = this.props;

    return (
      <div className="event-card-container">
        <img src={posterImgURL} className="img" />
        <div class="info">
          <div className="info-content">
            <h1>{name}</h1>
            <div className="venue-and-date">
              <h3>{convertDate(date)}</h3>
              <h3>{venue}</h3>
            </div>
            {
              description && <p>{description}</p>
            }
          </div>
          {
            eventLink && (
              <a
                class="link-anchor"
                href={eventLink || ''}
                target="_blank"
              >
                <div className="link">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 172 172"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M127.48156,44.65281c-2.795,-0.1075 -5.38844,1.49156 -6.53063,4.04469c-1.15562,2.55313 -0.65844,5.53625 1.27656,7.57875l21.13719,22.84375h-133.04469c-2.48594,-0.04031 -4.78375,1.26313 -6.03344,3.41313c-1.26313,2.13656 -1.26313,4.79719 0,6.93375c1.24969,2.15 3.5475,3.45344 6.03344,3.41312h133.04469l-21.13719,22.84375c-1.72,1.80063 -2.32469,4.38063 -1.59906,6.75906c0.72563,2.37844 2.67406,4.17906 5.09281,4.71656c2.43219,0.5375 4.95844,-0.28219 6.61125,-2.12313l36.13344,-39.07625l-36.13344,-39.07625c-1.23625,-1.37062 -2.99656,-2.20375 -4.85094,-2.27094z"></path></g></g></svg>
                </div>
              </a>
            )
          }
        </div>
      </div>
    );
  }
}

export default EventCard;
