import React, { useCallback, useEffect, useState } from "react";
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
import {isMobile} from 'react-device-detect';
import {HashLink} from 'react-router-hash-link';


const navbarInitial = {
  rest: { opacity: 0 },
  show: { opacity: 1}
};

const navbarReveal = {
  rest: { opacity: 0 },
  show: { opacity: 1,
    transition: { staggerChildren: 1 }}
};


export default function MenuNavBar(){
  // Defining react states
  const [showDropDown, setShowDropDown] = useState(false);
  const [navbarColor, setNavbarColor] = useState("navbar-transparent");
  const [selectedNav, setSelectedNav] = useState(0);
  const [hoveredNav, setHoveredNav] = useState(-1);
  const [width, setWidth] = useState(window.innerWidth);
  const [navbarClass, setNavbarClass] = useState("ml-auto horizontal-nav nav-links");
  const [navbarCollapse, setNavbarCollapse] = useState(false);
  const [underline, setUnderline] = useState(0);

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -100; 
    window.scrollTo({ top: yCoordinate + yOffset}); 
  }

  const smoothScrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -100; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  }


  let history = useHistory();
  var locations = useLocation();

  // dropdown hover handling
  const handleHover = (event) => {
    setShowDropDown(true);
  }

  const handleLeave = (event) => {
    setShowDropDown(false);
  }

  const updateNavbarColor = useCallback(event => {
    if(("/" === locations.pathname) || ("/pages/approach" === location.pathname)){
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
  });

  // Navbar link array
  const pageNames = [
    {
      title: "HOME",
      color: "#FFF",
      to: "/#homeDest",
      pkey: 0,
      offset: -100
    },
    {
      title: "ABOUT",
      color: "#FFF",
      to: "/#aboutDest",
      pkey: 1,
      offset: -100
    },
    {
      title: "APPROACH",
      color: "#FFF",
      to: "/pages/approach",
      pkey: 2,
      offset: -100
    },
    {
      title: "SERVICES",
      color: "#FFF",
      to: "/pages/services",
      pkey: 3,
      offset: -75
    },
    {
      title: "PARTNERS",
      color: "#FFF",
      to: "/pages/partners",
      pkey: 4,
      offset: -120
    },
    {
      title: "TESTIMONIALS",
      color: "#FFF",
      to: "/pages/testimonials",
      pkey: 5,
      offset: -75
    },
    {
      title: "CONTACT",
      color: "#FFF",
      to: "/pages/contact",
      pkey: 6,
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
  // Idk why this works with the browser variable but it does...
  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth >= 992){
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
  // Also uses JS passive event listeners to allow the page to not wait for the listeners for better performance

  // moved back to scroll listener because of react-scroll
  useEffect(() => {
    updateNavbarColor();

    // scroll listener
    window.addEventListener("scroll", updateNavbarColor, {capture: true, passive: true});

    // cleanup scroll listener on exit
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor, {capture: true, passive: true});
    };
  }, [updateNavbarColor]);

  // Change selected nav on reload
  useEffect(() => {
    const updateNavbarRefresh = () => {
      console.log("refresh")
      if("/" !== locations.pathname && locations.pathname.length > 2){
        const currentPage = locations.pathname.split("/")[2].toUpperCase();
        (currentPage === "HOME") ? setSelectedNav(0)
          : (currentPage === "APPROACH") ? setSelectedNav(2)
          : (currentPage === "SERVICES") ? setSelectedNav(3)
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
        title === "ABOUT" ?
        <HashLink
          to={to} // which page to scroll to 
          className={"nav-link"}
          scroll={el => smoothScrollWithOffset(el)}
          onClick={(pkey) => {
            setNavbarCollapse(false); // collapse navbar

            // set up navbar transparency listeners
            if((pkey !== 0 && pkey !== 1 && pkey !==2 ) && navbarColor === "navbar-transparent"){
              setNavbarColor("");
            }
            else if((pkey === 0 || pkey === 1 || pkey === 2 ) && navbarColor === ""){
              setNavbarColor("navbar-transparent");
            }
          }}
          >
            <a className="dom-link">
            {title}
            </a>
        </HashLink>
        :
        <HashLink
          to={to} // which page to scroll to 
          className={"nav-link"}
          scroll={el => scrollWithOffset(el)}
          onClick={(pkey) => {
            setNavbarCollapse(false); // collapse navbar
            window.scrollTo(0,0);
            // set up navbar transparency listeners
            if((pkey !== 0 && pkey !== 1 && pkey!==2 ) && navbarColor === "navbar-transparent"){
              setNavbarColor("");
            }
            else if((pkey === 0 || pkey === 1 || pkey === 2 ) && navbarColor === ""){
              setNavbarColor("navbar-transparent");
            }
          }}
          >
            <a className="dom-link">
            {title}
            </a>
        </HashLink>
          ))}
            </ol>
            
          </AnimateSharedLayout>
        </motion.Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
