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
} from "reactstrap";
import Totals from "../../Totals";
import Bargraph from "../../Bargraph";

const OrgDetails = (props) => {
  const { org, setSelected, data, setData } = props;
  const [joined, setJoined] = useState(false);

  const generalInfo = () => {
    return (
      <Card className="mt-2 ml-3">
        <CardHeader>
          <strong>{org.name}</strong>
        </CardHeader>
        <CardBody>
          <CardText>Investment Lead: {org.leadName}</CardText>
          <CardText>Description: {org.description}</CardText>
          <CardText>Donors: {org.donors.length}</CardText>
        </CardBody>
      </Card>
    );
  };
  const getDonorData = () => {
    let labels = [];
    let vdata = [];
    org.donors.forEach((donor) => {
      labels.push(donor.name);
      vdata.push(donor.amount);
    });
    return { labels, vdata };
  };

  const getInvestmentData = () => {
    let labels = [];
    let vdata = [];
    org.investments.forEach((donor) => {
      labels.push(donor.stock);
      vdata.push(donor.amount);
    });
    return { labels, vdata };
  };

  const extractTotals = (org) => {
    const donations = org.donors.reduce((a, b) => a.amount + b.amount);
    const invested = org.investments.reduce((a, b) => a.amount + b.amount);
    const returns = org.investments.reduce((a, b) => a.return + b.return);

    return {
      donations,
      invested,
      returns,
    };
  };

  const joinOrg = (org) => {
    let curJoinedOrgs = data.joinedOrgs;
    curJoinedOrgs.push(org);
    setData({
      ...data,
      joinedOrgs: curJoinedOrgs,
      otherOrgs: data.otherOrgs.filter((cOrg) => cOrg.name !== org.name),
    });
    setJoined(true);
  };
  return (
    <Container className="m-0 " fluid>
      <div class="d-flex justify-content-between">
        <div class="p-2">
          {!joined ? (
            <Button
              outline
              color="primary"
              className="mb-2"
              onClick={() => joinOrg(org)}
            >
              Join
            </Button>
          ) : (
            <Button color="primary" className="mb-2" disabled>
              Joined
            </Button>
          )}
        </div>
        <div class="p-2">
          <Button className="mb-2" onClick={() => setSelected()}>
            Back
          </Button>
        </div>
      </div>

      <h3 className="pt-2 border-top"></h3>
      <Row>
        <Col className="p-0" xs="5">
          {generalInfo()}
          <Bargraph
            title="Donors For This Organization"
            getData={getDonorData}
          />
        </Col>
        <Col className="p-0" xs="5">
          <Totals totals={extractTotals(org)} />
          <Piechart
            title="Organization's Porfolio"
            getData={getInvestmentData}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default OrgDetails;
