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
  const [width, setWidth] = useState(window.innerWidth);
  const [navbarClass, setNavbarClass] = useState("ml-auto horizontal-nav nav-links");
  const [navbarCollapse, setNavbarCollapse] = useState(false);
  const [underline, setUnderline] = useState(0);

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
      to: "homeTop",
      offset: -100
    },
    {
      title: "ABOUT",
      color: "#FFF",
      to: "aboutDest",
      offset: -50
    },
    {
      title: "APPROACH",
      color: "#FFF",
      to: "approachTop",
      offset: -100
    },
    {
      title: "SERVICES",
      color: "#FFF",
      to: "servicesDest",
      offset: -75
    },
    {
      title: "PARTNERS",
      color: "#FFF",
      to: "partnersTop",
      offset: -120
    },
    {
      title: "TESTIMONIALS",
      color: "#FFF",
      to: "testimonialsTop",
      offset: -75
    },
    {
      title: "CONTACT",
      color: "#FFF",
      to: "contactTop",
      offset: 0
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
        // useEffect only after the initial render thus replicating `componentDidMount` lifecycle behavior
    
  useEffect(() => {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
}, []) //componentWillUnmount

  // Listen for window resize for desktop users expanding horizontally (mobile -> desktop navbar layout)
  useEffect(() => {
    const handleResize = () => {
      
      setWidth(window.innerWidth);
      if(width >= 992){
        setNavbarClass("ml-auto horizontal-nav nav-links");
      }
      else {
        setNavbarClass("ml-auto vertical-nav nav-links");
      }
    }
    window.addEventListener('resize', handleResize);
    // load listener for mobile or desktop navbar
    window.addEventListener('load', handleResize);

    return function cleanup() {
      window.removeEventListener('resize', handleResize);
    }
  }, [width]) // dimensions state callback to trigger re-render (effect runs when dimensions changes)

  // Change from transparent to color once you scroll past
  // a certain y coord

  useEffect(() => {
    const updateNavbarColor = () => {
      if(("/" === locations.pathname) || ("/kk9s/pages/approach" === location.pathname)){
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
      if("/" !== locations.pathname && locations.pathname.length > 2){
        const currentPage = locations.pathname.split("/")[2].toUpperCase();
        (currentPage === "HOME") ? setSelectedNav(0)
          : (currentPage === "APPROACH") ? setSelectedNav(2)
          : (currentPage === "PARTNERS") ? setSelectedNav(4)
          : (currentPage === "TESTIMONIALS") ? setSelectedNav(5)
          : setSelectedNav(0)
      }
        
      
    }
    window.addEventListener("load", updateNavbarRefresh);
  }); 

  return (
      <Navbar expanded={navbarCollapse} fixed="top" variant="dark" expand="lg" className={navbarColor}>
        <DomLink className="dom-link" to={"/"} onClick={() => {setNavbarColor("navbar-transparent"); setSelectedNav(0); }}> 
          <img src={kingaWhite} className="siteLogo"/>
        </DomLink> 
        <Navbar.Toggle onClick={() => setNavbarCollapse(navbarCollapse ? false : "expanded")} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <motion.Nav className="ml-auto horizontal-nav">
            <AnimateSharedLayout>
              <ol className={navbarClass}>
                {
                  pageNames.map(({title, color, to, offset}, i) => (
                      <Link
                        to={to} // which page to scroll to 
                        smooth={true} // define scrolling behavior
                        duration={500} //control scrolling speed 1000 = 1s
                        offset={offset}
                        spy={true}
                        key={"linkholder"+i.toString()}
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
                            setNavbarCollapse(false);
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

                        {(navbarClass === "ml-auto vertical-nav nav-links") ?
                        i === selectedNav
                        : i === selectedNav && (
                          <motion.div
                            layoutId="underline"
                            key={"underline_selected"}
                            className="underline"
                            style={{ backgroundColor: color }}
                          />
                        )}
                        <DomLink key={"my_dom_link"} className={(navbarClass === "ml-auto vertical-nav nav-links") ? ((i === selectedNav) ? ("dom-link mobile-underline") : ("dom-link")) : ("dom-link")} to={
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