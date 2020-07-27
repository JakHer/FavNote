import React, { Component } from "react";
import Input from "../Input/Input.js";
import Button from "../Button/Button.js";
import Heading from "../Heading/Heading.js";
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
    return (
      <div className={styles.form__wrapper}>
        <Heading form>Add new {DESCRIPTIONS[this.state.activeOption]}</Heading>
        <form className={styles.form} autoComplete="off" onSubmit={submitFn}>
          <input
            id={TYPES.twitter}
            checked={this.state.activeOption === TYPES.twitter}
            type="radio"
            onChange={() => this.handleRadioChange(TYPES.twitter)}
          />
          <label htmlFor={TYPES.twitter}>{TYPES.twitter}</label>
          <input
            id={TYPES.article}
            checked={this.state.activeOption === TYPES.article}
            type="radio"
            onChange={() => this.handleRadioChange(TYPES.article)}
          />
          <label htmlFor={TYPES.article}>{TYPES.article}</label>
          <input
            id={TYPES.note}
            checked={this.state.activeOption === TYPES.note}
            type="radio"
            onChange={() => this.handleRadioChange(TYPES.note)}
          />
          <label htmlFor={TYPES.note}>{TYPES.note}</label>
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
  }
}

export default Form;
