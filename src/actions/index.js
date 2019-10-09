import { SET_AUTHENTIFICATION } from './action-types';

export const setAuthentification = isLogedIn => {
  return {
    type: SET_AUTHENTIFICATION,
    payload: isLogedIn,
  };
};
