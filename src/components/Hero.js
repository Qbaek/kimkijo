import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';

function Hero() {
  const [visible, setVisible] = useState({
    card: false,
    left: false,
    right: false,
    eyebrow: false,
    nameKo: false,
    nameEn: false,
    divider: false,
    desc: false,
    scroll: false,
  });

  useEffect(() => {
    const timers = [
      setTimeout(() => setVisible(v => ({ ...v, card: true })), 300),
      setTimeout(() => setVisible(v => ({ ...v, left: true })), 800),
      setTimeout(() => setVisible(v => ({ ...v, right: true })), 1300),
      setTimeout(() => setVisible(v => ({ ...v, eyebrow: true })), 1800),
      setTimeout(() => setVisible(v => ({ ...v, nameKo: true })), 2200),
      setTimeout(() => setVisible(v => ({ ...v, nameEn: true })), 2600),
      setTimeout(() => setVisible(v => ({ ...v, divider: true })), 2800),
      setTimeout(() => setVisible(v => ({ ...v, desc: true })), 3000),
      setTimeout(() => setVisible(v => ({ ...v, scroll: true })), 3400),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const fadeStyle = (isVisible) => ({
    opacity: isVisible ? 1 : 0,
    transition: 'opacity 0.8s ease',
  });

  return (
    <section id="hero" className="hero">
      <div className="hero-divider" />
      <div className="hero-left">
        <div className="photo-placeholder" style={fadeStyle(visible.left)} />
      </div>
      <div className="hero-right">
        <div className="artwork-placeholder" style={fadeStyle(visible.right)} />
      </div>
      <div className="overlay-card" style={fadeStyle(visible.card)}>
        <div className="oc-eyebrow" style={fadeStyle(visible.eyebrow)}>Ceramist · Professor · Artist</div>
        <div className="oc-name-ko" style={fadeStyle(visible.nameKo)}>김기조</div>
        <div className="oc-name-en" style={fadeStyle(visible.nameEn)}>Kim Ki-jo · 1949–</div>
        <div className="oc-divider" style={fadeStyle(visible.divider)} />
        <div className="oc-desc" style={fadeStyle(visible.desc)}>흙과 불, 50년의 시간이 빚은 예술 세계를 기억합니다.</div>
        <div className="oc-scroll" style={fadeStyle(visible.scroll)}>scroll to explore ↓</div>
      </div>
    </section>
  );
}

export default Hero;