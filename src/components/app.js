import React, { Component } from 'react';
import Header from '../containers/header';
import Home from '../components/home';
import Ressources from '../components/ressources';
import { Switch, Route } from 'react-router-dom';
import RequireAuthentification from '../helpers/require-authentification';
import Signin from '../containers/signin';
import Signout from '../containers/signout';
import Signup from '../containers/signup';
require('../style.css');

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route
            exact
            path='/ressources'
            component={RequireAuthentification(Ressources)}
          />
          <Route exact path='/signin' component={Signin} />
          <Route exact path='/signout' component={Signout} />
          <Route exact path='/signup' component={Signup} />
        </Switch>
      </React.Fragment>
    );
  }
}
