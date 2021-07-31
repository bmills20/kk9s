import { Card, Container } from "react-bootstrap";

export default function TestimonialBoxRight(props) {
    return(
            <Container className="testimonial-full-container">
                <div className="blockquote">
                    <h2>{props.quote}</h2>
                </div>
                <div className="testimonial-container">
                    <div className="testimonials-box">
                        <p className="testimonials-text">{props.text}</p>
                    </div>
                    <Card className="my-card">
                        <Card.Img className="testimonials-image testimonials-bigred" src={props.image} alt="Big Red"/>
                        <Card.ImgOverlay>
                            <Card.Title className="testimonials-title">{props.title}</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                </div>
            </Container>
        
    );
}