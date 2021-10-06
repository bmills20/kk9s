import React, {useEffect, useState} from "react";
import { Container } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import "./Home.css";
import kingaCircle from "../images/kinga_rose.jpeg";
import {Check} from "../Components/Check";
import { motion, useAnimation } from "framer-motion";
import { Element } from "react-scroll";
import getSession from "./getSession";

const certifications = {
  unchecked: { opacity: 1 },
  checked: { opacity: 1,
    transition: {delayChildren: 0.7, staggerChildren: 0.6}}
};

const certLines = {
  unchecked: { opacity: 0, x: -50 },
  checked: { opacity: 1, x: 0,
    transition: {duration:1, ease: "circOut"}}
};

const divInitial = {
  rest: { scale: 1, opacity: 1 },
  show: { scale: 1, opacity: 1 }
};

const picInitial = {
  rest: { scale: 0.1, opacity: 0 },
  show: { scale: 1, opacity: 1,
    transition: {duration:1}}
};

var Checkmark = () => <Check/>

export default function About() {
  const showAnimation = getSession();
  var controls = useAnimation();
  var picControls = useAnimation();
  const [picAnim, setPicAnim] = useState(false);
  var [divref, inView] = useInView({threshold: 1.0, delay: 500, trackVisibility: true});
  var [picRef, picInView] = useInView({threshold: 0.01, delay: 500, trackVisibility: true});

  useEffect(() => {
    if(inView) {
      controls.start("checked");
    }
    else if(!inView){
      controls.start("unchecked");
    }
  }, [controls, inView]);

  // Upon scrolling down to the about section, use async and promises to begin
  // the 3 animation variant sequence
  useEffect(() => {
    /*const sequence = async () => {
      if (picInView) {
        await picControls.start(picInitial.show);
      }
    };
    sequence();*/
    if(picInView){
      picControls.start("show");
    }
    else if(!picInView){
      picControls.start("rest")
    }
  }, [picControls, picInView])


  return (
    <Element id="aboutDest" className="aboutDest" name="aboutDest">
      <motion.div intial="rest" animate="show" variants={divInitial} className="about">
          <div>
            <h1 className="text-left aboutHeader">ABOUT</h1>
            <div className="pic-container">
              <motion.img ref={picRef} variants={picInitial} initial={showAnimation ? "rest" : "show"} animate={ picControls } src={kingaCircle} className="circlePic" />
              <p className="text-center" style={{fontStyle: "italic", color: "grey", fontSize: "0.75em"}}>Kinga with one of her dogs, Rose</p>
            </div>
            <div className="aboutContainer">
              <p className="text-left aboutPara">
                Kinga’s K9s’ behavioral training provides you with solutions to all your dog problems, big and small.  As the founder, Kinga Niecko-Samuel has more than 14 years’ experience helping clients develop and nurture good canine behaviors.  Kinga develops puppies into well-behaved companions and solves some of the most challenging dog behaviors like separation anxiety and aggression.  Kinga is a certified trainer by the Council of Professional Dog Trainers (CPDT) and also partners with MK9S Service Dogs, an organization that trains and certifies service dogs for veterans. With Kinga’s help, you can be confident that you will be prepared for a new arrival, break any bad dog habits, and enforce and maintain good behavior in your dog.
                <motion.div ref={divref} variants={certifications} initial={showAnimation ? "rest" : "show"} animate={controls} className="checkmark-container">
                <motion.p className="text-left" variants={certLines}><Checkmark /><span className="check-text">CPDT Certified</span></motion.p>
                <motion.p className="text-left" variants={certLines} ><Checkmark /><span className="check-text">14+ Years of Experience</span></motion.p>
                <motion.p className="text-left" variants={certLines} ><Checkmark /><span className="check-text">Specializes in behavioral in-home training</span></motion.p>
                <motion.p className="text-left" variants={certLines} ><Checkmark /><span className="check-text">Partners to train service dogs for veterans</span></motion.p>
                </motion.div>
              </p>
              
            </div>
            
          </div>
      </motion.div>
    </Element>
  );
}
