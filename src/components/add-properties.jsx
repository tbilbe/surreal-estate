import React from 'react';
import '../styles/addProperty.css';

class AddProperties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        title: '',
        type: '',
        city: 'Manchester',
      },
    };
  }

  handleFieldChange = event => {
    this.setState({
      fields: { ...this.state.fields, [event.target.name]: event.target.value },
    });
  };

  handleAddProperty = event => {
    event.preventDefault();
    console.log(this.state.fields);
  };

  render() {
    const { title, type, city } = this.state.fields;
    return (
      <div className="addProperty">
        <form onSubmit={this.handleAddProperty}>
          <label htmlFor="title">
            Title:
            <input
              name="title"
              onChange={this.handleFieldChange}
              value={this.state.fields.title}
            />
          </label>
          <br />
          <label>
            Type:
            <select
              name="type"
              onChange={this.handleFieldChange}
              value={this.state.fields.type}
            >
              <option value="Flat">Flat</option>
              <option value="Detached">Detached</option>
              <option value="Semi-Detached">Semi-Detached</option>
              <option value="Terraced">Terraced</option>
              <option value="End of Terrace">End of Terrrace</option>
              <option value="Cottage">Cottage</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </label>
          <br />
          <label>
            City:
            <select
              name="city"
              onChange={this.handleFieldChange}
              value={this.state.fields.city}
            >
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Liverpool">Liverpool</option>
            </select>
          </label>
          <br />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default AddProperties;
