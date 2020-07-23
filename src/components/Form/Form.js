import React from "react";
import "./Form.css";

const Form = ({ submitFn }) => (
  <div className="form__wrapper">
    <h2 className="form__heading">Add new twitter account</h2>
    <form className="form" onSubmit={submitFn}>
      <div className="form__item">
        <input
          autoComplete="off"
          type="text"
          id="name"
          name="name"
          placeholder=" "
          maxLength="30"
          className="form__input"
        />
        <label className="form__label" htmlFor="name">
          Name
        </label>
        <div className="form__itemBar"></div>
      </div>
      <div className="form__item">
        <input
          autoComplete="off"
          className="form__input"
          type="text"
          id="link"
          name="link"
          placeholder=" "
        />
        <label className="form__label" htmlFor="link">
          Link
        </label>
        <div className="form__itemBar"></div>
      </div>
      <div className="form__item">
        <input
          autoComplete="off"
          className="form__input"
          type="text"
          id="image"
          name="image"
          placeholder=" "
        />
        <label className="form__label" htmlFor="image">
          Image
        </label>
        <div className="form__itemBar"></div>
      </div>
      <div className="form__item">
        <textarea
          className="form__textarea"
          type="text"
          id="description"
          name="description"
          placeholder=" "
        />
        <label className="form__label" htmlFor="description">
          Description
        </label>
        <div className="form__itemBar"></div>
      </div>

      <button type="submit" className="form__button">
        add new item
      </button>
    </form>
  </div>
);

export default Form;
