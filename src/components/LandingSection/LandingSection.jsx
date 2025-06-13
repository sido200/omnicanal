import React from "react";
import CardHome from "../CardHome/CardHome";
import "./LandingSection.css";
import image from "../../assets/image.jpg";
import { FiLayers, FiUsers, FiArchive } from "react-icons/fi";
const LandingSection = () => {
  return (
    <section className="LandingSection">
      <h2>Grow your buisness faster</h2>
      <p>
        Attract more user and grow your buiness fast with us. contact us today
        to get more details
      </p>
      <div className="button">
        <button className="primary-button">Start a project</button>
        <button className="secondary-button">Check our work</button>
      </div>
      <div className="home_section_card">
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
      <div className="open">
        <span>
          <span></span>
        </span>
        <p>Open for new projects and collaboration</p>
      </div>
    </section>
  );
};

export default LandingSection;
