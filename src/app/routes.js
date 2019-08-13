import Home from "views/Home";
import RecipeList from "views/RecipeList";
import Recipe from "views/Recipe";
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
    component: RecipeList
  },
  {
    path: "/recipes/:seoPath",
    exact: true,
    component: Recipe
  },
  {
    path: "*",
    exact: true,
    component: NotFound
  }
];
