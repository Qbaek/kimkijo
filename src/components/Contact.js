import React, { useState } from 'react';
import '../styles/Contact.css';
import useScrollFade from '../hooks/useScrollFade';

function Contact() {
  const [ref, visible] = useScrollFade(0.3);
  const [form, setForm] = useState({
    name: '',
    email: '',
    type: '작품 구매',
    message: '',
  });

  const fadeItem = (index) => ({
    opacity: visible ? 1 : 0,
    transition: `opacity 1.2s ease ${index * 0.5}s`,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('문의가 접수되었습니다. 감사합니다.');
    setForm({ name: '', email: '', type: '작품 구매', message: '' });
  };

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="contact-inner">
        <div className="contact-header" style={fadeItem(0)}>
          <div className="contact-label">Contact · 문의</div>
          <div className="contact-divider" />
          <div className="contact-desc">
            흙과 불로 빚은 작품에 관심이 있으신가요?<br />
            작품 구매 · 제작 의뢰 · 협업 문의는 아래로 연락해주세요.
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row" style={fadeItem(1)}>
            <label className="form-label">이름</label>
            <input
              className="form-input"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="성함을 입력해주세요"
              required
            />
          </div>
          <div className="form-row" style={fadeItem(2)}>
            <label className="form-label">이메일</label>
            <input
              className="form-input"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="이메일 주소를 입력해주세요"
              required
            />
          </div>
          <div className="form-row" style={fadeItem(3)}>
            <label className="form-label">문의 유형</label>
            <select
              className="form-select"
              name="type"
              value={form.type}
              onChange={handleChange}
            >
              <option>작품 구매</option>
              <option>제작 의뢰</option>
              <option>협업</option>
              <option>기타</option>
            </select>
          </div>
          <div className="form-row" style={fadeItem(4)}>
            <label className="form-label">메시지</label>
            <textarea
              className="form-textarea"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="문의 내용을 자유롭게 작성해주세요"
              required
            />
          </div>
          <div className="form-submit" style={fadeItem(5)}>
            <button type="submit" className="submit-btn">문의 보내기</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;