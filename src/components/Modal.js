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

  if (!cell) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="modal-image" />
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