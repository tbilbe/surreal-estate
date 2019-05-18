import React from 'react';
import qs from 'qs';
import { Link } from 'react-router-dom';
import PropertiesCard from '../components/properties-card';
import Axios from 'axios';
import Alert from './alert';

const BASE_URL = 'http://localhost:3000/api/v1/PropertyListing';

class Properties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      propertyInformation: [],
      alertMessage: '',
    };
  }

  buildQueryString = (operation, valueObj) => {
    const {
      location: { search },
    } = this.props;
    const queryParams = qs.parse(search, { ignoreQueryPrefix: true });
    const newQueryParams = {
      ...queryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(queryParams[operation] || '{}'),
        ...valueObj,
      }),
    };
    return qs.parse(newQueryParams, { ignoreQueryPrefix: true, encode: false });
  };

  componentDidMount() {
    Axios.get(BASE_URL)
      .then(({ data: propertyInformation }) =>
        this.setState({ propertyInformation })
      )
      .catch(() =>
        this.setState({
          error: true,
          alertMessage: 'Summet went wrong with getting houses!',
        })
      );
  }

  componentDidUpdate(previousProps) {
    const search = this.props.location;
    if (previousProps.location.serach !== search) {
      Axios.get(`${BASE_URL}${search.search}`)
        .then(({ data: propertyInformation }) =>
          this.setState({ propertyInformation })
        )
        .catch(err => console.log('error from component did Update', err));
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <Alert message={this.state.alertMessage} />}
        <div className="sidebar">
          <Link to={''}>All </Link>
          <Link to={this.buildQueryString('query', { city: 'Leeds' })}>
            Leeds{' '}
          </Link>
          <Link to={'/?query={"city": "Liverpool"}'}>Liverpool </Link>
          <Link to={'/?query={"city": "Manchester"}'}>Manchester</Link>
        </div>
        <PropertiesCard cardData={this.state.propertyInformation} />
      </div>
    );
  }
}

export default Properties;
