import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Autoplay } from "swiper/modules";
import "./Partener.css";
import image1 from "../../assets/Partener.png";

export default function Partener() {
  return (
    <div className="Partener" id="Partener">
      <div className="title-board">
        <h2>Trusted by this company</h2>
      </div>

      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        speed={2500}
        autoplay={{
          delay: -2500,
          disableOnInteraction: false,
        }}
        loop={true}
        freeMode={true}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide className="swiper-slide-custom">
          <img src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-custom">
          <img src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-custom">
          <img src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-custom">
          <img src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-custom">
          <img src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-custom">
          <img src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-custom">
          <img src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-custom">
          <img src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-custom">
          <img src={image1} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
