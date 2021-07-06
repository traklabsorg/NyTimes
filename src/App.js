import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home } from "./Home";
import ArticleDetails from "./component/Common/ArticleDetails";
import { NotFound } from "./404";
// import "./App.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/details/:id" component={ArticleDetails} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
