import React, { useState } from "react";
import "./Portfolio.css";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import functionImage from "../../assets/function.jpg";
import PortfolioCard from "../../components/PortfolioCard/PortfolioCard";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",

  border: "none",
  boxShadow: 24,
  p: 0,
  borderRadius: "24px",

};

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState(false);

  const handleFilterClick = (category) => {
    setFilter(category);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const categories = [
    "All",
    "Communication",
    "Web Development",
    "Design",
    "Business",
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
          <Swiper
         
            navigation={true}
         
        
            keyboard={true}
            modules={[Navigation, Keyboard]}
            className="mySwiper3"
          >
       
              <SwiperSlide  className="swiper-slide-custom">
                <img src={functionImage} alt={`Slide`} />
              </SwiperSlide>
              <SwiperSlide  className="swiper-slide-custom">
                <img src={functionImage} alt={`Slide`} />
              </SwiperSlide>
              <SwiperSlide  className="swiper-slide-custom">
                <img src={functionImage} alt={`Slide`} />
              </SwiperSlide>
    
          </Swiper>

       
            <button className="button-modal-portfolio">
              Let’s talk <FaLongArrowAltRight />
            </button>
       
        </Box>
      </Modal>

      <h1>Portfolio</h1>
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
        {[...Array(6)].map((_, index) => (
          <PortfolioCard key={index} click={handleOpen} />
        ))}
      </div>
    </main>
  );
};

export default Portfolio;
