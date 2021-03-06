import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRessource, getSpecialRessource } from '../actions';
import {
  getIntegerList,
  getContainsOnelist,
  getPrimeNumberList,
  getspecialNumbersList
} from '../selectors';

class Ressources extends Component {
  componentDidMount() {
    this.props.getSpecialRessource();
  }

  renderRessource = ressources => {
    return ressources.map(ressource => <li key={ressource}>{ressource}</li>);
  };

  render() {
    return (
      <div className='row mt-3'>
        <div className='col'>
          <button
            type='button'
            onClick={() => this.props.addRessource()}
            className='btn btn-raised btn-primary'
          >
            Ajouter une ressource
          </button>
        </div>
        <div className='col'>
          Entiers<ul>{this.renderRessource(this.props.integerRessources)}</ul>
        </div>
        <div className='col'>
          Contiennent "1"{' '}
          <ul>{this.renderRessource(this.props.containsOneRessources)}</ul>
        </div>
        <div className='col'>
          Entier premiers{' '}
          <ul>{this.renderRessource(this.props.primeRessources)}</ul>
        </div>
        <div className='col'>
          Entiers premiers contenants "1"{' '}
          <ul>{this.renderRessource(this.props.specialRessources)}</ul>
        </div>
        {this.props.message}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  integerRessources: getIntegerList(state),
  containsOneRessources: getContainsOnelist(state),
  primeRessources: getPrimeNumberList(state),
  specialRessources: getspecialNumbersList(state),
  message: state.ressources.message
});

const mapDispatchToProps = {
  addRessource,
  getSpecialRessource
};

export default connect(mapStateToProps, mapDispatchToProps)(Ressources);
