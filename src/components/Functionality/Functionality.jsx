import React from "react";
import FunctionCard from "../FunctionCard/FunctionCard";
import "./Functionality.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import image1 from "../../assets/13 (PSD).png"
import image2 from "../../assets/14.jpg"
import image3 from "../../assets/15.jpg"
import image4 from "../../assets/17 (PSD).png"
const Functionality = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  React.useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);
  return (
    <section className="functionality" id="functionality" ref={ref}>
      <h2>
      Omnicanal,  {" "}
        <motion.span
          className="typewriter"
          initial={{ x: 50, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          la solution
        </motion.span>{" "}
        qui englobe tous vos{" "}
        <motion.span
          className="typewriter"
          initial={{ x: 50, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          besoin
        </motion.span>
      </h2>
      <div className="cardContent">
        <div className="duos">
          <FunctionCard img={image1} text={"Création de stand 3D"} />
          <FunctionCard img={image2} text={"Shooting Institutionnel"} />
     
        </div>
        <div className="solo">
          <FunctionCard img={image3} text={"Habillage Bâtiment et Véhicules"} />
        </div>
        <div className="duos">
          <FunctionCard img={image4} text={"Création de catalogue"} />
          <FunctionCard img={image4} text={"Animations pour événements"} />
        
        </div>
      </div>
    </section>
  );
};

export default Functionality;
