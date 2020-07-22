import React from "react";
import PropTypes from "prop-types";
import "./ListItem.css";

const ListItem = ({ name, description, image, twitterLink }) => (
  <li className="list__item">
    <img className="list__image" alt={name} src={image} />
    <div className="list__container">
      <h2 className="list__header">{name}</h2>
      <p className="list__description">{description}</p>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="list__link"
        href={twitterLink}
      >
        visit twitter page
      </a>
    </div>
  </li>
);

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  twitterLink: PropTypes.string.isRequired,
};

ListItem.defaultProps = {
  description: "One of the React creators",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/240px-React-icon.svg.png",
};

export default ListItem;
