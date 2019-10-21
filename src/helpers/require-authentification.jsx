import React, { Component } from 'react';
import { connect } from 'react-redux';

export default ChildComponent => {
  class requireAuthentification extends Component {
    // if not logged keep in the home page
    componentDidMount() {
      if (!this.props.isLogedIn) {
        this.props.history.push('/');
      }
    }

    componentDidUpdate() {
      if (!this.props.isLogedIn) {
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
