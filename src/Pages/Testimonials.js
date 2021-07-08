import React, {useEffect, useState} from "react";
import { Container, Card, ListGroupItem, ListGroup, Button, Overlay } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import "./Home.css";
import { motion, useAnimation } from "framer-motion";
import { Element } from "react-scroll";
import bigred from "../images/Big_Red_Cropped.png";
import TestimonialBox from "../Components/TestimonialBox";

export default function Testimonials() {
    const controls = useAnimation();
    const [mounted, setMounted] = useState(false);
    const bigredTest = (
        <React.Fragment>
            Our Big Red has always been just the sweetest Vizla. At almost two-years-old, though, he surprised us with some defensive behavior, primarily towards men. It all kind of started quite suddenly; he would bark and growl and seemed to have moments where he appeared threatened, but we could not understand why. The sudden change in our easygoing, friendly guy was upsetting, to say the least! 
            <br/><br/>After we tried working with another trainer who was not the right match for our situation, we got Kinga Niecko’s name and number from a neighbor. Kinga was immediately responsive and eager to meet our pup. Her whole approach with Red was so sensitive and methodical; one of her great strengths is clearly narrowing in on what is causing a negative response in a dog.
            <br/><br/>
        </React.Fragment>
    );
    const bigredTest2 = (
        <React.Fragment>
            Quite simply, she read him like a book. She could gauge Red’s comfort level with the training exercises, and moved at his pace in order to work him through what was upsetting him. She spent a good deal of time explaining to us and showing us what was going on in his head, and she taught us concrete ways to address the behaviors.  I was awestruck by how quickly she could not only pinpoint my dog’s exact anxieties, but also how fast she got him reacting positively to those triggers.
            <br/><br/>When she left, we felt empowered to work with him and continue the training. I want to emphasize that it is her kindness and expertise that will make her our first call with any dog behavioral dilemma we may encounter in the future!
        </React.Fragment>
    );

    useEffect(() =>{
        setMounted(true)
    },[])

    if(!mounted){
        // Loads the correct CSS for this page
        document.body.className="testimonials-body";
        // Allows for animations to wait until page finishes
        // loading all content
        document.body.classList.add("js-loading");
    }

    return (
        <Element id="testimonialsDest" className="testimonialsDest" name="testimonialsDest">
            <h1 className="text-left testimonials-header">Testimonials</h1>
            <TestimonialBox
                image={bigred}
                title={"Big Red"}
                text={bigredTest}
                text2={bigredTest2}
            />
            <br/><br />
        </Element>
    );
}