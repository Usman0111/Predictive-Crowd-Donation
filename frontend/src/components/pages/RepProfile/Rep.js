import React, { useState } from "react";
import Menu from "./Menu";
import { Container, Row, Col } from "reactstrap";
import Profile from "./Profile";
import Invest from "./Invest";

const Rep = () => {
  const [activeTab, setActiveTab] = useState("1");

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
    name: "Feeding America",
    leadName: "Syed",
    description:
      "Covid-19 Response Fund that is helping to ensure food banks across the country can feed those in need right now, including the children who rely on school meals to eat.",
    donors: [
      { name: "Syed", amount: 100 },
      { name: "Muhammad", amount: 200 },
      { name: "George", amount: 700 },
    ],
    investments: [
      { stock: "TSLA", amount: 2000, return: 100 },
      { stock: "AMZN", amount: 3000, return: 200 },
      { stock: "APPL", amount: 1000, return: 200 },
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
