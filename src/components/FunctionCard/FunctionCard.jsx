import React from "react";
import "./FunctionCard.css";
import functionImage from "../../assets/function.jpg"; // Adjust the path as necessary
const FunctionCard = () => {
  return (
    <div className="function_card">
      <img src={functionImage} alt="function" />
      <p>Branding - new samsung graphic charter</p>
    </div>
  );
};

export default FunctionCard;
