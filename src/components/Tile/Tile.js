import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Tile.scss";

const Tile = ({ id, imageMobile, imageDesktop, title, shortUrl }) => (
  <Link to={shortUrl} className="tile">
    <Card>
      <picture data-ref={"tile-image"}>
        <source srcset={imageDesktop} media="(min-width: 640px)" />
        <img src={imageMobile} alt={`${title}`} />
      </picture>
      <Card.Title data-ref={"tile-title"} className={"tile-title mb-0"}>
        {title}
      </Card.Title>
    </Card>
  </Link>
);

Tile.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  imageMobile: PropTypes.string,
  imageDesktop: PropTypes.string,
  title: PropTypes.string,
  shortUrl: PropTypes.string
};

export default Tile;
