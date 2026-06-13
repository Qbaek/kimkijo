import React from 'react';

function Tribute() {
  return (
    <section id="헌정" style={{ background: '#F0EAE0', padding: '80px 32px', textAlign: 'center' }}>
      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', letterSpacing: '0.14em', color: 'rgba(44,31,14,0.4)', textTransform: 'uppercase', marginBottom: '12px' }}>Tribute · 헌정</div>
      <div style={{ width: '40px', height: '1px', background: '#8B6340', margin: '0 auto 40px' }} />
      <div style={{ fontSize: '16px', fontWeight: 300, color: 'rgba(44,31,14,0.8)', letterSpacing: '0.04em', lineHeight: 1.8, maxWidth: '760px', margin: '0 auto 40px' }}>
        "흙으로 세상을 빚어온 당신의 손, 그 따뜻함이 우리 삶에 스며들었습니다."
      </div>
      <div style={{ width: '200px', height: '140px', background: '#EDE5D8', border: '0.5px solid rgba(44,31,14,0.1)', margin: '0 auto 32px' }} />
      <div style={{ fontSize: '11px', color: 'rgba(44,31,14,0.55)', lineHeight: 1.8, letterSpacing: '0.03em', maxWidth: '600px', margin: '0 auto' }}>
        50년의 시간을 흙과 함께 살아온 아버지, 선생님, 그리고 예술가에게 이 공간을 바칩니다
      </div>
    </section>
  );
}

export default Tribute;