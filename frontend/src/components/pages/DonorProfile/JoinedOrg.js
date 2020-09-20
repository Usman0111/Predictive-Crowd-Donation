import React, { useState } from "react";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Collapse,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
  DropdownToggle,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

const JoinedOrg = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  const [dAmount, setDAmount] = useState(0);
  const { org, data, donate } = props;
  const getDonor = (org) => {
    const donor = org.donors.find((donor) => donor.name === data.name);
    if (donor) {
      return donor.amount;
    } else {
      return 0;
    }
  };

  const callDonate = () => {
    toggleModal();
    setDAmount(0);
    donate(org, dAmount);
  };

  return (
    <ListGroupItem action>
      <ListGroupItemHeading>
        <div class="d-flex justify-content-between">
          <div>{org.name}</div>
          <div>
            <Button className="ml-2" onClick={toggle}>
              {!isOpen ? "Open" : "Close"}
            </Button>
          </div>
        </div>
      </ListGroupItemHeading>
      <Collapse isOpen={isOpen}>
        <ListGroupItemText>
          Your Contributions: ${getDonor(org)}
        </ListGroupItemText>
        <InputGroup>
          <InputGroupAddon addonType="prepend">$</InputGroupAddon>
          <Input
            value={dAmount}
            placeholder="Amount"
            onChange={(e) => setDAmount(Number(e.target.value))}
          />
          <Button className="ml-2" onClick={toggleModal}>
            Donate
          </Button>
        </InputGroup>
      </Collapse>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Confirm Donation</ModalHeader>
        <ModalBody>
          Credit Card: *********4456 <br />
          Expiration: 10/27/2022 <br />
          Name on Card: Muhammad Usman
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={callDonate}>
            Confirm
          </Button>{" "}
          <Button color="secondary" onClick={toggleModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </ListGroupItem>
  );
};

export default JoinedOrg;
