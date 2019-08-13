import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Layout from "components/Layout";

class Recipes extends Component {
  componentDidMount() {
    this.props.getRecipes();
  }
  render() {
    const { error, recipes, isFetching } = this.props;
    const hasError = error ? true : false;
    const errorMessage = error ? error.message : "UNSPECIFIED ERROR";

    return (
      <Layout className="recipes">
        <h1>Recipes</h1>
        {isFetching ? (
          <div data-ref={"fetching"}>Fetching recipes...</div>
        ) : (
          <Fragment>
            {hasError && <div>{errorMessage}</div>}
            {JSON.stringify(recipes)}
          </Fragment>
        )}
      </Layout>
    );
  }
}

Recipes.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.object,
  getRecipes: PropTypes.func
};

Recipes.defaultProps = {
  isFetching: false,
  error: {},
  getRecipes: () => {}
};

export { Recipes };
export default Recipes;
