import React from 'react';
import '../styles/Tribute.css';
import useScrollFade from '../hooks/useScrollFade';

function Tribute() {
  const [ref, visible] = useScrollFade(0.3);

  const fadeItem = (index) => ({
    opacity: visible ? 1 : 0,
    transition: `opacity 1.2s ease ${index * 0.5}s`,
  });

  return (
    <section id="헌정" className="tribute" ref={ref}>
      <div className="tribute-label" style={fadeItem(0)}>Tribute · 헌정</div>
      <div className="tribute-divider" style={fadeItem(1)} />
      <div className="tribute-quote" style={fadeItem(2)}>"흙으로 세상을 빚어온 당신의 손, 그 따뜻함이 우리 삶에 스며들었습니다."</div>
      <div className="tribute-photo" style={fadeItem(3)} />
      <div className="tribute-body" style={fadeItem(4)}>50년의 시간을 흙과 함께 살아온 아버지, 선생님, 그리고 예술가에게 이 공간을 바칩니다</div>
    </section>
  );
}

export default Tribute;