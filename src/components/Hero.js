import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-divider" />
      <div className="hero-left">
        <div className="photo-placeholder" />
      </div>
      <div className="hero-right">
        <div className="artwork-placeholder" />
      </div>
      <div className="overlay-card">
        <div className="oc-eyebrow">Ceramist · Professor · Artist</div>
        <div className="oc-name-ko">김기조</div>
        <div className="oc-name-en">Kim Ki-jo · 1949–</div>
        <div className="oc-divider" />
        <div className="oc-desc">흙과 불, 50년의 시간이 빚은 예술 세계를 기억합니다.</div>
        <div className="oc-scroll">scroll to explore ↓</div>
      </div>
    </section>
  );
}

export default Hero;