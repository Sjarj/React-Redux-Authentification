import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from '../components/todo-app';
import { shallow } from 'enzyme';

describe('Test TodoApp fonctionnement', () => {
  it('Render le composant todo sans erreur', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TodoApp />, div);
  });
});
