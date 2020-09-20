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
  Table,
  Input,
} from "reactstrap";
import Linegraph from "../../Linegraph";
import Bargraph from "../../Bargraph";

const Invest = (props) => {
  const { data, setData } = props;
  const [predicted, setPredicted] = useState(false);
  const [ticker, setTicker] = useState("");

  const getInvestmentrData = () => {
    let labels = [];
    let vdata = [];
    data.investments.forEach((donor) => {
      labels.push(donor.stock);
      vdata.push(donor.amount);
    });
    return { labels, vdata };
  };

  const getReturnData = () => {
    let labels = [];
    let vdata = [];
    data.investments.forEach((donor) => {
      labels.push(donor.stock);
      vdata.push(donor.return);
    });
    return { labels, vdata };
  };

  return (
    <Container className="m-0 p-0 ml-2">
      <div>
        <Row>
          <Col className="p-0 pl-2 ml-2 mt-2" xs="4">
            <h5>Stocks</h5>
            <Card>
              <Table>
                <thead>
                  <tr>
                    <th>Ticker</th>
                    <th>Amount Invested</th>
                    <th>Returns</th>
                  </tr>
                </thead>
                <tbody>
                  {data.investments.map((i) => (
                    <tr key={i.stock}>
                      <td>{i.stock}</td>
                      <td>{i.amount}</td>
                      <td>{i.return}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card>

            <Card className="mt-4">
              <CardHeader>ML Powered Stock Price Predictor</CardHeader>
              <CardBody>
                <CardTitle>Enter the stock ticker</CardTitle>
                {!predicted ? (
                  <Input
                    placeholder="For example: MSFT"
                    className="mb-2"
                    onChange={(e) => setTicker(e.target.value)}
                  />
                ) : (
                  <>
                    <CardText>
                      {ticker} price would go up be $100 by tomorrow
                    </CardText>
                    <CardText>Should I Invest? Yes</CardText>
                  </>
                )}

                <Button>Predict</Button>
              </CardBody>
            </Card>
          </Col>
          <Col className="p-0" xs="7">
            <Container>
              <Piechart
                title="Current Stock Portfolio"
                getData={getInvestmentrData}
              />
              <div className="mt-3">
                <Bargraph
                  title="Returns on Stock Investment"
                  getData={getReturnData}
                />
              </div>
            </Container>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Invest;
