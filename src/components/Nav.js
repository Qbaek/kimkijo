import React from 'react';

function Nav() {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0,
      height: '52px',
      background: '#EDE5D8',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 32px',
      zIndex: 100,
      borderBottom: '0.5px solid rgba(44,31,14,0.1)'
    }}>
      <div style={{
        fontFamily: "'Noto Serif KR', serif",
        fontSize: '14px', fontWeight: 300,
        color: '#2C1F0E', letterSpacing: '0.05em'
      }}>김기조</div>
      <div style={{ display: 'flex', gap: '32px' }}>
        {['생애','갤러리','기법','연보','아카이브','헌정'].map(tab => (
          <a key={tab} href={`#${tab}`} style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '10px', letterSpacing: '0.12em',
            color: 'rgba(44,31,14,0.5)',
            textDecoration: 'none', textTransform: 'uppercase'
          }}>{tab}</a>
        ))}
      </div>
    </nav>
  );
}

export default Nav;