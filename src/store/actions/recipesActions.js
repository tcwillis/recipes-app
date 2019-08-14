import { RECIPES } from "../actionTypes";
import { apiAction } from "./apiActions";
import lodashGet from "lodash.get";

const getRecipes = () =>
  apiAction({
    type: RECIPES,
    endpoint: "/recipes"
  });

const shouldFetchRecipes = state => {
  const recipes = lodashGet(state, "recipes.list");
  if (recipes && recipes.isFetchingData) {
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
