import React from "react";
import { Modal, Button } from "react-bootstrap";

const DeleteModal = (props) => {
  return (
    <>
      <Modal show={props.show} size="lg" onHide={props.handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="text-center">
          Are you sure want to delete
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={props.deleteMessage}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteModal;
