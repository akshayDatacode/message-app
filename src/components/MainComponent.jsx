import React, { Component } from "react";
import AddMessageComponent from "./AddMessageComponent";
import ListMessageComponent from "./ListMessageCompoonent";

class MainComponent extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="row">
          <div className="col-md-6 p-5 border border-danger">
            <AddMessageComponent />
          </div>
          <div className="col-md-6 p-5 border border-dark">
            <ListMessageComponent />
          </div>
        </div>
      </>
    );
  }
}

export default MainComponent;
