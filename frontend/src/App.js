import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/AppNavBar";
import Home from "./components/pages/Home/Home";
import Rep from "./components/pages/RepProfile/Rep";
import Donor from "./components/pages/DonorProfile/Donor";
import credentials from './creds.json';
import * as firebase from 'firebase';

class App extends React.Component
{
  constructor(props) {
    super(props)
    if (!firebase.apps.length){
      firebase.initializeApp(credentials.firebaseConfig);
    }
  }

  render()
  {
    return (
      <Router>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/donor" component={Donor} />
        <Route path="/rep" component={Rep} />
      </Router>
    );
  }
}

export default App;
