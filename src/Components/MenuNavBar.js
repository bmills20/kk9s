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
import { BrowserRouter, Route, useHistory, useLocation, Link as DomLink } from "react-router-dom";
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
  var locations = useLocation();

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
      to: "servicesDest"
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
    });
    Events.scrollEvent.register('end', function(to, element) {
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

  useEffect(() => {
    const updateNavbarColor = () => {
      console.log(location.pathname);
      if(("/" === locations.pathname) || ("/kk9s/pages/partners" === location.pathname) || ("/kk9s/pages/approach" === location.pathname)){
        if (
          document.documentElement.scrollTop > 299 ||
          document.body.scrollTop > 299
        ) { setNavbarColor("");

        } else if (
            document.documentElement.scrollTop < 300 ||
            document.body.scrollTop < 300
        ) {setNavbarColor("navbar-transparent");

      } 
    }
    else {
      setNavbarColor("");
    }
  };
  

    // scroll listener
    window.addEventListener("scroll", updateNavbarColor);

    // load listener
    window.addEventListener("load", updateNavbarColor);

    // cleanup scroll listener on exit
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  // Change selected nav on reload
  useEffect(() => {
    const updateNavbarRefresh = () => {
      if("/" !== locations.pathname){
        const currentPage = locations.pathname.split("/")[2].toUpperCase();
        (currentPage === "HOME") ? setSelectedNav(0)
          : (currentPage === "APPROACH") ? setSelectedNav(2)
          : (currentPage === "PARTNERS") ? setSelectedNav(4)
          : setSelectedNav(0)
      }
        
      
    }
    window.addEventListener("load", updateNavbarRefresh);
  }); 

  return (
      <Navbar fixed="top" variant="dark" expand="lg" className={navbarColor}>
        <DomLink className="dom-link" to={"/"} onClick={() => {setNavbarColor("navbar-transparent"); setSelectedNav(0); }}> 
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
                            : (title==="SERVICES") ? ""
                            : `/pages/${title.toLocaleLowerCase()}`);

                            // If user clicks on anything other than the homepage or the about page
                            // Set the navbar color to blue (take away transparent class)
                            
                            if((i !== 0 && i !== 1 && i!==2 ) && navbarColor === "navbar-transparent"){
                              setNavbarColor("");
                            }
                            else if((i === 0 || i === 1 || i === 2 ) && navbarColor === ""){
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
                          : (title==="SERVICES") ? "/"
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