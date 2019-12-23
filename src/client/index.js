import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Fire from "./components/Fire";
import Meteorological from "./components/Meteorological";
import Security from "./components/Security";
import Medical from "./components/Medicine";
import RedCross from "./components/Redcross";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/login" component={Login} />
      <Route path="/fire" component={Fire} />
      <Route path="/meteorological" component={Meteorological} />
      <Route path="/security" component={Security} />
      <Route path="/redcross" component={RedCross} />
      <Route path="/medical" component={Medical} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
