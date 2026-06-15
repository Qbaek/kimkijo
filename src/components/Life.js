import React from 'react';
import '../styles/Life.css';
import useScrollFade from '../hooks/useScrollFade';

function Life() {
  const [ref, visible] = useScrollFade(0.3);

  const cards = [
    { num: '01', title: '사람', body: '경주 출생 · 교토 유학\n대구대학교 30년 재직\n흙과 함께한 삶의 궤적' },
    { num: '02', title: '철학', body: '자연 · 조형 · 실험\n흙이 말하는 방식으로\n시간을 담아내는 작업' },
    { num: '03', title: '작품 세계', body: '분청의 현대적 재해석\n생애에서 고적까지\n50년의 조형 탐구' },
  ];

  const fadeItem = (index) => ({
    opacity: visible ? 1 : 0,
    transition: `opacity 1.2s ease ${index * 0.5}s`,
  });

  return (
    <section id="생애" className="life" ref={ref}>
      <div className="sec-header" style={fadeItem(0)}>
        <div><span className="sec-num">02</span><span className="sec-title">생애</span></div>
        <div className="sec-en">Life & Philosophy</div>
      </div>
      <div className="life-cards">
        {cards.map((card, i) => (
          <div key={card.num} className="life-card" style={fadeItem(i + 1)}>
            <div className="lc-num">{card.num}</div>
            <div className="lc-title">{card.title}</div>
            <div className="lc-body">{card.body}</div>
          </div>
        ))}
      </div>
      <div className="quote-block" style={fadeItem(4)}>
        <div className="quote-text">"흙은 거짓말을 하지 않는다. 손의 기억이 그대로 남아있다."</div>
        <div className="quote-source">— 영남일보 인터뷰</div>
      </div>
    </section>
  );
}

export default Life;