import { Card } from "react-bootstrap";

export default function TestimonialBox(props) {
    return(
            <div className="testimonials-box">
                <Card className="my-card">
                    <Card.Img className="testimonials-image testimonials-bigred" src={props.image} alt="Big Red"/>
                    <Card.ImgOverlay>
                        <Card.Title className="testimonials-title">{props.title}</Card.Title>
                    </Card.ImgOverlay>
                </Card>
                <h2>The Challenge</h2>
                <p className="testimonials-text">{props.text}</p>
                <h2>The Solution</h2>
                <p className="testimonials-text">{props.text2}</p>
            </div>
        
    );
}