// ─── Shared Site Data ────────────────────────────────────────────────────────
// Edit these arrays — Hero stats auto-update from here

// Local certificate image imports
import googleGenAiImg    from './assets/certificates/google-generative-ai.png';
import googleDataLakeImg  from './assets/certificates/google-secure-data-lake.png';
import googleStorageImg   from './assets/certificates/google-cloud-storage-console.png';
import googleComputeImg   from './assets/certificates/google-cloud-compute.png';
import sihImg             from './assets/certificates/sih-2025.jpg';
import msFabricImg        from './assets/certificates/microsoft-fabric-data-engineer.jpg';
import ghciImg            from './assets/certificates/ghci-2025-hackathon.png';
import claudeCodeImg      from './assets/certificates/claude-code-in-action.jpg';
import scalerDbmsImg      from './assets/certificates/scaler-dbms.png';

export const certificates = [
  {
    title: 'Microsoft Certified: Fabric Data Engineer Associate',
    subtitle: 'Credential ID: DP-600',
    issuer: 'Microsoft',
    date: 'Coming Soon',
    image: msFabricImg,
    verifyUrl: null,
    icon: '🏆',
  },
  {
    title: 'Introduction to Generative AI',
    subtitle: 'Authorized by Google Cloud',
    issuer: 'Google Cloud',
    date: 'Coming Soon',
    image: googleGenAiImg,
    verifyUrl: null,
    icon: '🤖',
  },
  {
    title: 'Create a Secure Data Lake on Cloud Storage',
    subtitle: 'Authorized by Google Cloud',
    issuer: 'Google Cloud',
    date: 'Coming Soon',
    image: googleDataLakeImg,
    verifyUrl: null,
    icon: '💧',
  },
  {
    title: 'Store, Process, and Manage Data on Google Cloud - Console',
    subtitle: 'Authorized by Google Cloud',
    issuer: 'Google Cloud',
    date: 'Coming Soon',
    image: googleStorageImg,
    verifyUrl: null,
    icon: '🗄️',
  },
  {
    title: 'The Basics of Google Cloud Compute',
    subtitle: 'Authorized by Google Cloud',
    issuer: 'Google Cloud',
    date: 'Coming Soon',
    image: googleComputeImg,
    verifyUrl: null,
    icon: '⚡',
  },
  {
    title: 'Smart India Hackathon (SIH) 2025',
    subtitle: 'Internal Hackathon Winner / Participant',
    issuer: 'MoE Innovation Cell / NHCE',
    date: 'Coming Soon',
    image: sihImg,
    verifyUrl: null,
    icon: '💡',
  },
  {
    title: 'GHCI 2025 - Hackathon Participation Certificate',
    subtitle: 'Grace Hopper Celebration India Hackathon',
    issuer: 'GHCI 2025',
    date: 'Coming Soon',
    image: ghciImg,
    verifyUrl: null,
    icon: '👩‍💻',
  },
  {
    title: 'Claude Code in Action',
    subtitle: 'AI Developer Assistant Certification',
    issuer: 'Anthropic / Coming Soon',
    date: 'Coming Soon',
    image: claudeCodeImg,
    verifyUrl: null,
    icon: '🧠',
  },
  {
    title: 'Scaler DBMS',
    subtitle: 'Database Management Systems Certification',
    issuer: 'Scaler',
    date: 'Coming Soon',
    image: scalerDbmsImg,
    verifyUrl: null,
    icon: '📊',
  },
];


export const projects = [
  {
    id: 'adf-pipeline',
    title: 'Azure Data Factory — Cloud Data Pipeline',
    subtitle: 'ETL • Databricks • PySpark • ADLS Gen2',
    description: 'An end-to-end data integration solution designed to ingest and process large-scale datasets. Leverages Azure Data Factory (ADF) for orchestration, Azure Data Lake Storage (ADLS Gen2) for raw/processed zones, and Azure Databricks with PySpark to execute transformations following the Medallion architecture (Bronze -> Silver -> Gold).',
    tags: ['Azure Data Factory', 'Databricks', 'PySpark', 'ADLS Gen2', 'Logic Apps'],
    accent: 'from-blue-400 to-indigo-500',
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
    github: 'https://github.com/vikshithkumar',
    metrics: [
      { label: 'Language', value: 'Python' },
      { label: 'Analysis', value: 'Pandas / NumPy' },
      { label: 'Optimization', value: 'XGBoost ML' },
    ],
  },
];

export const timeline = [
  {
    year: '2023–Now',
    role: 'B.E. Computer Science Engineering',
    org: 'New Horizon College of Engineering, Bengaluru',
    detail: 'Specializing in Data Engineering and Cloud Systems. Focus on building scalable data platforms.',
  },
  {
    year: '2021–2023',
    role: 'Higher Secondary Education',
    org: 'Jaivins Academy',
    detail: 'Focused on computer science, physics, chemistry, and mathematics.',
  },
];

// ── Auto-computed Hero stats ────────────────────────────────────────────────
export const siteStats = [
  { value: `${certificates.length}`, label: 'Certificates' },
  { value: `${projects.length}`,     label: 'Data Projects' },
  { value: '1st',                    label: 'IEEE Vibethon' },
  { value: 'Microsoft',              label: 'Certified' },
];
