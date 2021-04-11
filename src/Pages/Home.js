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

const firstLine = {
  rest: { opacity: 0, y: 50,
    transition: {duration: 0.5} },
  show: { opacity: 1, y: 0,
    transition: {duration:2}},
  showStop: { opacity: 1, y: 0,
    transition: {duration:2}},
  next: { opacity: 0, y: -50,
    transition: {duration: 0.5}}
}

 const mainContent = {
  rest: { opacity: 0 },
  show: { opacity: 1,
    transition: {delay: 2, staggerChildren: 3}}
};

export default function Home() {
  var [questionLine, setQuestionLine] = useState(0);
  var buttonControls = useAnimation();
  var questionControls = useAnimation();
  const [buttonHovered, setButtonHovered] = useState(false);
  var [buttonRef, buttonInView] = useInView({threshold: 1.0, delay: 100, trackVisibility: false});
  const questionArray = [
    "Can my old dog learn how to behave?",
    "How can I help my dog meet new people and other canine friends?",
    "How can I stop my puppy from crying all-night and peeing everywhere?",
    "What do I do? Help!"
  ]

  useEffect(() => {
    const sequence = async () => {
      while(true){
        await questionControls.start(firstLine.rest);
        await questionControls.start(firstLine.show);
        await questionControls.start(firstLine.showStop);
        await questionControls.start(firstLine.next);
        setQuestionLine(questionLine + 1);
        if(questionLine >= 3){
          setQuestionLine(0);
        }
        console.log(questionLine);
        
      }
    };
    sequence();
  }, [questionControls, questionLine])

  // Upon scrolling down to the about section, use async and promises to begin
  // the 3 animation variant sequence
  /* useEffect(() => {
    const sequence = async () => {
      if (picInView) {
        await picControls.start(picInitial.show);
        await picControls.start(picInitial.float);
      }
    };
    sequence();
  }, [picControls, picInView]) */

  /* useEffect(() => {
    const keepAnimations = () => {
      if(window.oldURL) {
        console.log("old",window.oldURL);
      }
      else {
        console.log("nope");
      }
    }

    window.addEventListener("hashchange", console.log("test"));
  }); */

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
        <motion.h3
          className="text-center"
          variants={firstLine}
          animate={questionControls}
          >
          {questionArray[questionLine]}


        </motion.h3>

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
