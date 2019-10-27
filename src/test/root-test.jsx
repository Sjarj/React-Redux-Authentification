import React, { Component } from 'react'
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(thunk)(
    createStore
);
const store = createStoreWithMiddleware(reducers)
class RootTest extends Component {
    render() {
        return (
            <Provider
                store={store}>
                <MemoryRouter>
                    {this.props.children}
                </MemoryRouter>
            </Provider>
        )
    }
}

export default RootTest