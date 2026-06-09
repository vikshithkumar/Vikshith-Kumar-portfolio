import React, { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DesignLab from './components/DesignLab';

const THEMES = {
  blue:   { h: 217, s: '91%', l: '60%' },
  emerald:{ h: 160, s: '84%', l: '39%' },
  violet: { h: 263, s: '85%', l: '65%' },
  amber:  { h: 38,  s: '95%', l: '55%' },
};

function App() {
  const [labOpen, setLabOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState('blue');
  const [radius, setRadius] = useState(16);
  const [gridOpacity, setGridOpacity] = useState(0.04);
  const [glowIntensity, setGlowIntensity] = useState(0.18);

  useEffect(() => {
    const t = THEMES[activeTheme];
    const root = document.documentElement;
    root.style.setProperty('--accent-h', t.h);
    root.style.setProperty('--accent-s', t.s);
    root.style.setProperty('--accent-l', t.l);
    root.style.setProperty('--radius', `${radius}px`);
    root.style.setProperty('--grid-opacity', gridOpacity);
    root.style.setProperty('--glow-intensity', glowIntensity);
  }, [activeTheme, radius, gridOpacity, glowIntensity]);

  return (
    <div className="min-h-screen text-white font-sans relative">
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 5000,
          style: {
            background: '#12151c',
            color: '#f0f2f7',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '12px',
          },
        }}
      />

      <Header onLabToggle={() => setLabOpen(v => !v)} labOpen={labOpen} />

      <DesignLab
        open={labOpen}
        onClose={() => setLabOpen(false)}
        activeTheme={activeTheme}
        setActiveTheme={setActiveTheme}
        themes={THEMES}
        radius={radius}
        setRadius={setRadius}
        gridOpacity={gridOpacity}
        setGridOpacity={setGridOpacity}
        glowIntensity={glowIntensity}
        setGlowIntensity={setGlowIntensity}
      />

      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
