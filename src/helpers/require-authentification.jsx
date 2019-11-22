import React, { Component } from 'react';
import { connect } from 'react-redux';

export default ChildComponent => {
  class requireAuthentification extends Component {
    // if not logged keep in the home page
    componentDidMount() {
      if (!this.props.isLoggedIn) {
        this.props.history.push('/');
      }
    }

    componentDidUpdate() {
      if (!this.props.isLoggedIn) {
        this.props.history.push('/');
      }
    }

    render() {
      return this.props.isLoggedIn && <ChildComponent />;
    }
  }
  const mapStateToProps = state => ({
    isLoggedIn: state.authentification.isLoggedIn
  });

  return connect(mapStateToProps)(requireAuthentification);
};
