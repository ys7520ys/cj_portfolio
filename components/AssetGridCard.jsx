import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Aos from "aos";

const AssetGridCard = ({ selectedCategory }) => {
  useEffect(() => {
    Aos.init({
        duration: 600, // 애니메이션 지속 시간
        once: true, // 한 번만 실행되도록 설정
    });

    Aos.refresh(); // 새로고침 시 다시 초기화
  }, []);
  const gridRef = useRef(null);
  const [currentCategory, setCurrentCategory] = useState(selectedCategory); 

  useEffect(() => {
    if (!gridRef.current) return;

    gsap.to(gridRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      onComplete: () => {
        setCurrentCategory(selectedCategory);
        gsap.to(gridRef.current, { opacity: 1, y: 0, duration: 0.5 });
      },
    });
  }, [selectedCategory]); 

  return (
    <section className="assetGridCard" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
      <div ref={gridRef} className="assetGridCard__contents">
        {currentCategory.img.map((image, index) => (
          <div className="item" key={index}>
            <img src={image} alt={`이미지 ${index}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AssetGridCard;
