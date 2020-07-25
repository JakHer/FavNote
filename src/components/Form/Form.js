import React from "react";
import Input from "../Input/Input.js";
import styles from "./Form.module.scss";

const Form = ({ submitFn }) => (
  <div className={styles.form__wrapper}>
    <h2 className={styles.form__heading}>Add new twitter account</h2>
    <form className={styles.form} autoComplete="off" onSubmit={submitFn}>
      <Input name="name" label="Name" maxLength={30} />
      <Input name="link" label="Twitter Link" />
      <Input name="image" label="Image" />
      <Input
        tag="textarea"
        name="description"
        label="Description"
        maxLength={30}
      />

      <button type="submit" className={styles.form__button}>
        add new item
      </button>
    </form>
  </div>
);

export default Form;
