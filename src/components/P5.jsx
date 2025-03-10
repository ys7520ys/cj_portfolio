import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const WaveBanner = () => {
  const wave1Ref = useRef(null);
  const wave2Ref = useRef(null);
  const wave3Ref = useRef(null);

  useEffect(() => {
    // 첫 번째 웨이브 (느리게 이동)
    gsap.to(wave1Ref.current, {
      x: "150px",
      duration: 6, // 가장 느린 속도
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // 두 번째 웨이브 (중간 속도)
    gsap.to(wave2Ref.current, {
      x: "200px",
      duration: 4, // 중간 속도
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });

    // 세 번째 웨이브 (빠르게 이동)
    gsap.to(wave3Ref.current, {
      x: "250px",
      duration: 3, // 가장 빠른 속도
      repeat: -1,
      yoyo: true,
      ease: "power3.inOut",
    });
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "300px", overflow: "hidden" }}>
      <svg
        viewBox="0 0 1200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", bottom: 0, width: "100%" }}
      >
        {/* 첫 번째 웨이브 (파란색) */}
        <path
          ref={wave1Ref}
          d="M0 100 C200 200, 400 0, 600 100 S1000 200, 1200 100 V200 H0 Z"
          fill="rgba(74, 144, 226, 0.6)" // 반투명한 파란색
        />
        {/* 두 번째 웨이브 (보라색) */}
        <path
          ref={wave2Ref}
          d="M0 120 C250 150, 500 50, 750 120 S1200 180, 1400 120 V200 H0 Z"
          fill="rgba(142, 68, 173, 0.5)" // 반투명한 보라색
        />
        {/* 세 번째 웨이브 (청록색) */}
        <path
          ref={wave3Ref}
          d="M0 140 C300 180, 600 80, 900 140 S1200 220, 1400 140 V200 H0 Z"
          fill="rgba(26, 188, 156, 0.5)" // 반투명한 청록색
        />
      </svg>
    </div>
  );
};

export default WaveBanner;
