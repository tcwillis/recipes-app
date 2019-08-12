import { SET_RECIPES } from "../actionTypes";

const INITIAL_STATE = {
  recipes: []
};

function recipes(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_RECIPES: {
      return {
        ...state,
        recipes: action.recipes
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
}

export default recipes;
