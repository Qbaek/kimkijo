import React, { useState } from 'react';
import '../styles/Technique.css';

function Technique() {
  const [activeTab, setActiveTab] = useState('process');

  const steps = [
    { text: '흙', name: '흙', keyword: '점토 조적', desc: '점토를 반죽하고 불순물을 제거해 작업에 알맞은 상태로 만든다' },
    { text: '성형', name: '성형', keyword: '물레·수작업', desc: '점토알갱이를 하나씩 쌓아 올리는 조적 기법으로 형태를 만든다' },
    { text: '소성', name: '소성', keyword: '1280°C 가마', desc: '가마 안에서 고온으로 굽는다. 불의 온도와 시간이 색을 결정한다' },
    { text: '완성', name: '완성', keyword: '색화장토', desc: '식힌 뒤 유약과 색화장토의 표면을 다듬어 작품을 완성한다' },
  ];

  const stats = [
    { en: 'Years of Craft', num: '50', unit: '년', label: '작업 연혁', cls: 'sc-year' },
    { en: 'Firing Temp', num: '1280°C', unit: '소성 온도', label: '불의 온도', cls: 'sc-temp' },
    { en: 'Exhibitions', num: '14', unit: '회', label: '국내외 전시', cls: 'sc-exhi' },
    { en: 'Education', num: '30', unit: '년', label: '대학 강단 재직', cls: 'sc-edu' },
  ];

  const details = [
    { icon: '🪨', label: '주재료', name: '혼합토 · 색화장토', desc: '경주 지역 흙을 기반으로 한 혼합 점토. 전통 분청 기법의 백토 화장.' },
    { icon: '🤲', label: '핵심기법', name: '점토 조적 · 분청', desc: '점토알갱이를 하나씩 쌓아 접합하는 독창적 방식. 전통 분청의 현대적 재해석.' },
  ];

  return (
    <section id="기법" className="technique">
      <div className="sec-header">
        <div><span className="sec-num">04</span><span className="sec-title">기법 & 재료</span></div>
        <div className="sec-en">Technique & Material</div>
      </div>
      <div className="tech-tabs">
        {[['process', '단계별 프로세스'], ['infographic', '인포그래픽']].map(([key, label]) => (
          <button key={key} onClick={() => setActiveTab(key)} className={`tech-tab ${activeTab === key ? 'active' : ''}`}>{label}</button>
        ))}
      </div>

      {activeTab === 'process' && (
        <div>
          <div className="steps">
            <div className="step-line" />
            {steps.map((step, i) => (
              <div key={i} className="step">
                <div className="step-circle"><span className="step-circle-text">{step.text}</span></div>
                <div className="step-name">{step.name}</div>
                <div className="step-keyword">{step.keyword}</div>
                <div className="step-desc">{step.desc}</div>
              </div>
            ))}
          </div>
          <div className="detail-row">
            {details.map((card, i) => (
              <div key={i} className="detail-card">
                <div className="dc-icon">{card.icon}</div>
                <div>
                  <div className="dc-label">{card.label}</div>
                  <div className="dc-name">{card.name}</div>
                  <div className="dc-desc">{card.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'infographic' && (
        <div>
          <div className="stat-row">
            {stats.map((stat, i) => (
              <div key={i} className={`stat-card ${stat.cls}`}>
                <div className="sc-en">{stat.en}</div>
                <div className="sc-num">{stat.num}</div>
                <div className="sc-unit">{stat.unit}</div>
                <div className="sc-label">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="detail-row">
            {details.map((card, i) => (
              <div key={i} className="detail-card">
                <div className="dc-icon">{card.icon}</div>
                <div>
                  <div className="dc-label">{card.label}</div>
                  <div className="dc-name">{card.name}</div>
                  <div className="dc-desc">{card.desc}</div>
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