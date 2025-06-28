import React from "react";
import "./ServiceSection.css";
import image from "../../assets/home.jpg";
import { FaRegEdit } from "react-icons/fa";
import { LuPenTool } from "react-icons/lu";
import { FiAward, FiBook } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Autoplay } from "swiper/modules";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const serviceItems = [
  {
    icon: <FaRegEdit />,
    title: "UX/UI Design",
    desc: "Attract more users and grow your business fast with us. Contact us today to get more details",
  },
  {
    icon: <LuPenTool />,
    title: "Logo & Branding",
    desc: "Attract more users and grow your business fast with us. Contact us today to get more details",
  },
  {
    icon: <FiAward />,
    title: "Digital Marketing",
    desc: "Attract more users and grow your business fast with us. Contact us today to get more details",
  },
  {
    icon: <FiBook />,
    title: "Pitchdecks",
    desc: "Attract more users and grow your business fast with us. Contact us today to get more details",
  },
];

const ServiceSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  React.useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <section className="service_section" ref={ref}>
   <h2>
  A Range of{" "}
  <motion.span
    className="typewriter"
    initial={{ x: 50, opacity: 0 }}
    animate={inView ? { x: 0, opacity: 1 } : {}}
    transition={{ duration: 0.6, delay: 0.3 }}
  >
    services
  </motion.span>{" "}
  to elevate your{" "}
  <motion.span
    className="typewriter"
    initial={{ x: 50, opacity: 0 }}
    animate={inView ? { x: 0, opacity: 1 } : {}}
    transition={{ duration: 0.6, delay: 0.8 }}
  >
    project
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
          >
            <SwiperSlide><img src={image} alt="" /></SwiperSlide>
            <SwiperSlide><img src={image} alt="" /></SwiperSlide>
          </Swiper>
        </motion.div>

        <div className="right_service">
          <ul>
            {serviceItems.map((item, index) => (
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
