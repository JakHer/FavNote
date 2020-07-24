import React from "react";

const HooksComponent = (props) => (
  <>
    <h1>{props.name}</h1>
    <input
      placeholder="Enter text"
      value={props.name}
      onChange={props.handleChange}
    />
  </>
);

export default HooksComponent;
