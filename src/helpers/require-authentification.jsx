import React, { Component } from 'react';

export default ChildComponent => {
  class requireAuthentification extends Component {
    constructor(props) {
      super(props);

      this.state = {
        token: null,
      };
    }
    static getDerivedStateFromProps(props, state) {
      console.log('BLA BLA');
      return state;
    }
    render() {
      return <ChildComponent />;
    }
  }
  return requireAuthentification;
};
