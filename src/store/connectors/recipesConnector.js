/* istanbul ignore file */
import { compose } from "recompose";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getRecipes } from "../actions/recipesActions";
import lodashGet from "lodash.get";

const mapStateToProps = state => ({
  recipes: lodashGet(state, "recipes.list"),
  isUpdating: lodashGet(state, "recipes.isUpdating"),
  error: lodashGet(state, "recipes.error")
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getRecipes
    },
    dispatch
  );

export const recipesConnector = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);