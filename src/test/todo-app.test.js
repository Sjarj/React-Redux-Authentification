import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from '../components/todo-app';
import { shallow } from 'enzyme';

describe('Test TodoApp fonctionnement', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<TodoApp />)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('Contient la chaine nouvelle tache', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TodoApp />, div)
    expect(div.innerHTML).toContain('Nouvelle tâche');
  });


  it('Possède 2 classes css row', () => {
    expect(wrapper.find('.row').length).toEqual(2);
  });

  it('Possède 1 id addButton', () => {
    expect(wrapper.find('#addButton').length).toEqual(1);
  });

  it("Change la valeur de l'input", () => {
    wrapper.find("input").simulate("change", { target: { value: "Yo" } })
    expect(wrapper.find("input").prop("value")).toEqual("Yo")
  });

  it("Saisie une valeur dans l'input, clique sur le bouton et vérifie que le texte est la liste", () => {
    wrapper.find("input").simulate("change", { target: { value: "Yo" } })
    wrapper.find("button").simulate("click")
    expect(wrapper.find(".list-group-item").text()).toContain("Yo")
  });

});
