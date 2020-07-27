import React, { Component } from "react";
import Input from "../Input/Input.js";
import Button from "../Button/Button.js";
import Heading from "../Heading/Heading.js";
import Radio from "./Radio/Radio";
import styles from "./Form.module.scss";

const TYPES = {
  twitter: `twitter`,
  article: `article`,
  note: `note`,
};

const DESCRIPTIONS = {
  twitter: `Favourite Twitter`,
  article: `Favourite Article`,
  note: `Favourite Note`,
};

class Form extends Component {
  state = {
    activeOption: TYPES.twitter,
  };

  handleRadioChange = (type) => {
    this.setState({
      activeOption: type,
    });
  };

  render() {
    const { submitFn } = this.props;
    const { activeOption } = this.state;
    return (
      <div className={styles.form__wrapper}>
        <Heading form>Add new {DESCRIPTIONS[activeOption]}</Heading>
        <form className={styles.form} autoComplete="off" onSubmit={submitFn}>
          <div className={styles.form__radioWrapper}>
            <Radio
              id={TYPES.twitter}
              checked={activeOption === TYPES.twitter}
              changeFn={() => this.handleRadioChange(TYPES.twitter)}
              htmlFor={TYPES.twitter}
            >
              {TYPES.twitter}
            </Radio>
            <Radio
              id={TYPES.article}
              checked={activeOption === TYPES.article}
              changeFn={() => this.handleRadioChange(TYPES.article)}
              htmlFor={TYPES.article}
            >
              {TYPES.article}
            </Radio>
            <Radio
              id={TYPES.note}
              checked={activeOption === TYPES.note}
              changeFn={() => this.handleRadioChange(TYPES.note)}
              htmlFor={TYPES.note}
            >
              {TYPES.note}
            </Radio>
          </div>
          <Input
            name="name"
            label={activeOption === TYPES.twitter ? "Twitter Name" : "Title"}
            maxLength={30}
          />
          {activeOption === TYPES.twitter ? (
            <Input name="image" label="Image" />
          ) : null}

          {activeOption !== TYPES.note ? (
            <Input
              name="link"
              label={activeOption === TYPES.twitter ? "Twitter Link" : "Link"}
            />
          ) : null}

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
  }
}

export default Form;
