import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './navbar';
import Properties from './properties';
import AddProperties from './add-properties';
import '../styles/app.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Properties} />
        <Route exact path="/add-properties" component={AddProperties} />
      </Switch>
    </div>
  );
};

export default App;
