import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Layout from "components/Layout";
import Grid from "components/Grid";
import Tile from "components/Tile";

class RecipeList extends Component {
  componentDidMount() {
    this.props.fetchRecipesIfNeeded();
  }
  render() {
    const { error, recipes, isFetching } = this.props;
    const hasError = error ? true : false;
    const errorMessage = error ? error.message : "UNSPECIFIED ERROR";

    return (
      <Layout className="recipe-list">
        <h1>Recipes</h1>
        {isFetching ? (
          <div data-ref={"fetching"}>Fetching recipes...</div>
        ) : (
          <Fragment>
            {hasError && <div>{errorMessage}</div>}
            <Grid>
              {recipes.map(recipe => (
                <Tile key={recipe.id} {...recipe} />
              ))}
            </Grid>
          </Fragment>
        )}
      </Layout>
    );
  }
}

RecipeList.propTypes = {
  isFetching: PropTypes.bool,
  error: PropTypes.object,
  fetchRecipesIfNeeded: PropTypes.func,
  recipes: PropTypes.array
};

RecipeList.defaultProps = {
  isFetching: false,
  error: {},
  fetchRecipesIfNeeded: () => {},
  recipes: []
};

export { RecipeList };
export default RecipeList;
