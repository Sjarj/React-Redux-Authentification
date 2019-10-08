import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

export class header extends Component {
  render() {
    return <div></div>;
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  actions
)(header);
