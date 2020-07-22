import React from "react";
import ListItem from "./ListWrapper/ListItem/ListItem";
import "./ListWrapper.css";
import { twitterAccounts } from "../data/twitterAccounts";

const ListWrapper = () => (
  <ul className="list">
    {twitterAccounts.map((item) => (
      <ListItem key={item.twitterLink} {...item} />
    ))}
  </ul>
);

export default ListWrapper;
