import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Blog from "./blog";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function swip({ arreglo }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {arreglo.map((arreglo, index) => (
        <SwiperSlide key={index}>
          <Blog articulo={arreglo} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
