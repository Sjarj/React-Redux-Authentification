import React from 'react'
import Header from '../containers/header'
import { shallow, mount } from 'enzyme'
import { setAuthentification } from '../actions'
import { SET_AUTHENTIFICATION } from '../actions/action-types'
import RootTest from './root-test'



describe('Test sur Header', () => {
    it('Render du composant connecté sans erreur', () => {
        const wrapper = shallow(<RootTest><Header /></RootTest>)
    })
})
