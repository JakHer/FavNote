import React from "react";
import "./index.css";

const initialStateItems = [
  {
    image:
      "https://pbs.twimg.com/profile_images/1268663650832744449/-jmtfbqQ_400x400.jpg",
    name: "Dan Abramov",
    description: "Working on @reactjs. The demo guy.",
    twitterLink: "https://twitter.com/dan_abramov",
  },
  {
    image:
      "https://pbs.twimg.com/profile_images/1257111841508974592/2_rEXazl_400x400.jpg",
    name: "Ryan Florence",
    description:
      "Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting.",
    twitterLink: "https://twitter.com/ryanflorence",
  },
  {
    image:
      "https://avatars1.githubusercontent.com/u/92839?s=460&u=2727b5ab382f6b2f3be84a257c2dcdc50243d78f&v=4",
    name: "Michael Jackson",
    description:
      "Maker. Co-author of React Router. Working on @ReactTraining. Created @unpkg. Head over heels for @cari.",
    twitterLink: "https://twitter.com/mjackson",
  },
  {
    image:
      "https://pbs.twimg.com/profile_images/759557613445001216/6M2E1l4q_400x400.jpg",
    name: "Kent C. Dodds",
    description:
      "Making software development more accessible · Husband, Father, Latter-day Saint, Teacher, OSS, GDE, @TC39 · @PayPalEng @eggheadio @FrontendMasters · #JS",
    twitterLink: "https://twitter.com/kentcdodds",
  },
];

class Root extends React.Component {
  state = {
    items: [...initialStateItems],
    greeting: "Kuba",
  };

  handleChange = (e) => {
    this.setState({ greeting: e.target.value });
  };

  addItem = (e) => {
    e.preventDefault();

    const newItem = {
      name: e.target[0].value,
      twitterLink: e.target[1].value,
      image: e.target[2].value,
      description: e.target[3].value,
    };

    this.setState((prevState) => ({
      items: [...prevState.items, newItem],
    }));

    e.target.reset();
  };

  render() {
    return (
      <>
        <h1>Hello World!</h1>
      </>
    );
  }
}

export default Root;
