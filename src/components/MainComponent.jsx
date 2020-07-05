import React, { Component } from "react";
import AddMessageComponent from "./AddMessageComponent";
import ListMessageComponent from "./ListMessageCompoonent";
import DeleteModal from "./DeleteModal";
import axios from "axios";

class MainComponent extends Component {
  state = {
    show: false,
    messageId: {},
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

  render() {
    return (
      <>
        <div className="row">
          <div className="col-md-6 p-5 border border-danger">
            <AddMessageComponent />
          </div>
          <div className="col-md-6 p-5 border border-dark">
            <ListMessageComponent handleDelete={this.handleDelete} />
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
