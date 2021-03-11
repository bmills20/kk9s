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

function MenuNavBar(){
  const [showDropDown, setShowDropDown] = useState(false);
  const [navbarColor, setNavbarColor] = useState("navbar-transparent");

  const handleHover = (event) => {
    setShowDropDown(true);
  }

  const handleLeave = (event) => {
    setShowDropDown(false);
  }

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  return (
    <Navbar fixed="top" variant="dark" expand="lg" className={classnames("navbar", navbarColor)}>
      <img src="kinga-white.png" className="siteLogo"/>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Page 0</Nav.Link>
          <Nav.Link href="/page1">Page 1</Nav.Link>
          <Nav.Link href="/page2">Page 2</Nav.Link>
            <NavDropdown show={showDropDown} onMouseLeave={handleLeave} onMouseEnter={handleHover} title="Admin" id="basic-nav-dropdown"> 
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

export default MenuNavBar;