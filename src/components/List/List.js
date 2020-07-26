import React from "react";
import ListItem from "./ListItem";
import styles from "./List.module.scss";

const ListWrapper = (props) => (
  <ul className={styles.list}>
    {props.items.map((item) => (
      <ListItem key={item.twitterLink} {...item} />
    ))}
  </ul>
);

export default ListWrapper;
