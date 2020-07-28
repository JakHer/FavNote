import React from "react";
import List from "../../components/List/List";
import Heading from "../../components/Heading/Heading";
import AppContext from "../../context";

const NotesView = () => (
  <>
    <Heading view>Notes</Heading>
    <AppContext.Consumer>
      {(context) => <List items={context.note} />}
    </AppContext.Consumer>
  </>
);

export default NotesView;
