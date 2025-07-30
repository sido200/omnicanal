import "./PortfolioCard.css";
export default function PortfolioCard({ click ,image,title, description}) {
  return (

      <div onClick={click} className="Portfolio_card">
        <img src={image} alt="service" />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
 
  );
}
