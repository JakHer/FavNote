import React from "react";
import Input from "../Input/Input.js";
import Button from "../Button/Button.js";
import Heading from "../Heading/Heading.js";
import styles from "./Form.module.scss";

const Form = ({ submitFn }) => (
  <div className={styles.form__wrapper}>
    <Heading form>Add new twitter account</Heading>
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
      <Button>add new item</Button>
    </form>
  </div>
);

export default Form;
