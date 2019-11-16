import React, { Component } from "react";

class About extends React.Component {
  render() {
    return (
      <React.Fragment>
        <hr className="strong black" />
        <blockquote className="blockquote text-center homePageStyle">
          <h1 className="display-4">About us</h1>
          <p>
            We are the best real estate site available and we will make sure
            that you will find your perfect house or your perfect renter
          </p>
          <footer className="blockquote-footer">
            <cite title="Source Title">The Housecat team</cite>
          </footer>
        </blockquote>
      </React.Fragment>
    );
  }
}

export default About;
