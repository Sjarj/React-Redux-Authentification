import React from "react";
import Header from "../containers/header";
import { shallow, mount } from "enzyme";
import { incrementActionCount } from "../actions";
import RootTest from "./root-test";
import {
  INCREMENT_ACTION_COUNT,
  SET_AUTHENTIFICATION
} from "../actions/action-types";
import AuthentificationReducer from "../reducers/authentification";
describe("Test sur Header", () => {
  it("Render du composant connecté sans erreur", () => {
    const wrapper = shallow(
      <RootTest>
        <Header />
      </RootTest>
    );
  });
  it('Test que le libellé du bouton est bien "connexion" puis "déconnexion" apres clique', () => {
    const wrapper = mount(
      <RootTest>
        <Header />
      </RootTest>
    );
    expect(
      wrapper
        .find("a")
        .at(2)
        .text()
    ).toEqual("Connexion");
    wrapper
      .find("a")
      .at(2)
      .simulate("click");
    expect(
      wrapper
        .find("a")
        .at(2)
        .text()
    ).toEqual("Déconnexion");
  });

  // Test le contenu d'une action unitaire.
  it(`Test le payload d'une action`, () => {
    const action = incrementActionCount();
    expect(action.type).toEqual(INCREMENT_ACTION_COUNT);
  });

  it(`Test le reducer authentifiquation sans action type`, () => {
    const action = { type: SET_AUTHENTIFICATION, payload: true };
    const initialState = { isLoggedIn: false };
    expect(AuthentificationReducer(initialState, action).isLoggedIn).toEqual(
      true
    );
  });
});
