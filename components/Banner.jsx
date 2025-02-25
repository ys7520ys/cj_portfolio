import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { bannerImg } from "../constants";
import Aos from "aos";

const Banner = () => {
  useEffect(() => {
    Aos.init({
        duration: 600, // 애니메이션 지속 시간
        once: true, // 한 번만 실행되도록 설정
    });

    Aos.refresh(); // 새로고침 시 다시 초기화
  }, []);
  return (
    <section className="home__banner" style={{ overflow: "hidden"}}>
      <div className="home_container">
        <div data-aos="fade-up-right" data-aos-delay="100" className="animation-box1">
          <img src={bannerImg[0]} alt="" />
        </div>
        <div data-aos="fade-up-left" data-aos-delay="300" className="animation-box2">
          <img  src={bannerImg[1]} alt="" />
        </div>
        <div data-aos="fade-up-right" data-aos-delay="500" className="animation-box3">
          <img src={bannerImg[2]} alt="" />
        </div>
        <div data-aos="fade-up-left" data-aos-delay="700" className="animation-box4">
          <img src={bannerImg[3]} alt="" />
        </div>
        <div className="textBox"> 
          <h1 data-aos="fade-up" data-aos-delay="900">
            IP LICENSING<br/> 
            MERCHADISING
          </h1>
          <h3 data-aos="fade-up" data-aos-delay="1000">
            글로벌 IP 기반의 CJ ENM 커머스 사업
            </h3>
        </div>




      </div>
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
    </section>
  )
}

export default Banner;

