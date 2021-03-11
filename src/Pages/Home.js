import React from "react";
import { Container } from "react-bootstrap";
import "./Home.css";

export default function Home() {
  return (
    <div className="splash">
      <div className="main-content">
        <h1 className="text-center">Getting a new dog?</h1>
        <h2 className="text-center">...or have a stubborn one and need help?</h2>
        <p className="lead text-center">
          "Can my old dog learn new tricks?"
        </p>
        <p className="lead text-center">
          "Is there such a thing as an enjoyable stroll with my dog?"
        </p>
        <p className="lead text-center">
          "How can I stop my puppy from crying all-night and peeing everywhere?"
        </p>
        <p className="lead text-center">"What do I do? Help!"</p>
        <div>
          <Container>
            <h1>Test</h1>
          </Container>
        </div>
      </div>
    </div>
  );
}
