import React from "react";
import styles from "./Heading.module.scss";

const Heading = ({ children, form }) => (
  <>
    {form ? (
      <h2 className={styles.heading__form}>{children}</h2>
    ) : (
      <h2 className={styles.heading}>{children}</h2>
    )}
  </>
);

export default Heading;
