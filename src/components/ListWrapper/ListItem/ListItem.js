import React from "react";
import PropTypes from "prop-types";
import styles from "./ListItem.module.scss";

const ListItem = ({ name, description, image, twitterLink }) => (
  <li className={styles.list__item}>
    <img className={styles.list__image} alt={name} src={image} />
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

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  twitterLink: PropTypes.string.isRequired,
};

ListItem.defaultProps = {
  description: "One of the React creators",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/240px-React-icon.svg.png",
};

export default ListItem;
