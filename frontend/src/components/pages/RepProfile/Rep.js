import React, { useState } from "react";
import Menu from "./Menu";
import { Container, Row, Col } from "reactstrap";
import Profile from "./Profile";
import Invest from "./Invest";

const Rep = () => {
  const [activeTab, setActiveTab] = useState("2");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const [data, setData] = useState({
    name: "Org 1",
    totals: {
      donations: 1000,
      invested: 1000,
      returns: 100,
    },
    leadName: "Lead 1",
    description: "Somehting about org",
    donors: [
      { name: "Donor 1", amount: 1000 },
      { name: "Donor 1", amount: 3000 },
      { name: "Donor 1", amount: 2000 },
      { name: "Donor 1", amount: 1000 },
      { name: "Donor 1", amount: 4000 },
    ],
    investments: [
      { stock: "TSLA", amount: 2000, return: 100 },
      { stock: "AMZN", amount: 3000, return: 200 },
    ],
  });

  return (
    <Container className="m-0 " fluid>
      <Row>
        <Col className="p-0" xs="2">
          <Menu activeTab={activeTab} toggle={toggle} name={data.name} />
        </Col>
        <Col className="p-0" xs="10">
          {activeTab === "1" ? (
            <Profile data={data} setData={setData} />
          ) : (
            <Invest data={data} setData={setData} />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Rep;
