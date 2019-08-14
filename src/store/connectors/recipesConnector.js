/* istanbul ignore file */
import { compose } from "recompose";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchRecipesIfNeeded } from "../actions/recipesActions";
import lodashGet from "lodash.get";

const mapStateToProps = state => ({
  recipes: lodashGet(state, "recipes.list"),
  isFetching: lodashGet(state, "recipes.isFetchingData"),
  error: lodashGet(state, "recipes.error")
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchRecipesIfNeeded
    },
    dispatch
  );

export const recipesConnector = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);
