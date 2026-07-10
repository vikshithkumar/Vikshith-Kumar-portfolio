import React, { useState, useEffect } from 'react';
import { projects } from '../siteData';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeProject]);

  return (
    <section id="projects" className="py-28 relative" style={{ background: 'var(--surface)' }}>
      {/* Glow */}
      <div
        className="absolute top-1/3 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'var(--accent)', opacity: 'calc(var(--glow-intensity) * 0.4)', filter: 'blur(120px)' }}
      />
      <div
        className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'hsl(calc(var(--accent-h) + 120), var(--accent-s), var(--accent-l))', opacity: 'calc(var(--glow-intensity) * 0.3)', filter: 'blur(120px)' }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Things I've{' '}
            <span className="text-gradient">actually built</span>
          </h2>
          <p className="max-w-xl text-base" style={{ color: 'var(--text-secondary)' }}>
            Real projects from my GitHub — click any card to inspect live previews, mock terminal logs, and system metrics.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <article
              key={project.id}
              className="glass-card flex flex-col group transition-all duration-300 cursor-pointer hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4),_0_0_30px_var(--accent-glow)]"
              style={{
                borderRadius: 'var(--radius)',
              }}
              onClick={() => setActiveProject(project)}
            >

              {/* Metrics row */}
              <div
                className="px-5 py-3 flex gap-4 border-b"
                style={{ borderColor: 'var(--surface-border)' }}
              >
                {project.metrics.map(m => (
                  <div key={m.label} className="text-center">
                    <p className="mono text-xs font-medium" style={{ color: 'var(--text-primary)' }}>{m.value}</p>
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{m.label}</p>
                  </div>
                ))}
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                <div className="mb-4">
                  <h3
                    className="text-xl font-bold mb-1 transition-colors duration-200 group-hover:text-[var(--accent)]"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {project.title}
                  </h3>
                  <p className="mono text-xs" style={{ color: 'var(--text-muted)' }}>
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: 'var(--text-secondary)' }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-medium"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        color: 'var(--text-muted)',
                        border: '1px solid var(--surface-border)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Info indicator */}
                <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider mt-auto pt-4 border-t border-[rgba(255,255,255,0.04)] group-hover:text-[var(--accent)]" style={{ color: 'var(--text-muted)' }}>
                  <span>{project.ctaText || 'View Details'}</span>
                  <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/vikshithkumar"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            View All on GitHub
          </a>
        </div>
      </div>

      {/* Project Details Modal Overlay */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[rgba(10,12,14,0.85)] backdrop-blur-md animate-fade-in transition-all duration-300">
          {/* Modal Container */}
          <div className="relative w-full max-w-5xl h-[85vh] bg-[var(--surface-raised)] border border-[var(--surface-border)] rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-[0_30px_100px_rgba(0,0,0,0.8)]">
            
            {/* Left Content column: details */}
            <div className="w-full md:w-2/5 p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[var(--surface-border)] bg-[rgba(255,255,255,0.01)] relative z-10">
              <div className="overflow-y-auto max-h-[45vh] md:max-h-full pr-2">
                {/* Close Button on Mobile inside column */}
                <div className="flex md:hidden justify-end mb-4">
                  <button 
                    onClick={() => setActiveProject(null)} 
                    className="p-2 text-white hover:text-[var(--accent)] transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 inline-block bg-[rgba(255,255,255,0.03)] border border-[var(--surface-border)]" style={{ color: `hsl(${activeProject.accentH}, 80%, 65%)` }}>
                  Project Credentials
                </span>
                
                <h3 className="text-3xl font-extrabold text-[var(--text-primary)] mb-2 mt-2">
                  {activeProject.title}
                </h3>
                <p className="text-sm font-semibold mb-6 uppercase tracking-wider" style={{ color: `hsl(${activeProject.accentH}, 80%, 65%)` }}>
                  {activeProject.subtitle}
                </p>
                
                <p className="text-sm leading-relaxed mb-6 text-[var(--text-secondary)]">
                  {activeProject.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 mb-8 bg-[rgba(255,255,255,0.02)] p-4 rounded-2xl border border-[var(--surface-border)]">
                  {activeProject.metrics.map(metric => (
                    <div key={metric.label}>
                      <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">{metric.label}</p>
                      <p className="text-sm font-bold text-[var(--text-primary)]">{metric.value}</p>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {activeProject.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-[rgba(255,255,255,0.03)] border border-[var(--surface-border)] text-[var(--text-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons inside Modal */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-6 border-t border-[var(--surface-border)] mt-4">
                <a
                  href={activeProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full sm:flex-1 flex items-center justify-center gap-2 text-xs font-semibold py-2.5 px-4 rounded-xl cursor-pointer border-none"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  Repository
                </a>
                {activeProject.live && (
                  <a
                    href={activeProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 flex items-center justify-center gap-2 text-xs font-semibold py-2.5 px-4 rounded-xl cursor-pointer border-none text-center"
                    style={{ background: 'var(--text-primary)', color: 'var(--surface)' }}
                  >
                    Visit Website ↗
                  </a>
                )}
                <button
                  onClick={() => setActiveProject(null)}
                  className="btn-ghost w-full sm:flex-1 hidden md:block"
                >
                  Close
                </button>
              </div>
            </div>

            {/* Right Preview column */}
            <div className="w-full md:w-3/5 h-[35vh] md:h-full relative overflow-hidden bg-[#0F172A] flex items-center justify-center p-6 border-t md:border-t-0 md:border-l border-[var(--surface-border)]">
              {/* Close Button on Desktop */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-6 right-6 z-20 p-2 rounded-full border border-[rgba(255,255,255,0.1)] text-white hover:text-[var(--accent)] hover:border-white transition-all bg-[rgba(0,0,0,0.4)] hidden md:block cursor-pointer"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Content depending on project ID */}
              {activeProject.terminal ? (
                <div className="w-full h-full rounded-2xl border border-[var(--surface-border)] bg-[#04060a] p-6 font-mono text-[10px] sm:text-xs flex flex-col gap-4 shadow-2xl relative overflow-hidden animate-fade-in">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3 text-[var(--text-secondary)]">
                    <span className="flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full animate-pulse ${
                        activeProject.id === 'adf-pipeline' ? 'bg-emerald-500' :
                        activeProject.id === 'dwh-analytics' ? 'bg-teal-500' :
                        'bg-indigo-500'
                      }`} />
                      {activeProject.terminal.headerLeft}
                    </span>
                    <span>{activeProject.terminal.headerRight}</span>
                  </div>
                  <div className={`flex-1 flex flex-col gap-2 overflow-y-auto leading-relaxed pr-2 ${
                    activeProject.id === 'adf-pipeline' ? 'text-cyan-400' :
                    activeProject.id === 'dwh-analytics' ? 'text-emerald-400' :
                    'text-purple-400'
                  }`}>
                    {activeProject.terminal.logs.map((log, index) => {
                      let colorClass = '';
                      if (log.type === 'muted') {
                        colorClass = 'text-[var(--text-muted)]';
                      } else if (log.type === 'warning') {
                        colorClass = 'text-yellow-400';
                      } else if (log.type === 'success') {
                        colorClass = 'text-emerald-400 font-bold';
                      }
                      return (
                        <p 
                          key={index} 
                          className={colorClass}
                          style={{ whiteSpace: 'pre-wrap' }}
                        >
                          {log.text}
                        </p>
                      );
                    })}
                  </div>
                  <div className="border-t border-white/10 pt-3 text-[var(--text-muted)] flex justify-between">
                    <span className="mono">{activeProject.terminal.footerLeft}</span>
                    <span className="mono">{activeProject.terminal.footerRight}</span>
                  </div>
                </div>
              ) : (
                <div className="text-white font-mono text-xs">No preview terminal available.</div>
              )}
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
