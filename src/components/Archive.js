import React, { useState } from 'react';

function Archive() {
  const [activeFilter, setActiveFilter] = useState('전체');
  const cards = [
    { type: '팸플릿', title: '2021 회고전 도록' },
    { type: '팸플릿', title: '개인전 팸플릿' },
    { type: '언론 기사', title: '영남일보 인터뷰' },
  ];

  return (
    <section id="아카이브" style={{ background: '#F5F0E8', padding: '64px 32px' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '40px', paddingBottom: '16px', borderBottom: '0.5px solid rgba(44,31,14,0.1)' }}>
        <div><span style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', letterSpacing: '0.14em', color: 'rgba(139,99,64,0.6)', marginRight: '10px' }}>06</span><span style={{ fontSize: '22px', fontWeight: 300, color: '#2C1F0E', letterSpacing: '0.05em' }}>아카이브</span></div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', letterSpacing: '0.12em', color: 'rgba(44,31,14,0.3)', textTransform: 'uppercase' }}>Archive</div>
      </div>
      <div style={{ display: 'flex', gap: '24px', marginBottom: '28px' }}>
        {['전체', '팸플릿·도록', '언론 기사'].map(f => (
          <button key={f} onClick={() => setActiveFilter(f)} style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', letterSpacing: '0.1em', color: activeFilter === f ? '#2C1F0E' : 'rgba(44,31,14,0.4)', background: 'none', border: 'none', cursor: 'pointer', textTransform: 'uppercase', padding: 0 }}>{f}</button>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px' }}>
        {cards.map((card, i) => (
          <div key={i} style={{ background: '#EDE5D8', border: '0.5px solid rgba(44,31,14,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ height: '240px', background: '#E4DAC8' }} />
            <div style={{ padding: '16px' }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '8px', letterSpacing: '0.12em', color: 'rgba(139,99,64,0.6)', textTransform: 'uppercase', marginBottom: '6px' }}>{card.type}</div>
              <div style={{ fontSize: '12px', color: 'rgba(44,31,14,0.8)', letterSpacing: '0.04em' }}>{card.title}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Archive;