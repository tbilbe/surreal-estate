import React from 'react';
import axios from 'axios';
import Alert from './alert';
import '../styles/addProperty.css';

const BASE_URL = 'http://localhost:3000/api/v1';

class AddProperties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        title: '',
        type: 'Flat',
        city: 'Manchester',
        email: '',
        price: 0,
        bedrooms: 0,
        bathrooms: 0,
      },
      alertMessage: '',
      isSuccess: false,
      isError: false,
    };
  }

  /*

  GET READING THE RESPONSE FROM AXIOS FOR ERROR
  AND SUCCESS - THIS WILL BE WRITEN TO THE STATE ABOVE
  AND THE STATE WILL BE PASSED DOWN VIA PROPS TO THE ALERT
  OBJECT -> IF IT IS TRUE ADD THE CORRECT STYLING TO THE
  COMPONENT. :D

  */

  handleFieldChange = event => {
    this.setState({
      fields: { ...this.state.fields, [event.target.name]: event.target.value },
    });
  };

  handleAddProperty = event => {
    const data = this.state.fields;
    event.preventDefault();
    this.setState({
      alertMessage: '',
      isSuccess: false,
      isError: false,
    });
    axios
      .post(`${BASE_URL}/PropertyListing`, data)
      .then(() =>
        this.setState({
          isSuccess: true,
          alertMessage: 'Property Added to Surreal Estate!',
        })
      )
      .catch(() =>
        this.setState({
          isError: true,
          alertMessage: 'Something went wrong, Please try again!',
        })
      );
  };

  render() {
    return (
      <div className="addProperty">
        <h3>
          Please input the property details inside the form to add a property to
          our database
        </h3>
        {this.state.isSuccess && (
          <Alert message={this.state.alertMessage} success />
        )}
        {this.state.isError && <Alert message={this.state.alertMessage} />}
        <form autoComplete="off" onSubmit={this.handleAddProperty}>
          <div>
            <label>
              Title:
              <input
                name="title"
                onChange={this.handleFieldChange}
                value={this.state.fields.title}
              />
            </label>
          </div>
          <div>
            <label>
              Type:
              <select
                name="type"
                onChange={this.handleFieldChange}
                value={this.state.fields.type}>
                <option value="Flat">Flat</option>
                <option value="Detached">Detached</option>
                <option value="Semi-Detached">Semi-Detached</option>
                <option value="Terraced">Terraced</option>
                <option value="End of Terrace">End of Terrrace</option>
                <option value="Cottage">Cottage</option>
                <option value="Bungalow">Bungalow</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              City:
              <select
                name="city"
                onChange={this.handleFieldChange}
                value={this.state.fields.city}>
                <option value="Leeds">Leeds</option>
                <option value="Liverpool">Liverpool</option>
                <option value="Sheffield">Sheffield</option>
                <option value="Manchester">Manchester</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              Email:
              <input
                placeholder="tom@isthebomb.com"
                type="email"
                value={this.state.fields.email}
                name="email"
                onChange={this.handleFieldChange}
              />
            </label>
          </div>
          <div>
            <label>
              Bedrooms:
              <input
                type="number"
                value={this.state.fields.bedrooms}
                name="bedrooms"
                onChange={this.handleFieldChange}
              />
            </label>
          </div>
          <div>
            <label>
              Bathrooms:
              <input
                type="number"
                value={this.state.fields.bathrooms}
                name="bathrooms"
                onChange={this.handleFieldChange}
              />
            </label>
          </div>
          <div>
            <label>
              Price:
              <input
                type="number"
                value={this.state.fields.price}
                name="price"
                onChange={this.handleFieldChange}
              />
            </label>
          </div>
          <div className="submit-btn">
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddProperties;
