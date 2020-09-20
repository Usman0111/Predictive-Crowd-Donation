import React, { useState } from "react";
import Menu from "./Menu";
import { Container, Row, Col } from "reactstrap";
import Profile from "./Profile";
import Browse from "./Browse";

const Donor = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const [data, setData] = useState({
    name: "Donor 1",
    totals: {
      donations: 1000,
      invested: 1000,
      returns: 100,
    },
    joinedOrgs: [
      {
        name: "Org 1",
        leadName: "Lead 1",
        description: "Somehting about org",
        donors: [{ name: "Donor 1", amount: 1000 }],
        investments: [
          { stock: "TSLA", amount: 2000, return: 100 },
          { stock: "AMZN", amount: 3000, return: 200 },
        ],
      },
      {
        name: "Org 2",
        leadName: "Lead 2",
        description: "Somehting about org",
        donors: [{ name: "Donor 1", amount: 3000 }],
        investments: [
          { stock: "TSLA", amount: 2000, return: 100 },
          { stock: "AMZN", amount: 3000, return: 200 },
        ],
      },
      {
        name: "Org 3",
        leadName: "Lead 2",
        description: "Somehting about org",
        donors: [{ name: "Donor 1", amount: 1000 }],
        investments: [
          { stock: "TSLA", amount: 2000, return: 100 },
          { stock: "AMZN", amount: 3000, return: 200 },
        ],
      },
    ],
    otherOrgs: [
      {
        name: "Org 2",
        leadName: "Lead 2",
        description:
          "Somehting about org, we use donations for a very good cauuse you can't even tell",
        donors: [
          { name: "Donor 1", amount: 375 },
          { name: "Donor 2", amount: 400 },
        ],
        investments: [
          { stock: "TSLA", amount: 2000, return: 100 },
          { stock: "AMZN", amount: 3000, return: 200 },
        ],
      },
      {
        name: "Org 3",
        leadName: "Lead 2",
        description:
          "Somehting about org, we use donations for a very good cauuse you can't even tell",
        donors: [
          { name: "Donor 1", amount: 375 },
          { name: "Donor 2", amount: 400 },
        ],
        investments: [
          { stock: "TSLA", amount: 2000, return: 100 },
          { stock: "AMZN", amount: 3000, return: 200 },
          { stock: "MSFT", amount: 6000, return: 200 },
        ],
      },
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
            <Browse data={data} setData={setData} />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Donor;
