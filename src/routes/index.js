import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home";
import Detail from "../Detail";

const Index = () => (
  <Switch>
    <Route exact path="/" render={(props) => <Home {...props} />} />
    <Route exact path="/home" render={(props) => <Home {...props} />} />
    <Route exact path="/detail" render={(props) => <Detail {...props} />} />
  </Switch>
);

export default Index;
