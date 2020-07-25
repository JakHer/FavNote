import React from "react";
import PropTypes from "prop-types";
import styles from "./ListItem.module.scss";

const ListItem = ({ name, description, image, twitterLink }) => {
  const ImageTag = image ? "img" : "div";

  return (
    <li className={styles.list__item}>
      <ImageTag
        className={image ? styles.list__image : styles.list__imageNone}
        alt={name}
        src={image}
      />
      <div className={styles.list__container}>
        <h2 className={styles.list__header}>{name}</h2>
        <p className={styles.list__description}>{description}</p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={styles.list__link}
          href={twitterLink}
        >
          visit twitter page
        </a>
      </div>
    </li>
  );
};

ListItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  twitterLink: PropTypes.string.isRequired,
};

ListItem.defaultProps = {
  description: "One of the React creators",
  image: null,
};

export default ListItem;
