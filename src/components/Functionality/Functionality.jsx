import React from "react";
import FunctionCard from "../FunctionCard/FunctionCard";
import "./Functionality.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Functionality = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  React.useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);
  return (
    <section className="functionality" id="functionality" ref={ref}>
      <h2>
        Blend{" "}
        <motion.span
          className="typewriter"
          initial={{ x: 50, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          functionality
        </motion.span>{" "}
        with{" "}
        <motion.span
          className="typewriter"
          initial={{ x: 50, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          aesthetics
        </motion.span>
      </h2>
      <div className="cardContent">
        <div className="duos">
          <FunctionCard />
          <FunctionCard />
        </div>
        <div className="solo">
          <FunctionCard />
        </div>
        <div className="duos">
          <FunctionCard />
          <FunctionCard />
        </div>
      </div>
    </section>
  );
};

export default Functionality;
