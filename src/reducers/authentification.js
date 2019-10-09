import { SET_AUTHENTIFICATION } from '../actions/action-types';

const initialState = {
  isLogedIn: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_AUTHENTIFICATION:
      return { isLogedIn: payload };

    default:
      return state;
  }
};
