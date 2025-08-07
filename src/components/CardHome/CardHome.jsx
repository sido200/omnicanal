import { useEffect, useState } from "react";
import "./CardHome.css";

const CardHome = ({ icon, text1 = "", text2, color, bg, bgI,icon2 }) => {
  const [count, setCount] = useState(0);

  // Vérifie si text1 est un nombre avec ou sans symbole
  const match = text1?.toString().match(/^(\d+(?:\.\d+)?)(\D*)$/);
  const targetNumber = match ? parseFloat(match[1]) : null;
  const symbol = match ? match[2] : "";

  useEffect(() => {
    if (targetNumber === null) return; // Pas un nombre => pas d'animation

    const delay = 2000; // 2 secondes
    const duration = 3000;
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const increment = targetNumber / totalSteps;

    let start = 0;
    let intervalId;

    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        start += increment;
        if (start >= targetNumber) {
          start = targetNumber;
          clearInterval(intervalId);
        }
        setCount(Number(start.toFixed(0)));
      }, stepTime);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [targetNumber]);

  // Détermine ce qu'on doit afficher dans le <h3>
  let contentToDisplay = null;
  if (!text1) {
    contentToDisplay = null; // Rien du tout
  } else if (targetNumber !== null) {
    contentToDisplay = `${count}${symbol}`; // Animation
  } else {
    contentToDisplay = text1; // Texte normal
  }

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
        {contentToDisplay && (
          <h3 style={{ color: color, alignItems:"center",display:"flex",gap:"5px" }}> {icon2} {contentToDisplay}</h3>
        )}
        {text2 && <p style={{ color: color }}>{text2}</p>}
      </div>
    </div>
  );
};

export default CardHome;
