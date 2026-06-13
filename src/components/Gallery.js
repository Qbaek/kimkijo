import React, { useState } from 'react';

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
    <section id="갤러리" style={{ background: '#F0EAE0', padding: '64px 32px' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '40px', paddingBottom: '16px', borderBottom: '0.5px solid rgba(44,31,14,0.1)' }}>
        <div><span style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', letterSpacing: '0.14em', color: 'rgba(139,99,64,0.6)', marginRight: '10px' }}>03</span><span style={{ fontSize: '22px', fontWeight: 300, color: '#2C1F0E', letterSpacing: '0.05em' }}>작품 갤러리</span></div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', letterSpacing: '0.12em', color: 'rgba(44,31,14,0.3)', textTransform: 'uppercase' }}>Gallery</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
        <div style={{ display: 'flex', border: '0.5px solid rgba(44,31,14,0.15)', borderRadius: '3px', overflow: 'hidden' }}>
          {['그리드뷰', '시리즈뷰'].map(v => (
            <button key={v} style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', letterSpacing: '0.1em', padding: '6px 14px', color: 'rgba(44,31,14,0.5)', background: 'transparent', border: 'none', cursor: 'pointer', textTransform: 'uppercase' }}>{v}</button>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          {filters.map(f => (
            <button key={f} onClick={() => setActiveFilter(f)} style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', letterSpacing: '0.1em', color: activeFilter === f ? 'rgba(139,99,64,1)' : 'rgba(44,31,14,0.5)', background: 'none', border: 'none', cursor: 'pointer', textTransform: 'uppercase', padding: 0 }}>{f}</button>
          ))}
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '8px' }}>
        {cells.map((cell, i) => (
          <div key={i} style={{ background: '#EDE5D8', border: '0.5px solid rgba(44,31,14,0.08)', aspectRatio: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', padding: '16px' }}>
            <div style={{ fontSize: '11px', color: 'rgba(44,31,14,0.8)', letterSpacing: '0.04em', marginBottom: '4px' }}>{cell.name}</div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'rgba(139,99,64,0.6)', letterSpacing: '0.08em' }}>{cell.year}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;