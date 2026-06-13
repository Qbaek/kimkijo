import React from 'react';

function Footer() {
  return (
    <footer style={{ background: '#EDE5D8', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 32px', borderTop: '0.5px solid rgba(44,31,14,0.1)' }}>
      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', letterSpacing: '0.1em', color: 'rgba(44,31,14,0.6)' }}>김기조 · Kim Ki-jo · 1949–</div>
      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', letterSpacing: '0.08em', color: 'rgba(44,31,14,0.4)' }}>© 2025 Family Archive · All rights reserved</div>
    </footer>
  );
}

export default Footer;