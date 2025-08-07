
import "./ServiceCard.css"; // Adjust the path as necessary
// Adjust the path as necessary
const ServiceCard = ({click,info}) => {
  return (
    <div onClick={click} className="service_card">
      <img src={info?.image} alt="service" />
      <h3>{info.title}</h3>
      <p>{info.descriptions}</p>
    </div>
  );
};

export default ServiceCard;
