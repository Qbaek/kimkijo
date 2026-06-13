import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Life from './components/Life';
import Gallery from './components/Gallery';
import Technique from './components/Technique';
import Chronology from './components/Chronology';
import Archive from './components/Archive';
import Tribute from './components/Tribute';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="App">
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <Life />
      <Gallery />
      <Technique />
      <Chronology />
      <Archive />
      <Tribute />
      <Footer />
    </div>
  );
}

export default App;