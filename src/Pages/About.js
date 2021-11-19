import React, {useEffect, useState} from "react";
import { Container } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import "./Home.css";
import kingaCircle from "../images/kinga_rose.jpeg";
import {Check} from "../Components/Check";
import { motion, useAnimation } from "framer-motion";
import { Element } from "react-scroll";
import getSession from "./getSession";
import {HashLink, NavHashLink} from 'react-router-hash-link';

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
  var [divref, inView] = useInView({threshold: 0.01, delay: 500, trackVisibility: true});
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
              Kinga’s K9s’ behavioral training provides you with solutions to all your dog problems, big and small.  As the founder, Kinga Niecko-Samuel has more than 15 years’ experience helping clients develop and nurture good canine behaviors.  Kinga was born with a love for animals and started training by partnering with local rescue organizations to help needy dogs get adopted and thrive in their forever homes.  Kinga combines the latest research on dog behavior and psychology and hands-on work to intuitively handle all dog behavior problems and help owners achieve consistent obedience, trust and respect from their dog companions. Kinga develops puppies into well-behaved companions, solves some of the most challenging dog behaviors like separation anxiety and aggression and ensures balance and tranquility in multi-dog and multi-animal households.  Kinga is a certified trainer by the Council of Professional Dog Trainers (CPDT), and also partners with MK9S Service Dogs, an organization that trains and certifies service dogs for Veterans. With Kinga’s help you can be confident that you will be prepared for a new arrival, break any bad dog habits and enforce and maintain good behavior in your dog.
                <motion.div ref={divref} variants={certifications} initial={showAnimation ? "rest" : "show"} animate={controls} className="checkmark-container">
                <motion.p className="text-left" variants={certLines} ><Checkmark /><span className="check-text">15+ years of experience</span></motion.p>
                <motion.p className="text-left" variants={certLines}><Checkmark /><span className="check-text">CPDT Certified</span></motion.p>
                <motion.p className="text-left" variants={certLines} ><Checkmark /><span className="check-text">Specializes in behavioral training</span></motion.p>
                <motion.p className="text-left" variants={certLines} ><Checkmark /><span className="check-text">Experienced in service dog training</span></motion.p>
                <motion.p className="text-left" variants={certLines} ><Checkmark /><span className="check-text">Partner with NOVA rescue organizations</span></motion.p>
                <motion.p className="text-left" variants={certLines} ><Checkmark /><span className="check-text">Skilled in picking the right puppy for your family</span></motion.p>
                </motion.div>
              </p>
              
            </div>
            <HashLink smooth to={"/#homeTop"}>Test</HashLink>
          </div>
      </motion.div>
    </Element>
  );
}
