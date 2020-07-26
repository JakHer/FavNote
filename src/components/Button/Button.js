import React from "react";
import styles from "./Button.module.scss";

const Button = ({ children, href, secondary }) => {
  const buttonClass = secondary ? styles.button__secondary : styles.button;

  return (
    <>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          {children}
        </a>
      ) : (
        <button className={buttonClass}>{children}</button>
      )}
    </>
  );
};

export default Button;