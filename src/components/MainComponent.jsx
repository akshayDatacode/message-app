import React, { Component } from "react";
import AddMessageComponent from "./AddMessageComponent";
import ListMessageComponent from "./ListMessageCompoonent";
import DeleteModal from "./DeleteModal";
import axios from "axios";

const add_message = "http://www.localhost:5000/api/add_message";
const get_messages = "http://www.localhost:5000/api/get_messages";

class MainComponent extends Component {
  intervalID;

  state = {
    show: false,
    messageId: {},
    isOnline: true,
    messageBuffer: [],
    messages: [],
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
      .get(get_messages)
      .then((result) => {
        this.setState({
          messages: result.data.message,
        });
        this.intervalID = setTimeout(this.getMessages, 1000);
      })
      .catch((error) =>
        this.setState({
          error,
        })
      );
  };

  addMessage = (message) => {
    if (this.state.isOnline) {
      axios
        .post(add_message, message)
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  handleBufferMessage = (messageBuffer) => {
    console.log("Main Buffer ", messageBuffer);
    messageBuffer.forEach((item) => {
      axios
        .post(add_message, item)
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  deleteMessage = () => {
    axios
      .delete(
        `http://www.localhost:5000/api/delete_message/${this.state.messageId}`,
        { params: this.state.messageId }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    this.setState({ show: false });
  };

  handleDelete = (id) => {
    console.log(id);
    this.setState({ show: true, messageId: id });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  // Toggle
  handleToggle = (status) => {
    this.setState({ isOnline: status });
  };

  render() {
    return (
      <>
        <div className="row">
          <div className="col-md-6 p-5 border border-danger">
            <AddMessageComponent
              isOnline={this.state.isOnline}
              handleToggle={this.handleToggle}
              addMessage={this.addMessage}
              handleBufferMessage={this.handleBufferMessage}
            />
          </div>
          <div className="col-md-6 p-5 border border-dark">
            <ListMessageComponent
              handleDelete={this.handleDelete}
              isOnline={this.state.isOnline}
              messages={this.state.messages}
            />
            <DeleteModal
              handleClose={this.handleClose}
              show={this.state.show}
              deleteMessage={this.deleteMessage}
            />
          </div>
        </div>
      </>
    );
  }
}

export default MainComponent;
