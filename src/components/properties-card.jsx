import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const wrapper = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '10px',
};

const PropertiesCard = props => {
  return (
    <div style={wrapper}>
      {props.cardData.map(house => (
        <ul key={house._id}>
          <li>
            <FontAwesomeIcon icon="font-awesome-alt" />
          </li>
          <li>{house.title}</li>
          <li>{house.type}</li>
          <li>{house.bedrooms}</li>
          <li>{house.bathrooms}</li>
          <li>{house.city}</li>
          <li>{house.email}</li>
        </ul>
      ))}
    </div>
  );
};

export default PropertiesCard;
