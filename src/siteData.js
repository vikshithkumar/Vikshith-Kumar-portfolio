// ─── Shared Site Data ────────────────────────────────────────────────────────
// Edit these arrays — Hero stats auto-update from here

// Local certificate image imports
import sapImg       from './assets/certificates/sap-backend.png';
import awsImg       from './assets/certificates/aws-cloud.png';
import googlePrmImg from './assets/certificates/google-prompts.png';
import googleAiImg  from './assets/certificates/google-ai.png';
import nptelImg     from './assets/certificates/nptel-cloud.png';
import hackvegaImg  from './assets/certificates/hackvega.jpg';
import isteImg      from './assets/certificates/iste-data-dive.png';
import sihImg       from './assets/certificates/sih-2025.png';

export const certificates = [
  {
    title: 'SAP Certified — Backend Developer',
    subtitle: 'SAP Cloud Application Programming Model',
    issuer: 'SAP / Credly',
    date: 'May 2026',
    image: sapImg,
    verifyUrl: 'https://www.credly.com/badges/32407a83-f0e8-45a4-a968-daa844eb4b67',
    icon: '🏆',
  },
  {
    title: 'Smart India Hackathon 2025',
    subtitle: 'Participation in Internal Hackathon',
    issuer: 'MoE Innovation Cell / NHCE',
    date: 'Sept 2025',
    image: sihImg,
    verifyUrl: null,
    icon: '💡',
  },
  {
    title: 'AWS Cloud Technical Essentials',
    subtitle: 'Authorized by Amazon Web Services',
    issuer: 'Coursera × AWS',
    date: 'May 2026',
    image: awsImg,
    verifyUrl: 'https://coursera.org/verify/EV1Z2WNNL4X5',
    icon: '☁️',
  },
  {
    title: 'Introduction to AI',
    subtitle: 'Authorized by Google',
    issuer: 'Coursera × Google',
    date: 'May 2026',
    image: googleAiImg,
    verifyUrl: 'https://coursera.org/verify/EUHBWMDHS4KS',
    icon: '🤖',
  },
  {
    title: 'Start Writing Prompts like a Pro',
    subtitle: 'Authorized by Google',
    issuer: 'Coursera × Google',
    date: 'May 2026',
    image: googlePrmImg,
    verifyUrl: 'https://coursera.org/verify/SLGXMGKSK1Q2',
    icon: '✍️',
  },
  {
    title: 'Cloud Computing & Distributed Systems',
    subtitle: 'Elite — Score 85% | IIT Kanpur',
    issuer: 'NPTEL / Swayam',
    date: 'Jan–Mar 2026',
    image: nptelImg,
    verifyUrl: null,
    icon: '🎓',
  },
  {
    title: 'Certificate of Merit — HackVega',
    subtitle: 'Nationwide Hackathon · Bright Star of Tech Brilliance',
    issuer: 'HackVega / MyCareernet',
    date: 'June 2025',
    image: hackvegaImg,
    verifyUrl: null,
    icon: '⚡',
  },
  {
    title: 'ISTE Data Dive — Participation',
    subtitle: '20th Karnataka State Level Convention',
    issuer: 'New Horizon College of Engineering',
    date: 'March 2025',
    image: isteImg,
    verifyUrl: null,
    icon: '📊',
  },
];

export const projects = [
  {
    id: 'compression',
    title: 'Data Compression Engine',
    subtitle: 'Java • File I/O • Algorithms',
    description: 'A command-line Java tool that compresses and decompresses files using Huffman coding. Built from scratch — encoding tree, byte-level bit manipulation, and a clean CLI interface. No external libraries.',
    tags: ['Java', 'Algorithms', 'File I/O', 'CLI'],
    accent: 'from-orange-400 to-red-500',
    github: 'https://github.com/Arihantshukla98/Data-Compression-and-Decompression-Tool',
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
    description: 'A 3D card-flip memory matching game built entirely with CSS transforms and vanilla JS. Smooth flip animations, shuffle logic, a move counter, and a win-detection system. No frameworks.',
    tags: ['CSS3', 'JavaScript', 'DOM', 'Animations'],
    accent: 'from-blue-400 to-cyan-400',
    github: 'https://github.com/Arihantshukla98/MemoryCardGame',
    metrics: [
      { label: 'Language', value: 'CSS + JS' },
      { label: 'Physics', value: '3D Flip' },
      { label: 'Type', value: 'Browser Game' },
    ],
  },
  {
    id: 'tictactoe',
    title: 'Tic-Tac-Toe',
    subtitle: 'JavaScript • Game Logic • UI',
    description: 'A clean browser-based Tic-Tac-Toe implementation. Features two-player mode, win detection, and score tracking. Focused on crisp UI and clear game-state logic without any frameworks.',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Game Logic'],
    accent: 'from-violet-500 to-purple-500',
    github: 'https://github.com/Arihantshukla98/Tic-Tac-Toe',
    metrics: [
      { label: 'Language', value: 'Vanilla JS' },
      { label: 'Players', value: '2-Player' },
      { label: 'Type', value: 'Browser Game' },
    ],
  },
];

export const timeline = [
  {
    year: 'Sept–Oct 2025',
    role: 'Java Development Intern',
    org: 'SaiKet Systems',
    detail: 'Developed backend Java modules and integrated system-level features.',
  },
  {
    year: '2023–Now',
    role: 'B.E. Computer Science',
    org: 'New Horizon College of Engineering, Bengaluru',
    detail: 'Core CS — algorithms, DBMS, OS, networking, cloud.',
  },
];

// ── Auto-computed Hero stats ────────────────────────────────────────────────
export const siteStats = [
  { value: `${certificates.length}`, label: 'Certificates' },
  { value: `${projects.length}+`,    label: 'GitHub Projects' },
  { value: `${timeline.filter(t => t.role.toLowerCase().includes('intern')).length}+`, label: 'Internships' },
  { value: 'SAP', label: 'Certified' },
];
