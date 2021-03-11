import React, { useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
  Collapse,
} from "react-bootstrap";
import { CSSTransition } from 'react-transition-group';
import "./MenuNavBar.css";
import classnames from "classnames";

class SubMenu extends React.Component{
  render(){
    return(
      <React.Fragment>
        <NavDropdown.Item href="/page1">Page 1</NavDropdown.Item>
        <NavDropdown.Item href="/page2">Page 2</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/page1">Page 3</NavDropdown.Item>
      </React.Fragment>
    )
  }
}

export default class MenuNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropDown: false,
      navbarColor: "navbar-transparent"
    }
  }

  // Dropdown state events allows for hover instead of click on navbar dropdowns

  handleHover = (event) => {
    this.setState({ showDropDown: true });
  }

  handleLeave = (event) => {
    this.setState({ showDropDown: false });
  }

  IndexNavbar() {
    //const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
    //const [navbarCollapse, setNavbarCollapse] = React.useState(false);
  
    /*const toggleNavbarCollapse = () => {
      setNavbarCollapse(!navbarCollapse);
      document.documentElement.classList.toggle("nav-open");
    };*/
  
    React.useEffect(() => {
      const updateNavbarColor = () => {
        if (
          document.documentElement.scrollTop > 299 ||
          document.body.scrollTop > 299
        ) {
          console.log("above");
          //setNavbarColor("");
        } else if (
          document.documentElement.scrollTop < 300 ||
          document.body.scrollTop < 300
        ) {
          console.log("below");
          //setNavbarColor("navbar-transparent");
        }
      };
  
      window.addEventListener("scroll", updateNavbarColor);
  
      return function cleanup() {
        window.removeEventListener("scroll", updateNavbarColor);
        };
    });
  }

  render(){
    return (
      <Navbar fixed="top" variant="dark" expand="lg" className={classnames("navbar", this.navbarColor)}>
        <img src="kinga-white.png" className="siteLogo"/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Page 0</Nav.Link>
            <Nav.Link href="/page1">Page 1</Nav.Link>
            <Nav.Link href="/page2">Page 2</Nav.Link>
              <NavDropdown show={this.state.showDropDown} onMouseLeave={this.handleLeave} onMouseEnter={this.handleHover} title="Admin" id="basic-nav-dropdown"> 
                <div className="dropSeparator">  
                  <NavDropdown.Item href="/page1">Page 1</NavDropdown.Item>
                  <NavDropdown.Item href="/page2">Page 2</NavDropdown.Item>
                  <NavDropdown.Item href="/page1">Page 3</NavDropdown.Item>
                </div>
              </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
