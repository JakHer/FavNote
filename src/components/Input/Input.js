import React from "react";
import PropTypes from "prop-types";
import styles from "./Input.module.scss";

const Input = ({ tag: Tag, name, maxLength, label, required, ...props }) => (
  <div className={styles.form__item}>
    <Tag
      {...props}
      type="text"
      id={name}
      name={name}
      placeholder=" "
      maxLength={maxLength}
      className={Tag === `input` ? styles.form__input : styles.form__textarea}
      required={name === `image` ? false : required}
    />
    <label className={styles.form__label} htmlFor={name}>
      {label}
    </label>
    <div className={styles.form__itemBar}></div>
  </div>
);

Input.propTypes = {
  tag: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
  required: PropTypes.bool,
};

Input.defaultProps = {
  tag: `input`,
  maxLength: 200,
  required: true,
};
export default Input;
