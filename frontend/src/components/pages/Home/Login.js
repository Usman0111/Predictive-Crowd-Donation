import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Card, CardBody, CardTitle } from "reactstrap";

const Login = (props) => {
  const { onLogin, setOnLogin } = props;
  const switchToRegister = () => {
    setOnLogin(!onLogin);
  };

  return (
    <Card className="w-75">
      <CardBody>
        <Form>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
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
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
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
        </Form>
        <Button className="mt-2">Login</Button>
        <br />
        <Button className="p-0 mt-2" color="link" onClick={switchToRegister}>
          Don't have an accout? Signup Now!
        </Button>
      </CardBody>
    </Card>
  );
};

export default Login;
