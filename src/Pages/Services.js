import "./AltPages.css";
import React from "react";
import { Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";

const button = {
  rest: { scale: 0.1, opacity: 0 },
  show: { scale: 1, opacity: 1,
    transition: {delay: 4.5, repeat: 0, duration:0.5} },
  hover: { scale: 1.1,
    transition: {duration:0.2} },
  hoverExit: { scale: 1.0},
  pressed: {scale: 0.95 }
};

const textLines = {
  rest: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0,
    transition: {duration:1}}
};

const buttonInitial = {
  rest: { scale: 0.1, opacity: 0 },
  show: { scale: 1, opacity: 1,
    transition: {delay: 2, duration:1}}
};

 const mainContent = {
  rest: { opacity: 0 },
  show: { opacity: 1,
    transition: {delay: 2, staggerChildren: 3}}
};

export default function Approach() {
  return (
    <div className="splash">
      <div className="main-content">
      <motion.div variants={mainContent} initial="rest" animate="show">
        <motion.h1 
          className="text-center"
          variants={textLines}
          >
            Getting a new puppy or dog?
        </motion.h1>
        <motion.h2 
          className="text-center"
          variants={textLines}
          >
            ...or have a stubborn one and need help?
        </motion.h2>

      </motion.div>
      <motion.div variants={buttonInitial}>
          <motion.button
            className="splashButton mx-auto text-center"
            variants={button} 
            initial="rest"
            animate="show"
            whileHover={{ scale: 1.1 }}
            whileTap="pressed"
            >
          
          GET STARTED</motion.button>
        </motion.div>
      </div>
    </div>
  );
}
