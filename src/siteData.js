// ─── Shared Site Data ────────────────────────────────────────────────────────
// Edit these arrays — Hero stats auto-update from here

// Local certificate image imports
import googleGenAiImg from './assets/certificates/google-generative-ai.png';
import googleDataLakeImg from './assets/certificates/google-secure-data-lake.png';
import googleStorageImg from './assets/certificates/google-cloud-storage-console.png';
import googleComputeImg from './assets/certificates/google-cloud-compute.png';
import sihImg from './assets/certificates/sih-2025.jpg';
import msFabricImg from './assets/certificates/microsoft-fabric-data-engineer.jpg';
import ghciImg from './assets/certificates/ghci-2025-hackathon.png';
import claudeCodeImg from './assets/certificates/claude-code-in-action.jpg';
import scalerDbmsImg from './assets/certificates/scaler-dbms.png';
import ieeeVibethonImg from './assets/certificates/ieee-vibethon-winner.jpg';

export const certificates = [
  {
    title: 'Microsoft Certified: Fabric Data Engineer Associate',
    subtitle: 'Credential ID: DP-700',
    issuer: 'Microsoft',
    date: 'June 2026',
    image: msFabricImg,
    verifyUrl: null,
    icon: '🏆',
  },
  {
    title: 'Introduction to Generative AI',
    subtitle: 'Authorized by Google Cloud',
    issuer: 'Google Cloud',
    date: 'Sep 2024',
    image: googleGenAiImg,
    verifyUrl: null,
    icon: '🤖',
  },
  {
    title: 'Create a Secure Data Lake on Cloud Storage',
    subtitle: 'Authorized by Google Cloud',
    issuer: 'Google Cloud',
    date: 'Sep 2024',
    image: googleDataLakeImg,
    verifyUrl: null,
    icon: '💧',
  },
  {
    title: 'Store, Process, and Manage Data on Google Cloud - Console',
    subtitle: 'Authorized by Google Cloud',
    issuer: 'Google Cloud',
    date: 'Oct 2024',
    image: googleStorageImg,
    verifyUrl: null,
    icon: '🗄️',
  },
  {
    title: 'The Basics of Google Cloud Compute',
    subtitle: 'Authorized by Google Cloud',
    issuer: 'Google Cloud',
    date: 'Oct 2024',
    image: googleComputeImg,
    verifyUrl: null,
    icon: '⚡',
  },
  {
    title: 'Smart India Hackathon (SIH) 2025',
    subtitle: 'Internal Hackathon Winner / Participant',
    issuer: 'MoE Innovation Cell / NHCE',
    date: 'Sep 2025',
    image: sihImg,
    verifyUrl: null,
    icon: '💡',
  },
  {
    title: 'GHCI 2025 - Hackathon Participation Certificate',
    subtitle: 'Grace Hopper Celebration India Hackathon',
    issuer: 'GHCI 2025',
    date: 'Dec 2025',
    image: ghciImg,
    verifyUrl: null,
    icon: '👩‍💻',
  },
  {
    title: 'Claude Code in Action',
    subtitle: 'AI Developer Assistant Certification',
    issuer: 'Anthropic Academy',
    date: 'Mar 2026',
    image: claudeCodeImg,
    verifyUrl: null,
    icon: '🧠',
  },
  {
    title: 'Scaler DBMS',
    subtitle: 'Database Management Systems Certification',
    issuer: 'Scaler',
    date: 'Nov 2025',
    image: scalerDbmsImg,
    verifyUrl: null,
    icon: '📊',
  },
  {
    title: 'IEEE Vibethon Winner',
    subtitle: 'IEEE Winner Certificate',
    issuer: 'IEEE',
    date: 'Feb 2026',
    image: ieeeVibethonImg,
    verifyUrl: null,
    icon: '🏆',
  },
];


