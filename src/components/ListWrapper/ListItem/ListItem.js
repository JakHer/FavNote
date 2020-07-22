import React from "react";
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

export default ListItem;
