import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages";

const App = (props) => {
  return (
    <Router>
      <Home images={props.images} />
    </Router>
  );
};

export default App;
