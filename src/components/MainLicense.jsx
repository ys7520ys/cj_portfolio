import React from "react";
import { mainData, newData } from "../constants";

// 데이터를 constants의 값에서 호출하여 구성한다.
// 반복적인 값을 반복문을 통해서 구성하자


const MainLicense = () => {
  return (
    <>
    <section className="section__mainLicense">
      <div data-aos="fade-up" className="section__header">
        <h1 className="section__header-title">메인 라이센스</h1>
        <button className="section__header-button">
          전체보기
        </button>
      </div>
      <div className="section__contentArea">
        <div className="section__contentArea-top">
          <div data-aos="fade-up" className="content__left">
            {/* Entertainment Shows, Animation이 들어가야 한다. */}
            <img src={mainData.img[0]} alt="" title="스트릿우먼파이터2" className="content__left-img"/>
            <div className="hoverText">
              <div className="hoverText__box">
                <div className="title">프로그램 정보</div>
                <div className="subtitle">
                  <ul className="parent">
                    <li>장르</li>
                    <li>방영기간</li>
                    <li>연출</li>
                    <li>CP</li>
                    <li>출연진</li>
                  </ul>
                  <ul className="child">
                    <li>음악</li>
                    <li>2023.08.22 ~</li>
                    <li>김지은</li>
                    <li>권영찬</li>
                    <li>울를러 +7</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="content__right">
            <div className="content__right-top">
              <div data-aos="fade-up" data-aos-delay="100" className="subContent__left">
                <img src={mainData.img[1]} alt="" title="유퀴즈 온더 블럭!" />
                <div className="hoverText">
                  <div className="hoverText__box">
                    <div className="title">프로그램 정보</div>
                    <div className="subtitle">
                      <ul className="parent">
                        <li>장르</li>
                        <li>방영기간</li>
                        <li>연출</li>
                        <li>CP</li>
                        <li>출연진</li>
                      </ul>
                      <ul className="child">
                        <li>예능</li>
                        <li>2018.08.29 ~</li>
                        <li>이기연</li>
                        <li>박희연</li>
                        <li>유재석, 조세호</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-delay="150" className="subContent__right">
                <img src={mainData.img[2]} alt="" title="기생충" />
                <div className="hoverText">
                  <div className="hoverText__box">
                    <div className="title">프로그램 정보</div>
                    <div className="subtitle">
                      <ul className="parent">
                        <li>장르</li>
                        <li>개봉일</li>
                        <li>감독</li>
                        <li>극본</li>
                        <li>출연진</li>
                        <li>제작사</li>
                      </ul>
                      <ul className="child">
                        <li>드라마</li>
                        <li>2019.05.30</li>
                        <li>봉준호</li>
                        <li>봉준호, 한진원</li>
                        <li>송강호 +6</li>
                        <li>바른손이앤에이</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content__right-bottom">
              <div data-aos="fade-up" data-aos-delay="100" className="subContent__box">
                <img src={mainData.img[6]} alt="" title="뿅뿅 지구 오락실"/>
                <div className="subContent__box-text">
                  <p className="ko">{mainData.licenseText[0]}</p>
                  <p className="en">Entertainment Shows</p>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-delay="150" className="subContent__box">
                <img src={mainData.img[7]} alt="" title="댄스가수 유랑단"/>
                <div className="subContent__box-text">
                  <p className="ko">{mainData.licenseText[1]}</p>
                  <p className="en">Entertainment Shows</p>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-delay="200" className="subContent__box">
                <img src={mainData.img[8]} alt="" title="보이즈 플래닛"/>
                <div className="subContent__box-text">
                  <p className="ko">{mainData.licenseText[2]}</p>
                  <p className="en">Entertainment Shows</p>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-delay="250" className="subContent__box">
                <img src={mainData.img[9]} alt="" title="헤어질 결심"/>
                <div className="subContent__box-text">
                  <p className="ko">{mainData.licenseText[3]}</p>
                  <p className="en">Entertainment Shows</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section__contentArea-bottom">
          <div className="content__left">
            <div className="content__left-top">
              <div data-aos="fade-up" data-aos-delay="100" className="subContent__left">
                <img src={mainData.img[3]} alt="" title="히어로 인사이드"/>
                <div className="hoverText">
                  <div className="hoverText__box">
                    <div className="title">프로그램 정보</div>
                    <div className="subtitle">
                      <ul className="parent">
                        <li>장르</li>
                        <li>방영기간</li>
                        <li><br/></li>
                        <li>제작사</li>
                      </ul>
                      <ul className="child">
                        <li>키즈</li>
                        <li>2023.10.11 2023.12.31</li>
                        <li>밀리언볼트</li>
                      </ul>
                    </div>
                  </div>
            </div>
              </div>
              <div data-aos="fade-up" data-aos-delay="150" className="subContent__right">
                <img src={mainData.img[4]} alt="" title="명탐정코난 할로윈의신부"/>
                <div className="hoverText">
                  <div className="hoverText__box">
                    <div className="title">프로그램 정보</div>
                    <div className="subtitle">
                      <ul className="parent">
                        <li>장르</li>
                        <li>제작사</li>
                      </ul>
                      <ul className="child">
                        <li>청소년</li>
                        <li>TMS (ETM)</li>
                      </ul>
                    </div>
                  </div>
            </div>
              </div>
            </div>
            <div className="content__left-bottom">
              <div data-aos="fade-up" data-aos-delay="100" className="subContent__box">
                <img src={mainData.img[10]} alt="" title="마카앤로니"/>
                <div className="subContent__box-text">
                  <p className="ko">{mainData.licenseText[4]}</p>
                  <p className="en">Animation</p>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-delay="150" className="subContent__box">
                <img src={mainData.img[11]} alt="" title="뿡뿡빵빵 부부맨"/>
                <div className="subContent__box-text">
                  <p className="ko">{mainData.licenseText[5]}</p>
                  <p className="en">Animation</p>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-delay="200" className="subContent__box">
                <img src={mainData.img[12]} alt=""  title="무한의 계단"/>
                <div className="subContent__box-text">
                  <p className="ko">{mainData.licenseText[6]}</p>
                  <p className="en">Animation</p>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-delay="250" className="subContent__box">
                <img src={mainData.img[13]} alt="" title="뱀파이어소녀 달자"/>
                <div className="subContent__box-text">
                  <p className="ko">{mainData.licenseText[7]}</p>
                  <p className="en">Animation</p>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="300" className="content__right">
            <img src={mainData.img[5]} alt="" className="contnet__right-img" />
            <div className="hoverText">
              <div className="hoverText__box">
                <div className="title">프로그램 정보</div>
                <div className="subtitle">
                  <ul className="parent">
                    <li>장르</li>
                    <li>방영기간</li>
                    <li><br/></li>
                    <li>제작사</li>
                  </ul>
                  <ul className="child">
                    <li>키즈</li>
                    <li>2023.03.20 2023.06.15</li>
                    <li>스튜디오 바주카</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default MainLicense;