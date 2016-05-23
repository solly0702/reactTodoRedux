import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux"
import Bootstrap from "bootstrap/dist/css/bootstrap.css"
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import configureStore from "../redux/store"

import Layout from "../components/layout";

let initialState = {
  todos: [{
    id: 0,
    completed: false,
    text: "Initial todo for demo purpose"
  }],
  users: [{
    username: "Solly",
    id: 44
  }]
}

let store = configureStore(initialState)

const app = document.getElementById("app");

render(
  <Provider store={store}>
     <Router history={hashHistory}>
        <Route path="/" component={Layout}>
        </Route>
     </Router>
  </Provider>
,app)
