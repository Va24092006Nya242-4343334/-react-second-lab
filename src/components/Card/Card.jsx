import React from "react";
import "./Card.css";

const Card = ({ title, description, image }) => {
    return (
      <div className="card">
        <img src={image} alt={title} className="car-image" />
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <button onClick={() => alert(title)}>Дізнатися більше</button>
      </div>
    );
  };

export default Card;