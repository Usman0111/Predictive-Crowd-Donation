import React, { useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  Input,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import OrgDetails from "./OrgDetails";
import OrgDeatails from "./OrgDetails";

const Browse = (props) => {
  const [selected, setSelected] = useState();

  const { data, setData } = props;

  const InfoCard = () => {
    return (
      <>
        <InputGroup>
          <Input placeholder="Type the name of the Organization..." />
          <InputGroupAddon addonType="append">
            <Button color="secondary">Search</Button>
          </InputGroupAddon>
        </InputGroup>
        <Row className="mt-4">
          {data.otherOrgs.map((org) => (
            <Col xs="3">
              <Card>
                <CardHeader>{org.name}</CardHeader>
                <CardBody>
                  <CardText>{org.description}</CardText>
                  <Button onClick={() => setSelected(org)}>More Info</Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </>
    );
  };

  return (
    <Container className="mt-4">
      {!selected ? (
        InfoCard()
      ) : (
        <OrgDetails
          data={data}
          setData={setData}
          setSelected={setSelected}
          org={selected}
        />
      )}
    </Container>
  );
};

export default Browse;
