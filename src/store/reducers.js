import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import recipes from "./reducers/recipesReducer";

export default history =>
  combineReducers({
    router: connectRouter(history),
    recipes
  });
