import "./AltPages.css";
import React from "react";
import { Container, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
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



class Approach extends React.Component {
  render(){
  return (
/*       <motion.div style={{backgroundColor: "white", background: "none"}} intial="rest" animate="show" variants={divInitial} className="approach mx-auto">
 */          <Container className="mx-auto ">
            <h1 className="text-left aboutHeader">APPROACH</h1>
              <p className="text-left">
              The key to having a well-behaved dog is to understand that every interaction you have with your dog is a learning opportunity.
              Our training sessions (in-home or field) are set up with this goal in mind:  Train your dog to not only know commands, but more importantly, to obey them when asked!
              A key element in training your dog is teaching you, as the owner to achieve that same level of obedience from your companion.
              </p>
              <p className="text-left">
                Dogs learn behaviors through associations (positive and negative) and receive messages from humans through the tiniest micro-movements.
                Kinga’s K-9s uses a balanced approach to training your dog with positive reinforcement of good behaviors and blocking unwanted or undesired behaviors.
                We mark appropriate behaviors with treats, verbal praise and play rewards and block unwanted behaviors through verbal corrections and appropriate use of the leash.
                We teach you, how your body language, tone, and daily routine affect your dog’s behavior and how to use that knowledge to appropriately guide your dog’s behavior in and out of the house.
              </p>
              <p className="text-left">As the first step, we identify the primary driver that motivates your dog to follow commands.
              Identifying your dog’s primary driver directly improves training success.
              We teach basic commands, recommend training tools, treats and equipment and specialize in hard to solve behavioral problems to include, but not limited to:
              </p>
              <motion.img  className="circlePic" />
                
            
          </Container>
/*       </motion.div>
 */  );
}
}
export default Approach;