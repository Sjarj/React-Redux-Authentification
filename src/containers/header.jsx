import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Link } from "react-router-dom";

export class header extends Component {
  onclickAuthentification = () => {
    this.props.setAuthentification(!this.props.isLoggedIn);
  };

  renderAuthentificationLabel = () => {
    return this.props.isLoggedIn ? "Déconnexion" : "Connexion";
  };

  render() {
    return (
      <div>
        <ul className="nav nav-tabs bg-primary">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Accueil
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/ressources">
              Ressources
            </Link>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
              onClick={this.onclickAuthentification}
            >
              {this.renderAuthentificationLabel()}
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.authentification.isLoggedIn
});

export default connect(
  mapStateToProps,
  actions
)(header);
