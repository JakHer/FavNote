import React from "react";
import AppContext from "../../context";

const ArticlesView = () => (
  <AppContext.Consumer>
    {(context) => <p>Articles View {context}</p>}
  </AppContext.Consumer>
);

export default ArticlesView;
