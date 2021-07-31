import { Card } from "react-bootstrap";

export default function TestimonialBox(props) {
    return(
            <div className="testimonial-container">
                <Card className="my-card">
                    <Card.Img className="testimonials-image testimonials-bigred" src={props.image} alt="Big Red"/>
                    <Card.ImgOverlay>
                        <Card.Title className="testimonials-title">{props.title}</Card.Title>
                    </Card.ImgOverlay>
                </Card>
                <div className="testimonials-box">
                    <h2>{props.headerOne}</h2>
                        <div className="blockquote">
                            <h2>{props.quote}</h2>
                        </div>
                    <p className="testimonials-text">{props.text}</p>
                    <h2>{props.headerTwo}</h2>
                    <p className="testimonials-text">{props.text2}</p>
                </div>
            </div>
        
    );
}