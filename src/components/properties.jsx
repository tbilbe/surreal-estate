import React from 'react';
import qs from 'qs';
import PropertiesCard from '../components/properties-card';
import Axios from 'axios';
import Filters from './filters';
import Alert from './alert';
import '../styles/properties.css';
import SearchForm from './search';

const BASE_URL = 'http://localhost:3000/api/v1/PropertyListing';

class Properties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      propertyInformation: [],
      alertMessage: '',
      searching: '',
    };
  }

  searchCallback = searchParam => {
    this.setState({ searching: searchParam });
    const newQueryString = this.buildQueryString('query', {
      title: { $regex: searchParam },
    });
    const { history } = this.props;
    history.push(newQueryString);
  };

  buildQueryString = (operation, valueObj) => {
    const { search } = this.props.location;
    const queryParams = qs.parse(search, { ignoreQueryPrefix: true });
    const newQueryParams = {
      ...queryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(queryParams[operation] || '{}'),
        ...valueObj,
      }),
    };
    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
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
    const { search } = this.props.location;
    if (previousProps.location.search !== search) {
      Axios.get(`${BASE_URL}${search}`)
        .then(({ data: propertyInformation }) =>
          this.setState({ propertyInformation })
        )
        .catch(err => console.error('error from component did Update', err));
    }
  }

  render() {
    console.log('inside properties', this.props.userID);
    return (
      <div>
        {this.state.error && <Alert message={this.state.alertMessage} />}
        <SearchForm searchCallback={this.searchCallback} />
        <Filters buildQueryString={this.buildQueryString} />
        <PropertiesCard
          userID={this.props.userID}
          cardData={this.state.propertyInformation}
        />
      </div>
    );
  }
}

export default Properties;
