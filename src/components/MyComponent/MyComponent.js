import React from "react";

class MyComponent extends React.Component {
  state = {
    text: "test state",
  };
  handleChange = () => console.log(this.state.text);
  render() {
    return (
      <>
        <h1>{this.state.text}</h1>
        <input placeholder="Enter text" onChange={this.handleChange} />
      </>
    );
  }
}

export default MyComponent;
