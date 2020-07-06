import React, { Component } from "react";
import BootstrapSwitchButton from "bootstrap-switch-button-react";

class AddMessageComponent extends Component {
  state = {
    body: "",
    sender: "",
    messageBuffer: [],
    showError: false,
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const message = {
      body: this.state.body,
      sender: this.state.sender,
    };
    if (this.props.isOnline) {
      this.props.addMessage(message);
    } else {
      const messageRef = [...this.state.messageBuffer];
      messageRef.push(message);
      this.setState({ messageBuffer: messageRef, showError: true });
    }

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
      showError: false,
    });
  };

  render() {
    return (
      <>
        <h3 className="text-center">Message Send Form</h3>
        <h6 className="badge badge-primary ">Network Mode :</h6>
        {this.props.isOnline ? <p>Online</p> : <p>Offline</p>}
        <div className="row text-right mb-3">
          <div className="ml-3">
            {/* ref toggle https://gitbrent.github.io/bootstrap-switch-button-react/ */}
            <BootstrapSwitchButton
              checked={this.props.isOnline}
              onlabel="Online"
              offlabel="Offline"
              onstyle="success"
              offstyle="danger"
              size="xs"
              width={100}
              height={30}
              onChange={(checked) => {
                this.props.handleToggle(checked);
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
          {this.state.showError && (
            <p className="text-danger">
              You are offline !. Message has been buffered
            </p>
          )}
          <div className="form-group row">
            <div className="col-sm-10">
              <button className="btn btn-primary" onClick={this.handleSubmit}>
                Send Message
              </button>
            </div>
          </div>
          <div className="col-sm-10">
            {this.props.isOnline && (
              <button
                className="btn btn-danger"
                onClick={() => {
                  this.props.handleBufferMessage(this.state.messageBuffer);
                }}
              >
                Refresh
              </button>
            )}
          </div>
        </form>
      </>
    );
  }
}

export default AddMessageComponent;
