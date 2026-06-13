import React from 'react';
import '../styles/Tribute.css';

function Tribute() {
  return (
    <section id="헌정" className="tribute">
      <div className="tribute-label">Tribute · 헌정</div>
      <div className="tribute-divider" />
      <div className="tribute-quote">"흙으로 세상을 빚어온 당신의 손, 그 따뜻함이 우리 삶에 스며들었습니다."</div>
      <div className="tribute-photo" />
      <div className="tribute-body">50년의 시간을 흙과 함께 살아온 아버지, 선생님, 그리고 예술가에게 이 공간을 바칩니다</div>
    </section>
  );
}

export default Tribute;