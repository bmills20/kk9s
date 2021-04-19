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
        <h1 className="text-left aboutHeader">SERVICES</h1>
        <Container className="services-container">
          <div className="services-column col-lg-4">
            <h3 className="">Foundations</h3><h4>1 Session</h4><h5 className="text-muted">Works for most dogs</h5>
            <ol>
              <li>Training with the dog and owner</li>
              <li>Ensures basic obedience of commands</li>
              <li>Rehabilitates identified behavioral issues</li>
              <li>One to two hours</li>
              <li>Provides rehabilitation plan (homework) for the owner to achieve successful rehabilitation after the training</li>
            </ol>
            <Button className="btn-services">Inquire</Button>
          </div>
          <div className="services-column col-lg-4">
          <h3>Follow-up Hourly Session</h3><h5 className="text-muted">Good for a refresher or follow-up</h5>
            <ol>
              <li>Assesses progress</li>
              <li>Addresses any remaining or new behavioral issues</li> 
              <li>Hands on instruction for the dog and guidance for owners </li>
            </ol>
            <Button className="btn-services">Inquire</Button>
          </div>
          <div className="services-column col-lg-4">
            <h3>Behavioral Training Package Deal</h3>
            <h4>4 Sessions</h4>
            <h5 className="text-muted">Perfect for puppies and dogs with more difficult behavioral issues</h5>
            <ol>
              <li>Initial Session (Up to 2 hours)
                <ol> 
                  <li>Works with the dog and owner to ensure basic obedience of commands and rehabilitate the identified behavioral issues.</li>  
                  <li>Provides a written rehabilitation plan (homework) for the owner to achieve successful rehabilitation after the training.</li>
                </ol>
              </li>
              <li>Performs three follow-on sessions to address remaining/new behavioral issues (1 hour each)</li>
            </ol>
            <Button className="btn-services">Inquire</Button>
          </div>
          <div className="services-column col-lg-4">
            <h3>Specialized Program Package Deal</h3>
            <h4>4 Sessions</h4>
            <h5 className="text-muted">Kids and K9s: Understanding and Learning How to Properly Handle a K9</h5>
            <h5 className="text-muted">Perfect for children interested in animal behavior</h5>
            <ol>
              <li>Works with the dog and owner to ensure basic obedience of commands and rehabilitate identified behavioral issues (Up to two hours)</li>
              <li>Provides a written rehabilitation plan (homework) for the owner to achieve successful rehabilitation after the training</li>
            </ol>
            <Button className="btn-services">Inquire</Button>
          </div>

          
        </Container>
        {/* <div className="landingServices">  
          <div className="pricing-column col-lg-4 col-md-6">
            <div className="landing-prices">
              <h3 className="landing-prices-title">Foundations</h3>
              <ul className="landing-prices-features">
                <li>Up to two hours</li>
                <li>Works with the dog and owner to ensure basic obedience of commands and rehabilitate identified behavioral issues</li>
                <li>Provides a written rehabilitation plan (homework) for the owner to achieve successful rehabilitation after the training</li>
                <li>Dog stop bark</li>
                <li>You give me many moneys</li>
              </ul>
              <Button className="btn-services">Inquire</Button>
            </div>
          </div>
          <div className="pricing-column col-lg-4 col-md-6">
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
          <div className="pricing-column col-lg-4 col-md-6">
            <div className="landing-prices">
            <img className="landing-image"/>
              <h3 className="landing-prices-title">Senior Package</h3>
              
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
        </div> */}
      </motion.div>
    </Element>
  );
}
