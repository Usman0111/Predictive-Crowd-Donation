import React, { useState } from "react";
import Piechart from "../../Piechart";
import { Container, Row, Col } from "reactstrap";
import Totals from "../../Totals";
import Linegraph from "../../Linegraph";
import OrganizationList from "./OrganizationList";
import Bargraph from "../../Bargraph";

const Profile = (props) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const { data, setData } = props;

  const getData = () => {
    let labels = [];
    let vdata = [];
    data.joinedOrgs.filter((org) => {
      const joined = org.donors.find((donor) => donor.name === data.name);
      if (joined) {
        labels.push(org.name);
        vdata.push(joined.amount);
      }
    });
    return { labels, vdata };
  };

  return (
    <Container className="m-0 p-0 ml-2">
      <div>
        <Row>
          <Col className="p-0" xs="4">
            <Totals totals={data.totals} />
            <OrganizationList toggle={toggle} data={data} setData={setData} />
          </Col>
          <Col className="p-0" xs="7">
            <Container>
              <Piechart title="Organizations Donated To" getData={getData} />
              <div className="mt-3">
                <Bargraph title="Amounts Donated to Each" getData={getData} />
              </div>
            </Container>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Profile;
