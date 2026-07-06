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
    { name: '작품명 01', year: '2018', series: '생태생장' },
    { name: '작품명 02', year: '2018', series: '생태생장' },
    { name: '작품명 03', year: '2019', series: '생태생장' },
    { name: '작품명 04', year: '2019', series: '생태생장' },
    { name: '작품명 05', year: '2020', series: '고적담' },
    { name: '작품명 06', year: '2020', series: '고적담' },
    { name: '작품명 07', year: '2021', series: '고적담' },
    { name: '작품명 08', year: '2021', series: '고적담' },
    { name: '작품명 09', year: '2022', series: '분청생활도자' },
    { name: '작품명 10', year: '2022', series: '분청생활도자' },
    { name: '작품명 11', year: '2022', series: '분청생활도자' },
    { name: '작품명 12', year: '2023', series: '분청생활도자' },
    { name: '작품명 13', year: '2023', series: '대형작' },
    { name: '작품명 14', year: '2023', series: '대형작' },
    { name: '작품명 15', year: '2024', series: '대형작' },
    { name: '작품명 16', year: '2024', series: '대형작' },
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
            <div
              key={i}
              className="gallery-cell"
              style={fadeItem(i + 2)}
              onClick={() => setSelectedCell(cell)}
            >
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
                    <div className="series-thumb" />
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