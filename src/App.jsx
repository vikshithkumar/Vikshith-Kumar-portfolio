import React, { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Persist theme across sessions
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  const isDark = theme === 'dark';

  return (
    <div className="min-h-screen font-sans relative">
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 5000,
          style: {
            background: isDark ? '#1F2937' : '#F3F4F6',
            color: isDark ? '#F8FAFC' : '#0F172A',
            border: `1px solid ${isDark ? '#2D3748' : '#E5E7EB'}`,
            borderRadius: '12px',
          },
        }}
      />

      <Header theme={theme} onToggleTheme={toggleTheme} />

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
