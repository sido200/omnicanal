import React from "react";
import FunctionCard from "../FunctionCard/FunctionCard";
import "./Functionality.css";
const Functionality = () => {
  return (
    <section className="functionality" id="functionality">
      <h2>
        Blend <span>functionality</span> with <span>aesthetics</span>
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
