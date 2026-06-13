import React from 'react';
import '../styles/Nav.css';

function Nav({ theme, toggleTheme }) {
  return (
    <nav className="nav">
      <div className="nav-logo">김기조</div>
      <div className="nav-tabs">
        {['생애','갤러리','기법','연보','아카이브','헌정'].map(tab => (
          <a key={tab} href={`#${tab}`}>{tab}</a>
        ))}
      </div>
      <div className="theme-toggle" onClick={toggleTheme}>
        <span className={`toggle-label ${theme === 'dark' ? 'active' : ''}`}>Dark</span>
          <div className="toggle-switch">
          <div className={`toggle-knob ${theme === 'dark' ? 'dark' : ''}`} />
        </div>
        <span className={`toggle-label ${theme === 'light' ? 'active' : ''}`}>Light</span>
      </div>
    </nav>
  );
}

export default Nav;