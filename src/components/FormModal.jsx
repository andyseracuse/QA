import React from 'react';
import { Modal } from 'react-bootstrap';
import FormInputs from './FormModInputs';

function FormModal({ show, onHide }) {
  if (show) {
    return (
      <Modal show={show} onHide={onHide}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Product QA</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <FormInputs onHide={onHide} />
          </Modal.Body>
          <Modal.Footer />
        </Modal.Dialog>
      </Modal>
    );
  }
  return <div />;
}

export default FormModal;