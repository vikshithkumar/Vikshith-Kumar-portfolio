import React from 'react';
import Particles from './Particles';

const ResumePage = () => {
  return (
    <div className="min-h-screen pt-48 pb-20 px-6 animate-fade-in relative overflow-hidden" style={{ background: 'var(--surface)' }}>
      {/* Particles Background */}
      <div className="absolute inset-0 z-0 opacity-100">
        <Particles
          particleColors={["#ffffff", "hsl(var(--accent-h), var(--accent-s), var(--accent-l))"]}
          particleCount={800}
          particleSpread={10}
          speed={0.2}
          particleBaseSize={150}
          moveParticlesOnHover={true}
          alphaParticles
          disableRotation={false}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header & Download Button */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight" style={{ color: 'var(--text-primary)' }}>
              Vikshith Kumar S
            </h1>
            <div className="flex flex-wrap gap-4 text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
              <a href="mailto:vikshitkumar40781@gmail.com" className="hover:text-[var(--text-primary)] flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                vikshitkumar40781@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/vikshithkumar" target="_blank" rel="noreferrer" className="hover:text-[var(--text-primary)] flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                LinkedIn
              </a>
              <a href="https://github.com/vikshithkumar" target="_blank" rel="noreferrer" className="hover:text-[var(--text-primary)] flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                GitHub
              </a>
              <span className="flex items-center gap-1.5"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>+91 9360334880</span>
              <span className="flex items-center gap-1.5"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>Bengaluru, India</span>
            </div>
          </div>
          
          <a 
            href="/resume.pdf" 
            download="Vikshith_Kumar_S_Resume.pdf"
            className="shrink-0 flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-transform hover:-translate-y-1"
            style={{ background: 'var(--text-primary)', color: 'var(--surface)', boxShadow: '0 8px 20px -8px var(--text-primary)' }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download PDF
          </a>
        </div>

        <div className="space-y-12">
          
          {/* Professional Summary */}
          <section>
            <h2 className="text-xl font-bold mb-4 pb-2 border-b" style={{ color: 'var(--text-primary)', borderColor: 'var(--surface-border)' }}>Professional Summary</h2>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Computer Science student focused on designing scalable data platforms and cloud-native ETL pipelines. Experienced in building metadata-driven data pipelines, modern data warehouses, and analytics solutions using Azure Data Factory, Databricks, PySpark, SQL, Python, and Microsoft Fabric. Passionate about building reusable, reliable, and maintainable data systems.
            </p>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-xl font-bold mb-4 pb-2 border-b" style={{ color: 'var(--text-primary)', borderColor: 'var(--surface-border)' }}>Education</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="font-semibold text-base" style={{ color: 'var(--text-primary)' }}>Bachelor of Engineering in Computer Science Engineering</h3>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>New Horizon College of Engineering</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>2023 - 2027</p>
                </div>
              </div>
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="font-semibold text-base" style={{ color: 'var(--text-primary)' }}>Higher Secondary Education</h3>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Jaivins Academy</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>2021 - 2023</p>
                </div>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-xl font-bold mb-4 pb-2 border-b" style={{ color: 'var(--text-primary)', borderColor: 'var(--surface-border)' }}>Projects</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-base mb-1" style={{ color: 'var(--text-primary)' }}>Azure Data Factory — Cloud Data Pipeline</h3>
                <p className="text-sm mb-2" style={{ color: 'var(--text-muted)' }}><strong style={{ color: 'var(--text-secondary)' }}>Tech Stack:</strong> Azure Data Factory, Azure Databricks, PySpark, ADLS Gen2, Logic Apps.</p>
                <ul className="list-disc pl-5 space-y-1 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  <li>Designed and built a metadata-driven ETL platform that ingests data from files, SQL databases, REST APIs, and GitHub into Azure Data Lake Storage Gen2.</li>
                  <li>Implemented a Medallion Architecture (Bronze → Silver → Gold) using Azure Data Factory, Databricks, and PySpark for scalable data processing.</li>
                  <li>Developed reusable PySpark transformation pipelines for schema validation, deduplication, and business transformations.</li>
                  <li>Integrated Azure Logic Apps for automated pipeline monitoring, failure notifications, and operational alerts.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-base mb-1" style={{ color: 'var(--text-primary)' }}>Data Warehouse and Analytics Pipeline</h3>
                <p className="text-sm mb-2" style={{ color: 'var(--text-muted)' }}><strong style={{ color: 'var(--text-secondary)' }}>Tech Stack:</strong> MS SQL Server, MySQL, Python, Star Schema, Dimensional Modeling.</p>
                <ul className="list-disc pl-5 space-y-1 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  <li>Designed a modern Star Schema data warehouse supporting analytical reporting and business intelligence workloads.</li>
                  <li>Built Python and SQL ETL pipelines for incremental and full data loading into dimension and fact tables.</li>
                  <li>Developed staging, dimension, and fact layers following Kimball dimensional modeling principles.</li>
                  <li>Optimized warehouse performance through indexing strategies and query tuning for faster analytical workloads.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-base mb-1" style={{ color: 'var(--text-primary)' }}>Personal Finance Analysis and Budget Optimisation System</h3>
                <p className="text-sm mb-2" style={{ color: 'var(--text-muted)' }}><strong style={{ color: 'var(--text-secondary)' }}>Tech Stack:</strong> Python, Pandas, NumPy, MS SQL Server, XGBoost, SciPy.</p>
                <ul className="list-disc pl-5 space-y-1 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  <li>Developed a personal finance analytics platform to track spending patterns and generate data-driven budget recommendations.</li>
                  <li>Built ETL workflows using Pandas and NumPy to clean, transform, and categorize transaction data.</li>
                  <li>Designed relational database schemas to manage financial transactions and budgeting information.</li>
                  <li>Applied machine learning techniques to identify spending anomalies and recommend optimized monthly budgets.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section>
            <h2 className="text-xl font-bold mb-4 pb-2 border-b" style={{ color: 'var(--text-primary)', borderColor: 'var(--surface-border)' }}>Technical Skills</h2>
            <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
              <li><strong style={{ color: 'var(--text-primary)' }}>Data Engineering:</strong> Azure Data Factory, Azure Databricks, PySpark, Azure Data Lake Storage Gen2, Microsoft Fabric, Logic Apps</li>
              <li><strong style={{ color: 'var(--text-primary)' }}>Programming Languages:</strong> Python, SQL, Java</li>
              <li><strong style={{ color: 'var(--text-primary)' }}>Databases:</strong> Microsoft SQL Server, MySQL</li>
              <li><strong style={{ color: 'var(--text-primary)' }}>Data Warehousing & Analytics:</strong> ETL Pipelines, Medallion Architecture, Star Schema, Dimensional Modeling, Incremental Data Loading</li>
              <li><strong style={{ color: 'var(--text-primary)' }}>Tools:</strong> Git, GitHub, Azure DevOps, VS Code</li>
            </ul>
          </section>

          {/* Certifications */}
          <section>
            <h2 className="text-xl font-bold mb-4 pb-2 border-b" style={{ color: 'var(--text-primary)', borderColor: 'var(--surface-border)' }}>Certifications</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
              <li><strong>Microsoft Certified: Fabric Data Engineer Associate</strong> (DP-700)</li>
              <li><strong>Claude Code in Action</strong> – AI Developer Assistant</li>
              <li><strong>Introduction to Generative AI</strong></li>
            </ul>
          </section>

          {/* Awards & Achievements */}
          <section>
            <h2 className="text-xl font-bold mb-4 pb-2 border-b" style={{ color: 'var(--text-primary)', borderColor: 'var(--surface-border)' }}>Awards & Achievements</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
              <li><strong>IEEE Vibethon Winner (1st Place)</strong> – Led a team of four to design and build a Student Carpool & Ride Subscription System, securing 1st place among 30+ teams at IEEE Vibethon 2025.</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
};

export default ResumePage;
