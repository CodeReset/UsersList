import React from "react";

import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Authentification from "../pages/Authentification";
import TodoItemDetail from "../pages/TodoItemDetail";
import ErrorPage from "../pages/ErrorPage";

const Navigator = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/auth" component={Authentification} />
        <Route path="/detailinfo/:userId" component={TodoItemDetail} />
        <Route render={() => <ErrorPage />} />
      </Switch>
    </>
  );
};
export default Navigator;
