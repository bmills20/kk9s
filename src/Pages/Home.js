import "./Home.css";
import React, {useEffect, useState} from "react";
import { Container, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Element, Link } from "react-scroll";

const button = {
  rest: { scale: 0.1, opacity: 0 },
  show: { scale: 1, opacity: 1,
    transition: {delay: 4.5, duration:0.5} },
  hover: { scale: 1.1, opacity: 1,
    transition: {duration:0.2} },
  hoverExit: { scale: 1,
    transition: {duration:0.2} },
  pressed: {scale: 0.95 },
  reset: {scale: 1, opacity: 1}
};

const textLines = {
  rest: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0,
    transition: {duration:1}}
};

 const mainContent = {
  rest: { opacity: 0 },
  show: { opacity: 1,
    transition: {delay: 2, staggerChildren: 3}}
};

export default function Home() {
  var buttonControls = useAnimation();
  const [buttonHovered, setButtonHovered] = useState(false);
  var [buttonRef, buttonInView] = useInView({threshold: 1.0, delay: 100, trackVisibility: false});

  useEffect(() => {
    const keepAnimations = () => {
      if(window.oldURL) {
        console.log("old",window.oldURL);
      }
      else {
        console.log("nope");
      }
    }

    window.addEventListener("hashchange", keepAnimations);
  });

  // listener for keeping persistent animations on home page
  // when user comes back to home after visiting another page


  // Upon hovering over get started button, use async and promises to begin
  // the animation variant sequence
  useEffect(() => {
    const sequence = async () => {        
        await buttonControls.start(button.show);
    };
    sequence();
  }, [buttonControls, buttonHovered])



  return (
  <Element name="homeTop" id="homeTop">

    <div name="home" className="splash">
      <div className="main-content">
      <motion.div variants={mainContent} initial="rest" animate="show">
        <motion.h1 
          className="text-center"
          variants={textLines}
          >
            Getting a new puppy or dog?
        </motion.h1>
        <motion.h2 
          className="text-center"
          variants={textLines}
          >
            ...or have a stubborn one and need help?
        </motion.h2>

      </motion.div>
          <motion.button
            className="splashButton mx-auto text-center"
            variants={button} 
            initial={"rest"}
            animate={buttonControls}
            onHoverStart={() => buttonControls.start(button.hover)}
            onHoverEnd={() =>
              buttonControls.start(button.hoverExit) 
            }

            >
          
          GET STARTED</motion.button>
      </div>
    </div>

  </Element>
  );
}
