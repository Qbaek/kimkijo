import React from 'react';

function Life() {
  return (
    <section id="생애" style={{ background: '#F5F0E8', padding: '64px 32px' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '40px', paddingBottom: '16px', borderBottom: '0.5px solid rgba(44,31,14,0.1)' }}>
        <div><span style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', letterSpacing: '0.14em', color: 'rgba(139,99,64,0.6)', marginRight: '10px' }}>02</span><span style={{ fontSize: '22px', fontWeight: 300, color: '#2C1F0E', letterSpacing: '0.05em' }}>생애</span></div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', letterSpacing: '0.12em', color: 'rgba(44,31,14,0.3)', textTransform: 'uppercase' }}>Life & Philosophy</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px', marginBottom: '24px' }}>
        {[
          { num: '01', title: '사람', body: '경주 출생 · 교토 유학\n대구대학교 30년 재직\n흙과 함께한 삶의 궤적' },
          { num: '02', title: '철학', body: '자연 · 조형 · 실험\n흙이 말하는 방식으로\n시간을 담아내는 작업' },
          { num: '03', title: '작품 세계', body: '분청의 현대적 재해석\n생애에서 고적까지\n50년의 조형 탐구' }
        ].map(card => (
          <div key={card.num} style={{ background: '#EDE5D8', border: '0.5px solid rgba(44,31,14,0.08)', borderRadius: '4px', padding: '24px', minHeight: '160px' }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', letterSpacing: '0.12em', color: 'rgba(139,99,64,0.6)', marginBottom: '8px' }}>{card.num}</div>
            <div style={{ fontSize: '14px', fontWeight: 400, color: '#2C1F0E', letterSpacing: '0.05em', marginBottom: '10px' }}>{card.title}</div>
            <div style={{ fontSize: '10px', color: 'rgba(44,31,14,0.6)', lineHeight: 1.8, letterSpacing: '0.03em', whiteSpace: 'pre-line' }}>{card.body}</div>
          </div>
        ))}
      </div>
      <div style={{ background: '#EDE5D8', borderLeft: '1.5px solid #8B6340', padding: '24px 28px' }}>
        <div style={{ fontSize: '13px', fontWeight: 300, color: 'rgba(44,31,14,0.8)', letterSpacing: '0.04em', lineHeight: 1.8, marginBottom: '10px' }}>"흙은 거짓말을 하지 않는다. 손의 기억이 그대로 남아있다."</div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', letterSpacing: '0.1em', color: 'rgba(139,99,64,0.6)' }}>— 영남일보 인터뷰</div>
      </div>
    </section>
  );
}

export default Life;