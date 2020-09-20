import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Card, CardBody, CardTitle } from "reactstrap";
import DonorForm from "./DonorForm";
import OrgRepForm from "./OrgRepForm";
import * as firebase from 'firebase';

const Register = () => {
  const [isDonor, setIsDonor] = useState(true);
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    firebase.auth().createUserWithEmailAndPassword(state.email, state.password)
      .then(() => {
        /*let user = firebase.auth().currentUser.uid;
        const databaseRef = firebase.database().ref("users").child(user);
        databaseRef.set({
          "name": state.firstName + " " + state.lastName,
          "teammates": null,
          "room": null,
          "email": state.email,
        });*/
      })
      .catch(() => {
        console.log("Error");
      })
  }

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
        {isDonor ? <DonorForm state={state} setState={setState} handleSubmit={handleSubmit} /> : <OrgRepForm />}
      </CardBody>
    </Card>
  );
};

export default Register;
