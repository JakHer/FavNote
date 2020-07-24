import React from "react";
import styles from "./Form.module.scss";

const Form = ({ submitFn }) => (
  <div className={styles.form__wrapper}>
    <h2 className={styles.form__heading}>Add new twitter account</h2>
    <form className={styles.form} onSubmit={submitFn}>
      <div className={styles.form__item}>
        <input
          autoComplete="off"
          type="text"
          id="name"
          name="name"
          placeholder=" "
          maxLength="30"
          className={styles.form__input}
        />
        <label className={styles.form__label} htmlFor="name">
          Name
        </label>
        <div className={styles.form__itemBar}></div>
      </div>
      <div className={styles.form__item}>
        <input
          autoComplete="off"
          className={styles.form__input}
          type="text"
          id="link"
          name="link"
          placeholder=" "
        />
        <label className={styles.form__label} htmlFor="link">
          Link
        </label>
        <div className={styles.form__itemBar}></div>
      </div>
      <div className={styles.form__item}>
        <input
          autoComplete="off"
          className={styles.form__input}
          type="text"
          id="image"
          name="image"
          placeholder=" "
        />
        <label className={styles.form__label} htmlFor="image">
          Image
        </label>
        <div className={styles.form__itemBar}></div>
      </div>
      <div className={styles.form__item}>
        <textarea
          className={styles.form__textarea}
          type="text"
          id="description"
          name="description"
          placeholder=" "
        />
        <label className={styles.form__label} htmlFor="description">
          Description
        </label>
        <div className={styles.form__itemBar}></div>
      </div>

      <button type="submit" className={styles.form__button}>
        add new item
      </button>
    </form>
  </div>
);

export default Form;
