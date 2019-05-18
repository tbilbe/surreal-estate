import React from 'react';
import '../styles/search.css';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  handleSearch = e => {
    e.preventDefault();
    this.props.searchCallback(this.state.search);
    this.state.search = '';
  };

  handleFieldChange = event => {
    this.setState({ search: event.target.value });
  };

  render() {
    // console.log('SEARCH STATE: ', this.state.search);
    return (
      <div>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <label>
            Search:
            <input
              placeholder="Search terms; Big, Beautiful"
              type="text"
              name="searchCity"
              value={this.state.search}
              onChange={this.handleFieldChange}
            />
          </label>
          <button onClick={this.handleSearch} type="submit">
            clicky
          </button>
        </form>
      </div>
    );
  }
}

export default SearchForm;
