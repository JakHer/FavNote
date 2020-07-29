import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ArticlesView from "../ArticlesView/ArticlesView";
import NotesView from "../NotesView/NotesView";
import TwittersView from "../TwittersView/TwittersView";
import Modal from "../../components/Modal/Modal";
import Header from "../../components/Header/Header";
import AppContext from "../../context";
import "./index.css";

class Root extends React.Component {
  state = {
    twitter: [
      {
        title: `My Twitter`,
        description: `Feel free to add your Twitter :)`,
        link: `https://twitter.com/kubahermyt`,
        image: `https://pbs.twimg.com/profile_images/1214814747700404224/nivF7tNj_400x400.jpg`,
        type: `twitter`,
      },
    ],
    article: [
      {
        title: `GitHub Account`,
        description: `You can visit my GitHub`,
        link: `https://github.com/jakher`,
        type: `article`,
      },
    ],
    note: [],
    isModalOpen: false,
  };

  addItem = (e, newItem) => {
    e.preventDefault();

    this.setState((prevState) => ({
      [newItem.type]: [...prevState[newItem.type], newItem],
    }));

    this.closeModal();
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { isModalOpen } = this.state;
    const contextElements = {
      ...this.state,
      addItem: this.addItem,
    };

    return (
      <BrowserRouter>
        <AppContext.Provider value={contextElements}>
          <Header openModalFn={this.openModal} />
          <Switch>
            <Route exact path="/" component={TwittersView} />
            <Route path="/articles" component={ArticlesView} />
            <Route path="/notes" component={NotesView} />
          </Switch>
          {isModalOpen && <Modal closeModalFn={this.closeModal} />}
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default Root;
