import { ADD_RESSOURCE } from "../actions/action-types";

const initialState = { ressourceList: [0] };

export default (state = initialState, { type }) => {
  console.log(state);
  switch (type) {
    case ADD_RESSOURCE:
      return {
        ressourceList: [
          ...state.ressourceList,
          state.ressourceList[state.ressourceList.length - 1] + 1
        ]
      };

    default:
      return state;
  }
};
