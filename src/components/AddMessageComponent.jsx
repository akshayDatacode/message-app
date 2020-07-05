import React, { Component } from "react";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import axios from "axios";

const API = "http://www.localhost:5000/api/add_message";

class AddMessageComponent extends Component {
  state = {
    body: "",
    sender: "",
    isOnline: false,
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const message = {
      body: this.state.body,
      sender: this.state.sender,
    };

    axios
      .post(API, message)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    this.setState({ body: "", sender: "" });
  };

  handleInputChangeBody = (event) => {
    event.preventDefault();
    this.setState({
      body: event.target.value,
    });
  };

  handleInputChangeSender = (event) => {
    event.preventDefault();
    this.setState({
      sender: event.target.value,
    });
  };

  render() {
    return (
      <>
        <h3 className="text-center">Message Send Form</h3>
        <h6 className="badge badge-primary ">Network Mode :</h6>
        <div className="row text-right mb-3">
          <div className="ml-3">
            {/* ref toggle https://gitbrent.github.io/bootstrap-switch-button-react/ */}
            <BootstrapSwitchButton
              checked={true}
              onlabel="Online"
              offlabel="Offline"
              onstyle="success"
              offstyle="danger"
              size="xs"
              width={100}
              height={30}
              onChange={(checked) => {
                this.setState({ isOnline: checked });
              }}
            />
          </div>
        </div>
        <form>
          <div className="form-group row">
            <label for="inputEmail3" className="col-sm-2 col-form-label">
              Sender
            </label>
            <div className="col-sm-10">
              <input
                className="form-control"
                placeholder="Sender Name"
                value={this.state.sender}
                onChange={this.handleInputChangeSender}
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="inputPassword3" className="col-sm-2 col-form-label">
              Message
            </label>
            <div className="col-sm-10">
              <textarea
                className="form-control"
                placeholder="Message Body"
                value={this.state.body}
                onChange={this.handleInputChangeBody}
              />
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-10">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.handleSubmit}
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default AddMessageComponent;
