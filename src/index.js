import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./Pages/App";
import Contacts from "./Pages/Contacts";
import About from "./Pages/About";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path="/" component={App} />
      <Route exact path="/contacts" component={Contacts} />
      <Route exact path="/about" component={About} />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
