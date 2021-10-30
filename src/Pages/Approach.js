import "./AltPages.css";
import React, {useState, useEffect, Suspense} from "react";
import { Container, Button, Card, ListGroup } from "react-bootstrap";
import { motion, useAnimation, div, path, svg } from "framer-motion";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import girlsRose from '../images/kidsandrose.jpg';
import kingaLeash from '../images/kingamain_cropped.png';
import carrot from "../images/shades.jpg";
import { ReactComponent as Arrow } from '../images/arrow.svg';
import {Link as DomLink} from "react-router-dom";


const pawDiv = {
  initial: { opacity: 0 },
  show: { opacity: 1,
    transition: {delay: 0.3, staggerChildren: 1}}
};

const paws = {
  initial: { opacity: 0 },
  show: { opacity: 1,
    transition: {duration:1}}
};

  const cardText = [
    {
      "title": "Achieving Obedience",
      "text": "The key to having a well-behaved dog is to understand that every interaction you have with your dog is a learning opportunity. Our training sessions (in-home or field) are set up with this goal in mind:  Train your dog to not only know commands, but more importantly, to obey them when asked! A key element in training your dog is teaching you, as the owner to achieve that same level of obedience from your companion.",
      "to": "obedience"
    },
    {
      "title": "Influencing Behavior",
      "text": "Dogs learn behaviors through associations (positive and negative) and receive messages from humans through the tiniest micro-movements.  Kinga’s K9s uses a balanced approach to training your dog with positive reinforcement of good behaviors and blocking unwanted or undesired behaviors.  We mark appropriate behaviors with treats, verbal praise, play, and rewards. We block unwanted behaviors through verbal corrections and appropriate use of the leash.  We teach you, how your body language, tone, and daily routine affect your dog’s behavior and how to use that knowledge to appropriately guide your dog’s behavior in and out of the house.",
      "to": "behavior"
    },
    {
      "title": "Solving Problems",
      "text": "As the first step, we identify the primary driver that motivates your dog to follow commands.  Identifying your dog’s primary driver directly improves training success.  We teach basic commands, recommend training tools, treats and equipment and specialize in hard to solve behavioral problems to include, but not limited to:",
      "to": "commands"
    },
    {
      "title": "Contact Us",
    }
  ];



export default function Approach() {

  document.body.className="approach-body";
  document.body.style="none";
  
  return (
      <Container name="approachTop" className="approach">
      
        <div className="approach-header-section">
          <Container className="approach-header">
            <h1 className="text-left">Approach</h1>
            <h4 className=""> Learn more about our approach to training your furry companion.</h4>
          </Container>
        <Container className="approach-row">
        {
            cardText.map(({title, subtitle, text, to}, i) =>
                <Link
                  to={to} // which page to scroll to 
                  smooth={true} // define scrolling behavior
                  duration={500} //control scrolling speed 1000 = 1s
                  offset={-130}
                  spy={true}
                >
                  <DomLink to={(i === 3) ? ("/pages/contact") : ("/pages/approach")}><Card className="approach-card" >
                    <Card.Body>
                      <Card.Title className="approach-title">{title}</Card.Title>
                      <Card.Subtitle className="approach-subtitle">{subtitle}</Card.Subtitle>
                      {i !== 3 ? 

                      (<div><p className="approach-learn">Learn more</p>
                          <Arrow className="step-no" />
                      </div>)

                      : (<p></p>)}
                      
                    </Card.Body>
                  </Card>
                  </DomLink>
                </Link>
                      
              )}
            
            
          </Container>
          </div>
          
          
            {/* 
            map these later
            cardText.map(({text}) => */}
            <motion.div className="obedience-motion-div">
              <Container name="scrollsnap obedience" className="obedience">
                  <div className="approach-section">
                    <div className="approach-section-text">
                      <img src={girlsRose} className="approach-pic-cropped-kinga"/>
                      <h1 className="text-left">Achieving Obedience</h1>
                      <p>The key to having a well-behaved dog is to understand that every interaction you have with your dog is a learning opportunity.<br /> <br /> Our training sessions (in-home or field) are set up with this goal in mind:  Train your dog to not only know commands, but more importantly, to obey them when asked! <br /> <br /> A key element in training your dog is teaching you, as the owner to achieve that same level of obedience from your companion.</p>
                    </div>
                    
                  </div>
                
              </Container>
              
            </motion.div>
            <motion.div className="behavior-motion-div">
              <Container className="scrollsnap behavior" name="behavior">
                <div style={{width: '100%'}}> 
                  <div className="approach-section">
                    <img src={carrot} className="approach-pic-cropped-left"/>
                    <div className="approach-section-text">
                    <h1 className="text-left">Influencing Behavior</h1>
                      <p>Dogs learn behaviors through associations (positive and negative) and receive messages from humans through the tiniest micro-movements.  Kinga’s K9s uses a balanced approach to training your dog with positive reinforcement of good behaviors and blocking unwanted or undesired behaviors.<br /> <br />  We mark <b>appropriate</b> behaviors with treats, verbal praise, play, and rewards.<br /> <br /> We block <b>unwanted</b> behaviors through verbal corrections and appropriate use of the leash.  <br /> <br />We teach you, how your body language, tone, and daily routine affect your dog’s behavior and how to use that knowledge to appropriately guide your dog’s behavior in and out of the house.</p>
                      </div>
                      </div>
                </div>
              </Container>
            </motion.div>
            <motion.div className="commands-motion-div">
              <Container className="scrollsnap commands" name="commands">
                <div style={{width: '100%'}}>
                  <div className="approach-section">
                    <div className="approach-section-text">
                      <img src={kingaLeash} className="approach-pic-cropped"/>
                    <h1 className="text-left">Solving Problems</h1>
                      <p>As the first step, we identify the primary driver that motivates your dog to follow commands.  Dogs have three primary love languages that motivate and drive their behavior.  Identifying your dog’s primary driver directly improves training success.  We help you understand your dog’s behavior, teach basic commands, recommend training tools, treats and equipment and specialize in hard to solve behavioral problems to include, but not limited to:
                      <br /><br />
                      <ol>
                      <li>Teaching sit, come, stay, down, place and heel</li>
                      <li>Housebreaking</li>
                      <li>Positive crate association and routine</li>
                      <li>Provide hourly schedule and support if you are getting a puppy</li>
                      <li>Teaching how to handle dogs around children and other pets in the household</li>
                      <li>Breaking separation anxiety</li>
                      <li>Teaching tactics for leash aggression and fear aggression</li>
                      <li>Teaching good greeting manners with other dogs and humans</li>
                      <li>Stopping counter-surfing, chewing, door-darting, and all other naughty behaviors</li>
                    </ol>
                    </p>
                    </div>

                      
                      </div>
                </div>
            </Container>
          </motion.div>
        </Container>

);
}