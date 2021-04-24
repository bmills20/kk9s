import "./AltPages.css";
import React, {useState, useEffect} from "react";
import { Container, Button, Card, ListGroup, ListGroupItem, Row, Form, Col } from "react-bootstrap";
import { motion, useAnimation, div, path, svg } from "framer-motion";

export default function Contact() {
  const [mounted, setMounted] = useState(false)

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
          <Form>
              <Form.Row>
                  <Form.Group as={Col}>
                      <Form.Label>Your Name</Form.Label>
                      <Form.Control as="textarea" rows={1} placeholder="Your name goes here..." name="name" required/>
                  </Form.Group>
                  <Form.Group as={Col}>
                      <Form.Label>Your Email address</Form.Label>
                      <Form.Control type="email" placeholder="name@example.com" name="email" required/>
                  </Form.Group>
              </Form.Row>
              <Form.Group>
                  <Form.Label>Subject</Form.Label>
                  <Form.Control as="textarea" rows={1} placeholder="Subject goes here..." name="subject" required/>
              </Form.Group>
              
              <Form.Group>
                  <Form.Label>Message content</Form.Label>
                  <Form.Control as="textarea" placeholder="Message content goes here..." rows={3} name="message" required/>
              </Form.Group>
              <Button variant="outline-light" type="submit">
                  Submit
              </Button>
          </Form>
      </Container> 
  );
}