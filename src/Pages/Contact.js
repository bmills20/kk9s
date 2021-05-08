import "./AltPages.css";
import React, {useState, useEffect} from "react";
import { Container, Button, Card, ListGroup, ListGroupItem, Row, Form, Col } from "react-bootstrap";
import { motion, useAnimation, div, path, svg } from "framer-motion";
// Using axios for backwards compatibility for older browsers
// Also allows for timeout callback/property in case of connection issues
import axios from 'axios';

export default function Contact() {
  const [mounted, setMounted] = useState(false)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [mailSent, setMailSent] = useState(false);
  const [isError, setIsError] = useState(null);
  const handleSubmit = e => {
    e.preventDefault();
    axios({
      method: "POST",
      /* url: `${process.env.REACT_APP_API}`, */
      url: "http://localhost:3002/send",
      timeout: 5000,
      data: {
        name: name,
        email: email,
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

  if(!mounted){
    document.body.className="contact-body";
  }

  useEffect(() =>{
    setMounted(true)
  },[])
  return(
      <Container name="contactTop" className="contact-container">
          <h1>Contact Us</h1>
          <br />
          <Form id="contact-form" onSubmit={e => { handleSubmit(e) }}>
              <Form.Row>
                  <Form.Group as={Col}>
                      <Form.Label>Your Name</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={1}
                        placeholder="Your name goes here..."
                        name="name"
                        id="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                      />
                  </Form.Group>
                  <Form.Group as={Col}>
                      <Form.Label>Your Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        name="email"
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                      />
                  </Form.Group>
              </Form.Row>
              {/* Probably don't need a subject field if we have an inquiry field
              <Form.Group>
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={1}
                    placeholder="Subject goes here..."
                    name="subject"
                    value={subject}
                    onChange={e => setSubject(e.target.value)}
                    required
                  />
              </Form.Group> */}
              
              <Form.Group>
                  <Form.Label>Message content</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Message content goes here..."
                    rows={3}
                    name="message"
                    id="message"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    required
                  />
              </Form.Group>
              <Button variant="outline-light" type="submit">
                  Submit
              </Button>
              <div>
                {mailSent && <div className="success"><br/>Thank you! Your inquiry has been sent; we will be in touch shortly.<br/><br/>A copy of your message has been sent to the email you provided.</div>}
                {isError && <div className="error"><br/>Error: message failed to send.<br/> Please check your internet connection.</div>}
              </div>
          </Form>
      </Container> 
  );
}