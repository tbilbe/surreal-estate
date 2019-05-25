import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './navbar';
import Properties from './properties';
import AddProperties from './add-properties';
import SavedProperties from './saved-properties';
import '../styles/app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: null,
    };
  }

  handleLogin = response => {
    return this.setState({ userID: response.userID });
  };

  handleLogout = () => {
    window.FB.logout();
    this.setState({ userID: null });
  };

  render() {
    return (
      <div className="app">
        <Navbar
          onLogin={this.handleLogin}
          userID={this.state.userID}
          onLogout={this.handleLogout}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Properties {...props} userID={this.state.userID} />
            )}
          />
          <Route exact path="/saved-properties" component={SavedProperties} />
          <Route exact path="/add-properties" component={AddProperties} />
        </Switch>
      </div>
    );
  }
}

export default App;
