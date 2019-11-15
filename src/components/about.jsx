import React, { Component } from "react";
import NavBar from "./navbar";
import Footer from "./footer";

class About extends React.Component {
   
    render() { 
       return (
        <React.Fragment>
                <NavBar/>
                <Footer/>
           </React.Fragment>
       );
  }
}

export default About ;