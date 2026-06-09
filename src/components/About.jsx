import React from 'react';
import { timeline } from '../siteData';

const skills = [
  { name: 'JavaScript (ES6+)', cat: 'lang' },
  { name: 'React',             cat: 'framework' },
  { name: 'Tailwind CSS',      cat: 'styling' },
  { name: 'HTML5 / CSS3',      cat: 'styling' },
  { name: 'Java',              cat: 'lang' },
  { name: 'C / C++',           cat: 'lang' },
  { name: 'Python',            cat: 'lang' },
  { name: 'SQL',               cat: 'data' },
  { name: 'MongoDB',           cat: 'data' },
  { name: 'Git & GitHub',      cat: 'tooling' },
  { name: 'Figma',             cat: 'design' },
  { name: 'Responsive Design', cat: 'design' },
  { name: 'REST APIs',         cat: 'tooling' },
  { name: 'Cloud Computing',   cat: 'infra' },
];


const About = () => (
  <section
    id="about"
    className="py-28 relative overflow-hidden"
    style={{ background: 'var(--surface-raised)' }}
  >
    {/* Subtle glow */}
    <div
      className="absolute top-[10%] right-[-8%] w-[35%] h-[35%] rounded-full pointer-events-none"
      style={{ background: 'var(--accent)', opacity: 'calc(var(--glow-intensity) * 0.5)', filter: 'blur(100px)' }}
    />

    <div className="container mx-auto px-6 relative z-10">
      {/* Section header */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold" style={{ color: 'var(--text-primary)' }}>
          A developer who{' '}
          <span className="text-gradient">thinks in design</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
        {/* Bio column */}
        <div className="lg:col-span-3 space-y-6">
          <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            I got into programming because I wanted to build things that people actually use — not just
            code exercises. That meant caring about <em>how</em> something looks and feels, not just
            whether it compiles.
          </p>
          <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            My stack spans the full range: data compression algorithms in Java, 3D card-flip memory games
            in CSS, SQL schema design, and production React UIs. I approach every project the same way — 
            understand the problem, sketch the architecture, then build it clean.
          </p>
          <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Outside class, I've done internships in Java development, earned NPTEL certification in Cloud
            Computing, and picked up Git, DBMS, and frontend tooling certificates along the way. I like
            learning by shipping.
          </p>

          {/* Skills */}
          <div className="pt-4">
            <h3 className="text-sm font-semibold mb-4 flex items-center" style={{ color: 'var(--text-primary)' }}>
              <span className="accent-line" />
              Technical Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map(skill => (
                <span key={skill.name} className="skill-badge">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline column */}
        <div className="lg:col-span-2 space-y-0">
          <h3 className="text-sm font-semibold mb-6 flex items-center" style={{ color: 'var(--text-primary)' }}>
            <span className="accent-line" />
            Experience & Education
          </h3>

          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-3 top-2 bottom-2 w-px"
              style={{ background: 'var(--surface-border)' }}
            />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-5 relative">
                  {/* Dot */}
                  <div
                    className="w-7 h-7 rounded-full border-2 flex items-center justify-center flex-shrink-0 z-10"
                    style={{
                      background: 'var(--surface)',
                      borderColor: 'var(--accent)',
                      boxShadow: '0 0 10px var(--accent-glow)',
                    }}
                  >
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ background: 'var(--accent)' }}
                    />
                  </div>

                  {/* Content */}
                  <div
                    className="flex-1 glass-card p-4 rounded-xl"
                    style={{ borderRadius: 'calc(var(--radius) * 0.75)' }}
                  >
                    <p className="mono text-xs mb-1" style={{ color: 'var(--accent)' }}>{item.year}</p>
                    <p className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>{item.role}</p>
                    <p className="text-xs mb-2" style={{ color: 'var(--text-muted)' }}>{item.org}</p>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
