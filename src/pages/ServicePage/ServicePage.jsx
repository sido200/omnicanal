import React, { useState } from "react";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import "./ServicePage.css"; // Adjust the path as necessary
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import { IoClose } from "react-icons/io5";

import omni1 from "../../assets/19 (PSD).png";
import omni2 from "../../assets/18 (PSD).png";
import omni3 from "../../assets/21.png";
import omni4 from "../../assets/22 (PSD).png";
import omni5 from "../../assets/23 (PSD).png";
import omni9 from "../../assets/55 (PSD).png";
import omni10 from "../../assets/24.jpg";
import omni11 from "../../assets/25.jpg";
import omni12 from "../../assets/26.jpg";
import omni13 from "../../assets/29.jpg";
import omni14 from "../../assets/30.jpg";
import omni15 from "../../assets/31.jpg";
import omni16 from "../../assets/55.jpg";
import omni17 from "../../assets/56.jpg";
import omni18 from "../../assets/57.jpg";
import omni19 from "../../assets/39.jpg";
import omni20 from "../../assets/40.jpg";
import omni21 from "../../assets/41.jpg";
import omni22 from "../../assets/42.jpg";
import omni23 from "../../assets/43.jpg";
import omni24 from "../../assets/44.jpg";
import omni25 from "../../assets/45.jpg";
import omni26 from "../../assets/46.jpg";
import omni27 from "../../assets/47.jpg";
import omni6 from "../../assets/58.jpg";
import omni7 from "../../assets/59.jpg";
import omni8 from "../../assets/60.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode } from "swiper/modules";
import { FaLongArrowAltRight } from "react-icons/fa";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 10,
  paddingRight: 0,
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

