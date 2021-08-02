import React from "react";
import { Card, Carousel, Container } from "react-bootstrap";
import michele1 from "../images/Michele.jpeg"
import michele2 from "../images/Michele2.jpeg"
import litter1 from "../images/litter1.jpeg"
import litter2 from "../images/litter2.jpeg"

export default function TestimonialBox(props) {
    
    const GetCarousel = () => {
        if(props.carousel){
            const carouselImg = props.carousel;
            const carouselItems = carouselImg.map((image) =>
                <Carousel.Item className="my-item">
                    <img className="testimonials-car-image" src={image}/>
                </Carousel.Item>
                
            );
            return (
                <Carousel className="testimonials-my-carousel">
                    {carouselItems}
                </Carousel>
            );
        }
    }

    return(
            <Container className="testimonial-full-container">
                <div className="blockquote">
                    <h2>{props.quote}</h2>
                </div>
                <div className="testimonial-container">
                    {props.carousel ?
                        <GetCarousel/>
                    :
                    <Card className="my-card">
                        <Card.Img className="testimonials-image testimonials-bigred" src={props.image} alt="Big Red"/>
                        <Card.ImgOverlay>
                            <Card.Title className="testimonials-title">{props.title}</Card.Title>
                        </Card.ImgOverlay>
                    </Card>}
                    <div className="testimonials-box">
                        <p className="testimonials-text">{props.text}</p>
                    </div>
                </div>
            </Container>
    );
}