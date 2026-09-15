import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    id: 'rentify',
    title: 'Rentify',
    description: 'Self-drive vehicle rental management platform with secure booking and payments.',
    category: 'fullstack',
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'MySQL', 'JPA/Hibernate', 'PayHere', 'Leaflet'],
    features: [
      'JWT authentication with role-based access (USER/ADMIN)',
      'Vehicle and booking management with availability checks',
      'PayHere payment integration',
      'Async email notifications',
      'Map-based location picking with Leaflet'
    ],
    github: 'https://github.com/Saumya-Divyanjalee/Rentify'
  },
  {
    id: 'zentrix',
    title: 'Zentrix',
    description: 'AI-powered full-stack study productivity platform with tasks, notes, and Gemini AI features.',
    category: 'fullstack',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Redux Toolkit', 'Tailwind CSS', 'Gemini AI'],
    features: [
      'JWT authentication with Cloudinary avatar upload',
      'Task, note, and subject management',
      'Gemini AI: summarizer, quiz generator, study planner',
      'Analytics dashboard with Recharts'
    ],
    liveDemo: 'https://zentrix-frontend-weld.vercel.app'
  },
  {
    id: 'fairvision',
    title: 'FairVision',
    description: 'CNN-based age group classifier with fairness auditing across demographic groups.',
    category: 'ai-ml',
    technologies: ['Python', 'PyTorch', 'CNN', 'Scikit-learn', 'NumPy', 'Pandas', 'Streamlit'],
    features: [
      'Custom CNN trained on the FairFace dataset',
      'Two bias mitigation strategies: class-weighted loss and WeightedRandomSampler',
      'Reduced demographic accuracy gap by 75%',
      'Interactive Streamlit demo'
    ]
  },
  {
    id: 'elite-driving-school',
    title: 'Elite Driving School Management System',
    description: 'Desktop management system for driving school operations with role-based dashboards.',
    category: 'java',
    technologies: ['Java 21', 'JavaFX', 'Hibernate', 'MySQL', 'Maven'],
    features: [
      'Layered architecture: Controller → BO → DAO → Entity',
      'Factory pattern for BO/DAO creation',
      'Admin and Receptionist dashboards',
      'Ehcache caching and BCrypt password hashing'
    ],
    github: 'https://github.com/Saumya-Divyanjalee/Elite_Driving_School_Management_System'
  }
];