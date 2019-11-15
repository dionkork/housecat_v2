import React, { Component } from 'react';

class LastHouses extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="d-flex justify-content-center " >
                    <p className="lastHouseText"><i>Our last entries</i></p>
                </div>
        <div className="d-flex flex-row justify-content-center lastHousesBox">
        <div className="col-md-2">
              <div class="card mb-2">
                <img class="card-img-top"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
                  alt="Card image cap"/>
                <div class="card-body">
                  <h4 class="card-title d-flex justify-content-center">Card title</h4>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                  <a class="btn btn-primary d-flex justify-content-center">Button</a>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div class="card mb-2 ">
                <img class="card-img-top"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
                  alt="Card image cap"/>
                <div class="card-body">
                  <h4 class="card-title d-flex justify-content-center">Card title</h4>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                  <a class="btn btn-primary d-flex justify-content-center">Button</a>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div class="card mb-2 ">
                <img class="card-img-top"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
                  alt="Card image cap"/>
                <div class="card-body">
                  <h4 class="card-title d-flex justify-content-center">Card title</h4>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                  <a class="btn btn-primary d-flex justify-content-center">Button</a>
                </div>
              </div>
            </div>
            </div>
            </React.Fragment>
         );
    }
}
 
export default LastHouses;