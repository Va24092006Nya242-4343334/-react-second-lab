import React from "react";
import "./Card.css";

const Card = ({ title, description, image }) => {
  const handleClick = () => {
    alert(title);
  };

  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={handleClick}>Дізнатися більше</button>
    </div>
  );
};

export default Card;