import { PARSE_ERROR, RESET_ERROR } from '../actions/action-types';

const initialState = {
  message: ''
};
export default function ErrorReducer(state = initialState, { type, payload }) {
  switch (type) {
    case PARSE_ERROR:
      return {
        message: payload
      };
    case RESET_ERROR:
      return {
        message: ''
      };
    default:
      return state;
  }
}
