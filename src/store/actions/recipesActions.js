import { RECIPES } from "../actionTypes";
import { apiAction } from "./apiActions";

const getRecipes = () =>
  apiAction({
    type: RECIPES,
    endpoint: "/recipes"
  });

const shouldFetchRecipes = state => {
  const recipes = state.recipes.list;
  if (recipes.isFetchingData) {
    return false;
  } else if (!recipes || recipes.length === 0) {
    return true;
  } else {
    return false;
  }
};

export const fetchRecipesIfNeeded = () => {
  return (dispatch, getState) => {
    if (shouldFetchRecipes(getState())) {
      return dispatch(getRecipes());
    }
  };
};
