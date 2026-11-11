import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'grievance-management-system',
    episode: 'PROJECT 01',
    title: 'Grievance Management System (GMS)',
    subtitle: 'Institutional Complaint Resolution & Real-time Tracking Platform',
    category: 'Full Stack',
    description: 'An institutional grievance management platform designed to streamline grievance submission, tracking, and resolution.',
    problem: 'Traditional academic and institutional complaint systems rely on manual paper trails, unmonitored email inboxes, and fragmented communication channels, leading to unaddressed student concerns, lack of accountability, and zero resolution tracking.',
    solution: 'Engineered an end-to-end digital ecosystem featuring hierarchical role-based escalation (Student -> Department Head -> Committee -> Dean), tamper-evident status logs, priority triage, and transparent progress timelines.',
    architecture: [
      'Frontend: Minimal responsive dashboard with student and admin portals',
      'Backend & DB: Structured relational database with automated audit logs',
      'Role-Based Access: Strict access control matrix distinguishing student, cell officer, and principal tiers',
      'Notification Dispatcher: Real-time status alerts upon ticket state transitions'
    ],
    keyFeatures: [
      'Interactive student grievance submission with document attachment support',
      'Real-time status tracking with visual timeline milestones (Submitted -> Reviewed -> Investigated -> Resolved)',
      'Department-level auto-assignment and priority SLA matrix',
      'Administrative analytics dashboard highlighting recurring systemic issues'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'REST API'],
    githubUrl: 'https://github.com/Stuti047',
    status: 'Completed',
    accentColor: '#111111',
    stats: [
      { label: 'Resolution Turnaround', value: '-65%' },
      { label: 'Role Tiers', value: '3 Levels' },
      { label: 'Transparency', value: '100% Audit' }
    ]
  },
  {
    id: 'saamya-wellness',
    episode: 'PROJECT 02',
    title: 'Saamya',
    subtitle: 'AI-Powered Mental Wellness & Affective Support Platform',
    category: 'Full Stack',
    description: 'AI-powered mental wellness platform.',
    problem: 'Mental wellness resources in academic environments often suffer from high stigma, delayed appointments, high barriers to entry, and lack of affordable, on-demand emotional triage for students.',
    solution: 'Built an engaging web experience providing non-judgmental conversational support, longitudinal mood telemetry, guided mindfulness exercises, and encrypted personal journals.',
    architecture: [
      'Client Layer: Vite + React + Tailwind CSS with responsive animated UI',
      'AI Intelligence: Hugging Face Inference API powering empathetic conversational analysis',
      'Persistence & Auth: Firebase Authentication and Cloud Firestore for secure, encrypted user reflections',
      'State Management: Lightweight React hooks with offline-resilient local sync'
    ],
    keyFeatures: [
      'AI conversational assistance tuned for active listening and positive affirmation',
      'Daily mood tracking with interactive sentiment trend visualizers',
      'Private encrypted personal journaling',
      'Firebase authentication and secure cloud data storage',
      'Quick grounding exercises, breathing animations, and crisis hotline directories'
    ],
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Firebase', 'Hugging Face API'],
    githubUrl: 'https://github.com/Stuti047',
    status: 'Completed',
    accentColor: '#111111',
    stats: [
      { label: 'AI Inference', value: '<450ms' },
      { label: 'Privacy', value: 'Zero-Knowledge' },
      { label: 'Framework', value: 'Vite + React' }
    ]
  },
  {
    id: 'lightweight-ml-anomaly',
    episode: 'PROJECT 03',
    title: 'Lightweight ML for Anomaly Detection',
    subtitle: 'Industrial Control System Security via LTTB Downsampling & Unsupervised ML',
    category: 'AI & Research',
    description: 'Research-focused project on efficient machine learning approaches for Cyber-Physical Systems.',
    problem: 'CPS datasets (like HAI 21.03) generate massive multi-sensor time-series streams. Conventional deep learning models demand high-end GPU hardware, which is infeasible for low-power edge industrial controllers.',
    solution: 'Designed a shape-preserving Largest-Triangle-Three-Buckets (LTTB) downsampling pipeline that shrunk the HAI 21.03 dataset to 3.2% while preserving 100% of labeled attack vectors and temporal signal geometry.',
    architecture: [
      'Data Ingestion: High-frequency telemetry streams from water-treatment & power testbeds',
      'Signal Processing: LTTB downsampling algorithm preserving signal peaks & transients',
      'Feature Engineering: Rolling-window statistics (mean, variance, skew, rate of change)',
      'Model Suite: Isolation Forest, Autoencoder, Local Outlier Factor (LOF), One-Class SVM'
    ],
    keyFeatures: [
      'Reduced HAI 21.03 dataset to 3.2% volume while preserving attack instances',
      'Zero GPU dependency: Fully trainable and executable on resource-constrained CPUs',
      'Benchmarked anomaly localization across multi-modal sensor channels',
      'Authored comprehensive research paper detailing mathematical proof and empirical results'
    ],
    technologies: ['Python', 'LTTB', 'Statistical Feature Engineering', 'Isolation Forest', 'Autoencoder', 'LOF', 'One-Class SVM'],
    githubUrl: 'https://github.com/Stuti047',
    status: 'Research Prototype',
    accentColor: '#111111',
    stats: [
      { label: 'Dataset Reduction', value: '96.8%' },
      { label: 'Attack Retention', value: '100%' },
      { label: 'Hardware Requirement', value: 'CPU Only' }
    ]
  }
];
