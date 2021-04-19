import React, {useEffect, useState} from "react";
import { Container, Card, ListGroupItem, ListGroup, Button } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import "./Home.css";
import kingaCircle from "../images/kinga_outside_circle.png";
import { motion, useAnimation } from "framer-motion";
import { Element } from "react-scroll";
import eatingDog from "../images/eatingDog_blue.svg";

/* const certifications = {
  initial: { opacity: 0 },
  show: { opacity: 1,
    transition: {delay: 0.3, staggerChildren: 0.75}}
};

const certLines = {
  initial: { opacity: 0, y: 1150 },
  show: { opacity: 1, y: 0,
    transition: {duration:1, ease: "circOut"}}
}; */


export default function About() {
  var controls = useAnimation();
  var picControls = useAnimation();
  const [picAnim, setPicAnim] = useState(false);
  var [divref, inView] = useInView({threshold: 1.0, delay: 100, trackVisibility: true});
  var [picRef, picInView] = useInView({threshold: 1.0, delay: 100, trackVisibility: true});

  return (
    <Element id="servicesDest" className="servicesDest" name="servicesDest">
      <motion.div intial="rest" animate="show" className="about mx-auto">
        <h1 className="text-left aboutHeader">SERVICES</h1>
        <Container className="services-container">
          <div className="services-column col-lg-4">
            <h3>Foundations</h3>
            <h4>1 Session</h4>
            <h5 className="text-muted">Works for most dogs</h5>
            <ol>
              <li>One to two hours</li>
              <li>Training with the dog and owner</li>
              <li>Ensures basic obedience of commands</li>
              <li>Rehabilitates identified behavioral issues</li>
              <li>Provides rehabilitation plan (homework) for the owner to achieve successful rehabilitation after the training</li>
            </ol>
            <Button className="btn-services">Inquire</Button>
          </div>
          <div className="services-column col-lg-4">
          <h3>Follow-up Session</h3>
          <h4>1 Session</h4>
          <h5 className="text-muted">Good for a refresher or follow-up</h5>
            <ol>
              <li>1 or more hour(s)</li>
              <li>Assesses progress</li>
              <li>Addresses any remaining or new behavioral issues</li> 
              <li>Hands-on instruction for the dog and guidance for owners </li>
            </ol>
            <Button className="btn-services">Inquire</Button>
          </div>
          <div className="services-column col-lg-4">
            <h3>Behavioral Training Package Deal</h3>
            <h4>4 Sessions</h4>
            <h5 className="text-muted">Perfect for puppies and dogs with more difficult behavioral issues</h5>
            <h4 style={{textAlign: "left", fontSize: "1rem", fontFamily: "firasans-lightitalic"}}>Initial Session (Up to 2 Hours):</h4>
            <ol>
              <li>Works with the dog and owner to ensure basic obedience of commands and rehabilitate the identified behavioral issues.</li>  
              <li>Provides a written rehabilitation plan (homework) for the owner to achieve successful rehabilitation after the training.</li>
            </ol>
            <h4 style={{textAlign: "left", fontSize: "1rem", fontFamily: "firasans-lightitalic"}}>Three Follow-Up Sessions (1 hour each):</h4>
            <ol>
              <li>Performs three follow-on sessions to address remaining/new behavioral issues</li>
            </ol>
            <Button className="btn-services">Inquire</Button>
          </div>
          <div className="services-column col-lg-4">
            <h3>Specialized Program Package Deal</h3>
            <h4>4 Sessions</h4>
            <h5 className="text-muted">Kids and K9s: Understanding and Learning How to Properly Handle a K9</h5>
            <h5 className="text-muted">Perfect for children interested in animal behavior</h5>
            <ol>
              <li>Teaches children about dog behavior</li>
              <li>Teaches children how to be comfortable around dogs and handle them with confidence</li>
              <li>Your child will learn training techniques and the right time to use them to effectively handle a dog with confidence in any situation.</li> 
              <li>Your child will have hands-on experience interacting with, handling and training a dog through four one-hour sessions.</li>
            </ol>
            <Button className="btn-services">Inquire</Button>
          </div>

          
        </Container>
      </motion.div>
    </Element>
  );
}
