import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Tile.scss";

const Tile = ({ mobileImage, image, title, shortUrl }) => (
  <Card>
    <Link to={shortUrl} className="tile">
      <picture data-ref={"tile-image"}>
        <source srcSet={image} media="(min-width: 640px)" />
        <img src={mobileImage} alt={`${title}`} />
      </picture>
      <Card.Title data-ref={"tile-title"} className={"tile-title mb-0"}>
        {title}
      </Card.Title>
    </Link>
  </Card>
);

Tile.propTypes = {
  mobileImage: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  shortUrl: PropTypes.string
};

Tile.defaultProps = {
  shortUrl: "/"
};

export default Tile;
