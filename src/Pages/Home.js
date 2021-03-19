import "./Home.css";
import React from "react";
import { Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";

export const splashAnim = () => {
  <motion.div
    animate={{rotate: 360}}
    transition={{duration: 2}}
    />
}

const button = {
  rest: { scale: 0.1, opacity: 0 },
  show: { scale: 1, opacity: 1,
    transition: {repeat: 0, delay: 2.5, duration:1},
    transitionEnd: {scale: 1, opacity: 1} },
  hover: { scale: 1.1,
    transition: {duration:0.5} },
  pressed: { scale: 0.95 }
};

/* const mainContent = {
  hidden: { opacity: 0 },
  show: { opacity: 1,
    transition: {staggerChildren: 1}}
} */

export default function Home() {
  return (
    <div className="splash">
      <div className="main-content">
        {/* Reminder: for animations with multiple children, use 
            'staggerChildren' if using same animation for each child
            instead of 'delay' 
            
            */}
        <motion.h1 
          className="text-center"
          initial={{ opacity: 0, y: 50}}
          animate={{ opacity: 1, y: 0}}
          transition={{ duration: 1}}
          >
            Getting a new puppy or dog?
        </motion.h1>
        <motion.h2 
          className="text-center"
          initial={{ opacity: 0, y: 50}}
          animate={{ opacity: 1, y: 0}}
          transition={{ duration: 1, delay: 1.5}}
          >
            ...or have a stubborn one and need help?
        </motion.h2>
        <motion.button
          className="splashButton mx-auto text-center"
          variants={button}
          initial="rest"
          animate="show"
          whileHover="hover"
          whileTap="pressed">
        GET STARTED</motion.button>
      </div>
    </div>
  );
}
