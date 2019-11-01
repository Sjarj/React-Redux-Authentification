import React, { Component } from "react";
import { connect } from "react-redux";
import { addRessource } from "../actions";

class Ressources extends Component {
  renderRessource = ressources => {
    return ressources.map(ressource => <li key={ressource}>{ressource}</li>);
  };

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
        <div className="col">
          Entiers<ul>{this.renderRessource(this.props.integerRessources)}</ul>
        </div>
        <div className="col">Contiennent "1"</div>
        <div className="col">Entier premiers</div>
        <div className="col">Entiers premiers contenants "1"</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  integerRessources: state.ressources.ressourceList
});

const mapDispatchToProps = {
  addRessource
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Ressources);
