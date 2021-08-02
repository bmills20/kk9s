import { Card, Container, Carousel } from "react-bootstrap";
import lexi1 from "../images/lexi1.JPEG";
import lexi2 from "../images/lexi2.jpeg";

export default function TestimonialBoxRight(props) {
    
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
                    <div className="testimonials-box">
                        <p className="testimonials-text">{props.text}</p>
                    </div>
                    {props.carousel ?
                        <GetCarousel/>
                    :
                    <Card className="my-card">
                        <Card.Img className="testimonials-image testimonials-bigred" src={props.image} alt="Big Red"/>
                        <Card.ImgOverlay>
                            <Card.Title className="testimonials-title">{props.title}</Card.Title>
                        </Card.ImgOverlay>
                    </Card>}
                </div>
            </Container>
        
    );
}