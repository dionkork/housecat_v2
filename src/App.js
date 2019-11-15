import React, { Component } from "react";
import "./App.css";
import Chatbot from "./components/chatbot";
import Header from "./components/header";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import LastHouses from "./components/lastHouses";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Header />
       <LastHouses/>
        <Chatbot />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