export const projects = [
  {
    id: 'adf-pipeline',
    title: 'Azure Data Factory — Cloud Data Pipeline',
    subtitle: 'ETL • Databricks • PySpark • ADLS Gen2',
    description: 'Built a metadata-driven Azure Data Factory platform that ingests data from files, SQL databases, REST APIs, and GitHub into Azure Data Lake. The solution uses reusable orchestration, Databricks transformations, and a Medallion architecture to create scalable, analytics-ready datasets.',
    tags: ['Azure Data Factory', 'Databricks', 'PySpark', 'ADLS Gen2', 'Logic Apps'],
    accent: 'from-blue-400 to-indigo-500',
    accentH: 220,
    github: 'https://github.com/vikshithkumar/Azure_data_factory_Project',
    ctaText: 'Explore Architecture',
    metrics: [
      { label: 'Orchestrator', value: 'Azure ADF' },
      { label: 'Pipelines', value: 'Metadata-Driven' },
      { label: 'Architecture', value: 'Bronze → Silver → Gold' },
    ],
    terminal: {
      headerLeft: 'AZURE ADF MONITOR: ACTIVE',
      headerRight: 'Status: SUCCEEDED',
      footerLeft: 'ADLS Gen2 / Spark 3.4',
      footerRight: 'RunId: 746-987-9b0d',
      logs: [
        { text: '[19:15:01] Metadata configuration loaded', type: 'muted' },
        { text: '[19:15:02] 4 data sources discovered', type: 'muted' },
        { text: '[19:15:03] Validating schemas...', type: 'muted' },
        { text: '[19:15:04] Schema validation passed', type: '' },
        { text: '[19:15:05] Loading Bronze layer...', type: '' },
        { text: '[19:15:07] Running Silver transformations...', type: 'warning' },
        { text: '[19:15:09] Optimizing Delta tables...', type: 'warning' },
        { text: '[19:15:10] [WARNING] 12 duplicate records detected. Deduplication policy applied.', type: 'warning' },
        { text: '[19:15:11] Sending Logic Apps notification...', type: 'warning' },
        { text: '[19:15:12] [SUCCESS] Pipeline completed successfully.', type: 'success' }
      ]
    }
  },
  {
    id: 'dwh-analytics',
    title: 'Data Warehouse and Analytics Pipeline',
    subtitle: 'SQL Server • Dimensional Modeling • Star Schema',
    description: 'Designed a modern data warehouse using dimensional modeling and Star Schema to support business intelligence workloads. Built SQL and Python ETL processes for incremental loading while optimizing analytical queries through indexing and warehouse design.',
    tags: ['SQL Server', 'MySQL', 'Star Schema', 'Dimensional Modeling', 'Python'],
    accent: 'from-emerald-400 to-teal-500',
    accentH: 160,
    github: 'https://github.com/vikshithkumar/Sql_Data_Warehouse_Projrct',
    metrics: [
      { label: 'Warehouse', value: 'MS SQL Server' },
      { label: 'Modeling', value: 'Star Schema' },
      { label: 'ETL Engine', value: 'Python / SQL' },
    ],
    terminal: {
      headerLeft: 'DWH ENGINE: ACTIVE',
      headerRight: 'Star Schema: VALIDATED',
      footerLeft: 'MS SQL Server / Star Schema',
      footerRight: 'Engine: V2.1.0',
      logs: [
        { text: '[19:16:01] Loading metadata configuration...', type: 'muted' },
        { text: '[19:16:01] New staging transaction data discovered.', type: 'muted' },
        { text: '[19:16:02] Validating dimension relationships...', type: 'muted' },
        { text: '[19:16:03] Loading dimensions:', type: '' },
        { text: '             Dim_Date', type: '' },
        { text: '             Dim_Customers', type: '' },
        { text: '             Dim_Products', type: '' },
        { text: '[19:16:05] Incremental load started for Fact_Sales...', type: 'warning' },
        { text: '[19:16:07] 750,482 records merged successfully.', type: 'warning' },
        { text: '[19:16:08] Updating clustered indexes...', type: 'warning' },
        { text: '[19:16:09] [INFO] Foreign key integrity verified. No drift detected.', type: '' },
        { text: '[19:16:09] Refreshing reporting views...', type: 'warning' },
        { text: '[19:16:10] [SUCCESS] Data warehouse refresh completed.', type: 'success' }
      ]
    }
  },
  {
    id: 'finance-budget',
    title: 'Personal Finance Analysis & Budget Optimisation',
    subtitle: 'Python • Pandas • Spend Analytics • XGBoost',
    description: 'Developed a data-driven personal finance platform that combines ETL, SQL, analytics, and machine learning to categorize spending, detect anomalies, and recommend optimized monthly budgets.',
    tags: ['Python', 'Pandas', 'SQL', 'Data Analytics', 'XGBoost'],
    accent: 'from-violet-500 to-purple-500',
    accentH: 270,
    github: 'https://github.com/vikshithkumar',
    metrics: [
      { label: 'Language', value: 'Python' },
      { label: 'Analysis', value: 'Pandas / NumPy' },
      { label: 'Optimization', value: 'XGBoost ML' },
    ],
    terminal: {
      headerLeft: 'FINANCE ANALYTICS ENGINE: ACTIVE',
      headerRight: 'Prediction Confidence: 92.4%',
      footerLeft: 'Python / Spend Analytics',
      footerRight: 'System Status: Active',
      logs: [
        { text: '[19:17:00] Loading analytical engine configuration...', type: 'muted' },
        { text: '[19:17:01] Loading transaction history...', type: 'muted' },
        { text: '[19:17:02] 14,208 transactions imported.', type: '' },
        { text: '[19:17:03] Cleaning and categorizing spending records...', type: 'warning' },
        { text: '[19:17:04] Spending anomaly detected:', type: 'warning' },
        { text: '             Dining +43.5% vs 30-day average', type: 'warning' },
        { text: '[19:17:05] Running budget optimization model...', type: 'warning' },
        { text: '[19:17:07] Forecasting next month\'s category spend...', type: 'warning' },
        { text: '[19:17:08] Budget recommendations generated.', type: '' },
        { text: '[19:17:09] [SUCCESS] Updated financial insights dashboard.', type: 'success' }
      ]
    }
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
  { value: `${projects.length}+`, label: 'Data Projects' },
  { value: '1st', label: 'IEEE Vibethon' },
  { value: 'Microsoft', label: 'Certified' },
];
