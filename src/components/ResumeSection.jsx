import React from 'react';

const ResumeSection = () => {
  return (
    <section className="py-24 relative overflow-hidden border-y" style={{ background: 'var(--surface)', borderColor: 'var(--surface-border)' }}>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight" style={{ color: 'var(--text-primary)' }}>
          Want the full picture?
        </h2>
        <p className="max-w-xl mx-auto mb-10 text-base md:text-lg" style={{ color: 'var(--text-secondary)' }}>
          Grab a copy of my resume for a complete, detailed overview of my technical skills, education, and development experience.
        </p>
        <a 
          href="/resume.pdf" 
          download="Vikshith_Kumar_S_Resume.pdf"
          className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-base transition-all duration-300 hover:-translate-y-1"
          style={{ 
            background: 'var(--text-primary)', 
            color: 'var(--surface)',
            boxShadow: '0 10px 40px -10px var(--text-primary)'
          }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download Resume
        </a>
      </div>
      {/* Decorative background element */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 rounded-full pointer-events-none"
        style={{ background: 'var(--accent)', filter: 'blur(140px)', opacity: 'calc(var(--glow-intensity) * 0.4)' }}
      />
    </section>
  );
};

export default ResumeSection;
