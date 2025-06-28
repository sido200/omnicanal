import "./PortfolioCard.css";
import serviceImage from "../../assets/image.jpg";
export default function PortfolioCard({ click }) {
  return (

      <div onClick={click} className="Portfolio_card">
        <img src={serviceImage} alt="service" />
        <h3>Portfolio Title</h3>
        <p>Description of the Portfolio </p>
      </div>
 
  );
}
