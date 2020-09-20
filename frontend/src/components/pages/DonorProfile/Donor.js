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
    name: "Muhammad",
    totals: {
      donations: 1000,
      invested: 1000,
      returns: 100,
    },
    joinedOrgs: [
      {
        name: "Feeding America",
        leadName: "George",
        description:
          "Covid-19 Response Fund that is helping to ensure food banks across the country can feed those in need right now, including the children who rely on school meals to eat.",
        donors: [{ name: "Muhammad", amount: 500 }],
        investments: [
          { stock: "TSLA", amount: 200, return: 100 },
          { stock: "AMZN", amount: 300, return: 200 },
        ],
      },
      {
        name: "American Humane",
        leadName: "Morales",
        description:
          "Your donations help animals find shelter, urgent care, and forever homes. The organization also focuses on promoting bonds between animals and humans.",
        donors: [
          { name: "Roberts", amount: 1000 },
          { name: "Muhammad", amount: 1000 },
        ],
        investments: [
          { stock: "TSLA", amount: 200, return: 100 },
          { stock: "AMZN", amount: 300, return: 200 },
          { stock: "MSFT", amount: 200, return: 300 },
          { stock: "APPL", amount: 300, return: 200 },
        ],
      },
      {
        name: "The Alzheimer’s Association",
        leadName: "Herrera",
        description:
          " Donations provide care to those already affected by Alzheimer’s and connects them with support groups. The organization also funds research and clinical trials.",
        donors: [
          { name: "Adams", amount: 1000 },
          { name: "Muhammad", amount: 1000 },
        ],
        investments: [
          { stock: "APPL", amount: 200, return: 100 },
          { stock: "AMZN", amount: 300, return: 200 },
          { stock: "GOOG", amount: 200, return: 400 },
        ],
      },
    ],
    otherOrgs: [
      {
        name: " Prevent Child Abuse America",
        leadName: "Lead 2",
        description:
          "Prevent Child Abuse America uses donations to run parent education programs and to advocate for federal policies that promote children’s health and safety.",
        donors: [
          { name: "Roberts", amount: 400 },
          { name: "George", amount: 100 },
        ],
        investments: [
          { stock: "TSLA", amount: 200, return: 100 },
          { stock: "AMZN", amount: 300, return: 200 },
        ],
      },
      {
        name: "Covid Vaccine Development",
        leadName: "Lead 2",
        description:
          "Develope a vaccine for coronavirus and deliver it to thousands across the US. Your donations would go towards fixing the biggest problem of the world today",
        donors: [
          { name: "Nathan", amount: 400 },
          { name: "John", amount: 700 },
        ],
        investments: [
          { stock: "TSLA", amount: 200, return: 100 },
          { stock: "AMZN", amount: 300, return: 200 },
          { stock: "MSFT", amount: 600, return: 200 },
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
