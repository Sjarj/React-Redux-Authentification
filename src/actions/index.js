import {
  SET_AUTHENTIFICATION,
  INCREMENT_ACTION_COUNT,
  ADD_RESSOURCE,
  PARSE_MESSAGE
} from './action-types';
import axios from 'axios';

const BASE_URL = 'http://localhost:3090';

export const setAuthentification = isLoggedIn => {
  return {
    type: SET_AUTHENTIFICATION,
    payload: isLoggedIn
  };
};

// middleware
export const incrementActionCount = () => {
  return {
    type: INCREMENT_ACTION_COUNT
  };
};

export const addRessource = () => {
  return {
    type: ADD_RESSOURCE
  };
};

export const signinUser = ({ email, password }, history) => {
  return function(dispatch) {
    axios
      .post(`${BASE_URL}/signin`, { email, password })
      .then(response => {
        localStorage.setItem('token', response.data.token);
        dispatch(setAuthentification(true));
        history.push('/ressources');
      })
      .catch(error => {
        console.error(error);
      });
  };
};

export const signupUser = ({ email, password }, history) => {
  return function(dispatch) {
    axios
      .post(`${BASE_URL}/signup`, { email, password })
      .then(response => {
        localStorage.setItem('token', response.data.token);
        dispatch(setAuthentification(true));
        history.push('/ressources');
      })
      .catch(error => {
        console.error(error);
      });
  };
};

export const signoutUser = () => {
  return function(dispatch) {
    dispatch(setAuthentification(false));
    localStorage.removeItem('token');
  };
};

export const getSpecialRessource = () => {
  return function(dispatch) {
    axios
      .get(`${BASE_URL}/specialRessource`, {
        headers: { authorization: localStorage.getItem('token') }
      })
      .then(response => {
        dispatch({ type: PARSE_MESSAGE, payload: response.data.result });
      })
      .catch(err => {
        console.log('erreur', err);
      });
  };
};
