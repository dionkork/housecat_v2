import React, { Component } from "react";

var styleText = {
  color: "white"
};

class NavBar extends Component {
  render() {
    return(

<nav className="navbar fixed-top navbar-expand-lg navbar black scrolling-navbar navbarClass">
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
    aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

<div className="collapse navbar-collapse d-flex flex-row" id="navbarSupportedContent">
  <ul className="navbar-nav mr-auto p-2" >
    <li className="nav-item active">
    <a className="nav-link" style={styleText} href="/rent">Rent</a>
    </li>
    <li className="nav-item">
    <a className="nav-link" style={styleText}  href="/buy">Buy</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" style={styleText} href="/add">Add house</a>
    </li>
  </ul>
  </div>
  <a className="navbar-brand" href="/"><img src="white-cat.png" alt="logo" width="60%" height="20%"/></a>
  
<div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarSupportedContent">
 
 
<i className="fas fa-phone fa-xs p-2">
 +30 2310666666 </i>
  <ul className="navbar-nav p-2">
  <li class="nav-item avatar dropdown">
        <a class="nav-link dropdown-toggle" id="navbarDropdownAboutUs" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">More
        </a>
        <div class="dropdown-menu dropdown-menu-lg-right dropdown-secondary"
          aria-labelledby="navbarDropdownMenuLink-55">
          <a class="dropdown-item" href="#">FAQ</a>
          <a class="dropdown-item" href="#">About Us</a>
          <a class="dropdown-item" href="#">Contact</a>
        </div>
      </li>
  </ul>
</div>
</nav>
    );
  }
}

export default NavBar;