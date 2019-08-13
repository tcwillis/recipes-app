import React, { Component } from "react";
import PropTypes from "prop-types";
import Layout from "components/Layout";

class Recipes extends Component {
  componentDidMount() {
    this.props.getRecipes();
  }
  render() {
    const hasError = this.props.error ? true : false;
    const errorMessage = this.props.error
      ? this.props.error.message
      : "UNSPECIFIED ERROR";
    return (
      <Layout className="recipes">
        {hasError && <div>{errorMessage}</div>}
        <h1>Recipes</h1>
        {JSON.stringify(this.props.recipes)}
      </Layout>
    );
  }
}

Recipes.propTypes = {
  isUpdating: PropTypes.bool.isRequired,
  error: PropTypes.object,
  getRecipes: PropTypes.func
};

Recipes.defaultProps = {
  isUpdating: false,
  error: {},
  getRecipes: () => {}
};

export default Recipes;
