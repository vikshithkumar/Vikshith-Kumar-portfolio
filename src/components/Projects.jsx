import React, { useState, useEffect } from 'react';

const projects = [
  {
    id: 'adf-pipeline',
    title: 'Azure Data Factory — Cloud Data Pipeline',
    subtitle: 'ETL • Databricks • PySpark • ADLS Gen2',
    description: 'An end-to-end data integration solution designed to ingest and process large-scale datasets. Leverages Azure Data Factory (ADF) for orchestration, Azure Data Lake Storage (ADLS Gen2) for raw/processed zones, and Azure Databricks with PySpark to execute transformations following the Medallion architecture (Bronze -> Silver -> Gold).',
    tags: ['Azure Data Factory', 'Databricks', 'PySpark', 'ADLS Gen2', 'Logic Apps'],
    accent: 'from-blue-400 to-indigo-500',
    accentH: 220,
    github: 'https://github.com/vikshithkumar/Azure_data_factory_Project',
    metrics: [
      { label: 'Orchestrator', value: 'Azure ADF' },
      { label: 'Engine', value: 'PySpark' },
      { label: 'Architecture', value: 'Medallion' },
    ],
  },
  {
    id: 'dwh-analytics',
    title: 'Data Warehouse and Analytics Pipeline',
    subtitle: 'SQL Server • Dimensional Modeling • Star Schema',
    description: 'A robust data warehousing architecture built to support enterprise-grade business intelligence. Designed clean dimensional models and star schemas to structure business data. Developed automated SQL staging procedures and ETL scripts in Python/MySQL to load data and power analytics dashboard platforms.',
    tags: ['SQL Server', 'MySQL', 'Star Schema', 'Dimensional Modeling', 'Python'],
    accent: 'from-emerald-400 to-teal-500',
    accentH: 160,
    github: 'https://github.com/vikshithkumar/Sql_Data_Warehouse_Projrct',
    metrics: [
      { label: 'Warehouse', value: 'MS SQL Server' },
      { label: 'Modeling', value: 'Star Schema' },
      { label: 'ETL Engine', value: 'Python / SQL' },
    ],
  },
  {
    id: 'finance-budget',
    title: 'Personal Finance Analysis & Budget Optimisation',
    subtitle: 'Python • Pandas • Spend Analytics • XGBoost',
    description: 'An intelligent financial optimization system that tracks, visualizes, and optimizes personal expense budgets. Uses Python data libraries (Pandas, NumPy) to categorize transactions, detect anomalies in spending behaviors, and leverages machine learning models to suggest optimal budget constraints.',
    tags: ['Python', 'Pandas', 'SQL', 'Data Analytics', 'XGBoost'],
    accent: 'from-violet-500 to-purple-500',
    accentH: 270,
    github: 'https://github.com/vikshithkumar',
    metrics: [
      { label: 'Language', value: 'Python' },
      { label: 'Analysis', value: 'Pandas / NumPy' },
      { label: 'Optimization', value: 'XGBoost ML' },
    ],
  },
];

