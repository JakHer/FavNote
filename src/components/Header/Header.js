import React from "react";
import HeaderNavigation from "./HeaderNavigation";
import Button from "../Button/Button";
import Logo from "../../assets/images/logo.svg";
import styles from "./Header.module.scss";

const Header = ({ openModalFn }) => (
  <header className={styles.header}>
    <img className={styles.header__img} src={Logo} alt="favnote logo" />
    <HeaderNavigation />
    <Button secondary onClick={openModalFn}>
      new item
    </Button>
  </header>
);

export default Header;
