import "./AltPages.css";
import React, {useState, useEffect} from "react";
import { Container, Button } from "react-bootstrap";
import greatfalls from "../images/logos/greatfalls.png";
import ccpdt from "../images/logos/ccpdt.png";
import apdt from "../images/logos/APDT.jpeg";
import homewardtrails from "../images/logos/homewardtrails.jpeg";
import lostdog from "../images/logos/lostdog.jpeg";
import luckydog from "../images/logos/luckydog.png";
import mk9s from "../images/logos/mk9s.jpeg";

export default function Partners() {
  const [mounted, setMounted] = useState(false)

  if(!mounted){
    document.body.className="approach-body";
  }

  useEffect(() =>{
    setMounted(true)
  },[])
  return (
    <Container className="partners-container">
      <h1>Partners</h1>
      <div className="partners-logos">
        <ul>
          <li>
            <div className="logo-container">
              <img src={ccpdt} />
              <div className="after">
                <h2>CCPDT</h2>
              </div>
            </div>
          </li>
          <li>
            <div className="logo-container">
              <img src={apdt} />
              <div className="after">
                <h2>APDT</h2>
              </div>
            </div>
          </li>
          <li>
            <div className="logo-container">
              <img src={homewardtrails} />
              <div className="after">
                <h2>Homeward Trails Animal Rescue</h2>
              </div>
            </div>
          </li>
          <li>
            <div className="logo-container">
              <img src={lostdog} />
              <div className="after">
                <h2>Lost Dog & Cat Rescue Foundation</h2>
              </div>
            </div>
          </li>
          <li>
            <div className="logo-container">
              <img src={mk9s} />
              <div className="after">
                <h2>MK9S</h2>
              </div>
            </div>
          </li>
          <li>
            <div className="logo-container">
              <img className="landscape" src={greatfalls} />
              <div className="after">
                <h2>Great Dogs of Great Falls</h2>
              </div>
            </div>
          </li>
          <li>
            <div className="logo-container">
              <img className="landscape" src={luckydog} />
              <div className="after">
                <h2>Lucky Dog Animal Rescue</h2>
              </div>
            </div>
          </li>
        </ul>
      </div>
      
    </Container>
  );
}
