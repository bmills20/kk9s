import "./AltPages.css";
import React from "react";
import { Container, Button, Card, ListGroup } from "react-bootstrap";
import { motion, useAnimation, div } from "framer-motion";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import kingaLeash from '../images/kingamain2.jpeg';
import carrot from "../images/dog_and_stella.JPG";
import golden from "../images/golden.jpeg";


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

  const cardText = [
    {
      "title": "Obedience",
      "subtitle": "Interactions as Learning Opportunities",
      "text": "The key to having a well-behaved dog is to understand that every interaction you have with your dog is a learning opportunity. Our training sessions (in-home or field) are set up with this goal in mind:  Train your dog to not only know commands, but more importantly, to obey them when asked! A key element in training your dog is teaching you, as the owner to achieve that same level of obedience from your companion.",
      "to": "obedience"
    },
    {
      "title": "Behavior",
      "subtitle": "Rewarding & Blocking",
      "text": "Dogs learn behaviors through associations (positive and negative) and receive messages from humans through the tiniest micro-movements.  Kinga’s K9s uses a balanced approach to training your dog with positive reinforcement of good behaviors and blocking unwanted or undesired behaviors.  We mark appropriate behaviors with treats, verbal praise, play, and rewards. We block unwanted behaviors through verbal corrections and appropriate use of the leash.  We teach you, how your body language, tone, and daily routine affect your dog’s behavior and how to use that knowledge to appropriately guide your dog’s behavior in and out of the house.",
      "to": "behavior"
    },
    {
      "title": "Commands",
      "subtitle": "Drivers for training success",
      "text": "As the first step, we identify the primary driver that motivates your dog to follow commands.  Identifying your dog’s primary driver directly improves training success.  We teach basic commands, recommend training tools, treats and equipment and specialize in hard to solve behavioral problems to include, but not limited to:",
      "to": "commands"
    }
  ];


export default function Approach() {
  return (
/*       <motion.div style={{backgroundColor: "white", background: "none"}} intial="rest" animate="show" variants={divInitial} className="approach mx-auto">*/
  
  <Container className="approach">
    <div className="approach-header-section">
      <Container className="approach-header">
        <h1 className="text-left">Approach</h1>
        <h4 className="text-muted"> Learn more about our approach to training your furry companion.</h4>
      </Container>
    <Container className="approach-row">
    
    {
      cardText.map(({title, subtitle, text, to}, i) =>
        <Link
          to={to} // which page to scroll to 
          smooth={true} // define scrolling behavior
          duration={500} //control scrolling speed 1000 = 1s
          offset={-100}
          spy={true}
        >
           <a href="/"><Card className="approach-card mx-auto" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title className="approach-title">{title}</Card.Title>
              <Card.Subtitle className="approach-subtitle text-muted">{subtitle}</Card.Subtitle>
              <h2 className="step-no">{i+1}</h2>
              <p className="approach-learn">Learn more...</p>
            </Card.Body>
          </Card>
          </a>
        </Link>
               
      )}
      
    </Container>
    </div>
    
    
      {/* 
      map these later
      cardText.map(({text}) => */}
      <motion.div>
        <Container name="obedience" className="obedience">
          
            <div className="approach-section">
              <div className="approach-section-text">
                <h1 className="text-left">Obedience</h1>
                <p>The key to having a well-behaved dog is to understand that every interaction you have with your dog is a learning opportunity.<br /> <br /> Our training sessions (in-home or field) are set up with this goal in mind:  Train your dog to not only know commands, but more importantly, to obey them when asked! <br /> <br /> A key element in training your dog is teaching you, as the owner to achieve that same level of obedience from your companion.</p>
              </div>
              <img src={kingaLeash} className="approach-pic-cropped-kinga"/>
            </div>
          
        </Container>
        
      </motion.div>
      <motion.div>
        <Container className="behavior" style={{minHeight: "100vh", marginTop: "50vh", marginBottom: "50vh"}} name="behavior">
          <div style={{width: '100%'}}> 
            <div className="approach-section">
              <img src={carrot} className="approach-pic-cropped-left"/>
              <div className="approach-section-text">
              <h1 className="text-left">Behavior</h1>
                <p>Dogs learn behaviors through associations (positive and negative) and receive messages from humans through the tiniest micro-movements.  Kinga’s K9s uses a balanced approach to training your dog with positive reinforcement of good behaviors and blocking unwanted or undesired behaviors.<br /> <br />  We mark <b>appropriate</b> behaviors with treats, verbal praise, play, and rewards.<br /> <br /> We block <b>unwanted</b> behaviors through verbal corrections and appropriate use of the leash.  <br /> <br />We teach you, how your body language, tone, and daily routine affect your dog’s behavior and how to use that knowledge to appropriately guide your dog’s behavior in and out of the house.</p>
                </div>
                </div>
          </div>
        </Container>
      </motion.div>
      <motion.div>
        <Container name="commands">
          <div style={{width: '100%'}}>
            <div className="approach-section">
              <div className="approach-section-text">
              <h1 className="text-left">Commands</h1>
                <p>As the first step, we identify the primary driver that motivates your dog to follow commands.  Identifying your dog’s primary driver directly improves training success.  We teach basic commands, recommend training tools, treats and equipment and specialize in hard to solve behavioral problems to include, but not limited to:
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

                <img src={golden} className="approach-pic-cropped"/>
                </div>
          </div>
        </Container>
      </motion.div>
  </Container>);
}