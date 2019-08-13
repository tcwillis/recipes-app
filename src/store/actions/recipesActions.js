import { SET_RECIPES, FETCH_RECIPES } from "../actionTypes";
import { apiAction } from "./apiActions";

export const setRecipes = recipes => ({
  type: SET_RECIPES,
  payload: { recipes }
});

export const getRecipes = () =>
  apiAction({
    url: "/recipes",
    onSuccess: setRecipes,
    label: FETCH_RECIPES
  });
