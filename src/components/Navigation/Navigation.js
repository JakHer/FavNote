import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";

const Navigation = () => (
  <nav className={styles.nav}>
    <ul className={styles.nav__list}>
      <li className={styles.nav__item}>
        <NavLink
          exact
          activeClassName={styles.nav__LinkActive}
          className={styles.nav__Link}
          to="/"
        >
          twitters
        </NavLink>
      </li>
      <li className={styles.nav__item}>
        <NavLink
          activeClassName={styles.nav__LinkActive}
          className={styles.nav__Link}
          to="/articles"
        >
          articles
        </NavLink>
      </li>
      <li
        activeClassName={styles.nav__LinkActive}
        className={styles.nav__item}
        to="/notes"
      >
        <NavLink
          activeClassName={styles.nav__LinkActive}
          className={styles.nav__Link}
          to="/notes"
        >
          notes
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
