import { ExperienceItem } from '../types';

export const experienceData: ExperienceItem = {
  role: 'Summer Research Intern',
  institution: 'ABV-IIITM (Atal Bihari Vajpayee Indian Institute of Information Technology & Management), Gwalior',
  period: 'May 2026 – July 2026',
  topic: 'Lightweight Machine Learning Approaches for Anomaly Detection in Cyber-Physical Systems',
  contributions: [
    'Engineered an algorithmic shape-preserving Largest-Triangle-Three-Buckets (LTTB) downsampling pipeline for high-dimensional time-series streams.',
    'Compressed the massive HAI 21.03 industrial control benchmark dataset down to 3.2% of its original volume while strictly preserving 100% of labeled cyber-attack instances and vital signal morphology.',
    'Formulated rolling-window statistical features capturing temporal variance, rates of deviation, skewness, and multi-sensor correlation dynamics.',
    'Executed rigorous benchmarking across four core unsupervised and semi-supervised architectures: Isolation Forest, Autoencoders, Local Outlier Factor (LOF), and One-Class SVM.',
    'Demonstrated real-time anomaly detection feasible on commodity, low-power CPU architectures without reliance on specialized GPU accelerators.',
    'Authored a comprehensive research paper detailing the mathematical foundation, downsampling proofs, and comparative empirical evaluations.'
  ],
  methodologies: [
    'LTTB Downsampling',
    'Rolling Window Statistics',
    'HAI 21.03 Benchmark',
    'Industrial Control Systems (ICS)',
    'Isolation Forest',
    'Autoencoders',
    'One-Class SVM',
    'Local Outlier Factor (LOF)'
  ],
  metrics: [
    { label: 'Dataset Footprint', value: '3.2%', detail: 'Downsampled from full HAI 21.03 size' },
    { label: 'Attack Vector Preservation', value: '100%', detail: 'Retained all ground-truth attack instances' },
    { label: 'Compute Dependency', value: '0 GPUs', detail: 'Runs purely on CPU edge hardware' },
    { label: 'Models Benchmarked', value: '4 Archetypes', detail: 'IF, Autoencoder, LOF, One-Class SVM' }
  ]
};

export const modelBenchmarkData = [
  {
    model: 'Isolation Forest',
    type: 'Ensemble Isolation',
    cpuEfficiency: 'High',
    memoryUsage: 'Low',
    strength: 'Partition-based isolation excels in rapid anomaly separation across orthogonal features.',
    bestFor: 'High-throughput edge anomaly scanning'
  },
  {
    model: 'Autoencoder',
    type: 'Neural Reconstruction',
    cpuEfficiency: 'Moderate',
    memoryUsage: 'Moderate',
    strength: 'Learns non-linear correlations across multi-channel sensor topologies.',
    bestFor: 'Complex multi-sensor multivariate distortion'
  },
  {
    model: 'One-Class SVM',
    type: 'Kernel Boundary',
    cpuEfficiency: 'Moderate',
    memoryUsage: 'Moderate-High',
    strength: 'RBF kernel maps complex normal boundaries; robust against sparse outliers.',
    bestFor: 'Well-defined operational regimes'
  },
  {
    model: 'Local Outlier Factor (LOF)',
    type: 'Density Estimation',
    cpuEfficiency: 'Moderate',
    memoryUsage: 'Moderate',
    strength: 'Detects localized anomalies in variable-density sensor clusters.',
    bestFor: 'Cluster-dependent operational shifts'
  }
];

