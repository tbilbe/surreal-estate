import React, { Fragment } from 'react';
import PropertiesCard from '../components/properties-card';
import Axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/v1/propertylisting';

class Properties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
    };
  }

  render() {
    return (
      <Fragment>
        <PropertiesCard />
      </Fragment>
    );
  }
}

export default Properties;
