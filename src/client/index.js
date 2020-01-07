import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Fire from "./components/department/Fire";
import Meteorological from "./components/department/Meteorological";
import Security from "./components/department/Security";
import Medical from "./components/department/Medicine";
import RedCross from "./components/department/Redcross";
import About from "./components/About";
import Profile from "./components/Profile";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/login" component={Login} />
      <Route path="/fire" component={Fire} />
      <Route path="/meteorogical" component={Meteorological} />
      <Route path="/security" component={Security} />
      <Route path="/redcross" component={RedCross} />
      <Route path="/medical" component={Medical} />
      <Route path="/About" component={About} />
      <Route path="/profile" component={Profile} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
