import React from "react";
import ReactDOM from "react-dom";
import "bootswatch/dist/darkly/bootstrap.min.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./Pages/Home.css";
import { BrowserRouter, Switch, Route, Link as DomLink } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Approach from "./Pages/Approach";
import Contact from "./Pages/Contact";
import Partners from "./Pages/Partners";
import Services from "./Pages/Services";


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/approach" component={Approach}></Route>
    </Switch>
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export default Main;