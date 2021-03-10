import React from "react";
import LoremIpsum from "../Components/LoremIpsum";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <h1 className="mt-8 mx-0 text-center">Getting a new dog?</h1>
      <h2 className="text-center">...or have a stubborn one and need help?</h2>
      <p className="lead text-center">
        "Can my old dog learn new tricks? Is there such a thing as an enjoyable stroll with my dog? How can I stop my puppy from crying all-night and peeing everywhere? What do I do? Help!"
      </p>
    </div>
  );
}
