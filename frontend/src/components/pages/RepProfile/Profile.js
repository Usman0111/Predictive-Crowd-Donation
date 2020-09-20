import React, { useState } from "react";
import Piechart from "../../Piechart";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
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
import Totals from "../../Totals";
import Linegraph from "../../Linegraph";
import Bargraph from "../../Bargraph";
import Doughnut from "../../Doughnut";

const Profile = (props) => {
  const { data, setData } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const getDonorData = () => {
    let labels = [];
    let vdata = [];
    data.donors.forEach((donor) => {
      labels.push(donor.name);
      vdata.push(donor.amount);
    });
    return { labels, vdata };
  };

  const generalInfo = () => {
    return (
      <Card className="mt-2 ml-3">
        <CardHeader>General Info</CardHeader>
        <CardBody>
          <CardText>Investment Lead: {data.leadName}</CardText>
          <CardText>Description: {data.description}</CardText>
          <CardText>Donors: {data.donors.length}</CardText>
          <Button onClick={toggle} outline>
            Payment Info
          </Button>
        </CardBody>
      </Card>
    );
  };

  return (
    <Container className="m-0 p-0 ml-2">
      <div>
        <Row>
          <Col className="p-0" xs="4">
            {generalInfo()}
            <Totals totals={data.totals} />
          </Col>
          <Col className="p-0" xs="7">
            <Container>
              {/* <Piechart
                title="Donors for this Organization"
                getData={getDonorData}
              /> */}
              <Doughnut
                title="Donors for this Organization"
                getData={getDonorData}
              />
              <div className="mt-3"></div>
            </Container>
          </Col>
        </Row>
      </div>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Credit Card: *********4456 Expiration: 10/27/2022 Name on Card:
          Muhammad Usman
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
};

export default Profile;
