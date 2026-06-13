import React, { useState } from 'react';

function Technique() {
  const [activeTab, setActiveTab] = useState('process');

  return (
    <section id="기법" style={{ background: '#F5F0E8', padding: '64px 32px' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '40px', paddingBottom: '16px', borderBottom: '0.5px solid rgba(44,31,14,0.1)' }}>
        <div><span style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', letterSpacing: '0.14em', color: 'rgba(139,99,64,0.6)', marginRight: '10px' }}>04</span><span style={{ fontSize: '22px', fontWeight: 300, color: '#2C1F0E', letterSpacing: '0.05em' }}>기법 & 재료</span></div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', letterSpacing: '0.12em', color: 'rgba(44,31,14,0.3)', textTransform: 'uppercase' }}>Technique & Material</div>
      </div>
      <div style={{ display: 'flex', gap: '24px', marginBottom: '32px' }}>
        {[['process', '단계별 프로세스'], ['infographic', '인포그래픽']].map(([key, label]) => (
          <button key={key} onClick={() => setActiveTab(key)} style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', letterSpacing: '0.12em', color: activeTab === key ? '#2C1F0E' : 'rgba(44,31,14,0.4)', textTransform: 'uppercase', background: 'none', border: 'none', borderBottom: activeTab === key ? '1px solid #8B6340' : '1px solid transparent', cursor: 'pointer', padding: '0 0 8px' }}>{label}</button>
        ))}
      </div>

      {activeTab === 'process' && (
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', position: 'relative', marginBottom: '32px' }}>
            <div style={{ position: 'absolute', top: '40px', left: 'calc(12.5% + 20px)', width: 'calc(75% - 40px)', height: '0.5px', background: 'rgba(139,99,64,0.3)' }} />
            {[
              { text: '흙', name: '흙', keyword: '점토 조적', desc: '점토를 반죽하고 불순물을 제거해 작업에 알맞은 상태로 만든다' },
              { text: '성형', name: '성형', keyword: '물레·수작업', desc: '점토알갱이를 하나씩 쌓아 올리는 조적 기법으로 형태를 만든다' },
              { text: '소성', name: '소성', keyword: '1280°C 가마', desc: '가마 안에서 고온으로 굽는다. 불의 온도와 시간이 색을 결정한다' },
              { text: '완성', name: '완성', keyword: '색화장토', desc: '식힌 뒤 유약과 색화장토의 표면을 다듬어 작품을 완성한다' },
            ].map((step, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 12px', position: 'relative', zIndex: 1 }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#DDD5C8', border: '0.5px solid rgba(44,31,14,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                  <span style={{ fontSize: '14px', fontWeight: 300, color: '#2C1F0E', letterSpacing: '0.05em' }}>{step.text}</span>
                </div>
                <div style={{ fontSize: '11px', color: 'rgba(44,31,14,0.6)', letterSpacing: '0.05em', marginBottom: '4px', textAlign: 'center' }}>{step.name}</div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'rgba(139,99,64,0.6)', letterSpacing: '0.08em', marginBottom: '10px', textAlign: 'center' }}>{step.keyword}</div>
                <div style={{ fontSize: '10px', color: 'rgba(44,31,14,0.5)', lineHeight: 1.7, letterSpacing: '0.03em', textAlign: 'center' }}>{step.desc}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            {[
              { icon: '🪨', label: '주재료', name: '혼합토 · 색화장토', desc: '경주 지역 흙을 기반으로 한 혼합 점토. 전통 분청 기법의 백토 화장.' },
              { icon: '🤲', label: '핵심기법', name: '점토 조적 · 분청', desc: '점토알갱이를 하나씩 쌓아 접합하는 독창적 방식. 전통 분청의 현대적 재해석.' }
            ].map((card, i) => (
              <div key={i} style={{ background: '#EDE5D8', border: '0.5px solid rgba(44,31,14,0.08)', borderRadius: '4px', padding: '16px', display: 'flex', gap: '14px' }}>
                <div style={{ fontSize: '22px', flexShrink: 0, marginTop: '2px' }}>{card.icon}</div>
                <div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '8px', letterSpacing: '0.14em', color: 'rgba(139,99,64,0.6)', textTransform: 'uppercase', marginBottom: '5px' }}>{card.label}</div>
                  <div style={{ fontSize: '13px', fontWeight: 300, color: 'rgba(44,31,14,0.8)', letterSpacing: '0.05em', marginBottom: '5px' }}>{card.name}</div>
                  <div style={{ fontSize: '10px', color: 'rgba(44,31,14,0.5)', lineHeight: 1.7, letterSpacing: '0.03em' }}>{card.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'infographic' && (
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '8px', marginBottom: '12px' }}>
            {[
              { en: 'Years of Craft', num: '50', unit: '년', label: '작업 연혁', color: '#8B6340', line: '#8B6340' },
              { en: 'Firing Temp', num: '1280°C', unit: '소성 온도', label: '불의 온도', color: '#C06040', line: '#C06040' },
              { en: 'Exhibitions', num: '14', unit: '회', label: '국내외 전시', color: '#6090B0', line: '#6090B0' },
              { en: 'Education', num: '30', unit: '년', label: '대학 강단 재직', color: '#70A068', line: '#70A068' },
            ].map((stat, i) => (
              <div key={i} style={{ background: '#EDE5D8', border: '0.5px solid rgba(44,31,14,0.08)', borderRadius: '4px', padding: '18px 16px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px', background: stat.line }} />
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '8px', letterSpacing: '0.14em', color: 'rgba(44,31,14,0.35)', textTransform: 'uppercase', marginBottom: '10px' }}>{stat.en}</div>
                <div style={{ fontSize: i === 1 ? '28px' : '36px', fontWeight: 300, color: stat.color, letterSpacing: '0.02em', lineHeight: 1, marginBottom: '6px' }}>{stat.num}</div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'rgba(44,31,14,0.35)', letterSpacing: '0.1em', marginBottom: '8px' }}>{stat.unit}</div>
                <div style={{ fontSize: '11px', color: 'rgba(44,31,14,0.7)', letterSpacing: '0.05em' }}>{stat.label}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            {[
              { icon: '🪨', label: '주재료', name: '혼합토 · 색화장토', desc: '경주 지역 흙을 기반으로 한 혼합 점토. 전통 분청 기법의 백토 화장.' },
              { icon: '🤲', label: '핵심기법', name: '점토 조적 · 분청', desc: '점토알갱이를 하나씩 쌓아 접합하는 독창적 방식. 전통 분청의 현대적 재해석.' }
            ].map((card, i) => (
              <div key={i} style={{ background: '#EDE5D8', border: '0.5px solid rgba(44,31,14,0.08)', borderRadius: '4px', padding: '16px', display: 'flex', gap: '14px' }}>
                <div style={{ fontSize: '22px', flexShrink: 0, marginTop: '2px' }}>{card.icon}</div>
                <div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '8px', letterSpacing: '0.14em', color: 'rgba(139,99,64,0.6)', textTransform: 'uppercase', marginBottom: '5px' }}>{card.label}</div>
                  <div style={{ fontSize: '13px', fontWeight: 300, color: 'rgba(44,31,14,0.8)', letterSpacing: '0.05em', marginBottom: '5px' }}>{card.name}</div>
                  <div style={{ fontSize: '10px', color: 'rgba(44,31,14,0.5)', lineHeight: 1.7, letterSpacing: '0.03em' }}>{card.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default Technique;