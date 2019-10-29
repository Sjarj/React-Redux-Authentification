import { SET_AUTHENTIFICATION } from "../actions/action-types";

const initialState = {
  isLoggedIn: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_AUTHENTIFICATION:
      return { isLoggedIn: payload };

    default:
      return state;
  }
};
