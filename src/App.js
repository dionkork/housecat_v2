import React, { Component } from "react";
import "./App.css";
import Chatbot from "./components/chatbot";
import Header from "./components/header";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import LastHouses from "./components/lastHouses";
import About from "./components/about";
import Contact from "./components/contact";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Header />
        <LastHouses />
        <About />
        <Contact />
        <Chatbot />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
