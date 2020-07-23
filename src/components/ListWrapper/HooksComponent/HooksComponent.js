import React, { useState } from "react";

const HooksComponent = () => {
  const [text, setText] = useState("Test");

  return (
    <>
      <h1>{text}</h1>
      <input
        placeholder="Enter text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
    </>
  );
};

export default HooksComponent;
