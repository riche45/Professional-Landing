export interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
  imageSrc: string;
  technologies: string[];
  repoUrl?: string;
  demoUrl?: string;
}

export const portfolioData: Project[] = [
  {
    id: 'netflix-clone',
    titleKey: 'portfolio.netflix.title',
    descriptionKey: 'portfolio.netflix.description',
    imageSrc: '/portfolio/netflix-1.png',
    technologies: ['Django', 'Python', 'JavaScript', 'HTML', 'CSS', 'Docker'],
    repoUrl: 'https://github.com/riche45/NetflixClone',
  },
  {
    id: 'ethereum-dashboard',
    titleKey: 'portfolio.ethereum.title',
    descriptionKey: 'portfolio.ethereum.description',
    imageSrc: '/portfolio/ethereum-1.png',
    technologies: ['Web3.js', 'JavaScript', 'React', 'ethers.js'],
    repoUrl: 'https://github.com/riche45/Ethereum-Dashboard',
  },
  {
    id: 'solana-bot',
    titleKey: 'portfolio.solana.title',
    descriptionKey: 'portfolio.solana.description',
    imageSrc: '/portfolio/solana-1.png',
    technologies: ['Solana', 'Telegram API', 'Python', 'Web3.js'],
    repoUrl: 'https://github.com/riche45/solana-bot-tlg',
  },
  {
    id: 'environmental-pollution',
    titleKey: 'portfolio.environment.title',
    descriptionKey: 'portfolio.environment.description',
    imageSrc: '/portfolio/environment-1.png',
    technologies: ['Data Science', 'PyTorch', 'Python', 'Machine Learning'],
    repoUrl: 'https://github.com/riche45/Climate_Polution',
  },
  {
    id: 'deep-learning-fruits',
    titleKey: 'portfolio.DeepLearning.title',
    descriptionKey: 'portfolio.DeepLearning.description',
    imageSrc: '/portfolio/predict-fr.png',
    technologies: ['Deep Learning', 'PyTorch', 'Python', 'AI'],
    repoUrl: 'https://github.com/riche45/DeepLearning_pytorch',
  },
  {
    id: 'financial-management-ai',
    titleKey: 'portfolio.gestionai.title',
    descriptionKey: 'portfolio.gestionai.description',
    imageSrc: '/portfolio/gestionai-1.jpg',
    technologies: ['TensorFlow', 'scikit-learn', 'Python', 'AES Encryption'],
    repoUrl: 'https://github.com/riche45/GestionAI',
  }
];

