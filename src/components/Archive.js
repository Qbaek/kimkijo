import React, { useState } from 'react';
import '../styles/Archive.css';

function Archive() {
  const [activeFilter, setActiveFilter] = useState('전체');
  const cards = [
    { type: '팸플릿', title: '2021 회고전 도록' },
    { type: '팸플릿', title: '개인전 팸플릿' },
    { type: '언론 기사', title: '영남일보 인터뷰' },
  ];

  return (
    <section id="아카이브" className="archive">
      <div className="sec-header">
        <div><span className="sec-num">06</span><span className="sec-title">아카이브</span></div>
        <div className="sec-en">Archive</div>
      </div>
      <div className="archive-filters">
        {['전체', '팸플릿·도록', '언론 기사'].map(f => (
          <button key={f} onClick={() => setActiveFilter(f)} className={`af-btn ${activeFilter === f ? 'active' : ''}`}>{f}</button>
        ))}
      </div>
      <div className="archive-cards">
        {cards.map((card, i) => (
          <div key={i} className="archive-card">
            <div className="ac-thumb" />
            <div className="ac-body">
              <div className="ac-type">{card.type}</div>
              <div className="ac-title">{card.title}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Archive;