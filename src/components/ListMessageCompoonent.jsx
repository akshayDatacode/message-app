import React from "react";

const ListMessageComponent = (props) => {
  return (
    <>
      <h3 className="text-center mb-3">Messages List </h3>
      {props.messages.map((item) => (
        <div>
          <div className="card border-primary shadow mb-2">
            <div className="card-header m-0 pl-3 pb-1 pt-1">
              Sender : {item.sender}
            </div>
            <div className="card-body m-0 pl-3 pb-0 pt-2">
              {" "}
              <p>Body : {item.body}</p>{" "}
            </div>
            {props.isOnline && (
              <div className="card-header text-right m-0 pl-4 pb-2 bg-white">
                <button
                  type="reset"
                  className="btn btn-danger ml-5 p-1"
                  onClick={() => props.handleDelete(item._id)}
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
};

export default ListMessageComponent;
