import React from "react";
import "./Heading.css";
const Heading = ({ word1, word2, backText }) => {
  return (
    <div className="page_heading text-center">
      <h1 backText={backText}>
        {word1} <span>{word2}</span>{" "}
      </h1>
    </div>
  );
};

export default Heading;