const ServicePage = () => {
  const [filter, setFilter] = useState("all");
  const [service, setService] = useState("");

  const handleFilterClick = (category) => {
    setFilter(category);
  };
  const [open, setOpen] = useState(false);
  const handleOpen = (id) => {
    setOpen(true);
    setService(id);
  };
  const handleClose = () => setOpen(false);
  const categories = [
    "All",
    "Communication",
    "Web Development",
    "Design",
    "Business",
  ];
  const serviceData = [
    {
      title: "Stratégie marketing",
      description: "Passez la vitesse 2.0 avec Omnicanal.",
      desc: "Passez la vitesse 2.0 avec Omnicanal. Nos experts du digital ont l'expertise et le talent pour tailler des stratégies de contenu sur mesure pour votre entreprise, en effet notre travail se fait sur tous les supports digitaux incluant les réseaux sociaux Meta (Facebook, Instagram, WhatsApp), Linkedin, Tiktok, Snapchat, les supports web comme sites, blog, référencement organique (SEO), référencement payant (SEM), Google advertising incluant YouTube, et nous vous aidons à atteindre des objectifs qui vont au delà de seulement la notoriété et touchent des points plus pertinent comme la génération de lead, la fidélisation client, génération de bases de données et l'amélioration de votre image de marque",
      image: [omni2,omni10, omni11, omni12],
    },
    {
      title: "Branding",
      description: "Ne laissez pas votre marque être seulement un logo, ",
      image: [omni1,omni13, omni14, omni15],
  desc: "Ne laissez pas votre marque être seulement un logo, donnez lui sa propre personnalité, sa propre identité. Nos services de Branding feront en sorte que votre entreprise ou produit ait une identité forte, distinctive et cohérente et puisse avoir un storytelling et une tonalité consistante sur tous les canaux.",
    },
    {
      title: "Organisation d'événements ",
      description: "Faites de vos événement l'occasion à ne pas rater.",
      image: [omni6, omni7, omni8],
      desc: "Faites de vos événement l'occasion à ne pas rater. Notre agence travaille à donner une atmosphère et un charme unique à chaque événement que nous concevons et organisons en choisissant des thèmes créatifs et attirants avec une décoration qui marque le rendez-vous ainsi qu'en créant la sensation avec des activités originales qui marquent les esprits en proposant des expériences aussi divertissantes que mémorables",
    },
    { 
      title: "Impression sur tout support",
      description: "Donnez de la couleur à vos impressions. Affiches mémorables",
      image: [omni3],
      desc: "Donnez de la couleur à vos impressions. Affiches mémorables, des brochures attrayantes, ou des cartes de visite élégantes, notre expertise en impression garantit des résultats d'une qualité irréprochable sur une variété de supports. Nous assurons des couleurs vives, des détails nets, et une finition professionnelle. Confiez-nous vos projets d'impression et faites briller votre marque sous tous les angles.",
    },
    {
      title: "CRÉATION DE PACKAGING",
      description: "un travail exceptionnel pour faire en sorte que le packaging",
      image: [omni4, omni16, omni17, omni18],
      desc: "Le point le plus mémorable de votre produit est son apparence et dans notre agence on donne une attention toute particulière à ce point et nos experts du design effectuent un travail exceptionnel pour faire en sorte que le packaging de votre produit soit représentatif de votre marque et ses idéaux mais puisse marquer les esprits",
    },
    {
      title: "CONSULTING MARKETING",
      description: "Nos services de consulting en marketing pharmaceutique",
      image: [omni5,omni19, omni20, omni21, omni22, omni23],
      desc: "Nos services de consulting en marketing pharmaceutique, spécialement conçus pour vous aider à naviguer avec succès dans ce secteur complexe et réglementé. Grâce à notre expertise approfondie, nous élaborons des stratégies marketing sur mesure qui répondent aux besoins spécifiques de votre entreprise et respectent les normes de l'industrie.",
    },
    {
      title: "CRÉATION AUDIOVISUELLE",
      description: "Transformez vos idées en campagnes publicitaires percutantes",
      image: [omni9, omni24, omni25, omni26, omni27],
      desc: "Transformez vos idées en campagnes publicitaires percutantes. Que vous ayez besoin d'une vidéo promotionnelle, d'une animation dynamique ou d'un contenu visuel immersif, notre équipe d'experts créatifs maîtrisent l'art de capter l'attention et de raconter des histoires qui résonnent avec votre public cible avec une qualité d'image et de son exceptionnelle. Faites passer votre marque au niveau supérieur avec des contenus audiovisuels qui génèrent un impact durable.",
    },
  ];

  return (
    <main className="service_page">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="modal_service">
          <IoClose className="close2" onClick={handleClose} />
          <div className="header_service">
            <div className="img"></div>
            <div className="titre">
              <h3>{serviceData[service]?.title || "Audit digital"}</h3>
              <p>{serviceData[service]?.description || "Évaluez vos performances actuelles"}</p>
            </div>
          </div>
          <p className="description">
            {serviceData[service]?.desc || "Description not available"}
          </p>
          <Swiper
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1224: { slidesPerView: 3 },
            }}
            spaceBetween={10}
            speed={2500}
            pagination={{
              clickable: true,
            }}
            className="mySwiper2"
            modules={[FreeMode]}
            freeMode={true}
          >
            {serviceData[service] && (
              <>
                {serviceData[service].image.map((img, index) => (
                  <SwiperSlide key={index} className="swiper-slide-custom">
                    <img src={img} alt="" />
                  </SwiperSlide>
                ))}
              </>
            )}
          </Swiper>
          <div className="button-modal">
            <button>
              Let’s talk <FaLongArrowAltRight />
            </button>
          </div>
        </Box>
      </Modal>
      <h1>Services</h1>
      <h3>
        Bringing your <span>digital</span> vision to life
      </h3>
      <ul className="filter">
        {categories.map((category) => (
          <li
            key={category}
            className={filter === category ? "activefilter" : ""}
            onClick={() => handleFilterClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
      <div className="grid_service">
        {serviceData.map((service, index) => (
          <ServiceCard
            key={index}
            click={() => handleOpen(index)}
            info={{
              title: service.title,
              description: service.description,
              image: service.image[0],
            }}
          />
        ))}
      </div>
    </main>
  );
};

export default ServicePage;