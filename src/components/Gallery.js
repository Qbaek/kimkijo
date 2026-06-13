import React, { useState } from 'react';
import '../styles/Gallery.css';

function Gallery() {
  const [activeFilter, setActiveFilter] = useState('전체');
  const filters = ['전체', '생태생장', '고적담', '분청생활도자', '대형작'];
  const cells = [
    { name: '작품명', year: '2018' }, { name: '작품명', year: '2019' },
    { name: '작품명', year: '2020' }, { name: '작품명', year: '2021' },
    { name: '작품명', year: '2021' }, { name: '작품명', year: '2022' },
    { name: '작품명', year: '2023' }, { name: '작품명', year: '2024' },
  ];

  return (
    <section id="갤러리" className="gallery">
      <div className="sec-header">
        <div><span className="sec-num">03</span><span className="sec-title">작품 갤러리</span></div>
        <div className="sec-en">Gallery</div>
      </div>
      <div className="gallery-controls">
        <div className="view-toggle">
          {['그리드뷰', '시리즈뷰'].map(v => (
            <button key={v} className="vt-btn">{v}</button>
          ))}
        </div>
        <div className="filter-tabs">
          {filters.map(f => (
            <button key={f} onClick={() => setActiveFilter(f)} className={`ft-btn ${activeFilter === f ? 'active' : ''}`}>{f}</button>
          ))}
        </div>
      </div>
      <div className="gallery-grid">
        {cells.map((cell, i) => (
          <div key={i} className="gallery-cell">
            <div className="cell-name">{cell.name}</div>
            <div className="cell-year">{cell.year}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;