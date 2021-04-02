/* 
Basis for checkmark framer motion code borrowed from
https://codesandbox.io/s/framer-motion-svg-checkbox-kqm7y?file=/src/Example.tsx 
Created by: https://codesandbox.io/u/InventingWithMonster 
*/

import * as React from "react";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useMotionValue, useTransform, useAnimation } from "framer-motion";
import * as Scroll from 'react-scroll';
import "./Check.css";


const ScrollLink = Scroll.ScrollLink

var tickVariants = {
  pressed: { scale: 0.5},
  checked: { scale: 0.5, pathLength: 1,
    transition: {delay: 1.5} },
  unchecked: { scale: 0.5, pathLength: 0 }
};

var boxVariants = {
  pressed: { scale: 0.45},
  checked: { scale: 0.5, stroke: "#112947" },
  unchecked: { scale: 0.5, stroke: "#ddd"}
};

export var Check = () => {
  var controls = useAnimation();
  var [ref, inView] = useInView({threshold: 1.0, delay: 100, trackVisibility: true});
  var [isChecked, setIsChecked] = useState(false);
  var pathLength = useMotionValue(0);
  var opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);

   useEffect(() => {
    if (inView) {
      controls.start("checked");
      console.log("inview");
    }
  }, [controls, inView]);  

  return (
    <motion.svg
      ref={ref}
      initial="unchecked"
      animate={controls}
      whileHover="hover"
      viewBox="94 94 250 250"
      width="2.8rem"
      height="2.8rem"
      className="check-scaled"
      whileTap="pressed"
    >
      <motion.path
        d="M 72 136 C 72 100.654 100.654 72 136 72 L 304 72 C 339.346 72 368 100.654 368 136 L 368 304 C 368 339.346 339.346 368 304 368 L 136 368 C 100.654 368 72 339.346 72 304 Z"
        fill="transparent"
        strokeWidth="50"
        className="check-scaled"
        stroke="#112947"
        variants={boxVariants}
      />
      <motion.path
        d="M 0 128.666 L 128.658 257.373 L 341.808 0"
        transform="translate(54.917 88.332) rotate(-4 170.904 128.687)"
        fill="transparent"
        className="checkTransWhite check-scaled"
        strokeWidth="65"
        stroke="hsl(0, 0%, 100%)"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={tickVariants}
        style={{ pathLength, opacity }}
        custom={isChecked}
      />
      <motion.path
        d="M 0 128.666 L 128.658 257.373 L 341.808 0"
        transform="translate(54.917 68.947) rotate(-4 170.904 128.687)"
        fill="transparent"
        className="checkTrans check-scaled"
        strokeWidth="65"
        stroke="#cc0000"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={tickVariants}
        style={{ pathLength, opacity }}
        custom={isChecked}
      />
    </motion.svg>
  );
};
