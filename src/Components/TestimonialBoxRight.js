import { Card } from "react-bootstrap";

export default function TestimonialBoxRight(props) {
    return(
            <div className="testimonial-container">
                <div className="testimonials-box">
                    <p className="testimonials-text">{props.text}</p>
                    <p className="testimonials-text">{props.text2}</p>
                </div>
                <Card className="my-card">
                    <Card.Img className="testimonials-image testimonials-bigred" src={props.image} alt="Big Red"/>
                    <Card.ImgOverlay>
                        <Card.Title className="testimonials-title">{props.title}</Card.Title>
                    </Card.ImgOverlay>
                </Card>
            </div>
        
    );
}