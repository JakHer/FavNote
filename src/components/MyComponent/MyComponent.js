import React from "react";

class MyComponent extends React.Component {
  state = {
    text: "TEST STATE",
  };

  handleChange = (e) => {
    this.setState({ text: e.target.value.toUpperCase() });
  };

  render() {
    return (
      <>
        <h1>{this.state.text}</h1>
        <input
          placeholder="Enter text"
          onChange={this.handleChange}
          value={this.state.text}
        />
      </>
    );
  }
}

export default MyComponent;