export const portfolioProjects = [
  {
    id: 1,
    slug: 'netflix-clone-django',
    imageSrcs: [
      '/portfolio/netflix-1.png',
      '/portfolio/NetflixClone-2.png',
      '/portfolio/NetflixClone-3.png',
      '/portfolio/NetflixClone-4.png' 
    ],
    titleKey: 'portfolio.netflix.title',
    descriptionKey: 'portfolio.netflix.description',
    githubUrl: 'https://github.com/riche45/NetflixClone',
    date: '2023-06-02',
    technologies: ['Python', 'Django', 'JavaScript', 'SQLite', 'Tailwind CSS'],
    status: 'Publicado'
  },
  {
    id: 2,
    slug: 'ethereum-dashboard',
    imageSrcs: [
      '/portfolio/ethereum-1.png',
      '/portfolio/ethereum-2.png'
    ],
    titleKey: 'portfolio.ethereum.title',
    descriptionKey: 'portfolio.ethereum.description',
    githubUrl: 'https://github.com/riche45/Ethereum-Dashboard',
    date: '2025-03-27',
    technologies: ['React', 'Web3.js', 'Node.js', 'Ethereum', 'MongoDB']
  },
  {
    id: 3,
    slug: 'blockchain-research',
    imageSrcs: [
      '/portfolio/QubicLogo-Token.webp'
    ],
    titleKey: 'portfolio.blockchain.title',
    descriptionKey: 'portfolio.blockchain.description',
    githubUrl: 'https://github.com/riche45/core',
    date: '2025-04-22',
    technologies: ['PyTorch', 'Python', 'Machine Learning']
  },
  {
    id: 4,
    slug: 'solana-telegram-bot',
    imageSrcs: [
      '/portfolio/solana-1.png',
      '/portfolio/terminal-solanaBot.png'
    ],
    titleKey: 'portfolio.solana.title',
    descriptionKey: 'portfolio.solana.description',
    githubUrl: '',
    date: '2025-02-20',
    technologies: ['Python', 'Telegram API','Blockchain', 'Solana', 'Machine Learning']
  },
  {
    id: 5,
    slug: 'environmental-forecast',
    imageSrcs: [
      '/portfolio/environment-1.png',
      '/portfolio/environment-2.png'
    ],
    titleKey: 'portfolio.environment.title',
    descriptionKey: 'portfolio.environment.description',
    githubUrl: 'https://github.com/riche45/Climate_Polution',
    date: '2025-04-01',
    technologies: ['Python', 'Data Science', 'Pandas', 'NumPy', 'Matplotlib', 'PyTorch', 'Scikit-learn']
  },
  {
    id: 6,
    slug: 'DeepLearning-Classification',
    imageSrcs: [
      '/portfolio/predict-fr.png',
      '/portfolio/predict-frutas.png',
      '/portfolio/result-fr.png'
    ],
    titleKey: 'portfolio.DeepLearning.title',
    descriptionKey: 'portfolio.DeepLearning.description',
    githubUrl: 'https://github.com/riche45/DeepLearning_pytorch',
    date: '2025-04-06',
    technologies: ['Python', 'Data Science', 'PyTorch', 'Deep Learning', 'Neural Networks', 'AI Model Training']
  },
  {
    id: 7,
    slug: 'personal-portfolio-2025',
    imageSrcs: [
      '/portfolio/portfolio-2025-1.png'
    ],
    titleKey: 'portfolio.portfolio2025.title',
    descriptionKey: 'portfolio.portfolio2025.description',
    githubUrl: 'https://github.com/riche45/Professional-Landing',
    date: '2025-06-12',
    technologies: [
      'React', 'React Native', 'Vite', 'TypeScript', 'Tailwind CSS', 'Supabase', 'OpenAI', 'i18n', 'Full Stack', 'Modern UI', 'Custom Chat', 'Newsletter', 'Freelance', 'Collaborations'
    ],
    status: 'Publicado'
  },
  {
    id: 8,
    slug: 'gestion-financiera-ia',
    imageSrcs: [
      '/portfolio/gestionai-1.jpg'
    ],
    titleKey: 'portfolio.gestionai.title',
    descriptionKey: 'portfolio.gestionai.description',
    githubUrl: 'https://github.com/riche45/GestionAI',
    date: '2023-06-03',
    technologies: [
      'Python', 'TensorFlow', 'scikit-learn', 'AES', 'Machine Learning', 'Finance', 'pandas', 'matplotlib', 'pycryptodome'
    ]
  },
  {
    id: 9,
    slug: 'english-conversational-ai',
    imageSrcs: [
      '/portfolio/english-ai-placeholder.png'
    ],
    titleKey: 'portfolio.englishAI.title',
    descriptionKey: 'portfolio.englishAI.description',
    githubUrl: '',
    date: '2025-12-01',
    technologies: ['React', 'OpenAI', 'IA', 'Spaced Repetition', 'Gamificación'],
    status: 'Próximamente'
  },
  {
    id: 10,
    slug: 'ai-agents-marketplace',
    imageSrcs: [
      '/portfolio/ai-agents-placeholder.png'
    ],
    titleKey: 'portfolio.aiAgents.title',
    descriptionKey: 'portfolio.aiAgents.description',
    githubUrl: '',
    date: '2026-01-15',
    technologies: ['React', 'Node.js', 'OpenAI', 'Marketplace', 'IA', 'Automatización'],
    status: 'Próximamente'
  }
]; 