import React, { useState } from "react";
import pic from "../../../assets/pic.svg";
import { Container, Row, Col } from "reactstrap";
import Login from "./Login";
import Register from "./Register";

const Home = () => {
  const [onLogin, setOnLogin] = useState(true);

  return (
    <Container className="mt-4" fluid>
      <Row>
        <Col xs="7">
          <h1>Welcome to Predictive Crowd Donations</h1>
          <img src={pic} alt="illustration" height="600" width="600" />
        </Col>
        <Col xs="5">
          <div style={{ marginTop: "40px" }}>
            {onLogin ? (
              <Login onLogin={onLogin} setOnLogin={setOnLogin} />
            ) : (
              <Register onLogin={onLogin} setOnLogin={setOnLogin} />
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
