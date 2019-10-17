import React, { Component } from 'react';
import { connect } from 'react-redux';

export default ChildComponent => {
  class requireAuthentification extends Component {
    // if not logged
    UNSAFE_componentWillMount() {
      if (!this.props.isLogedIn) {
        this.props.history.push('/');
      }
    }

    UNSAFE_componentWillUpdate(nextProps) {
      if (!nextProps.isLogedIn) {
        this.props.history.push('/');
      }
    }

    render() {
      return <ChildComponent />;
    }
  }
  const mapStateToProps = state => ({
    isLogedIn: state.authentification.isLogedIn,
  });

  return connect(mapStateToProps)(requireAuthentification);
};
