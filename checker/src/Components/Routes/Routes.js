import React, { Component } from "react";
import { observer } from "mobx-react";
// npm i -S react-router-dom
import { Router, Switch, Route } from "react-router-dom";
import history from "../History/History";

import Login from "../Login/Login";

class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/selection" exact component={Login} />
        </Switch>
      </Router>
    );
  }
}
export default observer(Routes);
