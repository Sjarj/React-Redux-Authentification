import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from '../components/todo-app';
import { shallow } from 'enzyme';

describe('Test TodoApp fonctionnement', () => {
  it('Contient la chaine nouvelle tache', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TodoApp />, div);
    expect(div.innerHTML).toContain('Nouvelle tâche');
  });

  it('Possède 2 classes css row', () => {
    const wrapper = shallow(<TodoApp />);
    expect(wrapper.find('.row').length).toEqual(2);
  });
});
