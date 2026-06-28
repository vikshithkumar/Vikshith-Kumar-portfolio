import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { certificates } from '../siteData';
import HolographicSphere from './HolographicSphere';

// ─── Lightbox Modal ────────────────────────────────────────────────────────
const Lightbox = ({ cert, onClose }) => {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full max-h-[90vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-3 px-1">
          <div>
            <h3 className="font-semibold text-base" style={{ color: '#fff' }}>{cert.title}</h3>
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>{cert.issuer} · {cert.date}</p>
          </div>
          <div className="flex items-center gap-3">
            {cert.verifyUrl && (
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-3 py-1.5 rounded-full transition-all"
                style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.8)', border: '1px solid rgba(255,255,255,0.2)' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
              >
                Verify Certificate ↗
              </a>
            )}
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all"
              style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Full certificate image */}
        <div className="overflow-auto rounded-xl" style={{ maxHeight: '80vh' }}>
          <img
            src={cert.image}
            alt={cert.title}
            className="w-full h-auto object-contain rounded-xl"
            style={{ display: 'block' }}
          />
        </div>

        <p className="text-center text-xs mt-2" style={{ color: 'rgba(255,255,255,0.3)' }}>
          Press ESC or click outside to close
        </p>
      </div>
    </div>,
    document.body
  );
};

// ─── Fallback Card ────────────────────────────────────────────────────────
const CertFallback = ({ icon, title, issuer }) => (
  <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-6">
    <span className="text-5xl">{icon}</span>
    <p className="text-sm font-semibold text-center" style={{ color: 'var(--text-primary)' }}>{title}</p>
    <p className="text-xs text-center" style={{ color: 'var(--text-muted)' }}>{issuer}</p>
  </div>
);

// ─── Main Component ────────────────────────────────────────────────────────
const Certificates = () => {
  const [viewMode, setViewMode] = useState('dome'); // 'dome' or 'grid'
  const [imageErrors, setImageErrors] = useState({});
  const [expanded, setExpanded] = useState(null);
  const [visibleCount, setVisibleCount] = useState(4);

  const handleImgError = (idx) => {
    setImageErrors(prev => ({ ...prev, [idx]: true }));
  };


  return (
    <>
      {/* Lightbox */}
      {expanded && <Lightbox cert={expanded} onClose={() => setExpanded(null)} />}

      <section
        id="certificates"
        className="py-28 relative"
        style={{ background: 'var(--surface-raised)' }}
      >
        {/* Glow */}
        <div
          className="absolute top-1/3 left-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: 'hsl(calc(var(--accent-h) + 240), var(--accent-s), var(--accent-l))', opacity: 'calc(var(--glow-intensity) * 0.35)', filter: 'blur(120px)' }}
        />

        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                Credentials &{' '}
                <span className="text-gradient">Certifications</span>
              </h2>
              <p className="max-w-xl text-base" style={{ color: 'var(--text-secondary)' }}>
                {certificates.length} verified certifications from AWS, Google, SAP, and NPTEL.
              </p>
            </div>

            {/* View Mode Switcher */}
            <div className="flex gap-3 bg-[rgba(255,255,255,0.03)] border border-[var(--surface-border)] p-1 rounded-full w-fit">
              <button
                onClick={() => setViewMode('dome')}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer border-none ${
                  viewMode === 'dome'
                    ? 'bg-[var(--accent)] text-white'
                    : 'bg-transparent text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>
                3D Showcase
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer border-none ${
                  viewMode === 'grid'
                    ? 'bg-[var(--accent)] text-white'
                    : 'bg-transparent text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                List Grid
              </button>
            </div>
          </div>

          {/* Conditional Rendering based on viewMode */}
          {viewMode === 'dome' ? (
            <div 
              className="rounded-3xl overflow-hidden border animate-fade-in" 
              style={{ borderColor: 'var(--surface-border)', borderRadius: 'var(--radius)' }}
            >
              <HolographicSphere certificates={certificates} />
            </div>
          ) : (
            <div className="animate-fade-in">
              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                {certificates.slice(0, visibleCount).map((cert, idx) => (
                  <article
                    key={idx}
                    className="glass-card overflow-hidden group transition-all duration-300 hover:-translate-y-2 flex flex-col"
                    style={{ borderRadius: 'var(--radius)' }}
                  >
                    {/* Top accent bar */}
                    <div className="h-1 w-full flex-shrink-0" style={{ background: 'var(--accent)' }} />

                    {/* Image area */}
                    <div
                      className="relative overflow-hidden flex-shrink-0"
                      style={{ height: '10rem', background: 'var(--surface)' }}
                    >
                      {imageErrors[idx] ? (
                        <CertFallback icon={cert.icon} title={cert.title} issuer={cert.issuer} />
                      ) : (
                        <>
                          <img
                            src={cert.image}
                            alt={cert.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            onError={() => handleImgError(idx)}
                          />

                          {/* Hover overlay — Expand button */}
                          <div
                            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(3px)' }}
                          >
                            <button
                              onClick={() => setExpanded(cert)}
                              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all active:scale-95 cursor-pointer border-none"
                              style={{
                                background: 'var(--accent)',
                                color: '#fff',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                              }}
                              onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
                              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                              </svg>
                              Expand
                            </button>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Card body */}
                    <div className="p-4 flex flex-col flex-1">
                      <h3
                        className="font-semibold text-sm leading-snug mb-0.5"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {cert.title}
                      </h3>
                      {cert.subtitle && (
                        <p className="text-xs mb-2" style={{ color: 'var(--text-muted)' }}>
                          {cert.subtitle}
                        </p>
                      )}
                      <div
                        className="flex justify-between items-center mt-auto pt-3"
                        style={{ borderTop: '1px solid var(--surface-border)' }}
                      >
                        <p className="text-xs font-medium" style={{ color: 'var(--accent)' }}>{cert.issuer}</p>
                        <p className="mono text-xs" style={{ color: 'var(--text-muted)' }}>{cert.date}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More Button */}
              {certificates.length > 4 && (
                <div className="mt-12 flex justify-center">
                  <button
                    onClick={() => setVisibleCount(prev => prev === 4 ? certificates.length : 4)}
                    className="btn-primary cursor-pointer border-none font-semibold transition-all duration-300"
                    style={{ fontFamily: 'inherit' }}
                  >
                    {visibleCount === 4 ? (
                      <>
                        Explore All Credentials
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </>
                    ) : (
                      <>
                        Show Highlights Only
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Certificates;
