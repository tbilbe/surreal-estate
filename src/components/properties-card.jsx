import React from 'react';
import '../styles/propertiesCard.css';
import {
  faPoundSign,
  faBath,
  faBed,
  faEnvelope,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faBath, faPoundSign, faBed, faEnvelope, faStar);

const wrapper = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '10px',
};

const saveButton = {
  marginTop: '5px',
};

const PropertiesCard = props => {
  return (
    <div style={wrapper}>
      {props.cardData.map(house => (
        <div key={house._id}>
          <div className="cardWrap">
            <div className="header">
              <FontAwesomeIcon icon="star" />
            </div>
            <div className="title">{house.title}</div>
            <div className="type">
              <strong>House type: </strong>
              {house.type}
            </div>
            <div className="bed">
              <FontAwesomeIcon icon="bed" /> {house.bedrooms}
            </div>
            <div className="bath">
              <FontAwesomeIcon icon="bath" /> {house.bathrooms}
            </div>
            <div className="city">{house.city}</div>
            <div className="cost">
              <FontAwesomeIcon icon="pound-sign" /> {house.price}
            </div>
            <a href={`mailto:${house.email}?Subject="${house.title}"`}>
              <button className="mail-button">
                <FontAwesomeIcon icon="envelope" />
              </button>
            </a>
            {props.userID && (
              <button
                onClick={() => props.onSaveProperty(props._id)}
                style={saveButton}>
                <FontAwesomeIcon icon="star" />
                <span> Save</span>
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertiesCard;
