import {React, useEffect} from "react";
import { bannerImg } from "../constants";
import Aos from "aos";

const AboutBanner = () => {
  useEffect(() => {
    Aos.init({
        duration: 600, // 애니메이션 지속 시간
        once: true, // 한 번만 실행되도록 설정
    });

    Aos.refresh(); // 새로고침 시 다시 초기화
  }, []);
  return (
    <section className="aboutBanner" style={{ overflow: "hidden"}}>
      <img className="aboutBanner__char" src={bannerImg[1]} alt="" />
      <div data-aos="fade-up" data-aos-delay="1800"  className="aboutBanner__speechBubble" >
        <h1 className="aboutBanner__speechBubble-text">
          CJ ENM에 대해서 알아볼까요?
        </h1>
        <div className="aboutBanner__speechBubble-deco"></div>
      </div>
    </section>
  )
}

export default AboutBanner;     