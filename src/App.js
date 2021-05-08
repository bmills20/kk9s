import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MenuNavBar from "./Components/MenuNavBar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import About from "./Pages/About";
import LandingServices from "./Pages/LandingServices"
import Approach from "./Pages/Approach";
import Partners from "./Pages/Partners";
import Contact from "./Pages/Contact";
import Main from "./index.js";
import homeStyles from "./Pages/Home.css";
import altPages from "./Pages/AltPages.css";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="page-container">
          <MenuNavBar />
          <main role="main" /*className="container"*/>
            <div>
              <Route exact path="/" component={Home}></Route>
            </div>
            <div>
              <Route exact path="/" component={About}></Route>
            </div>  
            <div>
              <Route exact path="/" component={LandingServices}></Route>
            </div>
            <div className="approach-wrapper">
              <Route exact path="/pages/approach" component={Approach}></Route>
            </div>
            <div className="partners-wrapper">
              <Route exact path="/pages/partners" component={Partners}></Route>
            </div>
            <div className="contact-wrapper">
              <Route exact path="/pages/contact" component={Contact}></Route>
            </div>
          </main>
{/*           <Footer />
 */}          </div>
      </BrowserRouter>
    );
  }
}
