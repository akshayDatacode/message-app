import React, { Component } from "react";
import BootstrapSwitchButton from "bootstrap-switch-button-react";

class AddMessageComponent extends Component {
  state = {};
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
                this.setState({ isUserAdmin: checked });
              }}
            />
          </div>
        </div>
        {/* <form>
          <center>
            <div className="form-group ">
              <label for="exampleInputEmail1" className="mr-4">
                Sender Name :
              </label>
              <input
                type="text"
                value={this.state.todo}
                onChange={(event) => {
                  // this.handleInputChangeBody(event);
                }}
              />
              {this.state.showError && (
                <h6 className="text-danger">Please Insert Todo Task</h6>
              )}
              <br />
              <label for="exampleInputEmail1" className="mr-4">
                Message Body :
              </label>
              <input
                type="textbox"
                value={this.state.todo}
                onChange={(event) => {
                  //this.handleInputChangeBody(event);
                }}
              />
            </div>
            <button
              className="btn btn-success text-center"
              onClick={this.handleSubmit}
            >
              Submit
            </button>
          </center>
        </form> */}

        <form>
          <div className="form-group row">
            <label for="inputEmail3" className="col-sm-2 col-form-label">
              Sender
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                placeholder="Sender Name"
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="inputPassword3" className="col-sm-2 col-form-label">
              Message
            </label>
            <div className="col-sm-10">
              <textarea
                type="password"
                className="form-control"
                placeholder="Message Body"
              />
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-10">
              <button type="submit" className="btn btn-primary">
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
