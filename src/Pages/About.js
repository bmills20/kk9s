import React, {useEffect} from "react";
import { Container } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import "./Home.css";
import kingaCircle from "../images/kinga_outside_circle.png";
import {Check} from "../Components/Check";
import { motion, useAnimation } from "framer-motion";

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

var Checkmark = () => <Check/>
var Checkmark2 = () => <Check/>
var Checkmark3 = () => <Check/>

export default function About() {
  var controls = useAnimation();
  var [divref, inView] = useInView({threshold: 1.0, delay: 100, trackVisibility: true});
  useEffect(() => {
    if (inView) {
      controls.start("checked");
      console.log("inview");
    }
  }, [controls, inView]);
  return (
    
    <div className="about mx-auto">
        <Container className="mx-auto">
          <h1 className="text-left aboutHeader">ABOUT</h1>
          <div className="aboutContainer">
            <p className="text-left aboutPara">
            Kinga’s K9s’ behavioral training provides you with solutions to all your dog problems, big and small.  As the founder, Kinga Niecko-Samuel has more than 14 years’ experience helping clients develop and nurture good canine behaviors.  Kinga develops puppies into well-behaved companions and solves some of the most challenging dog behaviors like separation anxiety and aggression.  Kinga is a certified trainer by the Council of Professional Dog Trainers (CPDT), and also partners with MK9S Service Dogs, an organization that trains and certifies service dogs for Veterans. With Kinga’s help you can be confident that you will be prepared for a new arrival, break any bad dog habits and enforce and maintain good behavior in your dog.
            </p>
            
            <img src={kingaCircle} className="circlePic"/>
            
          </div>
          <motion.div ref={divref} variants={certifications} initial="unchecked" animate={controls} className="checkmark-container">
              <motion.p className="text-left" variants={certLines}><Checkmark />CPDT Certified</motion.p>
              <motion.p className="text-left" variants={certLines} ><Checkmark2 />14 Years of Experience</motion.p>
              <motion.p className="text-left" variants={certLines} ><Checkmark3 />Specializes in training Service and Household dogs</motion.p>
          </motion.div>
        </Container>
        
        
    </div>
  );
}
