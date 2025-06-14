export default {
  nav: {
    home: 'Home',
    archives: 'Archives',
    search: 'Search',
    otherSites: 'My Other Sites',
    talks: 'My Talks',
    podcast: 'Podcast',
    resume: 'Résumé',
    darkMode: 'Dark Mode',
    connects: 'Connects',
    surveys: 'Surveys',
    categories: 'Categories',
  },
  routes: {
    home: '/',
    archives: '/archives',
    search: '/search',
    podcast: '/podcast',
    resume: '/resume',
    connects: '/connects',
    surveys: '/surveys',
  },
  categories: {
    articles: 'Articles',
    howTos: 'How Tos',
    humor: 'Humor',
    podcast: 'Into the Hopper Podcast',
    links: 'Links',
  },
  search: {
    title: 'Global Search',
    description: 'Find projects, articles, profile information and conversations',
    placeholder: 'Search all content...',
    filters: 'Filters:',
    loading: 'Searching...',
    noResults: 'No results found',
    types: {
      project: 'Project',
      projects: 'Projects',
      article: 'Article',
      articles: 'Articles',
      profile: 'Profile',
      chat: 'Chat',
      conversations: 'Conversations'
    },
    mockData: {
      project1: {
        title: 'E-commerce Dashboard',
        description: 'Financial analysis system with React and TypeScript',
        content: 'Complete dashboard for sales analysis, inventory, and performance metrics. Implemented with React, TypeScript, and payment API integration.'
      },
      article1: {
        title: 'How Developers are Using LLMs',
        description: 'Exploring the innovative ways developers are leveraging large language models',
        content: 'Developers are adopting LLMs to automate tasks, generate code, and improve productivity. This article explores best practices.'
      },
      profile1: {
        title: 'Professional Experience',
        description: 'Over 5 years in software development',
        content: 'Full-stack developer with experience in React, TypeScript, Node.js, Python. Specialized in AI/ML solutions and modern web development.'
      },
      chat1: {
        title: 'Project Discussion',
        description: 'Discussion about mobile app development',
        content: 'User asked about experience with React Native and mobile development. Conversation about best practices and tools.'
      },
      project2: {
        title: 'Health Monitoring App',
        description: 'Mobile app for health monitoring',
        content: 'App developed with React Native for physical activity tracking, vital signs monitoring, and wearable device synchronization.'
      }
    }
  },
  errors: {
    pageNotFound: 'Page Not Found',
  },
  accessibility: {
    scrollLeft: 'Scroll left',
    scrollRight: 'Scroll right',
  },
  footer: {
    copyright: '© 2020 - 2025',
    builtWith: 'Built with',
    theme: 'Theme',
    designedBy: 'designed by',
  },
  profile: {
    greeting: 'Hey, I\'m Richard García!',
    description: 'I\'m an experienced software developer and designer. You can see',
    experience: 'For over 5 years, I\'ve helped companies solve business problems with innovative solutions in domains such as finance, technology, healthcare, and education.',
  },
  chat: {
    welcome: "Hi! 👋 I'm Richard's personal assistant. I can tell you about:\n\n📊 Experience and completed projects\n💻 Technologies and skills\n💰 Hourly rates (starting at $20 for freelance projects)\n📝 Articles and content\n\nYou can ask me about any of these topics or type 'prices' to see detailed rates. How can I help you?",
    input_placeholder: "Type your message here...",
    assistant_status: "Personal Assistant",
    error_message: "Sorry, an error occurred. Please try again.",
    rate_limit_error: "You've exceeded the message limit per minute. Please wait a moment.",
    auth_error: "Authentication error. Please contact the administrator.",
    openai_rate_limit: "OpenAI API rate limit exceeded. Please try again later.",
    server_error: "Server error. Please try again later.",
    empty_message: "Message cannot be empty.",
    invalid_response: "No valid response received from the server.",
    status_online: 'Online',
    responses: {
      experience: 'I have over 5 years of experience in software development, working across various sectors such as finance, technology, healthcare, and education. I specialize in modern web development with React, TypeScript, Python for data analysis, and blockchain technologies like Solidity, Besu, and Web3.js.',
      projects: 'I\'ve worked on multiple projects including enterprise dashboards, healthcare mobile apps, e-learning systems, financial analysis platforms, and decentralized applications (dApps). You can see some of my work in the articles and categories section.',
      tech: 'My tech stack includes React, TypeScript, Node.js, Python for data analysis, PostgreSQL, MongoDB, and AI/ML tools. I also work with blockchain technologies like Solidity, Besu, Ethereum, and Web3.js, along with frameworks like Next.js, Express, Django, and cloud technologies like AWS and Docker.',
      collaboration: 'I\'m available for freelance projects, technical consulting, and collaborations. You can contact me through the "Connects" section where you\'ll find more information about current opportunities and how to work with me.',
      articles: 'I regularly write about software development, artificial intelligence, blockchain, and emerging technologies. My recent articles include topics like using LLMs in development, AI integration in e-commerce, and data analysis with Python.',
      greeting: 'Hello! Nice to meet you. I\'m a developer passionate about creating innovative solutions. Would you like to know more about any specific project or my experience with particular technologies?',
      default: 'Thank you for your question. As a full-stack developer with AI/ML and blockchain experience, I\'m here to help you with any inquiries about software development, technology projects, or collaboration opportunities. Is there anything specific you\'d like to know?'
    }
  },
  language: {
    en: 'English',
    es: 'Spanish',
  },
  cta: {
    connect: 'Connect with me',
    hireMe: 'Hire me',
    viewProject: 'View project',
    readMore: 'Read more',
  },
  podcast: {
    title: 'Podcast Tech Talks',
    subtitle: 'Conversations about development, innovation and experiences in the tech world',
    comingSoon: {
      title: '🎙️ Coming Soon',
      description: 'We are preparing amazing content to share with you'
    },
    suggestTopic: {
      title: 'Suggest a Topic',
      description: 'What would you like to hear? Share your ideas and help us create relevant content.',
      placeholder: 'Describe the topic you would like us to cover...',
      submitButton: 'Submit Suggestion',
      successMessage: 'Thank you for your suggestion! We will review it soon.'
    },
    notifications: {
      title: 'Notifications',
      description: 'Be the first to know when we launch the podcast and receive exclusive updates.',
      emailPlaceholder: 'your@email.com',
      subscribeButton: 'Subscribe',
      successTitle: 'Subscribed!',
      successMessage: 'We will notify you when the podcast is available.'
    },
    suggestedTopics: {
      title: 'Community Suggested Topics',
      topics: [
        {
          title: 'Modern Web Development',
          description: 'React, TypeScript, and the latest frontend trends',
          category: 'Development'
        },
        {
          title: 'Mobile Development with React Native',
          description: 'Experiences and best practices in mobile development',
          category: 'Mobile'
        },
        {
          title: 'Tech Entrepreneurship',
          description: 'How to start and scale tech startups',
          category: 'Entrepreneurship'
        },
        {
          title: 'Artificial Intelligence in Development',
          description: 'How AI is transforming programming',
          category: 'AI/ML'
        },
        {
          title: 'Freelancer Experiences',
          description: 'Tips and lessons learned working independently',
          category: 'Career'
        },
        {
          title: 'Innovation and Tech Trends',
          description: 'Emerging technologies that are changing the world',
          category: 'Innovation'
        }
      ],
      votingInfo: 'Most voted topics will be prioritized for the first episodes'
    }
  },
  articles: {
    title: 'Articles',
    description: 'Exploring ideas, sharing knowledge, and discussing technology.',
    filters: {
      title: 'Filter by category',
      all: 'All',
      articles: 'Articles',
      howTos: 'How-Tos',
      reviews: 'Reviews'
    },
    featured: [
      {
        title: 'How LLMs are (Literally) Saving my Dev Life? 🤖',
        description: 'An honest and slightly ironic look at how language models are changing the way we code. Spoiler: I no longer memorize documentation 😅',
        date: '2024-03-15',
        category: 'Articles',
        slug: 'llms-dev-life-savior',
        imageSrc: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        title: 'How Developers are Using LLMs',
        description: 'Exploring the innovative ways developers are leveraging large language models in their workflows and applications.',
        date: 'Mar 11, 2025',
        category: 'Articles',
        slug: 'how-developers-using-llms',
        imageSrc: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        title: 'Writing a Math Textbook with Claude',
        description: 'My experience collaborating with AI to write a comprehensive mathematics textbook for students.',
        date: 'Jan 18, 2025',
        category: 'How Tos',
        slug: 'writing-math-textbook-claude',
        imageSrc: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        title: 'The Sony A7 III after 5 years',
        description: 'A long-term review of the Sony A7 III mirrorless camera after using it professionally for five years.',
        date: 'Jan 12, 2025',
        category: 'Reviews',
        slug: 'sony-a7-iii-after-5-years',
        imageSrc: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      }
    ]
  },
  connects: {
    title: 'Connects',
    connectionHub: {
      title: 'Connection Hub',
      description: 'Connect with me for freelance opportunities, collaborations, or just to chat about technology.',
      buttons: {
        connectGlobally: 'Connect Globally',
        scheduleMeeting: 'Schedule a Meeting',
        joinCommunity: 'Join Community'
      }
    },
    availableFor: {
      title: 'Available For:',
      items: {
        freelance: 'Freelance Projects',
        consulting: 'Technical Consulting',
        speaking: 'Speaking Engagements',
        fulltime: 'Full-time Opportunities'
      }
    },
    tabs: {
      opportunities: 'Opportunities',
      clients: 'Past Clients',
      connect: 'Connect'
    },
    opportunities: {
      title: 'Current Opportunities',
      labels: {
        new: 'New',
        featured: 'Featured',
        timeAgo: '1 week ago',
        budget: 'Budget:',
        applyNow: 'Apply Now'
      },
      projects: {
        websiteRedesign: {
          title: 'Website Redesign Project',
          description: 'Looking for an experienced front-end developer to redesign a corporate website with React and modern design principles.',
          skills: ['React', 'UI/UX', 'Responsive']
        },
        aiIntegration: {
          title: 'AI Integration for E-commerce',
          description: 'Seeking an AI specialist to implement intelligent product recommendations and search functionality for an e-commerce platform.',
          skills: ['Python', 'AI/ML', 'API']
        },
        mobileApp: {
          title: 'Mobile App Development',
          description: 'Looking for a mobile developer to create a cross-platform fitness tracking application with React Native.',
          skills: ['React Native', 'Mobile', 'Firebase']
        }
      }
    },
    clients: {
      title: 'Past Clients',
      companies: {
        techCorp: {
          name: 'TechCorp Inc.',
          description: 'Enterprise dashboard redesign'
        },
        healthTrack: {
          name: 'HealthTrack',
          description: 'Mobile health monitoring app'
        },
        eduLearn: {
          name: 'EduLearn Platform',
          description: 'E-learning system development'
        },
        finTrack: {
          name: 'FinTrack Solutions',
          description: 'Financial analytics dashboard'
        }
      },
      testimonials: {
        title: 'Testimonials',
        sarah: {
          name: 'Sarah Johnson',
          role: 'CTO, TechCorp Inc.'
        }
      }
    },
    contact: {
      title: "Let's Connect",
      description: "Interested in working together? Fill out the form below and I'll get back to you shortly.",
      form: {
        fullName: "Full Name",
        emailAddress: "Email Address",
        companyOrg: "Company/Organization",
        projectType: {
          label: "Project Type",
          options: {
            webDev: "Website Development",
            mobileDev: "Mobile App Development",
            uiDesign: "UI/UX Design",
            consulting: "Technical Consulting",
            other: "Other"
          }
        },
        projectDetails: {
          label: "Project Details",
          placeholder: "Please provide details about your project, timeline, and budget."
        },
        privacyPolicy: "I agree to the privacy policy and terms of service",
        submitButton: "Submit Request"
      }
    }
  },
  surveys: {
    title: "Surveys & Polls",
    progressText: "Step {0} of {1}",
    percentComplete: "{0}% Complete",
    professionalExperience: {
      title: "Professional Experience Survey",
      description: "Please share your professional experience to help us understand our audience better.",
      yearsOfExperience: {
        label: "Years of Experience",
        options: {
          lessThanOne: "Less than 1 year",
          oneToThree: "1-3 years",
          threeToFive: "3-5 years",
          fiveToTen: "5-10 years",
          tenPlus: "10+ years"
        }
      },
      industry: {
        label: "Primary Industry",
        options: {
          technology: "Technology",
          finance: "Finance",
          healthcare: "Healthcare",
          education: "Education",
          retail: "Retail",
          manufacturing: "Manufacturing",
          other: "Other"
        }
      },
      jobRole: {
        label: "Job Role",
        placeholder: "e.g. Software Developer, Designer, Product Manager"
      }
    },
    technicalSkills: {
      title: "Technical Skills",
      description: "Tell us about your technical expertise and preferences.",
      programmingLanguages: {
        label: "Programming Languages (Select all that apply)",
        options: {
          javascript: "JavaScript",
          python: "Python",
          java: "Java",
          csharp: "C#",
          go: "Go",
          rust: "Rust"
        }
      },
      frontendFrameworks: {
        label: "Frontend Frameworks (Select all that apply)",
        options: {
          react: "React",
          vue: "Vue",
          angular: "Angular",
          svelte: "Svelte"
        }
      },
      aiExperience: {
        label: "Years of Experience with AI/ML",
        scale: {
          start: "0",
          middle: "5",
          end: "10+"
        }
      }
    },
    contentPreferences: {
      title: "Content Preferences",
      description: "Help us deliver the content you're most interested in.",
      topics: {
        label: "What topics are you most interested in? (Select all that apply)",
        options: {
          softwareDev: "Software Development",
          machineLearning: "Machine Learning",
          designSystems: "Design Systems",
          careerDev: "Career Development",
          techNews: "Tech Industry News"
        }
      },
      discovery: {
        label: "How did you find my portfolio?"
      }
    },
    navigation: {
      next: "Next",
      previous: "Previous",
      submit: "Submit Survey"
    }
  },
  resume: {
    title: "Curriculum Vitae",
    description: "Request access to my complete CV with detailed experience, projects and professional references.",
    requestForm: {
      title: "Request Complete CV",
      email: {
        label: "Email Address",
        placeholder: "your@company.com"
      },
      company: {
        label: "Company/Organization",
        placeholder: "Your company name"
      },
      reason: {
        label: "Reason for Request",
        placeholder: "Briefly describe the reason for your request (job opportunity, collaboration, etc.)"
      },
      privacy: {
        title: "Privacy Policy",
        description: "Your information will be used only to send the requested CV. We do not share personal data with third parties."
      },
      submit: {
        button: "Submit Request",
        sending: "Sending..."
      }
    },
    success: {
      title: "Request Sent Successfully!",
      message: "Thank you for your interest. You will receive the CV shortly in your email.",
      note: "Please check your spam folder if you don't see the email in your inbox."
    }
  },
  newsletter: {
    title: '📬 Stay Updated!',
    description: 'Subscribe to get the latest articles, tutorials, and tech insights directly in your inbox.',
    emailPlaceholder: 'Your email address',
    sending: 'Subscribing...',
    subscribeButton: 'Subscribe',
    success: '🎉 Successfully subscribed! Check your email for confirmation.',
    error: '❌ Oops! Something went wrong. Please try again.',
    legal: 'By subscribing, you agree to receive newsletter emails. You can unsubscribe at any time.'
  },
};