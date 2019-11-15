import React, { Component } from "react";
import NavBar from "./navbar";
import Footer from "./footer";
import Chatbot from "./chatbot"

const value = localStorage.getItem("searchData") || "";

class Results extends React.Component {
  constructor(props) {
    super(props);
    let item = JSON.parse(localStorage.getItem("searchData"));
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Chatbot />
        <Footer />
      </React.Fragment>
    );
  }
}

 
export default Results;