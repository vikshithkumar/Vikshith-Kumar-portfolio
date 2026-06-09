import React, { useState } from 'react';

const projects = [
  {
    id: 'qrsafe',
    title: 'QR Safe – Threat Detection',
    subtitle: 'React • Spring Boot • Machine Learning',
    description:
      'Enterprise-grade protection against Quishing attacks. Combines ML heuristics with real-time threat intelligence feeds (Google Safe Browsing, VirusTotal, RDAP) for instantaneous threat scoring and intelligence reports.',
    tags: ['React', 'Spring Boot', 'Machine Learning', 'Cybersecurity'],
    accent: 'from-emerald-400 to-teal-500',
    accentH: 160,
    github: 'https://github.com/Arihantshukla98',
    live: null,
    metrics: [
      { label: 'Frontend', value: 'React' },
      { label: 'Backend', value: 'Java Spring' },
      { label: 'Type', value: 'Full-Stack App' },
    ],
  },
  {
    id: 'compression',
    title: 'Data Compression Engine',
    subtitle: 'Java • File I/O • Algorithms',
    description:
      'A command-line Java tool that compresses and decompresses files using Huffman coding. Built from scratch — encoding tree, byte-level bit manipulation, and a clean CLI interface. No external libraries.',
    tags: ['Java', 'Algorithms', 'File I/O', 'CLI'],
    accent: 'from-orange-400 to-red-500',
    accentH: 20,
    github: 'https://github.com/Arihantshukla98/Data-Compression-and-Decompression-Tool',
    live: null,
    metrics: [
      { label: 'Language', value: 'Java' },
      { label: 'Algorithm', value: 'Huffman' },
      { label: 'Type', value: 'CLI Tool' },
    ],
  },
  {
    id: 'memory',
    title: 'Memory Card Game',
    subtitle: 'CSS • JavaScript • DOM',
    description:
      'A 3D card-flip memory matching game built entirely with CSS transforms and vanilla JS. Smooth flip animations, shuffle logic, a move counter, and a win-detection system. No frameworks.',
    tags: ['CSS3', 'JavaScript', 'DOM', 'Animations'],
    accent: 'from-blue-400 to-cyan-400',
    accentH: 200,
    github: 'https://github.com/Arihantshukla98/MemoryCardGame',
    live: null,
    metrics: [
      { label: 'Language', value: 'CSS + JS' },
      { label: 'Physics', value: '3D Flip' },
      { label: 'Type', value: 'Browser Game' },
    ],
  },
];

const Projects = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" className="py-28 relative" style={{ background: 'var(--surface)' }}>
      {/* Glow */}
      <div
        className="absolute top-1/3 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'var(--accent)', opacity: 'calc(var(--glow-intensity) * 0.4)', filter: 'blur(120px)' }}
      />
      <div
        className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'hsl(263, 85%, 65%)', opacity: 'calc(var(--glow-intensity) * 0.3)', filter: 'blur(120px)' }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Things I've{' '}
            <span className="text-gradient">actually built</span>
          </h2>
          <p className="max-w-xl text-base" style={{ color: 'var(--text-secondary)' }}>
            Real projects from my GitHub — not template placeholders. Each one solved an actual problem
            and taught me something concrete.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <article
              key={project.id}
              className="glass-card flex flex-col group transition-all duration-300"
              style={{
                borderRadius: 'var(--radius)',
                transform: hovered === project.id ? 'translateY(-6px)' : 'translateY(0)',
                boxShadow: hovered === project.id
                  ? `0 20px 60px rgba(0,0,0,0.4), 0 0 30px var(--accent-glow)`
                  : undefined,
              }}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Top accent bar */}
              <div className={`h-1 bg-gradient-to-r ${project.accent} rounded-t-xl`} />

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
                    className="text-xl font-bold mb-1 transition-colors duration-200"
                    style={{ color: hovered === project.id ? 'var(--accent)' : 'var(--text-primary)' }}
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

                {/* Links */}
                <div className="flex items-center gap-4 pt-2" style={{ borderTop: '1px solid var(--surface-border)' }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium transition-colors"
                    style={{ color: 'var(--text-secondary)' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    View on GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium transition-colors ml-auto"
                      style={{ color: 'var(--accent)' }}
                    >
                      Live
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/Arihantshukla98"
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
    </section>
  );
};

export default Projects;
