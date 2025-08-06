import React from "react";
import "./ServiceSection.css";
import image from "../../assets/home.jpg";
import { FaRegEdit } from "react-icons/fa";
import { LuPenTool } from "react-icons/lu";
import { FiAward, FiBook, FiPackage, FiPrinter } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Autoplay } from "swiper/modules";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { MdEvent } from "react-icons/md";
import image1 from "../../assets/6 (PSD).jpeg"
import image2 from "../../assets/7 (PSD).jpeg"
import image3 from "../../assets/8 (PSD).jpeg"
import image4 from "../../assets/9 (PSD).jpeg"
import image5 from "../../assets/10 (PSD).jpeg"
import image6 from "../../assets/11.png"
import image7 from "../../assets/12.jpg"
const serviceItems = [
  {
    icon: <FiAward />,
    title: "Digital Marketing",
    desc: "Gagnez en notoriété, générer des leads et devenez un carrefour du 2.0 grâce à des stratégie 100% adaptées",
  },
  {
    icon: <FaRegEdit />,
    title: "Consulting Marketing",
    desc: "Plus de 20 ans d'expertise dans au service de votre marque et ses ambitions",
  },
  {
    icon: <LuPenTool />,
    title: " Branding",
    desc: "Votre marque n'est pas seulement un logo. Donnez lui une âme et une véritable identité grâce à nos service de branding",
  },
  {
    icon: <FiPackage />,
    title: "Création de packaging",
    desc: "Du primaire au secondaire, marquez les esprit et donner le coup de foudre à vos clients au premier regard",
  },
];
const serviceItems2 = [
  {
    icon: <HiOutlineSpeakerphone  />,
    title: "Création audiovisuelle",
    desc: "Faites de vos films d'entreprise une œuvre inoubliable et de vos reels et photos RS un contenu viral",
  },
  {
    icon: <MdEvent  />,
    title: "Organisation d'événements",
    desc: "Brillez de milles feux et faites de vos événements l'occasion à ne pas rater",
  },
  {
    icon: <FiPrinter  />,
    title: " Impression Numérique",
    desc: "Notre Atelier d'impression vous garantie une qualité irréprochable pour toute impression papier",
  },
  {
    icon: <FiPrinter  />,
    title: " Impression Numérique",
    desc: "Notre Atelier d'impression vous garantie une qualité irréprochable pour toute impression papier",
  },
 
];

const ServiceSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  // Ajout de l'état pour l'index du slide actif
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  // Choix de la liste selon le slide actif
  const currentItems = activeIndex === 0 ? serviceItems : serviceItems2;

  return (
    <section className="service_section" ref={ref}>
      <h2>
        Donnez une{" "}
        <motion.span
          className="typewriter"
          initial={{ x: 50, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          nouvelle
        </motion.span>{" "}
        dimension à vos{" "}
        <motion.span
          className="typewriter"
          initial={{ x: 50, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          projets
        </motion.span>
      </h2>

      <div className="service_content">
        <motion.div
          className="left_service"
          initial={{ x: -100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            freeMode={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[FreeMode, Autoplay]}
            className="mySwiper"
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          >
            <SwiperSlide>
              <img src={image1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image3} alt="" />
                </SwiperSlide>
            <SwiperSlide>
              <img src={image4} alt="" />
                </SwiperSlide>
            <SwiperSlide>
              <img src={image5} alt="" />
                </SwiperSlide>
            <SwiperSlide>
              <img src={image6} alt="" />
                </SwiperSlide>
            <SwiperSlide>
              <img src={image7} alt="" />
                </SwiperSlide>
        
         
          </Swiper>
        </motion.div>

        <div className="right_service">
          <ul>
            {currentItems.map((item, index) => (
              <motion.li
                key={index}
                initial={{ x: 100, opacity: 0 }}
                animate={controls}
                variants={{
                  visible: {
                    x: 0,
                    opacity: 1,
                    transition: {
                      delay: 0.3 + index * 0.3,
                      duration: 0.6,
                      ease: "easeOut",
                    },
                  },
                }}
              >
                <div className="icon_service">{item.icon}</div>
                <div className="text_servi">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      <button>Learn more</button>
    </section>
  );
};

export default ServiceSection;
