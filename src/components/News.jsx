import React from "react";
import "aos/dist/aos.css";
import { newData } from "../constants";

const News = () => {
  return (
    <>
    <section className="section__news">
      <h1 data-aos="fade-up" data-aos-delay="0">새로운 소식</h1>
      <div className="contents__boxes">
        <div data-aos="fade-up" data-aos-delay="100" className="box">
          <div className="topBox">
            <img src={newData.img[0]} alt="" title="명탐정 코난 상품소개"/>
          </div>
          <div className="bottomBox">
            <p>{newData.newsInfo[0]}</p>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="150" className="box">
          <div className="topBox">
            <img src={newData.img[1]} alt="" title="소이베베X신비아파트, 마미버드 상품소개"/>
          </div>
          <div  className="bottomBox">
            <p>{newData.newsInfo[1]}</p>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="200" className="box">
          <div className="topBox">
            <img src={newData.img[2]} alt="" title="신비아파트 업데이트 정보"/>
          </div>
          <div className="bottomBox">
            <p>{newData.newsInfo[2]}</p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default News;