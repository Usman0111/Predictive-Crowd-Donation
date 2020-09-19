import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const DonorForm = () => {
  return (
    <Form>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="exampleName" className="mr-sm-2">
          Name
        </Label>
        <Input type="text" name="name" id="exampleName" placeholder="batman" />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2">
        <Label for="exampleEmail" className="mr-sm-2">
          Email
        </Label>
        <Input
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="something@idk.cool"
        />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2">
        <Label for="examplePassword" className="mr-sm-2">
          Password
        </Label>
        <Input
          type="password"
          name="password"
          id="examplePassword"
          placeholder="don't tell!"
        />
      </FormGroup>
      <Button className="mt-2">Register</Button>
    </Form>
  );
};

export default DonorForm;
