import React from "react";
import ListWrapper from "./components/ListWrapper";
import "./index.css";
// import HooksComponent from "./components/ListWrapper/HooksComponent/HooksComponent";

class App extends React.Component {
  state = {
    items: [
      {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/240px-React-icon.svg.png",
        name: "Dan Abramov",
        description: "Working on @reactjs. The demo guy.",
        twitterLink: "https://twitter.com/dan_abramov",
      },
      {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/240px-React-icon.svg.png",
        name: "Ryan Florence",
        description:
          "Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting.",
        twitterLink: "https://twitter.com/ryanflorence",
      },
      {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/240px-React-icon.svg.png",
        name: "Michael Jackson",
        description:
          "Maker. Co-author of React Router. Working on @ReactTraining. Created @unpkg. Head over heels for @cari.",
        twitterLink: "https://twitter.com/mjackson",
      },
      {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/240px-React-icon.svg.png",
        name: "Kent C. Dodds",
        description:
          "Making software development more accessible · Husband, Father, Latter-day Saint, Teacher, OSS, GDE, @TC39 · @PayPalEng @eggheadio @FrontendMasters · #JS",
        twitterLink: "https://twitter.com/kentcdodds",
      },
    ],
  };

  render() {
    return (
      <>
        <ListWrapper items={this.state.items} />
      </>
    );
  }
}

export default App;
