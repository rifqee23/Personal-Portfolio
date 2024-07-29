import { web } from "../../obj/index.jsx";
import Card from "../Fragments/Card.jsx";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../../SwiperStyle/styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

const Project = (props) => {
  return (
    <div
      id="project"
      className="w-full pb-4 pt-12 py-10 px-4  lg:px-20 xl:px-40 "
    >
      <div className="max-w-6xl mx-auto p-4 mb-5">
        <p className="text-4xl font-bold inline border-b-4 border-pink-600 ms-4">
          Project
        </p>
      </div>
      <div className="flex flex-col items-center lg:flex-row gap-10">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {web.map((web, index) => (
            <SwiperSlide key={index}>
              <Card
                src={web.image}
                title={web.name}
                techIcons={web.icon}
                link={web.link}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Project;
