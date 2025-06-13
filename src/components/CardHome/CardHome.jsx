import React from "react";

import "./CardHome.css";
const CardHome = ({ icon, text1, text2, color, bg, bgI }) => {
  return (
    <div
      className="card_home"
      style={{
        backgroundColor: bg,
        backgroundImage: `url(${bgI})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {icon && <div className="icon_card">{icon}</div>}

      <div className="card_content">
        <h3 style={{ color: color }}>{text1}</h3>
        <p style={{ color: color }}>{text2}</p>
      </div>
    </div>
  );
};

export default CardHome;
