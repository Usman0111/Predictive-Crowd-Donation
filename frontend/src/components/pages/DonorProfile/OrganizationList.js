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
} from "reactstrap";
import JoinedOrg from "./JoinedOrg";

const OrganizationList = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const { data, setData } = props;

  const increaseAmount = (org, amount) => {
    const curDonor = org.donors.find((donor) => donor.name === data.name);
    let newDonors;
    if (curDonor) {
      newDonors = org.donors.map((donor) =>
        donor.name === data.name
          ? { ...donor, amount: donor.amount + amount }
          : donor
      );
    } else {
      newDonors = [...org.donors, { name: data.name, amount }];
    }

    return { ...org, donors: newDonors };
  };

  const donate = (dOrg, amount) => {
    setData({
      ...data,
      totals: { ...data.totals, donations: data.totals.donations + amount },
      joinedOrgs: data.joinedOrgs.map((jOrg) => {
        if (jOrg.name === dOrg.name) {
          return increaseAmount(dOrg, amount);
        } else {
          return jOrg;
        }
      }),
    });
  };

  return (
    <Card className="mt-2 ml-3">
      <CardHeader>Organizations Joined</CardHeader>
      <CardBody className="p-0">
        <ListGroup>
          {data.joinedOrgs.map((org) => {
            return (
              <JoinedOrg key={org.name} org={org} data={data} donate={donate} />
            );
          })}
        </ListGroup>
      </CardBody>
    </Card>
  );
};

export default OrganizationList;
