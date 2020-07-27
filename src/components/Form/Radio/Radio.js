import React from "react";
import styles from "./Radio.module.scss";

const Radio = ({ children, id, checked, changeFn, htmlFor }) => (
  <label className={styles.label} htmlFor={htmlFor}>
    <input
      className={styles.input}
      id={id}
      checked={checked}
      type="radio"
      onChange={changeFn}
    />
    <div className={styles.radioButton} />
    {children}
  </label>
);
export default Radio;
