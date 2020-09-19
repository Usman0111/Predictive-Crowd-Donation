import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/AppNavBar";
import Home from "./components/pages/Home/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={Home} />
    </Router>
  );
}

export default App;
