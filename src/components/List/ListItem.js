import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import Heading from "../Heading/Heading.js";
import styles from "./ListItem.module.scss";

const ListItem = ({ title, description, image, link }) => {
  const ImageTag = image ? "img" : "div";

  return (
    <li className={styles.list__item}>
      {image ? (
        <ImageTag className={styles.list__image} alt={title} src={image} />
      ) : (
        <ImageTag className={styles.list__imageNone} alt={title} />
      )}

      <div className={styles.list__container}>
        <Heading>{title}</Heading>
        <p className={styles.list__description}>{description}</p>
        {link && (
          <Button
            target="_blank"
            rel="noopener noreferrer"
            className={styles.list__link}
            href={link}
          >
            {image ? `visit twitter page` : `visit article page`}
          </Button>
        )}
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
