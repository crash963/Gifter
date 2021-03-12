import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Welcome from "./pages/welcome/welcome";
import { Route, Router, Switch } from "react-router";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/welcome" children={<Welcome />} />
        </Switch>
    </Router>,
    document.getElementById("app")
);
