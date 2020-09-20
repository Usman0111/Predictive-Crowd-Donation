import React from "react";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

const Totals = (props) => {
  const { totals } = props;
  return (
    <div>
      <Card className="mt-2 ml-3">
        <CardHeader>Totals</CardHeader>
        <CardBody>
          <CardText>Donations: ${totals.donations}</CardText>
          <CardText>Invested Donations: ${totals.invested}</CardText>
          <CardText>Returns: ${totals.returns}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Totals;
