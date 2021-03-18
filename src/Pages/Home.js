import "./Home.css";
import React from "react";
import { Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";


export default function Home() {
  return (
    <div className="splash">
      <div className="main-content">
        <h1 className="text-center">Getting a new puppy or dog?</h1>
        <h2 className="text-center">...or have a stubborn one and need help?</h2>
        <Button variant="primary" className="splashButton mx-auto">GET STARTED</Button>
        {/* <p className="lead text-left">
          "Can my old dog learn how to behave?"
        </p>
        <p className="lead text-left">
          "How can I help my anxious dog meet new people and other canine friends?"
        </p>
        <p className="lead text-left">
          "How can I stop my puppy from crying all-night and peeing everywhere?"
        </p>
        <p className="lead text-left">"What do I do? Help!"</p> */}
      </div>
    </div>
  );
}
