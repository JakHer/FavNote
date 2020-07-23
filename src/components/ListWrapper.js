import React from "react";
import ListItem from "./ListWrapper/ListItem/ListItem";
import "./ListWrapper.css";

const ListWrapper = (props) => (
  <ul className="list">
    {props.items.map((item) => (
      <ListItem key={item.twitterLink} {...item} />
    ))}
  </ul>
);

export default ListWrapper;
