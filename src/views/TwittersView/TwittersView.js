import React from "react";
import List from "../../components/List/List";
import Heading from "../../components/Heading/Heading";
import AppContext from "../../context";

const TwittersView = () => (
  <>
    <Heading view>Twitters</Heading>
    <AppContext.Consumer>
      {(context) => <List items={context.twitter} />}
    </AppContext.Consumer>
  </>
);

export default TwittersView;
