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
import image1 from "../../assets/49-1.png"
import image2 from "../../assets/49-2.png"
import image3 from "../../assets/49-3.png"
import image4 from "../../assets/49-4.png"
import image5 from "../../assets/49-5.png"
import image2_1 from "../../assets/50-1.png"
import image2_2 from "../../assets/50-2.png"
import image2_3 from "../../assets/50-3.png"
import image2_4 from "../../assets/50-4.png"
import image2_5 from "../../assets/50-5.png"
import img51_1 from '../../assets/51.jpg';
import img51_2 from '../../assets/51-2.jpg';
import img51_3 from '../../assets/51-3.jpg';
import img51_4 from '../../assets/51-4.jpg';
import img51_5 from '../../assets/51-5.jpg';
import img51_6 from '../../assets/51-6.jpg';
import img51_6webp from '../../assets/51-6.webp';
import img51_7 from '../../assets/51-7.jpg';
import img51_8webp from '../../assets/51-8.webp';
import img51_9 from '../../assets/51-9.jpg';
import img51_10 from '../../assets/51-10.jpg';
import img51_11 from '../../assets/51-11.jpg';
import img51_12webp from '../../assets/51-12.webp';
import img51_13 from '../../assets/51-13.jpg';
import img51_15 from '../../assets/51-15.jpg';
import vod51 from "../../assets/51-14.mp4"
import img52_1 from "../../assets/52-1.jpg"
import img52_2 from "../../assets/52-2.png"
import vod53 from "../../assets/53.mp4"
import img54_1 from "../../assets/54.png"
import img54_2 from "../../assets/54-2.png"
import img61_1 from '../../assets/61.jpg';
import img61_2 from '../../assets/61-2.jpg';
import img61_3 from '../../assets/61-3.jpg';
import img61_4 from '../../assets/61-4.jpg';
import img61_5 from '../../assets/61-5.jpg';
import img61_6 from '../../assets/61-6.jpg';
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
  const [selectedItem, setSelectedItem] = useState(null);

  const handleFilterClick = (category) => {
    setFilter(category);
  };

  const handleOpen = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const categories = [
    "All",
    "Communication",
    "Web Development",
    "Design",
    "Business",
  ];

  // Fake data for portfolio items (ajoute un tableau d'images pour chaque item)
  const portfolioData = [
    {
      title: "Nouvelle Identité Noua",
      description: "Noua.",
      images: [image1, image2, image3, image4, image5],
      category: "Design",
    },
    {
      title: "Nouvelle Identité Merinal",
      description: "Merinal",
      images: [image2_1, image2_2, image2_3, image2_4, image2_5],
      category: "Design",
    },
    {
      title: "Social Media",
      description: "Social Media",
      images: [img51_1, img51_2, img51_3, img51_4, img51_5, img51_6, img51_6webp, img51_7, img51_8webp, img51_9, img51_10, img51_11, img51_12webp, img51_13,vod51, img51_15],
      category: "Communication",
    },
    {
      title: "Habillage Building Merinal",
      description: "Merinal",
      images: [img52_1,img52_2],
      category: "Business",
    },
    {
      title: "Vidéo unité de production Merinal",
      description: "Merinal",
      images: [image2_1, vod53],
      category: "Communication",
    },
    {
      title: "Packaging Progynelle",
      description: " Progynelle",
      images: [img54_1,img54_2],
      category: "Business",
    },
    {
      title: "Identité Imagerie Merinal",
      description: " Merinal",
      images: [img61_1, img61_2, img61_3, img61_4, img61_5, img61_6],
      category: "Communication",
    },
  ];

  // Filtered data based on selected category
  const filteredData =
    filter === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.category === filter);

  return (
    <main className="service_page">
    <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style} className="modal_service">
    {selectedItem && (
      <Swiper
        navigation={true}
        keyboard={true}
        modules={[Navigation, Keyboard]}
        className="mySwiper3"
        onSlideChange={(swiper) => {
          const activeSlide = swiper.slides[swiper.activeIndex];
          const video = activeSlide.querySelector('video');
          if (video) {
            video.play();
          }
          // Arrêter les autres vidéos si elles existent
          swiper.slides.forEach((slide) => {
            const otherVideo = slide.querySelector('video');
            if (otherVideo && otherVideo !== video) {
              otherVideo.pause();
              otherVideo.currentTime = 0;
            }
          });
        }}
      >
        {selectedItem.images.map((media, idx) => {
          const isVideo = typeof media === "string" && (media.endsWith(".mp4") || media.endsWith(".webm") || media.endsWith(".ogg"));
          return (
            <SwiperSlide className="swiper-slide-custom" key={idx}>
              {isVideo ? (
                <video controls style={{ width: "100%" }}>
                  <source src={media} />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img src={media} alt={`Slide ${idx + 1}`} />
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    )}
    <button className="button-modal-portfolio">
      Let’s talk <FaLongArrowAltRight />
    </button>
  </Box>
</Modal>

      <h1>Portfolio</h1>
      <h3>
        Our Work
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
        {filteredData.map((item, index) => (
          <PortfolioCard
            key={index}
            click={() => handleOpen(item)}
            title={item.title}
            description={item.description}
            image={item.images[0]}
          />
        ))}
      </div>
    </main>
  );
};

export default Portfolio;
