import { SET_AUTHENTIFICATION, INCREMENT_ACTION_COUNT } from './action-types';

export const setAuthentification = isLogedIn => {
  return function(dispatch) {
    dispatch({
      type: SET_AUTHENTIFICATION,
      payload: isLogedIn,
    });
    dispatch(incrementActionCount());
  };
};

export const incrementActionCount = () => {
  return {
    type: INCREMENT_ACTION_COUNT,
  };
};
