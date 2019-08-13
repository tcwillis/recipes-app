import {
  SET_RECIPES,
  API_START,
  FETCH_RECIPES,
  API_END
} from "store/actionTypes";

const INITIAL_STATE = {
  list: [],
  error: null,
  isFetchingData: null
};

function recipes(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_RECIPES:
      return { ...state, list: action.payload };
    case API_START:
      if (action.payload === FETCH_RECIPES) {
        return {
          ...state,
          isFetchingData: true
        };
      }
      break;
    case API_END:
      if (action.payload === FETCH_RECIPES) {
        return {
          ...state,
          isFetchingData: false
        };
      }
      break;
    default:
      return state;
  }
}

export default recipes;
