import React, { useState } from 'react';
import '../styles/Archive.css';
import useScrollFade from '../hooks/useScrollFade';

function Archive() {
  const [ref, visible] = useScrollFade(0.3);
  const [activeFilter, setActiveFilter] = useState('전체');

  const fadeItem = (index) => ({
    opacity: visible ? 1 : 0,
    transition: `opacity 1.2s ease ${index * 0.5}s`,
  });

  const cards = [
    { type: '언론 기사', title: '30년 가까운 교수생활 마무리…도예가 김기조, 새로운 출발', url: 'https://www.yeongnam.com/web/view.php?key=20150203.010240801150001', image: 'https://www.yeongnam.com/mnt/file/201502/20150203.010240801150001i1.jpg' },
    { type: '언론 기사', title: '대구문화예술회관 기획전 원로작가 회고전-김기조 남충모 전', url: 'https://www.imaeil.com/page/view/2021042615572461417', image: 'https://www.imaeil.com/photos/2021/04/26/2021042615562254697_l.jpg' },
    { type: '언론 기사', title: '‘자연과 인간’ 담을 허무는 ‘흙의 울림’···김기조 도자조형전 9월14일까지 시안미술관', url: 'https://www.yeongnam.com/web/view.php?key=20140725.010180738590001', image: 'https://www.yeongnam.com/mnt/file/201407/20140725.010180738590001i1.jpg' },
  ];

  const filteredCards = activeFilter === '전체' || activeFilter === '언론 기사'
    ? cards
    : [];

  const handleClick = (card) => {
    window.open(card.url, '_blank');
  };

  return (
    <section id="아카이브" className="archive" ref={ref}>
      <div className="sec-header" style={fadeItem(0)}>
        <div><span className="sec-num">06</span><span className="sec-title">아카이브</span></div>
        <div className="sec-en">Archive</div>
      </div>
      <div className="archive-filters" style={fadeItem(1)}>
        {['전체', '팸플릿', '언론 기사'].map(f => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`af-btn ${activeFilter === f ? 'active' : ''}`}
          >{f}</button>
        ))}
      </div>

      {activeFilter === '팸플릿' ? (
        <div className="archive-empty" style={fadeItem(2)}>
          준비중입니다.
        </div>
      ) : (
        <div className="archive-cards">
          {filteredCards.map((card, i) => (
            <div
              key={i}
              className="archive-card"
              style={{ ...fadeItem(i + 2), cursor: 'pointer' }}
              onClick={() => handleClick(card)}
            >
              <div className="ac-thumb">
                {card.image && <img src={card.image} alt={card.title} className="ac-img" />}
              </div>
              <div className="ac-body">
                <div className="ac-type">{card.type}</div>
                <div className="ac-title">{card.title}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Archive;