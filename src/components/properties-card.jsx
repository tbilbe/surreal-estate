import React from 'react';

const PropertiesCard = props => {
  // const data = this.props.cardData;

  console.log(props.cardData);
  return (
    <div className="container">
      <ul>
        {props.cardData.map(house => (
          <div key={house.id}>
            <li>{house.title}</li>
            <li>{house.type}</li>
            <li>{house.bedrooms}</li>
            <li>{house.bathrooms}</li>
            <li>{house.city}</li>
            <li>{house.email}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default PropertiesCard;
