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

  /* useEffect(() => {
    if (inView) {
      controls.start("checked");
    }
  }, [controls, inView]); 

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


  return (
    <Element id="servicesDest" className="servicesDest" name="servicesDest">
      <motion.div intial="rest" animate="show" className="about mx-auto">
        <Container className="services-container">
        <h1 className="text-left aboutHeader">SERVICES</h1>
        <div className="landingServices">  
          <div className="col-lg-4 col-md-6">
            <div className="landing-prices">
              <h3 className="landing-prices-title">Junior Package</h3>
              <ul className="landing-prices-features">
                <li>Your dog be good</li>
                <li>I train your dog very good</li>
                <li>Dog go bark I say stop</li>
                <li>Dog stop bark</li>
                <li>You give me many moneys</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="landing-prices">
              <h3 className="landing-prices-title">Mid Package</h3>
              <ul className="landing-prices-features">
                <li>Your dog be good</li>
                <li>I train your dog very good</li>
                <li>Dog go bark I say stop</li>
                <li>Dog stop bark</li>
                <li>You give me many moneys</li>
              </ul>
              <Button className="btn-services">Inquire</Button>
            </div>
            
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="landing-prices">
            <img src={eatingDog} className="landing-image"/>
              <h3 className="landing-prices-title">Senior Package</h3>
              
              <ul className="landing-prices-features">
                <li>Your dog be good</li>
                <li>I train your dog very good</li>
                <li>Dog go bark I say stop</li>
                <li>Dog stop bark</li>
                <li>You give me many moneys</li>
              </ul>
            </div>
          </div>
        </div>
        </Container>
      </motion.div>
    </Element>
  );
}
