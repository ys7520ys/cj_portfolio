import React from "react";

const CountingNum = () => {
  return (
    <section className="section__countingPer">
      <div className="company__info">
        <h1 data-aos="fade-up" data-aos-delay="0" className="company__info-title">
          글로벌 IP 기반의<br/>
          CJ ENM 커머스 사업
        </h1>
        <p data-aos="fade-up" data-aos-delay="50" className="company__info-subtitle">
          국내 인기 IP의 홀더이자 해외 IP의 마스터 에이전트로서 다양한 콘텐츠와 캐릭터의 상품화 사업을 통해<br/>
          IP LTV를 강화하며 IP 소비자들의 라이프스타일을 한층 더 풍요롭게 합니다
        </p>  
      </div>
      <div data-aos="fade-up" data-aos-delay="0" className="countingBox">
        <p data-aos="fade-up" data-aos-delay="200" className="title">
          IP LICENSING & MERCHANDISING
        </p>
        <div className="countingBox__contents">
          <div data-aos="fade-up" data-aos-delay="200" className="countingBox__contents-box">
            <p className="subtitle">가용 IP</p>
            <p className="countChange">180+</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="300" className="countingBox__contents-box">
            <p className="subtitle">누적 거래 파트너사 </p>
            <p className="countChange">150+</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="350" className="countingBox__contents-box">
            <p className="subtitle">상품화 사례</p>
            <p className="countChange">3000+</p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default CountingNum;