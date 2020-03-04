import React from "react";
import "./card.css";
function Card(props) {
  return (
    <div className="card-container">
      <img
        alt="mosnter"
        src={`https://robohash.org/${props.monster.id}?set=set2`}
      />
      <h1>{props.monster.name}</h1>
      <p>{props.monster.email}</p>
    </div>
  );
}

export default Card;
