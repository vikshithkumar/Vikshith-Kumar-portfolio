import React, { useState, useEffect } from 'react';
import { certificates } from '../siteData';

// ─── Lightbox Modal ────────────────────────────────────────────────────────
const Lightbox = ({ cert, onClose }) => {
  // Close on ESC key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
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
    </div>
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
  const [imageErrors, setImageErrors] = useState({});
  const [expanded, setExpanded] = useState(null); // holds the cert object to show in lightbox

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
          style={{ background: 'hsl(160, 84%, 39%)', opacity: 'calc(var(--glow-intensity) * 0.35)', filter: 'blur(120px)' }}
        />

        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="mb-14">
            <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Credentials &{' '}
              <span className="text-gradient">Certifications</span>
            </h2>
            <p className="max-w-xl text-base" style={{ color: 'var(--text-secondary)' }}>
              {certificates.length} certifications from AWS, Google, SAP, and NPTEL — all verified.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {certificates.map((cert, idx) => (
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
                          className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all active:scale-95"
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
        </div>
      </section>
    </>
  );
};

export default Certificates;
