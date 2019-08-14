import {
  RECIPES_RECEIVED,
  RECIPES_REQUESTED,
  RECIPES_FAILED
} from "store/actionTypes";
import { transformRecipes } from "../../utils/transform";

const INITIAL_STATE = {
  list: [],
  error: null,
  isFetchingData: false
};

function recipes(state = INITIAL_STATE, action) {
  switch (action.type) {
    case RECIPES_RECEIVED:
      return {
        ...state,
        list: transformRecipes(action.payload),
        isFetchingData: false
      };
    case RECIPES_REQUESTED:
      return {
        ...state,
        isFetchingData: true
      };
    case RECIPES_FAILED:
      return {
        ...state,
        isFetchingData: false,
        error: action.payload
      };

    default:
      return state;
  }
}

export default recipes;
