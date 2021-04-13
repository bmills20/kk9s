import React, { useEffect, useState } from "react";
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
import { BrowserRouter, Route, useHistory, Link as DomLink } from "react-router-dom";
import "./MenuNavBar.css";
import classnames from "classnames";
import kingaWhite from "./kinga-white.png";
import * as Scroll from "react-scroll";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


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
  let history = useHistory();

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
      title: "HOME",
      color: "#FFF",
      to: "homeTop"
    },
    {
      title: "ABOUT",
      color: "#FFF",
      to: "aboutDest"
    },
    {
      title: "APPROACH",
      color: "#FFF",
      to: ""
    },
    {
      title: "SERVICES",
      color: "#FFF",
      to: ""
    },
    {
      title: "PARTNERS",
      color: "#FFF",
      to: ""
    },
    {
      title: "CONTACT",
      color: "#FFF",
      to: ""
    }
  ];



  // react-scroll events
  useEffect(() => {
    Events.scrollEvent.register('begin', function(to, element) {
      console.log('begin');
    });
    Events.scrollEvent.register('end', function(to, element) {
      console.log("end");
    });

    scrollSpy.update();
  
  }, []) // passing an empty array as second argument triggers the callback in 
        //useEffect only after the initial render thus replicating `componentDidMount` lifecycle behavior
    
  useEffect(() => {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
}, []) //componentWillUnmount

  // Change from transparent to color once you scroll past
  // a certain y coord

  /* React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        ["/kk9s/pages/approach", "/kk9s/pages/services", "/kk9s/pages/partners", "/kk9s/pages/contact"]
          .includes(window.location.pathname)
    ) { 
        setNavbarColor("");
    }
      else if (
        ["/kk9s/", ""]
          .includes(window.location.pathname)
      ) {
          setNavbarColor("navbar-transparent");
      }
      else if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299

      ) { setNavbarColor("");

      } else if (
          document.documentElement.scrollTop < 300 ||
          document.body.scrollTop < 300

      ) { setNavbarColor("navbar-transparent");

      } 
    };

    // scroll listener
    window.addEventListener("scroll", updateNavbarColor);

    // click listener for color changes
    window.addEventListener("click", updateNavbarColor);

    // cleanup scroll listener on exit
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  }); */

  return (
      <Navbar fixed="top" variant="dark" expand="lg" className={classnames("navbar", navbarColor)}>
        <DomLink className="dom-link" to={"/"}> 
          <img src={kingaWhite} className="siteLogo"/>
        </DomLink> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <motion.Nav className="ml-auto horizontal-nav">
            <AnimateSharedLayout>
              <ol className="ml-auto horizontal-nav nav-links">
                {
                  pageNames.map(({title, color, to}, i) => (
                    
                      <Link
                        to={to} // which page to scroll to 
                        smooth={true} // define scrolling behavior
                        duration={500} //control scrolling speed 1000 = 1s
                        offset={-50}
                        spy={true}
                        >
                        <motion.li
                          animate
                          key = {i}
                          className={"nav-link"}
                          variants={navbarHover}
                          initial="rest"
                          whileHover="show"
                          onTap={() => {
                            setSelectedNav(i);
                            // History tracker for retaining animations
                            history.push((title==="HOME") ? "/" 
                            : (title==="ABOUT") ? ""
                            : `/pages/${title.toLocaleLowerCase()}`);
                            () => updateNavbarColor

                            // If user clicks on anything other than the homepage or the about page
                            // Set the navbar color to blue (take away transparent class)
                            if((i !== 0 && i !== 1) && navbarColor === "navbar-transparent"){
                              setNavbarColor("");
                            }
                            else if((i === 0 || i === 1) && navbarColor === ""){
                              setNavbarColor("navbar-transparent");
                            }
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
                        <DomLink className="dom-link" to={
                            (title==="HOME") ? "/" 
                          : (title==="ABOUT") ? "/"
                          : `/pages/${title.toLocaleLowerCase()}`}>
                          {title}
                        </DomLink>
                        
                        </motion.li>
                      </Link>
                  ))
                }
              </ol>
            </AnimateSharedLayout>
          </motion.Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}

export default MenuNavBar;