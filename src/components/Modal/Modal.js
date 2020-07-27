import React from "react";
import Form from "../Form/Form";
import Button from "../Button/Button";
import styles from "./Modal.module.scss";

const Modal = ({ closeModalFn }) => (
  <div className={styles.Modal}>
    <Button modal onClick={closeModalFn}>
      X
    </Button>
    <Form />
  </div>
);

export default Modal;
