import React, { Component } from "react";
import axios from "axios";

const API = "http://www.localhost:5000/api/get_messages";

class ListMessageComponent extends Component {
  intervalID;

  state = {
    message: [],
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    this.getMessages();
  }

  componentWillUnmount() {
    clearTimeout(this.intervalID);
  }

  getMessages = () => {
    axios
      .get(API)
      .then((result) => {
        this.setState({
          message: result.data.message,
          isLoading: false,
        });
        this.intervalID = setTimeout(this.getMessages, 1000);
      })
      .catch((error) =>
        this.setState({
          error,
          isLoading: false,
        })
      );
  };

  render() {
    return (
      <>
        <h3 className="text-center mb-3">Messages List </h3>
        {this.state.message.map((item) => (
          <div>
            <div className="card border-primary shadow mb-2">
              <div className="card-header m-0 pl-3 pb-1 pt-1">
                Sender : {item.sender}
              </div>
              <div className="card-body m-0 pl-3 pb-0 pt-2">
                {" "}
                <p>Body : {item.body}</p>{" "}
              </div>
              {this.props.isOnline && (
                <div className="card-header text-right m-0 pl-4 pb-2 bg-white">
                  <button
                    type="reset"
                    className="btn btn-danger ml-5 p-1"
                    onClick={() => this.props.handleDelete(item._id)}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default ListMessageComponent;
