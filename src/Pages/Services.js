import React, {useEffect, useState} from "react";
import { Container, Card, ListGroupItem, ListGroup, Button, Overlay } from "react-bootstrap";
import { Link as DomLink } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import "./Home.css";
import kingaCircle from "../images/kinga_outside_circle.png";
import { motion, useAnimation } from "framer-motion";
import { Element } from "react-scroll";
import eatingDog from "../images/eatingDog_blue.svg";
import foundations from "../images/foundations.svg";
import kidTraining from "../images/kidtraining.svg";
import puppyTraining from "../images/puppytraining.svg";
import followup from "../images/followup.svg";
import {ReactComponent as ChevronDown} from "../images/chevron_down.svg"

export default function About() {
  const [mounted, setMounted] = useState(false);
  var controls = useAnimation();
  var picControls = useAnimation();
  var [isSelected, setIsSelected] = useState(false);
  var [oneSelected, setOneSelected] = useState(false);
  var [twoSelected, setTwoSelected] = useState(false);
  var [threeSelected, setThreeSelected] = useState(false);
  var [fourSelected, setFourSelected] = useState(false);
  const [picAnim, setPicAnim] = useState(false);
  var [divref, inView] = useInView({threshold: 1.0, delay: 100, trackVisibility: true});
  var [picRef, picInView] = useInView({threshold: 1.0, delay: 100, trackVisibility: true});

  if(!mounted){
    // Loads the correct CSS for this page
    document.body.className="partners-body";
    // Allows for animations to wait until page finishes
    // loading all content
    document.body.classList.add("js-loading");
  }

  return (
    
    <Element id="servicesDest" className="servicesDest" name="servicesDest">
      
      <motion.div intial="rest" animate="show" className="about">
        <h1 className="text-left aboutHeader">SERVICES</h1>
        <p className="text-left aboutPara">We offer in-home or on-site (problem environments) training for your dog. We always
start with a Foundations session as a minimum to establish and reiterate fundamentals for
the dog and all members of the household. Most issues require a Foundations session and
possibly a follow-up in the future. For specialized training (hard to solve behavioral
issues) or if you are getting a puppy, a lot of our clients prefer a package to ensure
consistency and access to help when necessary.</p>
        <div className="services-container">
          <div onMouseUp={() => setOneSelected(!oneSelected) } id="services1" className={oneSelected ? "services-column open col-sm-3" : "services-column closed col-sm-3"}>
            <img src={foundations} className="card-icon" />
            <h3>Foundations Session</h3>
            <h4>1 Session</h4>
            {oneSelected ? <p></p> : <p>Read more</p>}
            <h5 className={oneSelected ? "text-muted hidebar" : "text-muted"}>Works for most dogs</h5>
            <div className = "services-column-content">
              <ol>
                <li>Up to two hours</li>
                <li>Trains the dog and helps owner handle dog</li>
                <li>Ensures basic obedience of commands</li>
                <li>Rehabilitates identified behavioral issues</li>
                <li>Provides rehabilitation plan (homework) for the owner to achieve successful rehabilitation after the training</li>
              </ol>
              <DomLink to={"/pages/contact"}>
                <Button className="btn-services">Inquire</Button>
              </DomLink>
            </div>
            
          </div>
          <div onMouseUp={() => setTwoSelected(!twoSelected) } id="services2" className={twoSelected ? "services-column open col-sm-3" : "services-column closed col-sm-3"}>
            <img src={followup} className="card-icon" />
            <h3>Follow-up Hourly Session</h3>
            <h4>1 Session</h4>
            <h5 className={twoSelected ? "text-muted hidebar" : "text-muted"}>Good for a refresher or follow-up</h5>
            <div className = "services-column-content">
              <ol>
                <li>Hourly</li>
                <li>Assesses progress</li>
                <li>Addresses remaining or new behavioral issues</li>
                <li>Trains the dog independently or with owner</li>
                <li>Delivers in-home or in the field training as necessary</li>
              </ol>
              <DomLink to={"/pages/contact"}>
                <Button className="btn-services">Inquire</Button>
              </DomLink>
            </div>
            {twoSelected ? <p></p> : <p>Read more</p>}
          </div>
        </div>
        <div className="services-container">
          <div onMouseUp={() => setThreeSelected(!threeSelected) } id="services3" className={threeSelected ? "services-column open col-sm-3" : "services-column closed col-sm-3"}>
            <img src={puppyTraining} className="card-icon" />
            <h3>Behavioral Training Package</h3>
            <h4>4 Sessions</h4>
            <h5 className={threeSelected ? "text-muted hidebar" : "text-muted"}>For puppies and dogs with difficult behavioral issues</h5>
            <div className = "services-column-content">
              <h4 style={{textAlign: "left", fontSize: "1rem", fontFamily: "firasans-lightitalic"}}>Initial Session (Up to 2 Hours):</h4>
              <ol>
                <li>Works with the dog and owner to ensure basic obedience of commands and rehabilitate the identified behavioral issues.</li>  
                <li>Provides a written rehabilitation plan (homework) for the owner to achieve successful rehabilitation after the training.</li>
              </ol>
              <h4 style={{textAlign: "left", fontSize: "1rem", fontFamily: "firasans-lightitalic"}}>Three Follow-Up Sessions (1 hour each):</h4>
              <ol>
                <li>Performs three follow-on sessions to address remaining/new behavioral issues</li>
              </ol>
              <DomLink to={"/pages/contact"}>
                <Button className="btn-services">Inquire</Button>
              </DomLink>
            </div>
            {threeSelected ? <p></p> : <p>Read more</p>}
          </div>
          <div onMouseUp={() => setFourSelected(!fourSelected) } id="services4" className={fourSelected ? "services-column open col-sm-3" : "services-column closed col-sm-3"}>
            <img src={kidTraining} className="card-icon" />
            <h3>Understanding and Learning How to Properly Handle a K9</h3>
            <h4>4 Sessions</h4>
            <h5 className={fourSelected ? "text-muted hidebar" : "text-muted"}>Perfect for children or adults interested in animal behavior</h5>
            <div className = "services-column-content">
              <ol>
                <li>Teaches participants about how a dog develops, learns, and behaves</li>
                <li>Hands on experience using the right approach to effectively handle a dog with confidence in any situation</li>
                <li>Teaches when to engage and disengage with a dog to effectively achieve obedience </li>
                <li>Provides guidance on how to handle emergency situations like aggressive dogs, dog fights or charging</li> 
                <li>Provides opportunities for shadowing and help in pursuing animal behavior professions</li>
              </ol>
              <DomLink to={"/pages/contact"}>
                <Button className="btn-services">Inquire</Button>
              </DomLink>
              </div>
            {fourSelected ? <p></p> : <p>Read more</p>}
          </div>
        </div>
      </motion.div>
    </Element>
  );
}
