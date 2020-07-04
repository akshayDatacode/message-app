import React, { Component } from "react";

class ListMessageComponent extends Component {
  state = {};
  render() {
    return (
      <>
        <h3 className="text-center mb-3">Messages List </h3>

        <div>
          <div className="card border-primary shadow">
            <div className="card-header m-0 pl-3 pb-1 pt-1">
              Sender : Akshay
            </div>
            <div className="card-body m-0 pl-3 pb-0 pt-2">
              {" "}
              <p>
                Body : Hello Akshay How Are you I am Fine What About Your Time
              </p>{" "}
            </div>
            <div className="card-header text-right m-0 pl-4 pb-2 bg-white">
              <button type="reset" className="btn btn-danger ml-5 p-1">
                Delete
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ListMessageComponent;
