import React from "react";
import ListItem from "./ListWrapper/ListItem/ListItem";
import "./ListWrapper.css";
import { twitterAccounts } from "../data/twitterAccounts";

const ListWrapper = () => (
  <ul className="list">
    {twitterAccounts.map((item) => (
      <ListItem
        name={item.name}
        description={item.description}
        imageSrc={item.image}
        twitterLink={item.twitterLink}
      />
    ))}
  </ul>
);

export default ListWrapper;
