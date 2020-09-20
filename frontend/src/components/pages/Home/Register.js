import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Card, CardBody, CardTitle } from "reactstrap";
import DonorForm from "./DonorForm";
import OrgRepForm from "./OrgRepForm";

const Register = (props) => {
  const [isDonor, setIsDonor] = useState(true);
  const [state, useState] = useState({
    name: "",
    email: "",
    password: "",
  })

  const toggleForm = () => {
    setIsDonor(!isDonor);
  };
  return (
    <Card className="w-75">
      <CardBody>
        <FormGroup >
          <Label for="exampleSelect">Register as a</Label>
          <Input
            type="select"
            name="select"
            id="exampleSelect"
            onChange={toggleForm}
          >
            <option>Donor</option>
            <option>Organization Representative</option>
          </Input>
        </FormGroup>
        {isDonor ? <DonorForm /> : <OrgRepForm />}
      </CardBody>
    </Card>
  );
};

export default Register;
