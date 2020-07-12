import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import CreateIdea from "./pages/create-idea";
import ShowIdeas from "./pages/show-ideas";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/create-idea" component={CreateIdea} />
      <Route path="/show-ideas" component={ShowIdeas} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
