import React from "react";
import PropTypes from "prop-types";
import Layout from "components/Layout";
import { Link } from "react-router-dom";

const Recipe = ({ recipe }) => (
  <Layout className="recipe">
    <Link to="/recipes">Back to Recipes</Link>
    <h1>Recipe</h1>
    {recipe && <div>Recipe {recipe.title}</div>}
  </Layout>
);

Recipe.propTypes = {
  recipe: PropTypes.object
};

Recipe.defaultProps = {
  recipe: {}
};

export default Recipe;
