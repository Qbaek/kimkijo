import React, { useState } from 'react';
import '../styles/Gallery.css';
import useScrollFade from '../hooks/useScrollFade';
import Modal from './Modal';

function Gallery() {
  const [ref, visible] = useScrollFade(0.3);
  const [activeFilter, setActiveFilter] = useState('전체');
  const [activeView, setActiveView] = useState('그리드뷰');
  const [selectedCell, setSelectedCell] = useState(null);

  const filters = ['전체', '생태생장', '고적담', '분청생활도자', '대형작'];

  const cells = [
    { name: '고도의 침묵', year: '2002', series: '생태생장' , image: 'https://res.cloudinary.com/smn0s6kv/image/upload/v1783394201/work_005_kuambv.png' },
    { name: '고적 시리즈', year: '2005', series: '생태생장' , image: 'https://res.cloudinary.com/smn0s6kv/image/upload/v1783394201/work_004_arlbwp.png' },
    { name: '점토 도자', year: '2008', series: '생태생장' , image: 'https://res.cloudinary.com/smn0s6kv/image/upload/v1783394200/work_003_teh7pg.png' },
    { name: '연지', year: '2008', series: '생태생장' , image: 'https://res.cloudinary.com/smn0s6kv/image/upload/v1783394199/work_002_lkyrlt.png' },
    { name: '찻상 시리즈 & 물총새', year: '2008', series: '고적담' , image: 'https://res.cloudinary.com/smn0s6kv/image/upload/v1783394197/work_007_ts5n1x.png'},
    { name: '연지 시리즈', year: '2008', series: '고적담' , image: 'https://res.cloudinary.com/smn0s6kv/image/upload/v1783394197/work_001_lclfup.png'},
    { name: '생태 시리즈', year: '2008', series: '고적담' , image: 'https://res.cloudinary.com/smn0s6kv/image/upload/v1783394196/work_011_jztgld.png'},
    { name: '생장', year: '1983', series: '고적담' , image: 'https://res.cloudinary.com/smn0s6kv/image/upload/v1783394196/work_008_eraevj.png'},
    { name: '생태', year: '1983', series: '분청생활도자' , image: 'https://res.cloudinary.com/smn0s6kv/image/upload/v1783394196/work_010_uhaorh.png' },
    { name: '꽃', year: '2003', series: '분청생활도자' , image: 'https://res.cloudinary.com/smn0s6kv/image/upload/v1783394195/work_006_tzo4na.png'},
    { name: '나들이', year: '2014', series: '분청생활도자' , image: 'https://res.cloudinary.com/smn0s6kv/image/upload/v1783394160/work_013_wdipnd.png'},
    { name: '연지 시리즈', year: '2008', series: '분청생활도자' , image: 'https://res.cloudinary.com/smn0s6kv/image/upload/v1783394158/work_012_vrwv5f.png'},
    { name: '나들이', year: '2021', series: '대형작' , image: 'https://res.cloudinary.com/smn0s6kv/image/upload/v1783394158/work_015_g448qd.png'},
    { name: '찻상', year: '2008', series: '대형작' , image: 'https://res.cloudinary.com/smn0s6kv/image/upload/v1783394145/work_017_pqm6n4.png'},
    { name: '휴식', year: '2021', series: '대형작' , image: 'https://res.cloudinary.com/smn0s6kv/image/upload/v1783394138/work_018_pagce4.png'},
    { name: '나들이', year: '2014', series: '대형작' , image: 'https://res.cloudinary.com/smn0s6kv/image/upload/v1783394120/work_019_cg6bvc.png'},
  ];

  const filteredCells = activeFilter === '전체'
    ? cells
    : cells.filter(c => c.series === activeFilter);

  const seriesGroups = filters.slice(1).map(series => ({
    name: series,
    items: cells.filter(c => c.series === series),
  }));

  const fadeItem = (index) => ({
    opacity: visible ? 1 : 0,
    transition: `opacity 1.2s ease ${index * 0.5}s`,
  });

  return (
    <section id="갤러리" className="gallery" ref={ref}>
      <div className="sec-header" style={fadeItem(0)}>
        <div><span className="sec-num">03</span><span className="sec-title">작품 갤러리</span></div>
        <div className="sec-en">Gallery</div>
      </div>
      <div className="gallery-controls" style={fadeItem(1)}>
        <div className="view-toggle">
          {['그리드뷰', '시리즈뷰'].map(v => (
            <button
              key={v}
              className={`vt-btn ${activeView === v ? 'active' : ''}`}
              onClick={() => setActiveView(v)}
            >{v}</button>
          ))}
        </div>
        {activeView === '그리드뷰' && (
          <div className="filter-tabs">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`ft-btn ${activeFilter === f ? 'active' : ''}`}
              >{f}</button>
            ))}
          </div>
        )}
      </div>

      {activeView === '그리드뷰' && (
        <div className="gallery-grid">
          {filteredCells.map((cell, i) => (
            <div key={i} className="gallery-cell" style={fadeItem(i + 2)} onClick={() => setSelectedCell(cell)}>
              <img src={cell.image} alt={cell.name} className="cell-img" />
              <div className="cell-name">{cell.name}</div>
              <div className="cell-year">{cell.year}</div>
            </div>
          ))}
        </div>
      )}

      {activeView === '시리즈뷰' && (
        <div className="series-view">
          {seriesGroups.map((group, gi) => (
            <div key={gi} className="series-group" style={fadeItem(gi + 2)}>
              <div className="series-title">
                <span className="series-name">{group.name}</span>
                <span className="series-count">{group.items.length}점</span>
              </div>
              <div className="series-row">
                {group.items.map((cell, i) => (
                  <div
                    key={i}
                    className="series-cell"
                    onClick={() => setSelectedCell(cell)}
                  >
                    <img src={cell.image} alt={cell.name} className="series-thumb" />
                    <div className="cell-name">{cell.name}</div>
                    <div className="cell-year">{cell.year}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      <Modal cell={selectedCell} onClose={() => setSelectedCell(null)} />
    </section>
  );
}

export default Gallery;