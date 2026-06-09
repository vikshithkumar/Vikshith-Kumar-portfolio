import React, { useState, useEffect } from 'react';

const Header = ({ onLabToggle, labOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
        style={{
          background: isScrolled
            ? 'rgba(13,15,20,0.85)'
            : 'transparent',
          borderBottom: isScrolled ? '1px solid var(--surface-border)' : '1px solid transparent',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          padding: isScrolled ? '0.85rem 0' : '1.25rem 0',
        }}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group"
            aria-label="Arihant Shukla — Home"
          >
            <span
              className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold mono transition-all"
              style={{ background: 'var(--accent)', color: '#fff' }}
            >
              A
            </span>
            <span
              className="font-semibold text-sm tracking-wide transition-colors"
              style={{ color: 'var(--text-primary)' }}
            >
              Arihant<span style={{ color: 'var(--accent)' }}>.</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all relative group"
                style={{ color: 'var(--text-secondary)' }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.background = 'transparent'; }}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onLabToggle}
              className="hidden md:flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium mono transition-all"
              style={{
                background: labOpen ? 'var(--accent-muted)' : 'rgba(255,255,255,0.04)',
                color: labOpen ? 'var(--accent)' : 'var(--text-secondary)',
                border: `1px solid ${labOpen ? 'var(--accent)' : 'var(--surface-border)'}`,
              }}
              aria-label="Toggle Design Lab"
              title="Open Design Lab"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
              Design Lab
            </button>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
              style={{ color: 'var(--text-secondary)', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--surface-border)' }}
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
          style={{ background: 'rgba(13,15,20,0.97)', backdropFilter: 'blur(20px)' }}
        >
          <nav className="flex flex-col gap-2 px-6 py-8">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-4 px-5 rounded-xl text-lg font-medium transition-all"
                style={{ color: 'var(--text-primary)', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--surface-border)' }}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => { onLabToggle(); setMobileOpen(false); }}
              className="mt-4 py-4 px-5 rounded-xl text-lg font-medium text-left transition-all mono"
              style={{ color: 'var(--accent)', background: 'var(--accent-muted)', border: '1px solid var(--accent)' }}
            >
              🎨 Design Lab
            </button>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
