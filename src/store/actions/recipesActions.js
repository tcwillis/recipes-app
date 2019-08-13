import { SET_RECIPES, FETCH_RECIPES } from "../actionTypes";
import { apiAction } from "./apiActions";
import { transformResponse } from "../../utils/transform";

export const setRecipes = recipes => ({
  type: SET_RECIPES,
  payload: { list: transformResponse({ data: recipes, type: "recipes" }) }
});

export const getRecipes = () =>
  apiAction({
    url: "/recipes",
    onSuccess: setRecipes,
    label: FETCH_RECIPES
  });
