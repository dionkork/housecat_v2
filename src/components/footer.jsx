import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBInput
} from "mdbreact";

var styleText = {
  color: "white"
};

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="page-footer font-small black pt-4">
        <div className="container-fluid text-center text-md-left">
          <div class="row">
            <hr className="clearfix w-100 d-md-none pb-3" />

            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="text-uppercase" style={styleText}>
                Connect with us:
              </h5>

              <MDBContainer>
                <MDBBtn size="xlg" tag="a" floating social="fb">
                  <MDBIcon fab icon="facebook-f" />
                </MDBBtn>
                <MDBBtn size="xlg" tag="a" floating social="tw">
                  <MDBIcon fab icon="twitter" />
                </MDBBtn>
                <MDBBtn size="xlg" tag="a" floating social="gplus">
                  <MDBIcon fab icon="google-plus-g" />
                </MDBBtn>
                <MDBBtn size="xlg" tag="a" floating social="li">
                  <MDBIcon fab icon="linkedin-in" />
                </MDBBtn>
              </MDBContainer>
            </div>
            <div className="col-md-4 mt-md-4 mt-2">
            <div className="d-flex justify-content-center">
              <form class="form-inline">
                <input class="form-control p-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-white btn-md my-2 my-sm-0 ml-3 p-2" type="submit">Search</button>
              </form>
            </div>
            </div>
          </div>
        </div>

        <div
          className="footer-copyright text-center black py-3"
          style={styleText}
        >
          © 2019 Copyright: System of a down SKGCODE3
        </div>
      </footer>
    );
  }
}

export default Footer;
