import React, { useState,useEffect } from "react";
import { assetCardAni, assetCardTv } from "../constants";
import Aos from "aos";

const AssetSwiperBanner = ({onCategoryChange}) => {
  useEffect(() => {
    Aos.init({
        duration: 600, // 애니메이션 지속 시간
        once: true, // 한 번만 실행되도록 설정
    });

    Aos.refresh(); // 새로고침 시 다시 초기화
  }, []);
  const [btnActive, setBtnActive] = useState(false);
  const btnToggle = () => {
    setBtnActive((prev) => {
      const newState = !prev;
      onCategoryChange(newState ? assetCardAni : assetCardTv);
      return newState;
    });

  }

  return (
    <section className="assetNav">
      <div className="assetNav__titleArea">
        <div data-aos="fade-right"data-aos-duration="1100" data-aos-delay="500" className="assetNav__titleArea-titleText">
          CJ ENM과 함께하는 프로그램들은<br/>어떤 것들이 존재할까요?
        </div>
        <div data-aos="fade-right" data-aos-duration="1100" data-aos-delay="600" className="assetNav__titleArea-subtitleText">
          영화, 드라마, 음악, 예능 IP의 기획·제작·공급 등 콘텐츠 전반을 책임 운영하는 Contents Provider로<br/>
          CJ ENM 보유하고 있는 방송 채널은 물론 OTT 등 디지털 채널을 통하여 ENM의 IP를 확산하고,<br/>
          다양한 시청자와 소통함으로써 그를 기반으로 한 다양한 부가 사업을 활발히 전개하고 있습니다.
        </div>
        <div data-aos="fade-left"data-aos-duration="1100" data-aos-delay="600" className="slideBtn" onClick={btnToggle}>
          <div className={`slideBtn__box ${btnActive ? "active" : ""}`}></div>
          <p className="slideBtn__text-tv">TV 방송</p>
          <p className="slideBtn__text-ani">애니메이션</p>
        </div>

      </div>

    </section>
  )
}

export default AssetSwiperBanner;