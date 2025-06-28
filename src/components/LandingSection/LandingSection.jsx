import CardHome from "../CardHome/CardHome";
import "./LandingSection.css";
import image from "../../assets/image.jpg";
import "animate.css/animate.min.css";
import { FiLayers, FiUsers, FiArchive } from "react-icons/fi";
const LandingSection = () => {
  return (
    <section className="LandingSection">
      <h2 className="animate__animated animate__zoomIn animate__delay-0.2s">Grow your business faster</h2>
      <p className="animate__animated animate__zoomIn animate__delay-1s">
        Attract more users and grow your business fast with us. Contact us today
        to get more details
      </p>
      <div className="button animate__animated animate__fadeInUp animate__delay-1s">
        <button className="primary-button">Start a project</button>
        <button className="secondary-button">Check our work</button>
      </div>
      <div className="home_section_card animate__animated animate__fadeInUp animate__delay-2s">
        <CardHome bgI={image} />
        <CardHome
          icon={<FiLayers />}
          text1={"99%"}
          text2={"Attract more user and grow"}
          bg={"black"}
          color={"white"}
        />
        <CardHome
          icon={<FiUsers />}
          text1={"213+"}
          text2={"Attract more user and grow"}
          bg={"rgba(213, 205, 255, 1)"}
          color={"rgba(123, 0, 255, 1)"}
        />
        <CardHome
          icon={<FiArchive />}
          text1={"4+"}
          text2={"Years of experience in the field"}
          bg={"rgba(255, 233, 205, 1)"}
          color={"black"}
        />
        <CardHome bg={"black"} text1={"Latest project"} color={"white"} />
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
