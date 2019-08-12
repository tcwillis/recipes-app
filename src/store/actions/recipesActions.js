import { SET_RECIPES } from "../actionTypes";

export function setRecipes(recipes) {
  return {
    type: SET_RECIPES,
    recipes
  };
}
