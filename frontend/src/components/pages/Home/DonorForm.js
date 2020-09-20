import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const DonorForm = (props) => {
  return (
    <Form onSubmit={props.handleSubmit} >
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0"  >
        <Label for="exampleName" className="mr-sm-2">
          Name
        </Label>
        <Input type="text" name="name" id="exampleName" placeholder="batman" onChange={(e) => { props.setState({ ...props.state, name: e.target.value }) }} />
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
          onChange={(e) => { props.setState({ ...props.state, email: e.target.value }) }}
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
          onChange={(e) => { props.setState({ ...props.state, password: e.target.value }) }}
        />
      </FormGroup>
      <Button className="mt-2">Register</Button>
    </Form>
  );
};

export default DonorForm;
