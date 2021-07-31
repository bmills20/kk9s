import { Card, Container } from "react-bootstrap";

export default function TestimonialBox(props) {
    return(
            <Container className="testimonial-full-container">
                <div className="blockquote">
                    <h2>{props.quote}</h2>
                </div>
                <div className="testimonial-container">
                    <Card className="my-card">
                        <Card.Img className="testimonials-image testimonials-bigred" src={props.image} alt="Big Red"/>
                        <Card.ImgOverlay>
                            <Card.Title className="testimonials-title">{props.title}</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                    <div className="testimonials-box">
                        <p className="testimonials-text">{props.text}</p>
                        <p className="testimonials-text">{props.text2}</p>
                    </div>
                </div>
            </Container>
    );
}