import "./Home.css";
import React, {useEffect, useState, Suspense} from "react";
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
    transition: {delay: 2, staggerChildren: 3}}
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

export default function Home() {
  const showAnimation = getSession();
  var [questionLine, setQuestionLine] = useState(0);
  var [firstRun, setFirstRun] = useState(true);
  var buttonControls = useAnimation();
  var questionControls = useAnimation();
  const [buttonHovered, setButtonHovered] = useState(false);
  var [buttonRef, buttonInView] = useInView({threshold: 1.0, delay: 100, trackVisibility: false});
  const [mounted, setMounted] = useState(false);

  if(!mounted){
    document.body.className="home-body";
  }

  useEffect(() =>{
    setMounted(true);
    
  },[]);
  
  /* 'question' bar animation config, question array, and question loop */
  const firstLine = {
    restInitial: {opacity: 0, y: 25, 
      transition: showAnimation ? { delay: 3 } : { delay: 0 }},
    rest: { opacity: 0, y: 17,
      transition: showAnimation ? {duration: 0.5} : { duration: 0} },
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
  <Suspense>
  <Element onClick={() => console.log(loaded)} name="homeTop" id="homeTop">
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
  </Suspense>
  );
}
