import React, { Component } from "react";
import House from "./house";
import axios from "axios";
//var cors = require('cors');

var styleBox = {
  width: "100%",
  height: "100%",
  padding: "50px",
  border: "2px solid white",
  background: "linear-gradient(to left, rgba(255,0,0,0), #331900)"
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
      minprice: null,
      maxprice: null
    };
    this.handleChangeLocation = this.handleChangeLocation.bind(this);
    this.handleChangeMinPrice = this.handleChangeMinPrice.bind(this);
    this.handleChangeMaxPrice = this.handleChangeMaxPrice.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeLocation(event) {
    this.setState({
      location: event.target.value
    });
  }
  handleChangeMaxPrice(event) {
    this.setState({
      maxprice: event.target.value
    });
  }
  handleChangeMinPrice(event) {
    this.setState({
      minprice: event.target.value
    });
  }


  handleSubmit() {
    axios.post('http://localhost:8000/api/properties/search',  {
        "id":null,
        "minprice":this.state.minprice,
        "maxprice":this.state.minprice,
        "sqm": null,
        "location":this.state.location,
        "bedrooms":null,
        "bathrooms":null,
        "property_type":null,
        "floor":null,
        "sale_type":null,
        "furnitured":null,
        "heating_type":null,
        "minbuilt_year":null,
        "maxbuilt_year":null,
        "parking":null
    }).then(res => {

      let filterboxInfo = {
        location: this.state.location,
        minprice: this.state.minprice,
        maxprice: this.state.maxprice
      }
      localStorage.setItem("filters",JSON.stringify(filterboxInfo));

      let filteringResults = res.data;
      localStorage.setItem("searchdata", JSON.stringify(filteringResults));
      // LocalStorage takes a few milliseconds to execute SO this delay is necessary otherwise redirect will happen before the process is complete
      setTimeout( () => {
       this.setState({ position: 1 });
      }, 2000);
      window.open("/results", "_self"); //to open new page
    });
  }
/*
  keepFilters(){
    let filterboxInfo = {
      "location": "athina",
      minprice:200,
      maxprice:300,
    }
    localStorage.setItem("filters",filterboxInfo);
  }
*/
  render() {
    return (
      <React.Fragment>
        <div>
          <img className="backImg" src="backgroundHouse.jpg" alt="backdround" />
          <div className="filter-block">
            <div className="rounded-pill" style={styleBox}>
              <div className="d-flex flex-row ">
                <input
                  id="location"
                  className="p-2 flex-grow-1 h4"
                  type="text"
                  placeholder="Thessaloniki, Greece"
                  onChange={this.handleChangeLocation}
                  value={this.state.location}
                />
                <input
                  id="minprice"
                  className="p-2 h5"
                  type="text"
                  placeholder="280€"
                  onChange={this.handleChangeMinPrice}
                  value={this.state.minprice}
                />
                <input
                  id="maxprice"
                  className="p-2 h5"
                  type="text"
                  placeholder="400€"
                  onChange={this.handleChangeMaxPrice}
                  value={this.state.maxprice}
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
