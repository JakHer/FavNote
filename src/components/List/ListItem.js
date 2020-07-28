import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import Heading from "../Heading/Heading.js";
import styles from "./ListItem.module.scss";

const ListItem = ({ title, description, image, link, type }) => {
  const ImageTag = image ? "img" : "div";

  return (
    <li className={styles.list__item}>
      {type === "twitter" ? (
        image ? (
          <ImageTag className={styles.list__image} alt={title} src={image} />
        ) : (
          <ImageTag className={styles.list__imageNone} alt={title} />
        )
      ) : null}

      <div className={styles.list__container}>
        <Heading>{title}</Heading>
        <p className={styles.list__description}>{description}</p>
        {type === "twitter" || type === "article" ? (
          <Button
            target="_blank"
            rel="noopener noreferrer"
            className={styles.list__link}
            href={link}
          >
            visit {type} page
          </Button>
        ) : null}
      </div>
    </li>
  );
};

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  link: PropTypes.string,
};

ListItem.defaultProps = {
  description: null,
  image: null,
};

export default ListItem;
