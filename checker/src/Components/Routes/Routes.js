import React, { Component } from "react";
// npm i -S react-router-dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Selection from "../Selection/Selection";
import Login from "../Login/Login";
import Menu from "../Menu/Menu";
import HowToUse from "../HowToUse/HowToUse";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={HowToUse} /> {/*Here is the change of route*/}
        <Route path="/selection" exact component={Selection} />
        <Route path="/checker" exact component={Menu} />
        <Route path="/login" exact component={Login} />
      </Switch>
    );
  }
}
export default Routes;
