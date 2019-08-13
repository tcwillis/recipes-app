import Home from "views/Home";
import Recipes from "views/Recipes";
import NotFound from "views/NotFound";

export default [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/recipes",
    exact: true,
    component: Recipes
  },
  {
    path: "*",
    exact: true,
    component: NotFound
  }
];
