import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

export default function PrivacyPolicy({ visible, toggle }) {
  return (
    <Modal isOpen={visible} toggle={toggle}>
      <ModalHeader toggle={toggle}>Privacy Policy</ModalHeader>
      <ModalBody>
        <p>
          This Privacy Policy describes the practices of Meta Phil-Tech
          Corporation regarding the collection, use, disclosure and disposal of
          data collected from every client in the usual business transaction.
        </p>
        <p>
          This information is being provided in compliance with the Data Privacy
          Act of 2012 or also knows as Republic Act 10173 and its implementing
          Rules and Regulations.
        </p>
        <p>
          The company is committed to protecting the privacy and confidentiality
          of the personal client/s information, board, personnel, and staff. On
          the other hand, every client is also bears responsibility for
          complying with this Policy in the fulfillment of their respective
          responsibility.
        </p>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}
