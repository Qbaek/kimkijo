import React from 'react';
import '../styles/Chronology.css';

function Chronology() {
  const events = [
    { year: '1949', event: '경주 출생', highlight: false },
    { year: '1972', event: '도예 입문', highlight: false },
    { year: '1980', event: '교토 유학', highlight: false },
    { year: '1985', event: '대구대학교 부임', highlight: false },
    { year: '1992', event: '첫 개인전', highlight: false },
    { year: '2005', event: '국제 교류전 참가', highlight: false },
    { year: '2021', event: '50년 회고전', highlight: true },
    { year: '2025', event: '정년 퇴임', highlight: false },
  ];

  const bars = [
    { label: '전시·작품', width: '95%', color: '#C09060' },
    { label: '교육', width: '75%', color: '#6090B0' },
    { label: '유학·연구', width: '45%', color: '#70A068' },
    { label: '수상·선정', width: '35%', color: '#9080B0' },
    { label: '저술·기고', width: '30%', color: '#C07868' },
  ];

  return (
    <section id="연보" className="chronology">
      <div className="sec-header">
        <div><span className="sec-num">05</span><span className="sec-title">연보</span></div>
        <div className="sec-en">Chronology</div>
      </div>
      <div className="chron-inner">
        <div>
          {events.map((e, i) => (
            <div key={i} className="tl-row">
              <div className={`tl-year ${e.highlight ? 'active' : ''}`}>{e.year}</div>
              <div className={`tl-event ${e.highlight ? 'highlight' : ''}`}>{e.event}</div>
            </div>
          ))}
        </div>
        <div className="graph-area">
          <div className="graph-label">활동 강도 시각화</div>
          {bars.map((bar, i) => (
            <div key={i} className="graph-row">
              <div className="gr-label">{bar.label}</div>
              <div className="gr-bar" style={{ width: bar.width, background: bar.color }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Chronology;