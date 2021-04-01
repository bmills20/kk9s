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
import { motion, AnimateSharedLayout } from "framer-motion";
import "./MenuNavBar.css";
import classnames from "classnames";
import kingaWhite from "./kinga-white.png"

const navbarInitial = {
  rest: { opacity: 0 },
  show: { opacity: 1}
};

const navbarReveal = {
  rest: { opacity: 0 },
  show: { opacity: 1,
    transition: { staggerChildren: 1 }}
};

const navbarHover = {
  rest: { fontWeight: 400, textShadow: "0px 0px 0px #000000" },
  show: { fontWeight: 900, textShadow: "3px 3px 6px #000000",
    transition: {duration: 0.3}}
};

function MenuNavBar(){
  // Defining react states
  const [showDropDown, setShowDropDown] = useState(false);
  const [navbarColor, setNavbarColor] = useState("navbar-transparent");
  const [selectedNav, setSelectedNav] = useState(0);
  const [hoveredNav, setHoveredNav] = useState(-1);

  // dropdown hover handling
  const handleHover = (event) => {
    setShowDropDown(true);
  }

  const handleLeave = (event) => {
    setShowDropDown(false);
  }

  // Navbar link array
  const pageNames = [
    {
      title: "ABOUT",
      color: "#FFF"
    },
    {
      title: "APPROACH",
      color: "#FFF"
    },
    {
      title: "SERVICES",
      color: "#FFF"
    },
    {
      title: "PARTNERS",
      color: "#FFF"
    },
    {
      title: "CONTACT",
      color: "#FFF"
    }
  ];

  // Change from transparent to color once you scroll past
  // a certain y coord

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

    // scroll listener
    window.addEventListener("scroll", updateNavbarColor);

    // cleanup scroll listener on exit
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  return (
      <Navbar fixed="top" variant="dark" expand="lg" className={classnames("navbar", navbarColor)}>
        <img src={kingaWhite} className="siteLogo"/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <motion.Nav className="ml-auto horizontal-nav">
            <AnimateSharedLayout>
              <ol className="ml-auto horizontal-nav nav-links">
                {
                  pageNames.map(({title, color}, i) => (
                    <motion.li
                      animate
                      key = {i}
                      className={"nav-link"}
                      variants={navbarHover}
                      initial="rest"
                      whileHover="show"
                      onTap={() => {
                        setSelectedNav(i);
                      }}
                    >
                      {/* If the mapped nav-link is the currently
                          selected link, apply the underline class to it */}

                      {i === selectedNav && (
                        <motion.div
                          layoutId="underline"
                          className="underline"
                          style={{ backgroundColor: color }}
                        />
                      )}
                    {title}
                    </motion.li>
                  ))
                }
              </ol>
            </AnimateSharedLayout>
            
            {/* <Nav.Link href="/">ABOUT</Nav.Link>
            <Nav.Link href="/page1">APPROACH</Nav.Link>
            <Nav.Link href="/page2">SERVICES</Nav.Link>
            <Nav.Link href="/page2">PARTNERS</Nav.Link>
            <Nav.Link href="/page2">CONTACT</Nav.Link> 
              <NavDropdown show={showDropDown} onMouseLeave={handleLeave} onMouseEnter={handleHover} title="ADMIN" id="basic-nav-dropdown"> 
                <div className="dropSeparator">  
                  <NavDropdown.Item href="/page1">Page 1</NavDropdown.Item>
                  <NavDropdown.Item href="/page2">Page 2</NavDropdown.Item>
                  <NavDropdown.Item href="/page1">Page 3</NavDropdown.Item>
                </div>
              </NavDropdown>*/}
          </motion.Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}

export default MenuNavBar;