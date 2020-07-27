import React from "react";
import styles from "./Button.module.scss";

const Button = ({ children, href, secondary, modal, ...props }) => {
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
        <button
          {...props}
          className={
            secondary
              ? styles.button__secondary
              : modal
              ? styles.button__modal
              : styles.button
          }
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
