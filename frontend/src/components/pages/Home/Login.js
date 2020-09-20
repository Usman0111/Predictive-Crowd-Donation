import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Card, CardBody, CardTitle } from "reactstrap";
import { useHistory } from "react-router-dom";
import * as firebase from 'firebase';

const Login = (props) => {
  const { onLogin, setOnLogin } = props;
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  })
  const switchToRegister = () => {
    setOnLogin(!onLogin);

  };
  let history = useHistory();
  const handleSubmit = () => {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(() => {
      console.log("Successful Sign in");
    })
    .catch((error) => {
      console.log("Error");
    })
  }

  const login = (e) => {
    e.preventDefault();
    history.push("/donor");
  };

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
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
                onChange={(e) => { setState({ email: e.target.value}) }}
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
                onChange={(e) => { setState({ password: e.target.value}) }}
              />
            </FormGroup>
          </Form>
          <Button className="mt-2" onClick={handleSubmit}>
            Login
          </Button>
          <br />
          <Button className="p-0 mt-2" color="link" onClick={switchToRegister}>
            Don't have an accout? Signup Now!
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Login;
