import React, { Component } from "react";
import Result from "./results";

var styleBox = {
  width: "100%",
  height: "100%",
  padding: "50px",
  border: "2px solid white",
  background: "linear-gradient(to left, rgba(255,0,0,0), #00bfa5)"
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      priceUp: "",
      priceDown: ""
    };
    this.handleChangeLocation = this.handleChangeLocation.bind(this);
    this.handleChangePriceDown = this.handleChangePriceDown.bind(this);
    this.handleChangePriceUp = this.handleChangePriceUp.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeLocation(event) {
    this.setState({
      location: event.target.value
    });
  }
  handleChangePriceUp(event) {
    this.setState({
      priceUp: event.target.value
    });
  }
  handleChangePriceDown(event) {
    this.setState({
      priceDown: event.target.value
    });
  }

  handleSubmit() {
    let myObj = {
      location: this.state.location,
      priceUp: this.state.priceUp,
      priceDown: this.state.priceDown
    };
    localStorage.setItem("searchData", JSON.stringify(myObj));
    window.open("/results", "_self"); //to open new page
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <img className="backImg" src="newBackground.jpg" alt="backdround" />
          <div className="filter-block">
            <div className="rounded-pill" style={styleBox}>
              <div className="d-flex flex-row ">
                <input
                  id="location"
                  className="p-2 flex-grow-1 "
                  type="text"
                  placeholder="Thessaloniki, Greece"
                  onChange={this.handleChangeLocation}
                  value={this.state.location}
                />
                <input
                  id="priceDown"
                  className="p-2"
                  type="text"
                  placeholder="280€"
                  onChange={this.handleChangePriceDown}
                  value={this.state.priceDown}
                />
                <input
                  id="priceUp"
                  className="p-2"
                  type="text"
                  placeholder="400€"
                  onChange={this.handleChangePriceUp}
                  value={this.state.priceUp}
                />
                <div className="p-2">
                  <button
                    className="btn btn-outline-white"
                    onClick={this.handleSubmit}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
