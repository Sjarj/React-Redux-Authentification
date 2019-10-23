import React, { Component } from 'react';
import Header from '../containers/header';
import Home from '../components/home';
import Ressources from '../components/ressources';
import { Switch, Route } from 'react-router-dom';
import RequireAuthentification from '../helpers/require-authentification';
import TodoApp from './todo-app';
require('../style.css');

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={TodoApp} />
          <Route
            exact
            path="/ressources"
            component={RequireAuthentification(Ressources)}
          />
        </Switch>
      </React.Fragment>
    );
  }
}
