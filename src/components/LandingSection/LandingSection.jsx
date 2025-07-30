import CardHome from "../CardHome/CardHome";
import "./LandingSection.css";
import image from "../../assets/01.webp";
import image2 from "../../assets/2.jpg";
import image3 from "../../assets/3.jpg";
import image4 from "../../assets/4.jpg";
import image5 from "../../assets/5.jpg";
import "animate.css/animate.min.css";
import { FiLayers, FiUsers, FiArchive } from "react-icons/fi";
import { FaInfinity } from "react-icons/fa6";
import { MdOutlineFactCheck } from "react-icons/md";
const LandingSection = () => {
  return (
    <section className="LandingSection">
      <h2 className="animate__animated animate__zoomIn animate__delay-0.2s">Expand your brand</h2>
      <p className="animate__animated animate__zoomIn animate__delay-1s">
      Donnez vie à votre marque et laisser là grandir comme jamais auparavant avec nos conseil d'expert. 

Avec Omnicanal, devenez original, partou
      </p>
      <div className="button animate__animated animate__fadeInUp animate__delay-1s">
        <button className="primary-button">Passer au 360</button>
        <button className="secondary-button">Nos travaux</button>
      </div>
      <div className="home_section_card animate__animated animate__fadeInUp animate__delay-2s">
        <CardHome bgI={image} />
        <CardHome
        bgI={image2}
          icon={<FiLayers />}
          text1={"20+"}
          text2={"d'expérience dans le domaine pharmaceutique"}
          bg={"black"}
          color={"white"}
        />
        <CardHome
          icon={<FiUsers />}
          text1={"360°"}
          text2={"Une polyvalence qui vous garantie un visibilité omnicanal"}
          bgI={image3}
          color={"white"}
        />
        <CardHome
          icon={<FiArchive />}
          icon2={<FaInfinity />}
          text1={"+"}
          text2={"Une créativité sans limite pour tous vos projets"}
          bgI={image4}
          color={"white"}
        />
        <CardHome bgI={image5}   icon={<MdOutlineFactCheck  />} bg={"black"} text1={"3.0"} text2={"Faites vous remarquer sur les médias digitaux avec des stratégies faites sur mesure"} color={"white"} />
      </div>
      <div className="open animate__animated animate__fadeInUp animate__delay-3s">
        <span>
          <span></span>
        </span>
        <p>Open for new projects and collaboration</p>
      </div>
    </section>
  );
};

export default LandingSection;
