import React, { Fragment } from 'react';
import PropertiesCard from '../components/properties-card';
import Axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/v1/propertylisting';

class Properties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      propertyInformation: [
        {
          title: 'big house',
          type: 'detached',
          bedrooms: 4,
          bathrooms: 8,
          city: 'London',
          email: 'frank@thetank.com',
        },
      ],
    };
  }

  // this.setState({ proptertyInformation: res.data })

  // componentDidMount() {
  //   Axios.get(BASE_URL).then(res =>
  //     this.setState({ propertyInformation: res.data })
  //   );
  // }

  goGetProperties = () => {};

  render() {
    console.log('going to get stuff-> ');
    this.goGetProperties();
    console.log('this.state.propertyInfo:', this.state.propertyInformation);

    return (
      <Fragment>
        <PropertiesCard cardData={this.state.propertyInformation} />
      </Fragment>
    );
  }
}

export default Properties;
