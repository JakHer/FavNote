import React from "react";
import ListItem from "./ListItem";
import styles from "./List.module.scss";

const ListWrapper = ({ items }) => (
  <>
    {items.length ? (
      <ul className={styles.list}>
        {items.map((item) => (
          <ListItem key={item.title} {...item} />
        ))}
      </ul>
    ) : (
      <h1 className={styles.greeting}>Add something</h1>
    )}
  </>
);

export default ListWrapper;
