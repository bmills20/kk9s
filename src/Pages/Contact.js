import "./AltPages.css";
import React, {useState, useEffect} from "react";
import { Container, Button, Card, ListGroup, ListGroupItem, Row, Form, Col } from "react-bootstrap";
import { motion, useAnimation, div, path, svg } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
// Using axios for backwards compatibility for older browsers
// Also allows for timeout callback/property in case of connection issues
import axios from 'axios';

export default function Contact() {
  const [mounted, setMounted] = useState(false)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [referral, setReferral] = useState("");
  const [petBreed, setPetBreed] = useState("");
  const [petAge, setPetAge] = useState("");
  const [petName, setPetName] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [mailSent, setMailSent] = useState(false);
  const [isError, setIsError] = useState(null);
  const recaptchaRef = React.createRef();
  
  const onChange = value => {
    console.log("Captcha value: ",value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    axios({
      method: "POST",
      /* url: `${process.env.REACT_APP_API}`, */
      url: "https://72.167.49.37:3002/send",
      timeout: 10000,
      data: {
        name: name,
        email: email,
        phone: phone,
        location: location,
        referral: referral,
        petBreed: petBreed,
        petAge: petAge,
        petName: petName,
        subject: subject,
        message: message
      }
    })
      .then((response) => {
        if(response.data.msg === 'success') {
          setMailSent(true);
          setIsError(false);
        }
        else if(response.data.msg === 'fail'){
          setIsError(true);
        }
      })
      
  }

/*   if(!mounted){
    document.body.className="contact-body";
  }

  useEffect(() =>{
    setMounted(true)
  },[]) */
  return(
      <Container name="contactTop" className="contact-container">
        <div className="contact-title">
          <h1>Contact Us</h1>
          <h4>Have a question about our services or about KK9s? Ask away below!</h4>
        </div>
          <br />
          <Form id="contact-form" onSubmit={e => { handleSubmit(e) }}>
          <h4 className="form-label">Your info</h4>
              <Form.Row>
                 
                  <Form.Group as={Col}>
                  
                      <Form.Control
                        as="textarea"
                        rows={1}
                        placeholder="Name *"
                        name="name"
                        id="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                      />
                  </Form.Group>
                  <Form.Group as={Col}>
                      <Form.Control
                        as="textarea"
                        rows={1}
                        type="email"
                        placeholder="Email *"
                        name="email"
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                      />
                  </Form.Group>
                  </Form.Row>
              <Form.Row>
              <Form.Group as={Col}>
                      <Form.Control
                        as="textarea"
                        rows={1}
                        placeholder="Phone *"
                        name="phone"
                        id="phone"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        required
                      />
                  </Form.Group>
                <Form.Group as={Col}>
                  <Form.Control
                    as="textarea"
                    rows={1}
                    placeholder="Location (city)"
                    name="location"
                    id="location"
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                  />
                </Form.Group>
                </Form.Row>
                <Form.Row>
                <Form.Group as={Col}>
                  <Form.Control
                    as="textarea"
                    rows={1}
                    placeholder="Referral"
                    name="referral"
                    id="referral"
                    value={referral}
                    onChange={e => setReferral(e.target.value)}
                  />
                </Form.Group>
              </Form.Row>
              <h4 className="form-label">Your pet's info</h4>
              <Form.Row>
                  <Form.Group as={Col}>
                      <Form.Control
                        as="textarea"
                        rows={1}
                        placeholder="Pet's name"
                        name="petname"
                        id="petname"
                        value={petName}
                        onChange={e => setPetName(e.target.value)}
                      />
                  </Form.Group>
                  <Form.Group as={Col}>
                      <Form.Control
                        as="textarea"
                        rows={1}
                        placeholder="Pet's age"
                        name="petage"
                        id="petage"
                        value={petAge}
                        onChange={e => setPetAge(e.target.value)}
                      />
                  </Form.Group>
                  </Form.Row>
                  <Form.Row>
                  <Form.Group as={Col}>
                      <Form.Control
                        as="textarea"
                        rows={1}
                        placeholder="Pet's breed"
                        name="petbreed"
                        id="petbreed"
                        value={petBreed}
                        onChange={e => setPetBreed(e.target.value)}
                      />
                  </Form.Group>
                <Form.Group as={Col}>
                        <Form.Control as="select"
                          type="subject"
                          name="subject"
                          id="subject"
                          value={subject}
                          onChange={e => setSubject(e.target.value)}
                        >
                          <option className="default-select" value="" disabled selected>Timeline for Training</option>
                          <option>As soon as possible</option>
                          <option>0-2 Weeks</option>
                          <option>2-4 Weeks</option>
                          <option>Flexible</option>
                        </Form.Control>
                </Form.Group>
              </Form.Row>
              
              <Form.Group>
                  <Form.Control
                    as="textarea"
                    placeholder="Message"
                    rows={5}
                    name="message"
                    id="message"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                  />
              </Form.Group>
              {/*<div className="recaptcha">
              <ReCAPTCHA
                sitekey="6LdLI8wcAAAAAOmqdS0M0FjeAsxtbmuqSaDrrGQo"
                onChange={onChange}
              />
  </div>*/}
              <Button variant="outline-light" type="submit">
                  Submit
              </Button>
              <div>
                {mailSent && <div className="success"><br/>Thank you! Your inquiry has been sent; we will be in touch shortly.<br/><br/>A copy of your message has been sent to the email you provided.</div>}
                {isError && <div className="error"><br/>Error: message failed to send.<br/> Please check your internet connection and try again.</div>}
              </div>
              
          </Form>
      </Container> 
  );
}