/* istanbul ignore file */
import { compose } from "recompose";
import RecipeList from "./RecipeList";
import { recipesConnector as withRecipes } from "store/connectors/recipesConnector";

export default compose(withRecipes)(RecipeList);
