import React, { useEffect } from 'react';
import '../styles/Modal.css';

function Modal({ cell, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  // scoll-x 에러 방지를 위한 useEffect
  useEffect(() => {
    const scrollY = window.scrollY;
    document.body.style.position = '';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    return () => {
      document.body.style.position = 'fixed';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollY);
    };
  }, []);

  if (!cell) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
          <img src={cell.image} alt={cell.name} className="modal-image" />
        <div className="modal-info">
          <div className="modal-series">{cell.series}</div>
          <div className="modal-name">{cell.name}</div>
          <div className="modal-year">{cell.year}</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;