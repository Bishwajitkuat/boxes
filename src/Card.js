import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p>Title: {props.department}</p>
      <p>Age: {props.age}</p>
    </div>
  );
};

export default Card;
