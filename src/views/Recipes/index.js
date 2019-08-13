/* istanbul ignore file */
import { compose } from "recompose";
import Recipes from "./Recipes";
import { recipesConnector as withRecipes } from "store/connectors/recipesConnector";

export default compose(withRecipes)(Recipes);
