import React from "react";
import { swiperText, swiperImg } from "../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // ✅ Autoplay 추가

const SwiperArea = () => {
  return (
    <>
      {/* 총 두 종류의 Swiper가 들어가야 한다. */}
      <section className="swiperArea">
        <div className="swiperBlock">
          <h1 data-aos="fade-up" data-aos-delay="400" className="swiperBlock__title">
            {swiperText.title[0]}
          </h1>
          <p data-aos="fade-up" data-aos-delay="450" className="swiperBlock__subtitle">
            {swiperText.subtitle[0]}
          </p>
          <Swiper
            data-aos="zoom-in"
            className="swiper__parent"
            modules={[Autoplay]} // ✅ Autoplay 추가
            spaceBetween={50} // 슬라이드 간격
            slidesPerView={5} // 한 번에 보여줄 슬라이드 개수
            loop={true} // ✅ 무한 반복
            autoplay={{ 
              delay: 1800, // ✅ 1초마다 자동 슬라이드
              disableOnInteraction: false, // ✅ 사용자 인터랙션 후에도 자동 슬라이드 유지
            }}
            pagination={{ clickable: true }} // 페이지네이션 활성화
          >
            <SwiperSlide>
              <img src={swiperImg.first[0]} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={swiperImg.first[1]} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={swiperImg.first[2]} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={swiperImg.first[3]} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={swiperImg.first[4]} alt="" />
            </SwiperSlide>
            <SwiperSlide>
             <img src={swiperImg.first[5]} alt="" />
            </SwiperSlide>
            <SwiperSlide>
             <img src={swiperImg.first[6]} alt="" />
            </SwiperSlide>
            <SwiperSlide>
             <img src={swiperImg.first[7]} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="swiperBlock">
          <h1 data-aos="fade-up" data-aos-delay="400" className="swiperBlock__title">
            {swiperText.title[1]}
          </h1>
          <p  data-aos="fade-up" data-aos-delay="450" className="swiperBlock__subtitle">
            {swiperText.subtitle[1]}
          </p>
          <Swiper
            data-aos="zoom-in"
            className="swiper__parent"
            modules={[Autoplay]} // ✅ Autoplay 추가
            spaceBetween={50} // 슬라이드 간격
            slidesPerView={5} // 한 번에 보여줄 슬라이드 개수
            loop={true} // ✅ 무한 반복
            autoplay={{ 
              delay: 1800, // ✅ 1초마다 자동 슬라이드
              disableOnInteraction: false, // ✅ 사용자 인터랙션 후에도 자동 슬라이드 유지
            }}
            pagination={{ clickable: true }} // 페이지네이션 활성화
          >
            <SwiperSlide>
              <img src={swiperImg.second[0]} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={swiperImg.second[1]} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={swiperImg.second[2]} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={swiperImg.second[3]} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={swiperImg.second[4]} alt="" />
            </SwiperSlide>
            <SwiperSlide>
             <img src={swiperImg.second[5]} alt="" />
            </SwiperSlide>
            <SwiperSlide>
             <img src={swiperImg.second[6]} alt="" />
            </SwiperSlide>
            <SwiperSlide>
             <img src={swiperImg.second[7]} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="swiperBlock">
          <h1 data-aos="fade-up" data-aos-delay="400" className="swiperBlock__title">
            {swiperText.title[2]}
          </h1>
          <p data-aos="fade-up" data-aos-delay="450" className="swiperBlock__subtitle">
            {swiperText.subtitle[2]}
          </p>
          <Swiper
            data-aos="zoom-in"
            className="swiper__parent"
            modules={[Autoplay]} // ✅ Autoplay 추가
            spaceBetween={50} // 슬라이드 간격
            slidesPerView={5} // 한 번에 보여줄 슬라이드 개수
            loop={true} // ✅ 무한 반복
            autoplay={{ 
              delay: 1800, // ✅ 1초마다 자동 슬라이드
              disableOnInteraction: false, // ✅ 사용자 인터랙션 후에도 자동 슬라이드 유지
            }}
            pagination={{ clickable: true }} // 페이지네이션 활성화
          >
            <SwiperSlide>
              <img src={swiperImg.third[0]} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={swiperImg.third[1]} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={swiperImg.third[2]} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={swiperImg.third[3]} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={swiperImg.third[4]} alt="" />
            </SwiperSlide>
            <SwiperSlide>
             <img src={swiperImg.third[5]} alt="" />
            </SwiperSlide>
            <SwiperSlide>
             <img src={swiperImg.third[6]} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>

      </section>

    </>
  )
}

export default SwiperArea;