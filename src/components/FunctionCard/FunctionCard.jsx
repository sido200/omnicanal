import React from "react";
import "./FunctionCard.css";
// Adjust the path as necessary
const FunctionCard = ({img,text}) => {
  return (
    <div className="function_card">
      <img src={img} alt="function" />
      <p>{text}</p>
    </div>
  );
};

export default FunctionCard;
