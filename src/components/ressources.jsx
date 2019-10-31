import React, { Component } from "react";
import { connect } from "react-redux";
import { addRessource } from "../actions";

class Ressources extends Component {
  render() {
    return (
      <div className="row mt-3">
        <div className="col">
          <button
            type="button"
            onClick={() => this.props.addRessource()}
            className="btn btn-raised btn-primary"
          >
            Ajouter une ressource
          </button>
        </div>
        <div className="col">Entiers</div>
        <div className="col">Contiennent "1"</div>
        <div className="col">Entier premiers</div>
        <div className="col">Entiers premiers contenants "1"</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  addRessource
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Ressources);
