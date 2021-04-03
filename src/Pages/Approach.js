import "./AltPages.css";
import React from "react";
import { Container, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import {Check} from "../Components/Check";
import { Element } from "react-scroll";

const certifications = {
    unchecked: { opacity: 0 },
    checked: { opacity: 1,
      transition: {delay: 0.3, staggerChildren: 0.75}}
  };
  
  const certLines = {
    unchecked: { opacity: 0, y: 1150 },
    checked: { opacity: 1, y: 0,
      transition: {duration:1, ease: "circOut"}}
  };
  
  const divInitial = {
    rest: { scale: 1, opacity: 1 },
    show: { scale: 1, opacity: 1 }
  };
  
  const picInitial = {
    rest: { scale: 0.1, opacity: 0 },
    show: { scale: 1, opacity: 1,
      transition: {duration:1}},
    float: {scale: 1, repeat: Infinity, opacity: 1, y: [7, -7, 7], 
      transition: {duration: 5}}
  };

var Checkmark2 = () => <Check/>


export default function Approach() {
  return (
    <Element id="aboutDest" name="aboutDest">
      <motion.div intial="rest" animate="show" variants={divInitial} className="about mx-auto">
          <Container className="mx-auto">
            <h1 className="text-left aboutHeader">ABOUT</h1>
            <div className="aboutContainer">
              <p className="text-left aboutPara">
              Kinga’s K9s’ behavioral training provides you with solutions to all your dog problems, big and small.  As the founder, Kinga Niecko-Samuel has more than 14 years’ experience helping clients develop and nurture good canine behaviors.  Kinga develops puppies into well-behaved companions and solves some of the most challenging dog behaviors like separation anxiety and aggression.  Kinga is a certified trainer by the Council of Professional Dog Trainers (CPDT) and also partners with MK9S Service Dogs, an organization that trains and certifies service dogs for veterans. With Kinga’s help, you can be confident that you will be prepared for a new arrival, break any bad dog habits, and enforce and maintain good behavior in your dog.
              </p>
              <motion.img  className="circlePic" />
                
            </div>
            <motion.div className="checkmark-container">
                <motion.p className="text-left" variants={certLines}><Checkmark2 />CPDT Certified</motion.p>
                <motion.p className="text-left" variants={certLines} ><Checkmark2 />14 Years of Experience</motion.p>
                <motion.p className="text-left" variants={certLines} ><Checkmark2 />Specializes in behavioral in-home training</motion.p>
                <motion.p className="text-left" variants={certLines} ><Checkmark2 />Partners to train service dogs for veterans</motion.p>

            </motion.div>
          </Container>
      </motion.div>
    </Element>
  );
}
