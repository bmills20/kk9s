import React from "react";
import { Container } from "react-bootstrap";
import "./Home.css";

export default function About() {
  return (
    <div className="about">
        <Container className="mx-auto">
            <h1 className="text-left">About</h1>
            <p className="lead text-left">
                Kinga’s K9s’ behavioral training provides you with solutions to all your dog problems, big and small.  As the founder, Kinga Niecko-Samuel has more than 14 years’ experience helping clients develop and nurture good canine behaviors.  Kinga develops puppies into well-behaved companions and solves some of the most challenging dog behaviors like separation anxiety and aggression.  Kinga is a certified trainer by the Council of Professional Dog Trainers (CPDT), and also partners with MK9S Service Dogs, an organization that trains and certifies service dogs for Veterans. With Kinga’s help you can be confident that you will be prepared for a new arrival, break any bad dog habits and enforce and maintain good behavior in your dog.
            </p>
        </Container>
    </div>
  );
}
