import React from 'react';

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

  return (
    <section id="연보" style={{ background: '#F0EAE0', padding: '64px 32px' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '40px', paddingBottom: '16px', borderBottom: '0.5px solid rgba(44,31,14,0.1)' }}>
        <div><span style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', letterSpacing: '0.14em', color: 'rgba(139,99,64,0.6)', marginRight: '10px' }}>05</span><span style={{ fontSize: '22px', fontWeight: 300, color: '#2C1F0E', letterSpacing: '0.05em' }}>연보</span></div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', letterSpacing: '0.12em', color: 'rgba(44,31,14,0.3)', textTransform: 'uppercase' }}>Chronology</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
        <div>
          {events.map((e, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '16px', alignItems: 'baseline', padding: '14px 0', borderBottom: '0.5px solid rgba(44,31,14,0.07)' }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', letterSpacing: '0.08em', color: e.highlight ? '#8B6340' : 'rgba(44,31,14,0.5)' }}>{e.year}</div>
              <div style={{ fontSize: '12px', color: e.highlight ? '#2C1F0E' : 'rgba(44,31,14,0.7)', fontWeight: e.highlight ? 400 : 300, letterSpacing: '0.03em' }}>{e.event}</div>
            </div>
          ))}
        </div>
        <div style={{ background: '#EDE5D8', border: '0.5px solid rgba(44,31,14,0.08)', borderRadius: '4px', padding: '24px' }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '8px', letterSpacing: '0.14em', color: 'rgba(44,31,14,0.35)', textTransform: 'uppercase', marginBottom: '20px' }}>활동 강도 시각화</div>
          {[
            { label: '전시·작품', width: '95%', color: '#C09060' },
            { label: '교육', width: '75%', color: '#6090B0' },
            { label: '유학·연구', width: '45%', color: '#70A068' },
            { label: '수상·선정', width: '35%', color: '#9080B0' },
            { label: '저술·기고', width: '30%', color: '#C07868' },
          ].map((bar, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '12px', alignItems: 'center', marginBottom: '20px' }}>
              <div style={{ fontSize: '10px', color: 'rgba(44,31,14,0.6)', letterSpacing: '0.03em' }}>{bar.label}</div>
              <div style={{ height: '3px', borderRadius: '2px', background: bar.color, width: bar.width }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Chronology;