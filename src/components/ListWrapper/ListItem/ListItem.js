import React from "react";
import "./ListItem.css";
import ryanFlorenceImage from "../../../assets/images/ryanflorence.jpg";

const ListItem = () => (
  <li className="list__item">
    <img className="list__image" alt="Ryan Florence" src={ryanFlorenceImage} />
    <div className="list__container">
      <h2 className="list__header">Ryan Florence</h2>
      <p className="list__description">
        Making React accessible for users and developers at https://reach.tech .
        Online learning, workshops, OSS, and consulting.
      </p>
      <button className="list__button">visit twitter page</button>
    </div>
  </li>
);

export default ListItem;
