import React, {useEffect, useState} from "react";
import { Container, Card, ListGroupItem, ListGroup, Button, Overlay, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import "./Home.css";
import { motion, useAnimation } from "framer-motion";
import { Element } from "react-scroll";
import bigred from "../images/Big_Red_Cropped.png";
import eddie from "../images/eddie.jpeg"
import bailey from "../images/bailey.jpeg"
import stoli from "../images/stoli.jpeg";
import riley from "../images/riley.jpeg";
import TestimonialBox from "../Components/TestimonialBox";
import TestimonialBoxRight from "../Components/TestimonialBoxRight";
import michele1 from "../images/Michele.jpeg"
import michele2 from "../images/Michele2.jpeg"
import {CardList} from "../Components/CardList";


export default function Testimonials() {
    const controls = useAnimation();
    const [mounted, setMounted] = useState(false);
    const emptyTest = (
        <React.Fragment>
            <br/><br/>
            <br/>
            <br/><br/>
        </React.Fragment>
    );

    const micheleImage = (
        <Carousel fade>
            <Carousel.Item>
                <img src={michele1} />
            </Carousel.Item>
        </Carousel>
    );

    const micheleTest = (
        <React.Fragment>
            Kinga Samuel is a remarkable and highly professional dog trainer and is truly an asset to the MK9s Service Dogs’ training team. As a trainer with over twelve years expericence working in the dog training industry I can unequivocally say that Kinga is one of the best trainers I have had the privlege to work with. I have known Kinga in a professional capacity since July 2019. Kinga’s passion for having a successful working relationship with both the client and the dog is demonstrated everytime she has a training session. Kinga’s vast experience with training dogs allows her to quickly adapt and modify a training plan to ensure that both members of the team will have a postive experince in that session.  Kinga has a wonderful way of balancing both the canine and human needs and is able to ensure that both are being met successfully.
            <br/><br/>
            I would highly recommend Kinga Samuel as a trainer and a service dog trainer. Kinga is very skilled at what she does and it has been a privilege to work with her.
            If you have any questions please don’t hesitate to contact me directly.
            <br/><br/>
            <i>Michele Khol<br/>
            MK9s Service Dogs<br/>
            Director of Operations and K9 Programs<br/>
            International Association of Canine Professionals Certified Dog Trainer, Certified Service Dog Trainer</i>

        </React.Fragment>
    );
    const bigredTest = (
        <React.Fragment>
            Our Big Red has always been just the sweetest Vizla. At almost two-years-old, though, he surprised us with some defensive behavior, primarily towards men. It all kind of started quite suddenly; he would bark and growl and seemed to have moments where he appeared threatened, but we could not understand why. The sudden change in our easygoing, friendly guy was upsetting, to say the least! 
            <br/><br/>After we tried working with another trainer who was not the right match for our situation, we got Kinga Niecko’s name and number from a neighbor. Kinga was immediately responsive and eager to meet our pup. Her whole approach with Red was so sensitive and methodical; one of her great strengths is clearly narrowing in on what is causing a negative response in a dog.
            <br/>
            Quite simply, she read him like a book. She could gauge Red’s comfort level with the training exercises, and moved at his pace in order to work him through what was upsetting him. She spent a good deal of time explaining to us and showing us what was going on in his head, and she taught us concrete ways to address the behaviors.  I was awestruck by how quickly she could not only pinpoint my dog’s exact anxieties, but also how fast she got him reacting positively to those triggers.
            <br/><br/>When she left, we felt empowered to work with him and continue the training. I want to emphasize that it is her kindness and expertise that will make her our first call with any dog behavioral dilemma we may encounter in the future!
        </React.Fragment>
    );
    const baileyTest = (
        <React.Fragment>
            Simply Incredible: that's the only way to describe the way Kinga was able to interact with my dog Bailey (Belgian Shepherd Malinois, 1 yr) and my roommate's dog Tripper (German Shepherd Mix, 2 yrs) from the instant she walked in the door.  The dogs listened to everything that she said to them, which was a completely new experience to us.  One of the most amazing things about working with Kinga is not only how she is able to interact effectively with the dogs, but that she is able to teach you how to teach your dog.<br/><br/>  She is dedicated to doing "homework" prior to any session she conducts by reading up on the dog's behavior, as described by the owner.  In doing this she made an immediate impact and was able to help us teach our dogs to heel, to sit down and wait to go outside after we opened a door and told them they could go out, and even to not jump up on guests entering our townhouse.  It is amazing what repetition can do for the behavior of a dog and Kinga teaches you the methods necessary to fix any behavioral problems your dog may have.<br/><br/> For this, Kinga dedicated her time after our session to returning the favor and giving us "homework" of our own, which focused on the key points to concentrate on going forward with Bailey and Tripper.  No detail goes unnoticed by Kinga and she made sure to address every matter, no matter how small, before she was satisfied that her work was complete.  I would recommend Kinga to anyone who wants to improve any aspect of their dogs behavior and I can say first hand that it is the best investment that my roommate and I have ever made for our dogs!
            <br/><br/>
            <i>Thanks so much for everything you've done for us Kinga! <br/>— Pat</i>
        </React.Fragment>
    );
    const eddieTest = (
        <React.Fragment>
            Thanks to Kinga, our family has learned to live like a family. Brendan and I were beginning to accept that Eddie, our Jack Russell Terrier was just a disobedient, stubborn and super-anxious dog. We were surprised at how quickly Kinga could actually communicate to Eddie and teach him how to be a good dog.During the first visit, it was amazing to see what a difference her guidance made. Eddie actually wanted to be a good dog. Her skills and expertise are one of a kind. It was like a lesson for everyone, not just for Eddie. Kinga proved to me that the confidence is within and that I am capable of being a leader and teaching Eddie how to obey. We now are committed to Eddie and our new puppy, Reese. What a difference simple rules and boundaries have made, playtime is now enjoyable. We are still a work in progress, but we are only moving forward thanks to Kinga's techniques and advice.
            <br/><br/>
            <i>We really couldn't of done it without your help!
            <br/>— Erica and Brendan</i>
        </React.Fragment>
    );
    const stoliTest = (
        <React.Fragment>
            Thank you so much for helping with our pup Stoli! Even after her first session I can tell we are making progress. The training techniques you went over with us are great and have been working well. We appreciated your patience with us and all our questions. We still have some practicing to do, but with our new confident attitude I know we will be able to overcome all the future training obstacles!
            <br/><br/>
            <i>Couldn't of done it with out your guidance, Thanks again!
            <br/>— Kristi & Nick</i>
        </React.Fragment>
    );
    const rileyTest = (
        <React.Fragment>
            Thanks to Kinga, we have seen such an improvement in our American Pit Bull Terrier, Riley! She has made a dramatic change in just a few weeks after our session with Kinga. We always thought that it would be impossible to get Riley to act properly, but with Kinga's techniques, we've changed our minds. She really knows what she's doing when it comes to dog behavioral training. Even when it comes to the most out of control dogs like our Riley, Kinga has things under control. So long as you make sure that you maintain the training that she teaches you and that you apply it on a daily basis, Kinga will alleviate, if not eliminate, any dog troubles that you are having. We can enjoy taking walks with Riley and not be nervous about her reactions in public now. This also helps with the bad rap that Pit Bulls get from the media. We are glad we did this.
            <br/><br/>
            <i>Thank you, Kinga!
            <br/>— Betty, Roph, and Riley</i>
        </React.Fragment>
    );
    const micheleQuote = (
        <React.Fragment>
            As a trainer with over twelve years expericence working in the dog training industry I can unequivocally say that Kinga is one of the best trainers I have had the privlege to work with.
        </React.Fragment>
    )
    const bigredQuote = (
        <React.Fragment>
            One of her great strengths is clearly narrowing in on what is causing a negative response in a dog.      
        </React.Fragment>
    );
    const baileyQuote = (
        <React.Fragment>
            Kinga teaches you the methods necessary to fix any behavioral problems your dog may have.      
        </React.Fragment>
    );
    const eddieQuote = (
        <React.Fragment>
            Kinga proved to me that the confidence is within and that I am capable of being a leader and teaching Eddie how to obey.      
        </React.Fragment>
    );
    const stoliQuote = (
        <React.Fragment>
            Even after her first session I can tell we are making progress.      
        </React.Fragment>
    );
    const rileyQuote = (
        <React.Fragment>
            Even when it comes to the most out of control dogs like our Riley, Kinga has things under control.      
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
        
        <div className="d-flex justify-content-center flex-column">
            <div className="testimonials-header">
                <h1 className="text-left">Testimonials</h1>
                <h4 style={{fontFamily: "firasans-italic"}}>See what our customers have been saying about their experience with Kinga's K9s!</h4>
            </div>
            {/* <h3 className="testimonials-blurb">Quite simply, she read him like a book.</h3> */}
            <TestimonialBox
                carousel={[michele1,michele2]}
                quote={micheleQuote}
                title={"MK9s Service Dogs"}
                text={micheleTest}
            />
            <TestimonialBox
                image={bigred}
                quote={bigredQuote}
                title={"Big Red"}
                text={bigredTest}
            />
            <TestimonialBoxRight
                image={bailey}
                quote={baileyQuote}
                title={"Bailey and Tripper"}
                text={baileyTest}
            />
            <TestimonialBox
                image={eddie}
                quote={eddieQuote}
                title={"Eddie and Reese"}
                text={eddieTest}
            />
            <TestimonialBoxRight
                image={stoli}
                quote={stoliQuote}
                title={"Stoli"}
                text={stoliTest}
            />
            <TestimonialBox
                image={riley}
                quote={rileyQuote}
                title={"Riley"}
                text={rileyTest}
            />
        </div>
    );
}