import { EducationItem } from '../types';

export const educationData: EducationItem[] = [
  {
    cardTitle: 'COLLEGE',
    degree: 'B.Tech — Mathematics and Computing',
    institution: 'Madhav Institute of Technology and Science, Gwalior',
    period: 'August 2025 – Expected August 2029',
    badge: 'Undergraduate Program',
    image: '/images/mits-campus.jpg',
    imageAlt: 'Madhav Institute of Technology and Science Gwalior Campus',
    caption: 'My University',
    highlights: [
      'Rigorous curriculum blending abstract mathematical foundations, discrete structures, and modern computational science.',
      'Core focus areas: Machine Learning, Cryptography, Numerical Methods, Data Structures & Algorithms, Computational Linear Algebra.',
      'Active leadership in technical clubs and research initiatives.'
    ]
  },
  {
    cardTitle: 'CLASS XII',
    degree: 'MPBSE — PCM',
    institution: 'Maharana Pratap Higher Secondary School',
    period: 'Completed 2025',
    score: '80.8%',
    badge: 'Higher Secondary',
    highlights: [
      'Intensive training in analytical problem-solving, calculus, mechanics, and physical sciences.',
      'Established disciplined scientific inquiry and computational reasoning.'
    ]
  },
  {
    cardTitle: 'CLASS X',
    degree: 'CBSE',
    institution: 'Jawahar Navodaya Vidyalaya',
    period: 'Completed 2023',
    score: '86.6%',
    badge: 'Secondary Examination',
    image: '/images/jnv-campus.jpg',
    imageAlt: 'Jawahar Navodaya Vidyalaya Campus',
    caption: 'CBSE — 86.6%',
    highlights: [
      'National residential school environment fostering independence, competitive spirit, and strong foundational academics.',
      'Excellence in mathematics, scientific problem solving, and co-curricular activities.'
    ]
  }
];
