import React, { useState, useEffect } from 'react';

const SunIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="5" strokeWidth={2} strokeLinecap="round" />
    <path strokeLinecap="round" strokeWidth={2} d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
);

const MoonIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </svg>
);

const Header = ({ theme, onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isDark = theme === 'dark';

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { name: 'About',        href: '#about' },
    { name: 'Projects',     href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact',      href: '#contact' },
  ];

  const scrolledBg = isDark ? 'rgba(15,23,42,0.92)' : 'rgba(255,251,240,0.92)';
  const drawerBg   = isDark ? 'rgba(15,23,42,0.98)' : 'rgba(255,251,240,0.98)';

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
        style={{
          background: isScrolled ? scrolledBg : 'transparent',
          borderBottom: isScrolled ? '1px solid var(--surface-border)' : '1px solid transparent',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          padding: isScrolled ? '0.85rem 0' : '1.25rem 0',
        }}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group" aria-label="Arihant Shukla — Home">
            <span
              className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold mono transition-all"
              style={{ background: 'var(--accent)', color: '#fff' }}
            >
              A
            </span>
            <span className="font-semibold text-sm tracking-wide" style={{ color: 'var(--text-primary)' }}>
              Arihant<span style={{ color: 'var(--accent)' }}>.</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
                style={{ color: 'var(--text-secondary)' }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = 'var(--text-primary)';
                  e.currentTarget.style.background = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
              title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
              className="relative w-14 h-7 rounded-full flex items-center transition-all duration-300 focus:outline-none"
              style={{
                background: isDark
                  ? 'linear-gradient(135deg, #1E3A5F, #2563EB)'
                  : 'linear-gradient(135deg, #FDE68A, #F59E0B)',
                boxShadow: isDark
                  ? '0 0 12px rgba(59,130,246,0.4), inset 0 1px 0 rgba(255,255,255,0.1)'
                  : '0 0 12px rgba(245,158,11,0.4), inset 0 1px 0 rgba(255,255,255,0.3)',
                border: `1px solid ${isDark ? '#2D3748' : '#E5E7EB'}`,
              }}
            >
              {/* Sliding pill */}
              <span
                className="absolute w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 shadow-md"
                style={{
                  left: isDark ? '2px' : '30px',
                  background: '#fff',
                  color: isDark ? '#2563EB' : '#F59E0B',
                }}
              >
                {isDark ? <MoonIcon /> : <SunIcon />}
              </span>
              {/* Background icon hint */}
              <span
                className="absolute transition-all duration-300"
                style={{
                  right: isDark ? '6px' : 'auto',
                  left: isDark ? 'auto' : '6px',
                  opacity: 0.6,
                  color: '#fff',
                  fontSize: '10px',
                }}
              >
                {isDark ? '☀' : '☽'}
              </span>
            </button>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
              style={{
                color: 'var(--text-secondary)',
                background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)',
                border: '1px solid var(--surface-border)',
              }}
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Drawer */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 pt-20"
          style={{ background: drawerBg, backdropFilter: 'blur(20px)' }}
        >
          <nav className="flex flex-col gap-2 px-6 py-8">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-4 px-5 rounded-xl text-lg font-medium transition-all"
                style={{
                  color: 'var(--text-primary)',
                  background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)',
                  border: '1px solid var(--surface-border)',
                }}
              >
                {link.name}
              </a>
            ))}
            {/* Theme toggle in mobile drawer */}
            <button
              onClick={() => { onToggleTheme(); setMobileOpen(false); }}
              className="mt-4 py-4 px-5 rounded-xl text-lg font-medium text-left transition-all flex items-center gap-3"
              style={{
                color: 'var(--accent)',
                background: 'var(--accent-muted)',
                border: '1px solid var(--accent)',
              }}
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
              Switch to {isDark ? 'Light' : 'Dark'} Mode
            </button>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
