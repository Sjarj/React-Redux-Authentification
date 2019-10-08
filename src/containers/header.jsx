import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

export class header extends Component {
  render() {
    return (
      <div>
        <ul className="nav nav-tabs bg-primary">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Accueil
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Ressources
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Connexion
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  actions
)(header);
