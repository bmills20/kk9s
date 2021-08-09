import "./Home.css";
import React, {useEffect, useState} from "react";
import { Container, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useHistory, useLocation } from "react-router-dom";
import { Element, Link } from "react-scroll";
import getSession from "./getSession";
import homeBackground from "../images/photoshoot2-flipped.png";

const button = {
  rest: { scale: 0.1, opacity: 0 },
  show: { scale: 1, opacity: 1,
    transition: {delay: 5, duration:0.5} },
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
    transition: {delay: 0, staggerChildren: 3}}
};

// Lazy load images for better performance
// React Suspense does not natively support data fetching yet

const useLazyImage = src => {
  const [bgSource, setBgSource] = useState(null);

  useEffect(() => {
    const isBackground = new Image();
    isBackground.src = homeBackground;
    isBackground.onload = () => setBgSource(homeBackground);
    
  }, [src]);

  return bgSource
};

const preloadsleep = () => {
  return new Promise(resolve => setTimeout(resolve, 1500));
}

export default function Home() {
  const showAnimation = getSession();
  var [questionLine, setQuestionLine] = useState(0);
  var [firstRun, setFirstRun] = useState(true);
  var buttonControls = useAnimation();
  var questionControls = useAnimation();
  const [buttonHovered, setButtonHovered] = useState(false);
  var [buttonRef, buttonInView] = useInView({threshold: 1.0, delay: 100, trackVisibility: false});
  const [mounted, setMounted] = useState(false);

  const loaded = useLazyImage(homeBackground);
  var prog = document.getElementById('ipl-progress-indicator');


  if(!mounted){
    document.body.className="home-body";
    document.body.id = "home-id";
  }

  useEffect(() =>{
    setMounted(true);

    /* Preloading */
    if(loaded !== null) {
      document.body.style.background = `url(${homeBackground}), linear-gradient(rgba(0,0,0,0) 40%, black), radial-gradient(ellipse at center top, transparent 20%,black)`;
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundColor = "#f9f9f9";
      document.body.style.backgroundPosition= "50% 100%";
      document.body.style.backgroundRepeat= "no-repeat";
    }

    // Sleep method for preloading
    preloadsleep().then(() => {
      if(prog && (loaded !== null)) {
        prog.classList.add('available');
        setTimeout(() => {
          prog.outerHTML = ''
        }, 1500);
      }
    })

    return function cleanup() {
      document.body.style.background = "none";
      document.body.style.backgroundColor = "#f9f9f985";
    }
},[loaded]);
    
  
  
  /* 'question' bar animation config, question array, and question loop */
  const firstLine = {
    restInitial: {opacity: 0, y: 25, 
      transition: (prog == null) ? { delay: 0 } : { delay: 3 }},
    rest: { opacity: 0, y: 17,
      transition: showAnimation ? { duration: 0.5 } : { duration: 0} },
    show: { opacity: 1, y: 0,
      transition: {duration:2}},
    showStop: { opacity: 1, y: 0,
      transition: {duration:2}},
    next: { opacity: 0, y: -17,
      transition: {duration: 0.5}}
  }

  const questionArray = [
    "Can my old dog learn how to behave?",
    "How can I help my dog meet new people and other canine friends?",
    "How can I stop my puppy from crying all-night and peeing everywhere?",
    "What do I do? Help!"
  ];

  useEffect(() => {
    const sequence = async () => {
      const prog = document.getElementById('ipl-progress-indicator');    
      /* if(prog == null){ */
        while(true){
          if(firstRun){
            await questionControls.start(firstLine.restInitial);
            setFirstRun(false);
          }
          await questionControls.start(firstLine.rest);
          await questionControls.start(firstLine.show);
          await questionControls.start(firstLine.showStop);
          await questionControls.start(firstLine.next);
          setQuestionLine(questionLine + 1);
          if(questionLine >= 3){
            setQuestionLine(0);
          }        
        }
      //}
    };
    sequence();
  }, [questionControls, questionLine])

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
      <motion.div variants={mainContent} initial={showAnimation ? "rest" : "show"} animate="show">
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
        <motion.h3
          className="text-center"
          initial={"restInitial"}
          variants={firstLine}
          animate={questionControls}
          >
          {questionArray[questionLine]}


        </motion.h3>

      </motion.div>
          <motion.button
            className="splashButton mx-auto text-center"
            variants={button} 
            initial={showAnimation ? "rest" : "show"}
            animate={buttonControls}
            /* onTap={() => console.log(showAnimation)} */
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
