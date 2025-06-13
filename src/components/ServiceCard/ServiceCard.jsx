import React from "react";
import "./ServiceCard.css"; // Adjust the path as necessary
import serviceImage from "../../assets/image.jpg"; // Adjust the path as necessary
const ServiceCard = () => {
  return (
    <div className="service_card">
      <img src={serviceImage} alt="service" />
      <h3>Service Title</h3>
      <p>Description of the service offered,</p>
    </div>
  );
};

export default ServiceCard;
