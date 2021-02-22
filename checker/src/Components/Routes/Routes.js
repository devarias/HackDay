import React, { Component } from "react";
// npm i -S react-router-dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Selection from "../Selection/Selection";
import Login from "../Login/Login";
// import Checker from "../Checker/Checker";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/selection" exact component={Selection} />
        {/* <Route path="/checker" exact component={Checker} /> */}
        <Route path="/" exact component={Login} />
      </Switch>
    );
  }
}
export default Routes;
