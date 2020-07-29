import React, { Component } from "react";
import Input from "../Input/Input.js";
import Button from "../Button/Button.js";
import Heading from "../Heading/Heading.js";
import Radio from "./Radio/Radio";
import AppContext from "../../context";
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
    type: TYPES.twitter,
    title: ``,
    link: ``,
    image: ``,
    description: ``,
  };

  handleRadioChange = (type) => {
    this.setState({
      type: type,
    });
  };

  handleInputChange = (e) => {
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { type } = this.state;
    return (
      <AppContext.Consumer>
        {(context) => (
          <div className={styles.form__wrapper}>
            <Heading form>Add new {DESCRIPTIONS[type]}</Heading>
            <form
              className={styles.form}
              autoComplete="off"
              onSubmit={(e) => context.addItem(e, this.state)}
            >
              <div className={styles.form__radioWrapper}>
                <Radio
                  id={TYPES.twitter}
                  checked={type === TYPES.twitter}
                  changeFn={() => this.handleRadioChange(TYPES.twitter)}
                  htmlFor={TYPES.twitter}
                >
                  {TYPES.twitter}
                </Radio>

                <Radio
                  id={TYPES.article}
                  checked={type === TYPES.article}
                  changeFn={() => this.handleRadioChange(TYPES.article)}
                  htmlFor={TYPES.article}
                >
                  {TYPES.article}
                </Radio>

                <Radio
                  id={TYPES.note}
                  checked={type === TYPES.note}
                  changeFn={() => this.handleRadioChange(TYPES.note)}
                  htmlFor={TYPES.note}
                >
                  {TYPES.note}
                </Radio>
              </div>
              <Input
                onChange={this.handleInputChange}
                value={this.state.title}
                name="title"
                label={type === TYPES.twitter ? "Twitter Name" : "Title"}
                maxLength={30}
              />
              {type === TYPES.twitter ? (
                <Input
                  onChange={this.handleInputChange}
                  value={this.state.image}
                  name="image"
                  label="Image"
                />
              ) : null}

              {type !== TYPES.note ? (
                <Input
                  onChange={this.handleInputChange}
                  value={this.state.link}
                  name="link"
                  label={type === TYPES.twitter ? "Twitter Link" : "Link"}
                />
              ) : null}

              <Input
                onChange={this.handleInputChange}
                value={this.state.description}
                tag="textarea"
                name="description"
                label="Description"
                maxLength={150}
              />

              <Button>add new item</Button>
            </form>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Form;
