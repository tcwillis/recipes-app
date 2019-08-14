import React from "react";
import PropTypes from "prop-types";
import "./Grid.scss";

const Grid = ({ children }) => (
  <div data-ref="grid" className="grid">
    {children}
  </div>
);

Grid.propTypes = {
  children: PropTypes.node.isRequired
};

export default Grid;
