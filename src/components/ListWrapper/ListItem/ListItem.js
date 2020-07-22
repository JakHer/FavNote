import React from "react";
import "./ListItem.css";

const ListItem = (props) => (
  <li className="list__item">
    <img className="list__image" alt="Ryan Florence" src={props.imageSrc} />
    <div className="list__container">
      <h2 className="list__header">{props.name}</h2>
      <p className="list__description">{props.description}</p>
      <button className="list__button">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="list__link"
          href={props.twitterLink}
        >
          visit twitter page
        </a>
      </button>
    </div>
  </li>
);

export default ListItem;
