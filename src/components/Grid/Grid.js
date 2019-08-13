import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "./Grid.scss";

const Grid = ({ children }) => (
  <Fragment>
    {children.length > 0 && (
      <div data-ref="list" className="grid">
        {children}
      </div>
    )}
  </Fragment>
);

Grid.propTypes = {
  children: PropTypes.node
};

export default Grid;
