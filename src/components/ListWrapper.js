import React from "react";
import ListItem from "./ListWrapper/ListItem/ListItem";
import "./ListWrapper.css";
import { twitterAccounts } from "../data/twitterAccounts";

const ListWrapper = () => (
  <ul className="list">
    <ListItem
      name={twitterAccounts[1].name}
      description={twitterAccounts[1].description}
      imageSrc={twitterAccounts[1].image}
      twitterLink={twitterAccounts[1].twitterLink}
    />
  </ul>
);

export default ListWrapper;
