import React from 'react'
import Header from '../containers/header'
import { shallow, mount } from 'enzyme'
import { setAuthentification } from '../actions'
import { SET_AUTHENTIFICATION } from '../actions/action-types'
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';


const createStoreWithMiddleware = applyMiddleware(thunk)(
    createStore
);


describe('Test sur Header', () => {
    it('Render du composant connecté sans erreur', () => {
        const wrapper = shallow(
            <Provider
                store={createStoreWithMiddleware(
                    reducers
                )}>
                <MemoryRouter>
                    <Header />
                </MemoryRouter>
            </Provider>
        )
        console.log(wrapper.debug())
    })
})
