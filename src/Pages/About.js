import React, {useEffect, useState} from "react";
import { Container } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import "./Home.css";
import kingaCircle from "../images/kinga_outside_circle.png";
import {Check} from "../Components/Check";
import { motion, useAnimation } from "framer-motion";
import { Element } from "react-scroll";

const certifications = {
  unchecked: { opacity: 0 },
  checked: { opacity: 1,
    transition: {delay: 0.3, staggerChildren: 0.75}}
};

const certLines = {
  unchecked: { opacity: 0, x: -250 },
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
  var controls = useAnimation();
  var picControls = useAnimation();
  const [picAnim, setPicAnim] = useState(false);
  var [divref, inView] = useInView({threshold: 1.0, delay: 500, trackVisibility: true});
  var [picRef, picInView] = useInView({threshold: 1.0, delay: 100, trackVisibility: true});

  useEffect(() => {
    const checkSequence = async () => {
      if (inView) {
        await controls.start("checked");
      }
    };
    checkSequence();
  }, [controls, inView]);

  // Upon scrolling down to the about section, use async and promises to begin
  // the 3 animation variant sequence
  useEffect(() => {
    const sequence = async () => {
      if (picInView) {
        await picControls.start(picInitial.show);
      }
    };
    sequence();
  }, [picControls, picInView])


  return (
    <Element id="aboutDest" className="aboutDest" name="aboutDest">
      <motion.div intial="rest" animate="show" variants={divInitial} className="about mx-auto">
          <Container className="mx-auto">
            <h1 className="text-left aboutHeader">ABOUT</h1>
            <div className="aboutContainer">
              <p className="text-left aboutPara">
              Kinga’s K9s’ behavioral training provides you with solutions to all your dog problems, big and small.  As the founder, Kinga Niecko-Samuel has more than 14 years’ experience helping clients develop and nurture good canine behaviors.  Kinga develops puppies into well-behaved companions and solves some of the most challenging dog behaviors like separation anxiety and aggression.  Kinga is a certified trainer by the Council of Professional Dog Trainers (CPDT) and also partners with MK9S Service Dogs, an organization that trains and certifies service dogs for veterans. With Kinga’s help, you can be confident that you will be prepared for a new arrival, break any bad dog habits, and enforce and maintain good behavior in your dog.
              </p>
              <motion.img ref={picRef} variants={picInitial} initial={"rest"} animate={ picControls } src={kingaCircle} className="circlePic" />
                
            </div>
            <motion.div ref={divref} variants={certifications} initial="unchecked" animate={controls} className="checkmark-container">
                <motion.p className="text-left" variants={certLines}><Checkmark />CPDT Certified</motion.p>
                <motion.p className="text-left" variants={certLines} ><Checkmark />14+ Years of Experience</motion.p>
                <motion.p className="text-left" variants={certLines} ><Checkmark />Specializes in behavioral in-home training</motion.p>
                <motion.p className="text-left" variants={certLines} ><Checkmark />Partners to train service dogs for veterans</motion.p>

            </motion.div>
          </Container>
      </motion.div>
    </Element>
  );
}
