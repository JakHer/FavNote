import React from "react";
import ListWrapper from "./components/ListWrapper";
import "./index.css";
import MyComponent from "./components/MyComponent/MyComponent";
import HooksComponent from "./components/ListWrapper/HooksComponent/HooksComponent";

const App = () => (
  <>
    <MyComponent />
    <HooksComponent />
    <ListWrapper />
  </>
);

export default App;
