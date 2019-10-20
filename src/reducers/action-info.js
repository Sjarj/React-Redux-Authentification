import { INCREMENT_ACTION_COUNT } from '../actions/action-types';

const initialState = {
  actionCount: 0,
};

export default (state = initialState, { type }) => {
  switch (type) {
    case INCREMENT_ACTION_COUNT:
      return { actionCount: state.actionCount + 1 };

    default:
      return state;
  }
};
