import React from "react";
import List from "../../components/List/List";
import Heading from "../../components/Heading/Heading";
import AppContext from "../../context";

const ArticlesView = () => (
  <>
    <Heading view>Articles</Heading>
    <AppContext.Consumer>
      {(context) => <List items={context.article} />}
    </AppContext.Consumer>
  </>
);

export default ArticlesView;
