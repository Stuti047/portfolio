import { SkillNode } from '../types';

export const skillsData: SkillNode[] = [
  // A. Programming Languages
  {
    id: 'c',
    name: 'C',
    category: 'programming',
    description: 'Procedural programming, low-level memory layout, pointers, and systems fundamentals.',
    proficiencyLevel: 'Core Language',
    mascotReaction: 'coding',
    tags: ['Systems', 'Pointers', 'Memory']
  },
  {
    id: 'cpp',
    name: 'C++',
    category: 'programming',
    description: 'Object-oriented programming, data structures, algorithms, STL, and competitive problem solving.',
    proficiencyLevel: 'Core Language',
    mascotReaction: 'coding',
    tags: ['OOP', 'STL', 'Algorithms']
  },
  {
    id: 'python',
    name: 'Python',
    category: 'programming',
    description: 'Scientific computing, data manipulation, algorithm scripting, and machine learning pipelines.',
    proficiencyLevel: 'Core Language',
    mascotReaction: 'laptop',
    tags: ['NumPy', 'Pandas', 'ML Scripting']
  },
  {
    id: 'java',
    name: 'Java',
    category: 'programming',
    description: 'Object-oriented design, class hierarchies, interfaces, and modular computational structures.',
    proficiencyLevel: 'Core Language',
    mascotReaction: 'coding',
    tags: ['OOP', 'JVM', 'Design Patterns']
  },

  // B. Web Development
  {
    id: 'html',
    name: 'HTML',
    category: 'web',
    description: 'Semantic markup, accessibility fundamentals, document structure, and standards-compliant DOM hierarchy.',
    proficiencyLevel: 'Web Core',
    mascotReaction: 'laptop',
    tags: ['Semantic Web', 'DOM', 'Structure']
  },
  {
    id: 'css',
    name: 'CSS',
    category: 'web',
    description: 'Modern styling, flexbox, grid systems, responsive layouts, media queries, and visual polish.',
    proficiencyLevel: 'Web Core',
    mascotReaction: 'laptop',
    tags: ['Flexbox', 'Grid', 'Responsive']
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'web',
    description: 'ES6+ standards, asynchronous execution, event-driven web logic, and dynamic DOM manipulation.',
    proficiencyLevel: 'Web Core',
    mascotReaction: 'coding',
    tags: ['ES6+', 'Async', 'DOM API']
  },
  {
    id: 'react',
    name: 'React',
    category: 'web',
    description: 'Component-driven architectures, reactive state management, custom hooks, and modern frontend ecosystems.',
    proficiencyLevel: 'Web Framework',
    mascotReaction: 'coding',
    tags: ['Components', 'Hooks', 'State']
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'web',
    description: 'Strong static typing, interface contracts, generics, and type-safe scalable frontend development.',
    proficiencyLevel: 'Web Framework',
    mascotReaction: 'coding',
    tags: ['Static Types', 'Generics', 'Interfaces']
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'web',
    description: 'Utility-first styling, rapid UI prototyping, responsive design tokens, and clean minimal themes.',
    proficiencyLevel: 'Web Framework',
    mascotReaction: 'laptop',
    tags: ['Utility CSS', 'Design Tokens', 'Responsive']
  },

  // C. Development Tools
  {
    id: 'git',
    name: 'Git',
    category: 'tools',
    description: 'Distributed version control, branching strategies, stash workflows, and commit history management.',
    proficiencyLevel: 'Dev Tool',
    mascotReaction: 'laptop',
    tags: ['VCS', 'Branching', 'Commits']
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'tools',
    description: 'Collaborative code review, repository hosting, issue tracking, and open-source project management.',
    proficiencyLevel: 'Dev Tool',
    mascotReaction: 'laptop',
    tags: ['Repositories', 'PRs', 'Collaboration']
  },
  {
    id: 'vscode',
    name: 'Visual Studio Code',
    category: 'tools',
    description: 'Primary code editor, debugging workflows, language server protocol, extensions, and workspace setup.',
    proficiencyLevel: 'Dev Tool',
    mascotReaction: 'coding',
    tags: ['Editor', 'Extensions', 'Debugging']
  },
  {
    id: 'vs',
    name: 'Visual Studio',
    category: 'tools',
    description: 'Integrated development environment for C/C++ compilation, solution building, and profiling.',
    proficiencyLevel: 'Dev Tool',
    mascotReaction: 'coding',
    tags: ['IDE', 'Toolchain', 'Build Systems']
  },

  // D. Machine Learning & Research
  {
    id: 'ml-fundamentals',
    name: 'Machine Learning Fundamentals',
    category: 'ml',
    description: 'Supervised and unsupervised learning principles, loss optimization, validation, and inductive bias.',
    proficiencyLevel: 'ML & Research',
    mascotReaction: 'researching',
    tags: ['Fundamentals', 'Modeling', 'Evaluation']
  },
  {
    id: 'anomaly-detection',
    name: 'Anomaly Detection',
    category: 'ml',
    description: 'Unsupervised detection of outliers, deviations, and abnormal signatures in high-dimensional sensor streams.',
    proficiencyLevel: 'ML & Research',
    mascotReaction: 'researching',
    tags: ['Outlier Detection', 'Sensors', 'HAI 21.03']
  },
  {
    id: 'feature-engineering',
    name: 'Statistical Feature Engineering',
    category: 'ml',
    description: 'Rolling-window statistics, signal preservation, LTTB algorithmic downsampling, and variance transforms.',
    proficiencyLevel: 'ML & Research',
    mascotReaction: 'thinking',
    tags: ['LTTB', 'Rolling Window', 'Signal Processing']
  },
  {
    id: 'isolation-forest',
    name: 'Isolation Forest',
    category: 'ml',
    description: 'Tree-based ensemble outlier isolation partitioning multi-dimensional feature space without parametric assumptions.',
    proficiencyLevel: 'ML & Research',
    mascotReaction: 'researching',
    tags: ['Ensemble', 'Tree Isolation', 'Partitioning']
  },
  {
    id: 'autoencoders',
    name: 'Autoencoders',
    category: 'ml',
    description: 'Neural reconstruction architectures where elevated reconstruction loss flags anomalous multivariate conditions.',
    proficiencyLevel: 'ML & Research',
    mascotReaction: 'thinking',
    tags: ['Neural Networks', 'Latent Space', 'Reconstruction']
  },
  {
    id: 'lof',
    name: 'Local Outlier Factor (LOF)',
    category: 'ml',
    description: 'Density-based anomaly detection scoring local deviations with respect to neighboring data cluster densities.',
    proficiencyLevel: 'ML & Research',
    mascotReaction: 'researching',
    tags: ['k-NN Density', 'Reachability', 'Local Scoring']
  },
  {
    id: 'one-class-svm',
    name: 'One-Class SVM',
    category: 'ml',
    description: 'Kernel-based novelty detection establishing a non-linear hyper-boundary enclosing normal operational telemetry.',
    proficiencyLevel: 'ML & Research',
    mascotReaction: 'researching',
    tags: ['RBF Kernel', 'Boundary Estimation', 'Novelty']
  },

  // E. Graphics & Creative Software
  {
    id: 'canva',
    name: 'Canva',
    category: 'creative',
    description: 'Visual presentations, infographics, event collateral, social graphics, and layout communication.',
    proficiencyLevel: 'Creative Suite',
    mascotReaction: 'observing',
    tags: ['Graphics', 'Posters', 'Infographics']
  },
  {
    id: 'figma',
    name: 'Figma',
    category: 'creative',
    description: 'UI/UX wireframing, component design systems, prototyping, typography scaling, and vector artwork.',
    proficiencyLevel: 'Creative Suite',
    mascotReaction: 'laptop',
    tags: ['UI/UX', 'Components', 'Prototyping']
  },
  {
    id: 'davinci-resolve',
    name: 'DaVinci Resolve',
    category: 'creative',
    description: 'Video editing, timeline trimming, pacing, visual sequencing, and media presentation.',
    proficiencyLevel: 'Creative Suite',
    mascotReaction: 'observing',
    tags: ['Video Editing', 'Sequencing', 'Color']
  },
  {
    id: 'touchdesigner',
    name: 'TouchDesigner',
    category: 'creative',
    description: 'Node-based visual programming for real-time generative graphics, interactive visual synthesis, and creative tech.',
    proficiencyLevel: 'Creative Suite',
    mascotReaction: 'celebrating',
    tags: ['Generative Visuals', 'Node-based', 'Creative Tech']
  },
  {
    id: 'graphic-design',
    name: 'Graphic Design',
    category: 'creative',
    description: 'Principles of hierarchy, balance, whitespace, contrast, and visual storytelling.',
    proficiencyLevel: 'Creative Discipline',
    mascotReaction: 'celebrating',
    tags: ['Visual Hierarchy', 'Branding', 'Composition']
  },
  {
    id: 'visual-composition',
    name: 'Visual Composition',
    category: 'creative',
    description: 'Balancing negative space, focal points, geometric alignment, and editorial pacing across screens.',
    proficiencyLevel: 'Creative Discipline',
    mascotReaction: 'observing',
    tags: ['Negative Space', 'Focal Points', 'Grid']
  },
  {
    id: 'layout-design',
    name: 'Layout Design',
    category: 'creative',
    description: 'Structuring editorial information, multi-column grids, typographic rhythm, and print/screen layouts.',
    proficiencyLevel: 'Creative Discipline',
    mascotReaction: 'laptop',
    tags: ['Grid Systems', 'Typographic Rhythm', 'Editorial']
  },
  {
    id: 'document-design',
    name: 'Document Design and Formatting',
    category: 'creative',
    description: 'Refining typography, margins, clean styling, and ensuring documents look organized and visually pleasing.',
    proficiencyLevel: 'Creative Discipline',
    mascotReaction: 'laptop',
    tags: ['Formatting', 'Typography', 'Hierarchy']
  },
  {
    id: 'graphic-editing',
    name: 'Graphic Editing and Refinement',
    category: 'creative',
    description: 'Iterative polishing of visual assets, correcting proportions, tuning contrast, and perfecting details.',
    proficiencyLevel: 'Creative Discipline',
    mascotReaction: 'thinking',
    tags: ['Asset Polish', 'Vector Tuning', 'Detailing']
  },
  {
    id: 'sketching',
    name: 'Sketching and Illustration',
    category: 'creative',
    description: 'Hand-drawn ideation, manga-inspired sketches, doodle notes, and conceptual visual drafting.',
    proficiencyLevel: 'Creative Discipline',
    mascotReaction: 'celebrating',
    tags: ['Hand-drawn', 'Manga Art', 'Ideation']
  }
];
