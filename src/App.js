import React from 'react';
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
  return (
    <div className="App">
      <Nav />
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