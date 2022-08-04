import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';

import Dashboard from './components/Dashboard/dashboard';
import { storeData } from './utils/asyncKeyStorage';
import PublicRoute from './routes/PublicRoute';

class App extends Component {

  componentDidMount() {
    storeData('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdhdXJhdmJsYWNrY29kZUBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vR2F1cmF2YmxhY2tjb2RlIiwiaWF0IjoxNjU5MzQ4MDk5LCJleHAiOjE2NTk3ODAwOTl9.bUGO31givjMT85QyKzC3V9iKdiwMQgE9pqEwZ5yZBxI');
  }  

  render() {
    // storing the bearer token , as per there are no requirement for registration
   
    return (  
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/product" />} />
          <PublicRoute  component={Dashboard} path="/product"  />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
