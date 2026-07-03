import React from 'react';
import { timeline } from '../siteData';

const skills = [
  // Data Engineering
  { name: 'Azure Data Factory', cat: 'de' },
  { name: 'Databricks',         cat: 'de' },
  { name: 'PySpark',            cat: 'de' },
  { name: 'Azure Data Lake',    cat: 'de' },
  { name: 'Databricks Notebooks', cat: 'de' },
  // Programming
  { name: 'Python',             cat: 'lang' },
  { name: 'SQL',                cat: 'lang' },
  { name: 'Java',               cat: 'lang' },
  // Databases
  { name: 'MySQL',              cat: 'db' },
  { name: 'MS SQL Server',      cat: 'db' },
  // Tools
  { name: 'Git',                cat: 'tools' },
  { name: 'GitHub',             cat: 'tools' },
  { name: 'Azure DevOps',       cat: 'tools' },
  { name: 'Logic Apps',         cat: 'tools' },
  { name: 'VS Code',            cat: 'tools' },
  { name: 'Claude AI',          cat: 'tools' },
  // Concepts
  { name: 'ETL Pipelines',      cat: 'concepts' },
  { name: 'Medallion Architecture', cat: 'concepts' },
  { name: 'Star Schema',        cat: 'concepts' },
  { name: 'Dimensional Modeling', cat: 'concepts' },
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
          A data engineer who{' '}
          <span className="text-gradient">thinks in scale</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
        {/* Bio column */}
        <div className="lg:col-span-3 space-y-6">
          <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            I got into data engineering because I love solving the puzzle of how massive amounts of raw information flow and scale across cloud ecosystems. For me, it is not just about writing queries; it is about designing pipelines that are reliable, performant, and clean.
          </p>
          <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            As a final-year Computer Science student, I have focused my academic and self-directed path on cloud data platforms and distributed computation. I specialize in building end-to-end ETL pipelines, leveraging Azure Data Factory for orchestration, Databricks and PySpark for transformation, and Azure Data Lake as a scalable storage foundation. My database work extends across MySQL and MS SQL Server, structuring star schemas and dimensional models.
          </p>
          <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Beyond the classroom, I've built automated pipelines, integrated cloud-native Logic Apps, and earned certifications from Microsoft and Google. I am passionate about engineering modern, scalable data platforms that bridge the gap between complex raw data and real-world business intelligence.
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
