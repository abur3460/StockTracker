import React from "react";
import "./scss/index.scss";
import * as animate from "animate.css";
import Landing from "./components/Landing";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Route exact path="/" component={Landing} />
      </div>
    </Router>
  );
}

export default App;
