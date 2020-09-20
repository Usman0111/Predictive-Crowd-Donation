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
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
  Button,
  DropdownToggle,
} from "reactstrap";

const JoinedOrg = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

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
          <Button className="ml-2" onClick={callDonate}>
            Donate
          </Button>
        </InputGroup>
      </Collapse>
    </ListGroupItem>
  );
};

export default JoinedOrg;
