import React from "react";
import ListWrapper from "./components/ListWrapper";
import "./index.css";
import Form from "./components/Form/Form";
import HooksComponent from "./components/ListWrapper/HooksComponent/HooksComponent";

const initialStateItems = [
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
];

class App extends React.Component {
  state = {
    items: [...initialStateItems],
    greeting: "Kuba",
  };

  handleChange = (e) => {
    this.setState({ greeting: e.target.value });
  };

  addItem = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    console.log(e.target[1].value);
    console.log(e.target[2].value);
    console.log(e.target[3].value);
  };

  render() {
    return (
      <>
        <HooksComponent
          name={this.state.greeting}
          handleChange={this.handleChange}
        />
        <ListWrapper items={this.state.items} />
        <Form submitFn={this.addItem} />
      </>
    );
  }
}

export default App;