const Projects = () => {
  const [hovered, setHovered] = useState(null);
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
              className="glass-card flex flex-col group transition-all duration-300 cursor-pointer"
              style={{
                borderRadius: 'var(--radius)',
                transform: hovered === project.id ? 'translateY(-6px)' : 'translateY(0)',
                boxShadow: hovered === project.id
                  ? `0 20px 60px rgba(0,0,0,0.4), 0 0 30px var(--accent-glow)`
                  : undefined,
              }}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
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

                {/* Info indicator */}
                <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider mt-auto pt-4 border-t border-[rgba(255,255,255,0.04)]" style={{ color: hovered === project.id ? 'var(--accent)' : 'var(--text-muted)' }}>
                  <span>View Details</span>
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
              {activeProject.id === 'adf-pipeline' ? (
                /* Simulated ADF Spark pipeline monitor */
                <div className="w-full h-full rounded-2xl border border-[var(--surface-border)] bg-[#04060a] p-6 font-mono text-[10px] sm:text-xs flex flex-col gap-4 shadow-2xl relative overflow-hidden animate-fade-in">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3 text-[var(--text-secondary)]">
                    <span className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      AZURE ADF MONITOR: ACTIVE
                    </span>
                    <span>Status: SUCCEEDED</span>
                  </div>
                  <div className="flex-1 flex flex-col gap-2 overflow-y-auto text-cyan-400 leading-relaxed pr-2">
                    <p className="text-[var(--text-muted)]">[19:15:01] Triggering pipeline: PL_Ingest_ADLS_Gen2</p>
                    <p className="text-[var(--text-muted)]">[19:15:02] Running copy activity: Copy_Raw_To_Bronze...</p>
                    <p>[19:15:05] [BRONZE] Ingested 1.2M records from Blob storage to ADLS Gen2 Delta tables.</p>
                    <p className="text-yellow-400">[19:15:06] [SILVER] Initiating Databricks PySpark transformation job...</p>
                    <p className="text-yellow-400">[19:15:08] [SILVER] PySpark clean schema, parsed types, deduplicated keys.</p>
                    <p className="text-yellow-400">[19:15:10] [GOLD] Running aggregation notebook. Loaded Gold tables.</p>
                    <p className="text-emerald-400 font-bold">[19:15:12] [SUCCESS] Logic App notification sent. Pipeline run completed in 11.2s.</p>
                  </div>
                  <div className="border-t border-white/10 pt-3 text-[var(--text-muted)] flex justify-between">
                    <span className="mono">ADLS Gen2 / Spark 3.4</span>
                    <span className="mono">RunId: 746-987-9b0d</span>
                  </div>
                </div>
              ) : activeProject.id === 'dwh-analytics' ? (
                /* Simulated Data Warehouse / Star Schema Modeler console */
                <div className="w-full h-full rounded-2xl border border-[var(--surface-border)] bg-[#04060a] p-6 font-mono text-[10px] sm:text-xs flex flex-col gap-4 shadow-2xl relative overflow-hidden animate-fade-in">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3 text-[var(--text-secondary)]">
                    <span className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-teal-500 animate-pulse" />
                      DWH MODELER ENGINE: STANDBY
                    </span>
                    <span>Queries Executed: 48</span>
                  </div>
                  <div className="flex-1 flex flex-col gap-2 overflow-y-auto text-emerald-400 leading-relaxed pr-2">
                    <p className="text-[var(--text-muted)]">[19:16:01] Validating DWH schemas on MS SQL Server...</p>
                    <p className="text-[var(--text-muted)]">[19:16:02] Loading Dimension Tables: Dim_Customers, Dim_Products, Dim_Date</p>
                    <p>[19:16:03] Dimensional Modeling check: 100% integrity score.</p>
                    <p className="text-yellow-400">[19:16:04] Loading Fact Table: Fact_Sales (750k rows loaded from staging)</p>
                    <p className="text-yellow-400">[19:16:06] Executing Star Join query optimization...</p>
                    <p className="text-yellow-400">[19:16:07] Stored Procedures updated. Rebuilt index structures.</p>
                    <p className="text-emerald-400 font-bold">[19:16:09] [DWH SUCCESS] Warehouse refreshed. Reporting views updated in 8.1s.</p>
                  </div>
                  <div className="border-t border-white/10 pt-3 text-[var(--text-muted)] flex justify-between">
                    <span className="mono">MS SQL Server / Star Schema</span>
                    <span className="mono">Engine: V2.1.0</span>
                  </div>
                </div>
              ) : (
                /* Simulated Personal Finance optimizer console */
                <div className="w-full h-full rounded-2xl border border-[var(--surface-border)] bg-[#04060a] p-6 font-mono text-[10px] sm:text-xs flex flex-col gap-4 shadow-2xl relative overflow-hidden animate-fade-in">
                  <div className="flex justify-between items-center border-b border-white/10 pb-3 text-[var(--text-secondary)]">
                    <span className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse" />
                      FINANCE BUDGET OPTIMIZER: ONLINE
                    </span>
                    <span>Optimisation Score: 92%</span>
                  </div>
                  <div className="flex-1 flex flex-col gap-2 overflow-y-auto text-purple-400 leading-relaxed pr-2">
                    <p className="text-[var(--text-muted)]">[19:17:01] Initializing finance analysis model...</p>
                    <p className="text-[var(--text-muted)]">[19:17:02] Loading transactions from SQL database...</p>
                    <p>[19:17:03] Pandas loaded 14,200 rows. Cleaned missing categories.</p>
                    <p className="text-yellow-400">[19:17:04] [ANOMALY DETECTED] Dining expenditure exceeded 30-day average by 43.5%</p>
                    <p className="text-yellow-400">[19:17:05] Running budget allocation optimizer (XGBoost / SciPy)...</p>
                    <p className="text-yellow-400">[19:17:07] Generated optimal budget thresholds for next billing cycle.</p>
                    <p className="text-emerald-400 font-bold">[19:17:08] [SYSTEM RESPONSE] Optimization complete. Recommended budget saved.</p>
                  </div>
                  <div className="border-t border-white/10 pt-3 text-[var(--text-muted)] flex justify-between">
                    <span className="mono">Python / Pandas / XGBoost</span>
                    <span className="mono">System Status: Active</span>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
