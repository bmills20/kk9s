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
      headers: {"content-type": application/json},
      timeout: 5000,
      data: {
        name: name,
        email: email,
        message: message
      }
    })
      .then(result => {
        if(result.data.sent) {
          setMailSent(result.data.sent);
          setIsError(false);
        }
        else {
          setIsError(true);
        }
      })
      .catch(error => setErrror(error.message));
  }

  if(!mounted){
    document.body.className="contact-body";
  }

  useEffect(() =>{
    setMounted(true)
  },[])
  return(
      <Container className="contact-container">
          <h1>Contact Us</h1>
          <br />
          <Form onSubmit={e => { handleSubmit(e) }}>
              <Form.Row>
                  <Form.Group as={Col}>
                      <Form.Label>Your Name</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={1}
                        placeholder="Your name goes here..."
                        name="name"
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
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    required
                  />
              </Form.Group>
              <Button variant="outline-light" type="submit">
                  Submit
              </Button>
              <div>
                {mailIsSent && <div className="success">Success</div>}
                {isError && <div className="error">Error</div>}
              </div>
          </Form>
      </Container> 
  );
}