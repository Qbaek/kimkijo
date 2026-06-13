import React from 'react';

function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      paddingTop: '52px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      position: 'relative'
    }}>
      <div style={{ background: '#F5F0E8', padding: '80px 48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '280px', height: '380px', background: '#EDE5D8', border: '0.5px solid rgba(44,31,14,0.1)' }} />
      </div>
      <div style={{ background: '#F0EAE0', padding: '80px 48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '340px', height: '340px', background: '#E8E0D0', border: '0.5px solid rgba(44,31,14,0.1)' }} />
      </div>
      <div style={{
        position: 'absolute', left: '50%', transform: 'translateX(-50%)',
        top: '50%', marginTop: '-150px',
        width: '280px',
        background: 'rgba(240,235,226,0.92)',
        border: '0.5px solid rgba(44,31,14,0.1)',
        padding: '28px 24px',
        zIndex: 10
      }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', letterSpacing: '0.14em', color: 'rgba(44,31,14,0.4)', textTransform: 'uppercase', marginBottom: '12px' }}>
          Ceramist · Professor · Artist
        </div>
        <div style={{ fontSize: '36px', fontWeight: 300, color: '#2C1F0E', letterSpacing: '0.04em', marginBottom: '4px' }}>김기조</div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', letterSpacing: '0.1em', color: 'rgba(44,31,14,0.5)', marginBottom: '14px' }}>Kim Ki-jo · 1949–</div>
        <div style={{ width: '40px', height: '1px', background: '#8B6340', marginBottom: '16px' }} />
        <div style={{ fontSize: '11px', color: 'rgba(44,31,14,0.7)', lineHeight: 1.8, letterSpacing: '0.03em', marginBottom: '20px' }}>
          흙과 불, 50년의 시간이 빚은 예술 세계를 기억합니다.
        </div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', letterSpacing: '0.1em', color: 'rgba(44,31,14,0.35)', textTransform: 'uppercase' }}>
          scroll to explore ↓
        </div>
      </div>
    </section>
  );
}

export default Hero;