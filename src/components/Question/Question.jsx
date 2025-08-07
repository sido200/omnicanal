import  { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
const Question = () => {
  const [clickedQuestions, setClickedQuestions] = useState([0]);
  const handleClicked = (index) => {
    if (clickedQuestions.includes(index)) {
      setClickedQuestions(clickedQuestions.filter((item) => item !== index));
    } else {
      setClickedQuestions([...clickedQuestions, index]);
    }
  };
  const qst = [
    {
      qst: "Faites-vous du marketing B2B?",
      reponse: "Nos services s'adaptent à presque tous les domaines et secteurs. Petite, Moyenne ou Grand entreprise nous vous proposerons une stratégie sur mesure pour vos objectifs et votre cible",
    },
    {
      qst: "Maitrisez vous le domaine Pharma?",
      reponse: "Notre talentueuse équipe dispose de plus 20 ans d'expérience dans le domaine avec une excellente maitrise des besoin graphique du domaine",
    },
    {
      qst: "Faites vous de l'impression Offset?",
      reponse: "Non Malheureusement, notre atelier est disponible pour tous vos besoins en impression numérique",
    },
    {
      qst: "Faites vous de la 3D?",
      reponse: "Oui effectivement, que ce soit la conception de maquettes 3D à la création d'animations, vous n'avez qu'à demander",
    },
   
  ];
  return (
    <div className="left">
      <h1>{"Frequently asked questions"}</h1>
      <p>{"Question you might ask about our products and services"}</p>
      <div className="question-content">
        {qst.map((item, index) => (
          <div className="question" key={index}>
            <span onClick={() => handleClicked(index)}>
              <p>{item.qst}</p>
              <IoIosArrowForward
                className={
                  clickedQuestions.includes(index)
                    ? "active-arrow arrow"
                    : " arrow"
                }
              />
            </span>
            <div
              className={
                clickedQuestions.includes(index) ? "active-rep rep" : " rep"
              }
            >
              <p>{item.reponse}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
