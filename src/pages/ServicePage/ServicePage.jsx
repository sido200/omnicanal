import React, { useState } from "react";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import "./ServicePage.css"; // Adjust the path as necessary
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import { IoClose } from "react-icons/io5";
import functionImage from "../../assets/function.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Autoplay } from "swiper/modules";
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

  const handleFilterClick = (category) => {
    setFilter(category);
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const categories = [
    "All",
    "Communication",
    "Web Development",
    "Design",
    "Business",
  ];
const serviceData=[
  {
    title: "Consulting Marketing",
    description: "Crafting responsive and dynamic websites tailored to your business needs.",
    image: functionImage,
  },
  {
    title: "Digital Marketing",
    description: "Boost your online presence with our comprehensive digital marketing strategies.",
    image: functionImage,
  },
  {
    title: "Creation de packaging",
    description: "Designing unique packaging that stands out on the shelves.",
    image: functionImage,
  },
  {
    title: "Branding",
    description: "Building a strong brand identity that resonates with your audience.",
    image: functionImage,
  },
  {
    title: "Organisation d'événements",
    description: "Planning and executing memorable events that leave a lasting impression.",
    image: functionImage,
  },
  {
    title: "Creation audiovisuelle",
    description: "Producing high-quality audiovisual content to engage your audience.",
    image: functionImage,
  },
  {
    title: "Impression sur tout support",
    description: "Offering high-quality printing services on various materials.",
    image: functionImage,
  },
]
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
              <h3>Audit digital</h3>
              <p>Évaluez vos performances actuelles</p>
            </div>
          </div>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae
            sapien maximus, ornare justo a, lacinia tellus. Pellentesque
            habitant morbi tristique senectus
          </p>
          <Swiper
            slidesPerView={5}
            spaceBetween={10}
            speed={2500}
            pagination={{
              clickable: true,
            }}
            className="mySwiper2"
            modules={[FreeMode]}
            freeMode={true}
          >
            {}
            <SwiperSlide className="swiper-slide-custom">
              <img src={functionImage} alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-custom">
              <img src={functionImage} alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-custom">
              <img src={functionImage} alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-custom">
              <img src={functionImage} alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-custom">
              <img src={functionImage} alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-custom">
              <img src={functionImage} alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-custom">
              <img src={functionImage} alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-custom">
              <img src={functionImage} alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide-custom">
              <img src={functionImage} alt="" />
            </SwiperSlide>
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
            click={handleOpen}
            info={{
              title: service.title,
              description: service.description,
              image: service.image,
            }}
          />
        ))}
      
      </div>
    </main>
  );
};

export default ServicePage;
