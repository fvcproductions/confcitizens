export interface Speaker {
  fullName: string;
  tags: string[];
  social: {
    twitter?: string;
    github?: string;
    blog?: string;
    slides?: string;
    website?: string;
    linkedin?: string;
    email?: string;
  };
  availableForHire: boolean;
  currentLocation: {
    continent: {
      name: string;
      emoji: string;
    };
    country: {
      name: string;
      emoji: string;
    };
    city: string;
  };
}

export const speakers: Speaker[] = [
  {
    fullName: 'Christian Nwamba',
    tags: [
      'JavaScript',
      'React',
      'Vue',
      'Angular',
      'Progressive Web Apps',
      'CSS',
      'Standards',
    ],
    social: {
      twitter: 'codebeast',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Africa',
        emoji: '🌍',
      },
      country: {
        name: 'Nigeria',
        emoji: '',
      },
      city: 'Lagos',
    },
  },
  {
    fullName: 'Ire Aderinokun',
    tags: ['Progressive Web Apps', 'CSS', 'Standards'],
    social: {
      twitter: 'ireaderinokun',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Africa',
        emoji: '🌍',
      },
      country: {
        name: 'Nigeria',
        emoji: '',
      },
      city: 'Lagos',
    },
  },
  {
    fullName: 'Otemuyiwa Prosper',
    tags: [
      'JavaScript',
      'React',
      'Vue',
      'Angular',
      'Progressive Web Apps',
      'PHP',
      'Laravel',
    ],
    social: {
      twitter: 'unicodeveloper',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Africa',
        emoji: '🌍',
      },
      country: {
        name: 'Nigeria',
        emoji: '',
      },
      city: 'Lagos',
    },
  },
  {
    fullName: 'Rebecca Franks',
    tags: ['Android', 'Android Things', 'Firebase', 'IoT'],
    social: {
      twitter: 'riggaroo',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Africa',
        emoji: '🌍',
      },
      country: {
        name: 'South Africa',
        emoji: '',
      },
      city: 'Johannesburg',
    },
  },
  {
    fullName: 'Ahsan Ayaz',
    tags: [
      'JavaScript',
      'Angular',
      'Node.js',
      'Ionic',
      'Firebase',
      'Stencil',
      'Progressive Web Apps',
    ],
    social: {
      twitter: 'ahsan_ayz',
      github: 'ahsanayaz',
      blog: 'https://medium.com/@ahsan.ayaz',
      slides: 'https://slides.com/ahsanayaz',
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Asia',
        emoji: '⛩',
      },
      country: {
        name: 'Pakistan',
        emoji: '',
      },
      city: 'Karachi',
    },
  },
  {
    fullName: 'Mashhood Rastgar',
    tags: [
      'Progressive Web Apps',
      'Angular',
      'Firebase',
      'Google Developer Expert Web',
    ],
    social: {
      twitter: 'mashhoodr',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Asia',
        emoji: '⛩',
      },
      country: {
        name: 'Pakistan',
        emoji: '',
      },
      city: 'Karachi',
    },
  },
  {
    fullName: 'Muhammad Kamran',
    tags: [
      'Angular',
      'Redux',
      'RxJS',
      'Flutter',
      'Dart',
      'React Native',
      'JavaScript',
      'TypeScript',
      'Linux',
    ],
    social: {
      twitter: 'smkamranqadri',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Asia',
        emoji: '⛩',
      },
      country: {
        name: 'Pakistan',
        emoji: '',
      },
      city: 'Karachi',
    },
  },
  {
    fullName: 'Narain Sagar',
    tags: [
      'Angular',
      'JavaScript',
      'TypeScript',
      'Node.js',
      'Docker',
      'Continuous Integration',
      'Tooling',
      'Automation Testing',
    ],
    social: {
      twitter: 'narainsagar',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Asia',
        emoji: '⛩',
      },
      country: {
        name: 'Pakistan',
        emoji: '',
      },
      city: 'Karachi',
    },
  },
  {
    fullName: 'Nasir Hussain',
    tags: [
      'Blockchain',
      'Smart Contracts',
      'JavaScript',
      'Databases',
      'Python',
      'Arduino',
      'Continous Integration',
    ],
    social: {
      twitter: 'i_am_the_dev',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Asia',
        emoji: '⛩',
      },
      country: {
        name: 'Pakistan',
        emoji: '',
      },
      city: 'Karachi',
    },
  },
  {
    fullName: 'Ashrith Kulai',
    tags: [
      'Progressive Web Apps',
      'Polymer',
      'Web Components',
      'Web Performance',
      'Build Tools',
    ],
    social: {
      twitter: 'ashrith_kulai',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Asia',
        emoji: '⛩',
      },
      country: {
        name: 'India',
        emoji: '',
      },
      city: 'Bangalore',
    },
  },
  {
    fullName: 'Kumar Anirudha',
    tags: ['Python', 'Node.js', 'Blockchain', 'Architecture', 'Cryptocurrency'],
    social: {
      twitter: 'kranirudha',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Asia',
        emoji: '⛩',
      },
      country: {
        name: 'India',
        emoji: '',
      },
      city: 'Bangalore',
    },
  },
  {
    fullName: 'Siddharth Kshetrapal',
    tags: ['CSS', 'Web Performance', 'React', 'CSS-in-JS', 'Node', 'Testing'],
    social: {
      twitter: 'siddharthkp',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Asia',
        emoji: '⛩',
      },
      country: {
        name: 'India',
        emoji: '',
      },
      city: 'Bangalore',
    },
  },
  {
    fullName: 'Jayesh Katta Ramalingaiah',
    tags: [
      'Rust',
      'Android',
      'Angular',
      'React',
      'Web VR',
      'Project Things',
      'Common Voice',
      'Web Compatibility',
    ],
    social: {
      twitter: 'jayeshkattar',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Asia',
        emoji: '⛩',
      },
      country: {
        name: 'India',
        emoji: '',
      },
      city: 'Mumbai',
    },
  },
  {
    fullName: 'Manjula Dube',
    tags: ['JavaScript', 'React', 'Progressive Web Apps', 'Node', 'Testing'],
    social: {
      twitter: 'manjula_dube',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Asia',
        emoji: '⛩',
      },
      country: {
        name: 'India',
        emoji: '',
      },
      city: 'Mumbai',
    },
  },
  {
    fullName: 'Neehar Venugopal',
    tags: ['Code Splitting', 'Standards'],
    social: {
      twitter: 'neeharv',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Asia',
        emoji: '⛩',
      },
      country: {
        name: 'India',
        emoji: '',
      },
      city: 'Mumbai',
    },
  },
  {
    fullName: 'Sidhartha Chatterjee',
    tags: ['React', 'Progressive Web Apps', 'Web Performance'],
    social: {
      twitter: 'chatsidhartha',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Asia',
        emoji: '⛩',
      },
      country: {
        name: 'India',
        emoji: '',
      },
      city: 'Mumbai',
    },
  },
  {
    fullName: 'Arun Michael Dsouza',
    tags: ['Webpack', 'React', 'ES6', 'Tooling', 'CSS'],
    social: {
      twitter: 'amdsouza92',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Asia',
        emoji: '⛩',
      },
      country: {
        name: 'India',
        emoji: '',
      },
      city: 'New Delhi',
    },
  },
  {
    fullName: 'Arun Michael Dsouza',
    tags: ['Animations', 'CSS', 'SVG'],
    social: {
      twitter: 'sarasoueidan',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Asia',
        emoji: '⛩',
      },
      country: {
        name: 'Lebanon',
        emoji: '',
      },
      city: 'Tyre',
    },
  },
  {
    fullName: 'Aysha Anggraini',
    tags: ['Animations', 'CSS'],
    social: {
      twitter: 'renettarenula',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Asia',
        emoji: '⛩',
      },
      country: {
        name: 'Singapore',
        emoji: '',
      },
      city: 'Singapore',
    },
  },
  {
    fullName: 'Chen Hui Jing',
    tags: ['CSS'],
    social: {
      twitter: 'hj_chen',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Asia',
        emoji: '⛩',
      },
      country: {
        name: 'Singapore',
        emoji: '',
      },
      city: 'Singapore',
    },
  },
  {
    fullName: 'Zell Liew',
    tags: ['CSS', 'JavaScript'],
    social: {
      twitter: 'zellwk',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Asia',
        emoji: '⛩',
      },
      country: {
        name: 'Singapore',
        emoji: '',
      },
      city: 'Singapore',
    },
  },
  {
    fullName: 'Glen Maddern',
    tags: ['CSS', 'Styled Components', 'React', 'JavaScript'],
    social: {
      twitter: 'glenmaddern',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Oceania',
        emoji: '🏄',
      },
      country: {
        name: 'Australia',
        emoji: '',
      },
      city: 'Melbourne',
    },
  },
  {
    fullName: 'Karolina Szczur',
    tags: ['CSS', 'HTML', 'Web', 'Inclusivity', 'Diversity'],
    social: {
      twitter: 'fox',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Oceania',
        emoji: '🏄',
      },
      country: {
        name: 'Australia',
        emoji: '',
      },
      city: 'Melbourne',
    },
  },
  {
    fullName: 'Mark Dalgleish',
    tags: ['Design Systems', 'Web Design'],
    social: {
      twitter: 'markdalgleish',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Oceania',
        emoji: '🏄',
      },
      country: {
        name: 'Australia',
        emoji: '',
      },
      city: 'Melbourne',
    },
  },
  {
    fullName: 'Phil Nash',
    tags: ['JavaScript', 'Web Development', 'Progressive Web Apps'],
    social: {
      twitter: 'philnash',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Oceania',
        emoji: '🏄',
      },
      country: {
        name: 'Australia',
        emoji: '',
      },
      city: 'Melbourne',
    },
  },
  {
    fullName: 'Stefan Baumgartner',
    tags: ['Web Ops', 'JavaScript', 'CSS', 'Tooling'],
    social: {
      twitter: 'ddprrt',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Austria',
        emoji: '',
      },
      city: 'Linz',
    },
  },
  {
    fullName: 'Lisi Linhart',
    tags: ['CSS', 'Web Animations'],
    social: {
      twitter: 'lisi_linhart',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Austria',
        emoji: '',
      },
      city: 'Salzburg',
    },
  },
  {
    fullName: 'Ali Sharif',
    tags: ['Functional Programming', 'Agile', 'Product Development'],
    social: {
      twitter: 'sharifsbeat',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Austria',
        emoji: '',
      },
      city: 'Vienna',
    },
  },
  {
    fullName: 'Andrey Okonetchnikov',
    tags: ['CSS-in-JS', 'Linting', 'Tooling'],
    social: {
      twitter: 'okonetchnikov',
      github: 'okonet',
      blog: null,
      slides: null,
      website: 'https://okonet.ru/',
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Austria',
        emoji: '',
      },
      city: 'Vienna',
    },
  },
  {
    fullName: 'Christoph Rumpel',
    tags: ['PHP', 'Laravel', 'Chatbots'],
    social: {
      twitter: 'christophrumpel',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Austria',
        emoji: '',
      },
      city: 'Vienna',
    },
  },
  {
    fullName: 'Eva Lettner',
    tags: ['CSS', 'Web'],
    social: {
      twitter: 'eva_trostlos',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Austria',
        emoji: '',
      },
      city: 'Vienna',
    },
  },
  {
    fullName: 'Glenn Reyes',
    tags: ['Code Splitting', 'React'],
    social: {
      twitter: 'glnnrys',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Austria',
        emoji: '',
      },
      city: 'Vienna',
    },
  },
  {
    fullName: 'Jan Hruby',
    tags: [
      'React',
      'Redux',
      'CSS-in-JS',
      'React Native',
      'Serverless',
      'GraphQL',
    ],
    social: {
      twitter: 'mrozilla',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Austria',
        emoji: '',
      },
      city: 'Vienna',
    },
  },
  {
    fullName: 'Juho Vepsäläinen',
    tags: ['3D Graphics', 'Business', 'React', 'Webpack', 'Writing'],
    social: {
      twitter: 'bebraw',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Austria',
        emoji: '',
      },
      city: 'Vienna',
    },
  },
  {
    fullName: 'Manuel Matuzović',
    tags: ['CSS', 'Grid', 'Accessibility'],
    social: {
      twitter: 'mmatuzo',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Austria',
        emoji: '',
      },
      city: 'Vienna',
    },
  },
  {
    fullName: 'Max Böck',
    tags: ['CSS', 'JavaScript', 'Progressive Web Apps'],
    social: {
      twitter: 'mxbck',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Austria',
        emoji: '',
      },
      city: 'Vienna',
    },
  },
  {
    fullName: 'Max Stoiber',
    tags: ['React', 'Styled Components', 'OSS'],
    social: {
      twitter: 'mxstbr',
      github: 'mxstbr',
      blog: null,
      slides: null,
      website: 'https://mxstbr.com/',
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Austria',
        emoji: '',
      },
      city: 'Vienna',
    },
  },
  {
    fullName: 'Nik Graf',
    tags: ['ReasonML', 'Serverless', 'GraphQL', 'Virtual Reality', 'React'],
    social: {
      twitter: 'nikgraf',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Austria',
        emoji: '',
      },
      city: 'Vienna',
    },
  },
  {
    fullName: 'Oliver Schöndorfer',
    tags: ['Typography', 'CSS'],
    social: {
      twitter: 'glyphe',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Austria',
        emoji: '',
      },
      city: 'Vienna',
    },
  },
  {
    fullName: 'Patrick Stapfer',
    tags: ['ReasonML', 'Static Typing', 'Flow'],
    social: {
      twitter: 'ryyppy',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Austria',
        emoji: '',
      },
      city: 'Vienna',
    },
  },
  {
    fullName: 'Peter Ferak',
    tags: ['Functional Programming', 'Computer Science'],
    social: {
      twitter: 'ferakpeter',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Austria',
        emoji: '',
      },
      city: 'Vienna',
    },
  },
  {
    fullName: 'Timo Obereder',
    tags: ['React', 'Composition', 'Android', 'RXJava', 'Kotlin'],
    social: {
      twitter: 'defuex',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Austria',
        emoji: '',
      },
      city: 'Vienna',
    },
  },
  {
    fullName: 'Sam Bellen',
    tags: ['Web Audio', 'Browser APIs'],
    social: {
      twitter: 'sambego',
      github: 'Sambego',
      blog: 'https://blog.sambego.be/',
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Belgium',
        emoji: '',
      },
      city: 'Hasselt',
    },
  },
  {
    fullName: 'Radoslav Stankov',
    tags: ['React', 'Redux', 'Ruby', 'Testing', 'GraphQL'],
    social: {
      twitter: 'rstankov',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Bulgaria',
        emoji: '',
      },
      city: 'Sofia',
    },
  },
  {
    fullName: 'Mathias Buus',
    tags: ['Peer to Peer', 'Node.js'],
    social: {
      twitter: 'mafintosh',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Denmark',
        emoji: '',
      },
      city: 'Copenhagen',
    },
  },
  {
    fullName: 'Olga Dmitricenko',
    tags: ['Virtual Reality', 'Web Image Processing'],
    social: {
      twitter: 'enthusiasto',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Denmark',
        emoji: '',
      },
      city: 'Copenhagen',
    },
  },
  {
    fullName: 'Tereza Sokol',
    tags: ['Elm', 'Visualizations'],
    social: {
      twitter: 'terezk_a',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Denmark',
        emoji: '',
      },
      city: 'Copenhagen',
    },
  },
  {
    fullName: 'Juha Lindstedt',
    tags: [
      'JavaScript',
      'RE:DOM',
      'Progressive Web Apps',
      'Performance',
      'Standards',
      'CSS',
      'Node.js',
    ],
    social: {
      twitter: 'pakastin',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Finland',
        emoji: '',
      },
      city: 'Helsinki',
    },
  },
  {
    fullName: 'Varya Stepanova',
    tags: ['CSS-in-JS', 'Style Guides', 'Visual Regression Testing'],
    social: {
      twitter: 'varya_en',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Finland',
        emoji: '',
      },
      city: 'Helsinki',
    },
  },
  {
    fullName: 'Emmanuel Demey',
    tags: [
      'Angular',
      'JavaScript',
      'Progressive Web Apps',
      'Vue',
      'React',
      'Elasticsearch',
    ],
    social: {
      twitter: 'EmmanuelDemey',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'France',
        emoji: '',
      },
      city: 'Lille',
    },
  },
  {
    fullName: 'Wassim Chegham',
    tags: [
      'Angular',
      'JavaScript',
      'Progressive Web Apps',
      'Chatbots',
      'Firebase',
      'Cloud',
      'Internet of Things',
      'IoT',
    ],
    social: {
      twitter: 'manekinekko',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'France',
        emoji: '',
      },
      city: 'Paris',
    },
  },
  {
    fullName: 'Sven Sauleau',
    tags: [
      'JavaScript',
      'Babel',
      'Artificial Intelligence',
      'Linux',
      'Cloud',
      'Ops',
      'Computer Science',
    ],
    social: {
      twitter: 'svensauleau',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'France',
        emoji: '',
      },
      city: 'Strasbourg',
    },
  },
  {
    fullName: 'Johannes Ewald',
    tags: ['Tooling', 'Standards', 'Webpack'],
    social: {
      twitter: 'Jhnnns',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Germany',
        emoji: '',
      },
      city: 'Augsburg',
    },
  },
  {
    fullName: 'Ally Long',
    tags: ['CSS', 'Performance'],
    social: {
      twitter: 'allyelle',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Germany',
        emoji: '',
      },
      city: 'Berlin',
    },
  },
  {
    fullName: 'Artem Sapegin',
    tags: ['Styleguides', 'UI', 'CSS'],
    social: {
      twitter: 'iamsapegin',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Germany',
        emoji: '',
      },
      city: 'Berlin',
    },
  },
  {
    fullName: 'Charlie Owen',
    tags: ['CSS', 'Accessibility'],
    social: {
      twitter: 'sonniesedge',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Germany',
        emoji: '',
      },
      city: 'Berlin',
    },
  },
  {
    fullName: 'Hernán Magrini',
    tags: ['Web Performance', 'Service Workers'],
    social: {
      twitter: 'hermagrini',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Germany',
        emoji: '',
      },
      city: 'Berlin',
    },
  },
  {
    fullName: 'Hugo Giraudel',
    tags: ['Accessibility', 'Diversity', 'Inclusivity'],
    social: {
      twitter: 'HugoGiraudel',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Germany',
        emoji: '',
      },
      city: 'Berlin',
    },
  },
  {
    fullName: 'Karl Horky',
    tags: ['Tooling', 'Standards', 'Intersectionality', 'OSS', 'Psychology'],
    social: {
      twitter: 'karlhorky',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Germany',
        emoji: '',
      },
      city: 'Berlin',
    },
  },
  {
    fullName: 'Lu Yu',
    tags: ['Graphic Design', 'Typography', 'Branding', 'User Experience'],
    social: {
      twitter: 'Lugotype',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Germany',
        emoji: '',
      },
      city: 'Berlin',
    },
  },
  {
    fullName: 'Natalie Pistunovich',
    tags: ['Mobile Apps', 'Go'],
    social: {
      twitter: 'nataliepis',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Germany',
        emoji: '',
      },
      city: 'Berlin',
    },
  },
  {
    fullName: 'Oleg Slobodskoi',
    tags: ['CSS-in-JS', 'React'],
    social: {
      twitter: 'oleg008',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Germany',
        emoji: '',
      },
      city: 'Berlin',
    },
  },
  {
    fullName: 'Robin Pokorny',
    tags: ['Jest', 'React', 'AMP', 'Elm'],
    social: {
      twitter: 'robinpokorny',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Germany',
        emoji: '',
      },
      city: 'Berlin',
    },
  },
  {
    fullName: 'Sara Vieira',
    tags: ['Styleguides', 'React', 'CSS', 'Preact', 'CSS-in-JS'],
    social: {
      twitter: 'NikkitaFTW',
      github: 'SaraVieira',
      blog: null,
      slides: null,
      website: 'https://iamsaravieira.com/',
      linkedin: null,
      email: 'hey@iamsaravieira.com',
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Germany',
        emoji: '',
      },
      city: 'Berlin',
    },
  },
  {
    fullName: 'Srushtika Neelakantam',
    tags: ['WebVR', 'A-Frame', 'Realtime Web', 'JavaScript Frameworks'],
    social: {
      twitter: 'Srushtika',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Germany',
        emoji: '',
      },
      city: 'Berlin',
    },
  },
  {
    fullName: 'Tejas Kumar',
    tags: [
      'JavaScript',
      'React',
      'WebAssembly',
      'Community',
      'Teams',
      'Humanities',
    ],
    social: {
      twitter: 'tejaskumar',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Germany',
        emoji: '',
      },
      city: 'Berlin',
    },
  },
  {
    fullName: 'Yoshua Wuyts',
    tags: ['Frameworks', 'Simplicity', 'Standards', 'Libraries'],
    social: {
      twitter: 'yoshuawuyts',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Germany',
        emoji: '',
      },
      city: 'Berlin',
    },
  },
  {
    fullName: 'Joy Clark',
    tags: ['Clojure', 'Web Apps', 'Security'],
    social: {
      twitter: 'iamjoyclark',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Germany',
        emoji: '',
      },
      city: 'Düsseldorf',
    },
  },
  {
    fullName: 'Vitaly Friedman',
    tags: ['Web Design', 'Web Development', 'Responsive Web Design'],
    social: {
      twitter: 'iamjoyclark',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Germany',
        emoji: '',
      },
      city: 'Freiburg',
    },
  },
  {
    fullName: 'Gregor Adams',
    tags: ['Fractals', 'CSS', 'JavaScript', 'Web Animations'],
    social: {
      twitter: 'pixelass',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Germany',
        emoji: '',
      },
      city: 'Hamburg',
    },
  },
  {
    fullName: 'Mario Nebl',
    tags: ['JavaScript', 'Node', 'JS Architecture'],
    social: {
      twitter: 'marionebl',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Germany',
        emoji: '',
      },
      city: 'Hamburg',
    },
  },
  {
    fullName: 'Mauricio Palma',
    tags: ['CSS, JavaScript'],
    social: {
      twitter: 'PalmaSwell',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Germany',
        emoji: '',
      },
      city: 'Hamburg',
    },
  },
  {
    fullName: 'Tim Pietrusky',
    tags: ['JS Art', 'JS Music', 'JavaScript'],
    social: {
      twitter: 'TimPietrusky',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Germany',
        emoji: '',
      },
      city: 'Höchst im Odenwald',
    },
  },
  {
    fullName: 'Robin Frischmann',
    tags: ['CSS', 'CSS-in-JS', 'React'],
    social: {
      twitter: 'rofrischmann',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Germany',
        emoji: '',
      },
      city: 'Karlsruhe',
    },
  },
  {
    fullName: 'Franziska Hinkelmann',
    tags: ['Node', 'V8'],
    social: {
      twitter: 'fhinkel',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Germany',
        emoji: '',
      },
      city: 'Munich',
    },
  },
  {
    fullName: 'Mathias Bynens',
    tags: ['JavaScript (TC39)', 'V8', 'Chrome'],
    social: {
      twitter: 'mathias',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Germany',
        emoji: '',
      },
      city: 'Munich',
    },
  },
  {
    fullName: 'Nick Palladinos',
    tags: ['F#'],
    social: {
      twitter: 'NickPalladinos',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Greece',
        emoji: '',
      },
      city: 'Athens',
    },
  },
  {
    fullName: 'Dave Jeffery',
    tags: ['JavaScript', 'Electron', 'Node.js'],
    social: {
      twitter: 'DaveJ',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Ireland',
        emoji: '',
      },
      city: 'Cork',
    },
  },
  {
    fullName: 'Eoin Shanaghy',
    tags: ['Java', 'Elixir', 'Node.js'],
    social: {
      twitter: 'eoins',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Ireland',
        emoji: '',
      },
      city: 'Cork',
    },
  },
  {
    fullName: 'James Sugrue',
    tags: ['Swift', 'JavaScript', 'Java'],
    social: {
      twitter: 'sugrue',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Ireland',
        emoji: '',
      },
      city: 'Cork',
    },
  },
  {
    fullName: 'Joe Minichino',
    tags: [
      'Artificial Intelligence',
      'Machine Learning',
      'Databases',
      'JavaScript',
      'Python',
    ],
    social: {
      twitter: 'tech_fort',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Ireland',
        emoji: '',
      },
      city: 'Cork',
    },
  },
  {
    fullName: 'Oscar Brito',
    tags: ['Linux', 'Node.js', 'JavaScript', 'Python'],
    social: {
      twitter: 'aetheon',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Ireland',
        emoji: '',
      },
      city: 'Cork',
    },
  },
  {
    fullName: 'Anton Whalley',
    tags: ['Node.js', 'Decentralization', 'FreeBSD', 'Open Source'],
    social: {
      twitter: 'dhigit9',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Ireland',
        emoji: '',
      },
      city: 'Dublin',
    },
  },
  {
    fullName: 'Augusto Evangelisti',
    tags: ['Testing', 'Agile', 'Bitcoin'],
    social: {
      twitter: 'augeva',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Ireland',
        emoji: '',
      },
      city: 'Dublin',
    },
  },
  {
    fullName: "Barry O'Sullivan",
    tags: ['PHP', 'Testing', 'Domain-Driven Design', 'Event Sourcing'],
    social: {
      twitter: 'barryosull',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Ireland',
        emoji: '',
      },
      city: 'Dublin',
    },
  },
  {
    fullName: 'Chris Manson',
    tags: ['JavaScript', 'Ember', 'React'],
    social: {
      twitter: 'real_ate',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Ireland',
        emoji: '',
      },
      city: 'Dublin',
    },
  },
  {
    fullName: 'Cian Mac Mahon',
    tags: ['JavaScript', 'React'],
    social: {
      twitter: 'cianmm',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Ireland',
        emoji: '',
      },
      city: 'Dublin',
    },
  },
  {
    fullName: 'Claudio Procida',
    tags: ['JavaScript', 'React', 'Node.js', 'Diversity'],
    social: {
      twitter: 'claudiopro',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Ireland',
        emoji: '',
      },
      city: 'Dublin',
    },
  },
  {
    fullName: 'Donovan Hutchinson',
    tags: ['HTML', 'CSS', 'JavaScript'],
    social: {
      twitter: 'donovanh',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Ireland',
        emoji: '',
      },
      city: 'Dublin',
    },
  },
  {
    fullName: 'Ingrid Epure',
    tags: ['Security', 'Psychology'],
    social: {
      twitter: 'ingridepure',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Ireland',
        emoji: '',
      },
      city: 'Dublin',
    },
  },
  {
    fullName: 'John Brett',
    tags: ['JavaScript', 'Hapi', 'Nomad Work', 'Bitcoin'],
    social: {
      twitter: 'johnbrett',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Ireland',
        emoji: '',
      },
      city: 'Dublin',
    },
  },
  {
    fullName: 'Luciano Mammino',
    tags: [
      'Node.js',
      'Design Patterns',
      'Serverless',
      'JSON Web Tokens',
      'Universal JavaScript',
    ],
    social: {
      twitter: 'loige',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Ireland',
        emoji: '',
      },
      city: 'Dublin',
    },
  },
  {
    fullName: 'Lynsey Duncan',
    tags: ['UX', 'UI', 'Design Systems'],
    social: {
      twitter: 'Lynsey_Duncan',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Ireland',
        emoji: '',
      },
      city: 'Dublin',
    },
  },
  {
    fullName: 'Maja Grubic',
    tags: ['Node.js', 'JavaScript', 'React', 'Monitoring', 'D3', 'SVG'],
    social: {
      twitter: 'princessmaja',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Ireland',
        emoji: '',
      },
      city: 'Dublin',
    },
  },
  {
    fullName: 'Mario Casciaro',
    tags: ['Node.js', 'JavaScript', 'Design Patterns', 'Startups'],
    social: {
      twitter: 'mariocasciaro',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Ireland',
        emoji: '',
      },
      city: 'Dublin',
    },
  },
  {
    fullName: 'Michael Flanagan',
    tags: ['PHP', 'JavaScript', 'REST', 'Testing'],
    social: {
      twitter: 'micflan',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Ireland',
        emoji: '',
      },
      city: 'Dublin',
    },
  },
  {
    fullName: 'Mustafa Turan',
    tags: ['Elixir', 'Ruby', 'Functional Programming'],
    social: {
      twitter: 'mustafaturan',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Ireland',
        emoji: '',
      },
      city: 'Dublin',
    },
  },
  {
    fullName: "Padraig O'Brien",
    tags: ['Serverless', 'Big Data', 'Databases'],
    social: {
      twitter: 'Podgeypoos79',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Ireland',
        emoji: '',
      },
      city: 'Dublin',
    },
  },
  {
    fullName: 'Panpan Lin',
    tags: ['JavaScript', 'GraphQL', 'Swift', 'Hackathons'],
    social: {
      twitter: 'CatKlavier',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Ireland',
        emoji: '',
      },
      city: 'Dublin',
    },
  },
  {
    fullName: "Pat O'Callaghan",
    tags: ['JavaScript', 'Node.js', 'Ember'],
    social: {
      twitter: 'patocallaghan',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Ireland',
        emoji: '',
      },
      city: 'Dublin',
    },
  },
  {
    fullName: 'Serg Hospodarets',
    tags: ['JavaScript', 'CSS', 'CSS Houdini'],
    social: {
      twitter: 'malyw',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Ireland',
        emoji: '',
      },
      city: 'Dublin',
    },
  },
  {
    fullName: 'Serena Fritsch',
    tags: ['JavaScript', 'Ember', 'Developer Workflows'],
    social: {
      twitter: 'serifritsch',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Ireland',
        emoji: '',
      },
      city: 'Dublin',
    },
  },
  {
    fullName: 'Thomas Shaw',
    tags: ['Docker', 'Jenkins', 'Devops'],
    social: {
      twitter: 'tomwillfixit',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Ireland',
        emoji: '',
      },
      city: 'Dublin',
    },
  },
  {
    fullName: 'Yevgeniy Brikman',
    tags: ['Terraform', 'Devops', 'Scalability'],
    social: {
      twitter: 'brikis98',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Ireland',
        emoji: '',
      },
      city: 'Dublin',
    },
  },
  {
    fullName: 'Mark Conroy',
    tags: ['Frontend', 'Drupal', 'Web Development'],
    social: {
      twitter: 'markconroy',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Ireland',
        emoji: '',
      },
      city: 'Galway',
    },
  },
  {
    fullName: 'Richard Rodger',
    tags: ['Node.js', 'Microservices'],
    social: {
      twitter: 'rjrodger',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Ireland',
        emoji: '',
      },
      city: 'Waterford',
    },
  },
  {
    fullName: 'Nir Galon',
    tags: ['Python', 'API Star', 'Open Source', 'Node.js', 'Angular'],
    social: {
      twitter: 'nirgn975',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: 'https://www.linkedin.com/in/nirgn/',
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Asia',
        emoji: '⛩',
      },
      country: {
        name: 'Israel',
        emoji: '',
      },
      city: null,
    },
  },
  {
    fullName: 'Nir Kaufman',
    tags: ['Angular', 'Firebase', 'Redux'],
    social: {
      twitter: 'nirkaufman',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Asia',
        emoji: '⛩',
      },
      country: {
        name: 'Israel',
        emoji: '',
      },
      city: null,
    },
  },
  {
    fullName: 'Uri Shaked',
    tags: [
      'Web Bluetooth',
      'WebVR',
      'Angular',
      'Internet of Things with JavaScript',
    ],
    social: {
      twitter: 'UriShaked',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Asia',
        emoji: '⛩',
      },
      country: {
        name: 'Israel',
        emoji: '',
      },
      city: null,
    },
  },
  {
    fullName: 'Maurizio Mangione',
    tags: ['Web Components', 'Polymer', 'Progressive Web Apps'],
    social: {
      twitter: 'granze',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Italy',
        emoji: '',
      },
      city: 'Milan',
    },
  },
  {
    fullName: 'Matteo Ronchi',
    tags: ['React', 'JavaScript', 'Flow', 'Web Architectures', 'Frontend Ops'],
    social: {
      twitter: 'cef62',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Italy',
        emoji: '',
      },
      city: 'Verona',
    },
  },
  {
    fullName: 'Alexey Kureev',
    tags: ['React Native'],
    social: {
      twitter: 'kureevalexey',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Netherlands',
        emoji: '',
      },
      city: 'Amsterdam',
    },
  },
  {
    fullName: 'Carmen Popoviciu',
    tags: [
      'Angular',
      'JavaScript',
      'Machine Learning',
      'Neural Networks',
      'Polymer',
      'Web Components',
    ],
    social: {
      twitter: 'carmenpopoviciu',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Netherlands',
        emoji: '',
      },
      city: 'Amsterdam',
    },
  },
  {
    fullName: 'Michel Weststrate',
    tags: ['MobX', 'React', 'mobx-state-tree', 'Typescript', 'Open Source'],
    social: {
      twitter: 'mweststrate',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Netherlands',
        emoji: '',
      },
      city: 'Amsterdam',
    },
  },
  {
    fullName: 'Narendra Shetty',
    tags: ['React', 'Progressive Web Apps'],
    social: {
      twitter: 'narendra_shetty',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Netherlands',
        emoji: '',
      },
      city: 'Amsterdam',
    },
  },
  {
    fullName: 'Peter-Paul Koch',
    tags: ['HTML', 'CSS', 'JavaScript', 'Cross-Browser Compatibility'],
    social: {
      twitter: 'ppk',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Netherlands',
        emoji: '',
      },
      city: 'Amsterdam',
    },
  },
  {
    fullName: 'Job van Achterberg',
    tags: ['Accessibility'],
    social: {
      twitter: 'detonite',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Netherlands',
        emoji: '',
      },
      city: 'Breda',
    },
  },
  {
    fullName: 'Rowdy Rabouw',
    tags: ['NativeScript', 'Browser APIs'],
    social: {
      twitter: 'rowdyrabouw',
      github: null,
      blog: null,
      slides: null,
      website: 'https://double-r.nl/speaking/',
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Netherlands',
        emoji: '',
      },
      city: 'Breda',
    },
  },
  {
    fullName: 'Norbert de Langen',
    tags: [
      'Component Libraries',
      'React',
      'Storybook',
      'Open Source',
      'Communities',
    ],
    social: {
      twitter: 'NorbertdeLangen',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Netherlands',
        emoji: '',
      },
      city: 'Zwolle',
    },
  },
  {
    fullName: 'Kasia Jastrzębska',
    tags: ['React', 'Redux', 'Async', 'CSS-in-JS', 'ClojureScript'],
    social: {
      twitter: 'kejt_bw',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Poland',
        emoji: '',
      },
      city: 'Gdańsk',
    },
  },
  {
    fullName: 'Kitze',
    tags: ['MobX', 'State Management', 'GraphQL', 'CSS-in-JS'],
    social: {
      twitter: 'thekitze',
      github: 'kitze',
      blog: null,
      slides: null,
      website: 'https://kitze.io/',
      linkedin: null,
      email: 'kristijan.mkd@gmail.com',
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Poland',
        emoji: '',
      },
      city: 'Gdańsk',
    },
  },
  {
    fullName: 'Anna Migas',
    tags: ['HTML', 'CSS', 'JavaScript', 'Web Animations', 'Web Performance'],
    social: {
      twitter: 'szynszyliszys',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Poland',
        emoji: '',
      },
      city: 'Krakow',
    },
  },
  {
    fullName: 'Kacper Sokołowski',
    tags: ['JavaScript', 'Security', 'Service Workers'],
    social: {
      twitter: 'kaapa_s',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Poland',
        emoji: '',
      },
      city: 'Krakow',
    },
  },
  {
    fullName: 'Konrad Dzwinel',
    tags: ['Developer Tools', 'JavaScript'],
    social: {
      twitter: 'kdzwinel',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Poland',
        emoji: '',
      },
      city: 'Krakow',
    },
  },
  {
    fullName: 'Tomasz Łakomy',
    tags: ['React', 'Virtual Reality', 'jQuery'],
    social: {
      twitter: 'tlakomy',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Poland',
        emoji: '',
      },
      city: 'Poznań',
    },
  },
  {
    fullName: 'Aga Naplocha',
    tags: ['CSS', 'Teaching Web Technologies'],
    social: {
      twitter: 'aganaplocha',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Poland',
        emoji: '',
      },
      city: 'Warsaw',
    },
  },
  {
    fullName: 'Ferran Negre',
    tags: ['React Native', 'React', 'Testing', 'JavaScript', 'Android'],
    social: {
      twitter: 'ferrannp',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Poland',
        emoji: '',
      },
      city: 'Wrocław',
    },
  },
  {
    fullName: 'Mike Grabowski',
    tags: ['React Native', 'JavaScript', 'Tooling'],
    social: {
      twitter: 'grabbou',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Poland',
        emoji: '',
      },
      city: 'Wrocław',
    },
  },
  {
    fullName: 'Michał Pierzchała',
    tags: ['React Native', 'Jest', 'Testing', 'CSS'],
    social: {
      twitter: 'thymikee',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Poland',
        emoji: '',
      },
      city: 'Wrocław',
    },
  },
  {
    fullName: 'Mike Chudziak',
    tags: ['React', 'React Native', 'iOS', 'Android'],
    social: {
      twitter: 'michal_chudziak',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Poland',
        emoji: '',
      },
      city: 'Wrocław',
    },
  },
  {
    fullName: 'Satyajit Sahoo',
    tags: ['React', 'React Native', 'CSS-in-JS', 'Tooling'],
    social: {
      twitter: 'satya164',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Poland',
        emoji: '',
      },
      city: 'Wrocław',
    },
  },
  {
    fullName: 'Daniela Matos de Carvalho',
    tags: ['HTTP/2', 'JavaScript', 'React', 'Offline First'],
    social: {
      twitter: 'sericaia',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Portugal',
        emoji: '',
      },
      city: 'Lisbon',
    },
  },
  {
    fullName: 'David Dias',
    tags: ['IPFS', 'Peer to Peer', 'JavaScript', 'Node.js'],
    social: {
      twitter: 'daviddias',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Portugal',
        emoji: '',
      },
      city: 'Lisbon',
    },
  },
  {
    fullName: 'Miguel Andrade',
    tags: ['Ember', 'JavaScript'],
    social: {
      twitter: 'maskedwarrior',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Portugal',
        emoji: '',
      },
      city: 'Porto',
    },
  },
  {
    fullName: 'Márton Kodok',
    tags: [
      'BigQuery',
      'Databases',
      'Voice Based Interfaces',
      'Cloud',
      'Architecture',
    ],
    social: {
      twitter: 'martonkodok',
      github: null,
      blog: null,
      slides: 'https://slideshare.net/martonkodok',
      website: 'https://eventrix.co/s/marton-kodok-151',
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Romania',
        emoji: '',
      },
      city: null,
    },
  },
  {
    fullName: 'Nikita Prokopov',
    tags: ['Clojure', 'DataScript', 'Rum', 'FiraCode', 'AnyBar'],
    social: {
      twitter: 'nikitonsky',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Russia',
        emoji: '',
      },
      city: 'Moscow',
    },
  },
  {
    fullName: 'Sergey Rubanov',
    tags: ['Standards', 'Web Assembly'],
    social: {
      twitter: 'chicoxyzzy',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Russia',
        emoji: '',
      },
      city: 'Moscow',
    },
  },
  {
    fullName: 'Nikita Sobolev',
    tags: ['Elixir', 'Python'],
    social: {
      twitter: 'elixir_lang_mos',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Russia',
        emoji: '',
      },
      city: 'Moscow',
    },
  },
  {
    fullName: 'Oleksii Okhrymenko',
    tags: ['Angular', 'JavaScript', 'RxJS', 'i18n', 'HTML', 'CSS'],
    social: {
      twitter: 'ai_boy',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Russia',
        emoji: '',
      },
      city: 'Moscow',
    },
  },
  {
    fullName: 'Vadim Makeev',
    tags: ['HTML', 'CSS', 'Web Standards', 'Accessibility'],
    social: {
      twitter: 'pepelsbey',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Russia',
        emoji: '',
      },
      city: 'St. Petersburg',
    },
  },
  {
    fullName: 'Aleksandar Simovic',
    tags: ['Serverless'],
    social: {
      twitter: 'simalexan',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Serbia',
        emoji: '',
      },
      city: 'Belgrade',
    },
  },
  {
    fullName: 'Slobodan Stojanović',
    tags: ['Serverless', 'Offline Web', 'Chat Bots'],
    social: {
      twitter: 'slobodan',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Serbia',
        emoji: '',
      },
      city: 'Belgrade',
    },
  },
  {
    fullName: 'Flavio Corpa',
    tags: ['JavaScript', 'Functional Programming'],
    social: {
      twitter: 'flaviocorpa',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Spain',
        emoji: '',
      },
      city: 'Alicante',
    },
  },
  {
    fullName: 'Javi Velasco',
    tags: ['React', 'CSS-in-JS', 'React Toolbox'],
    social: {
      twitter: 'javivelasco',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Spain',
        emoji: '',
      },
      city: 'Córdoba',
    },
  },
  {
    fullName: 'Vincenzo Chianese',
    tags: ['WebAPI', 'Microservices', 'JavaScript'],
    social: {
      twitter: 'D3DVincent',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Spain',
        emoji: '',
      },
      city: 'Madrid',
    },
  },
  {
    fullName: 'Erik Rasmussen',
    tags: ['React', 'Redux', 'Redux-Form', 'Forms'],
    social: {
      twitter: 'erikras',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Spain',
        emoji: '',
      },
      city: 'Santander',
    },
  },
  {
    fullName: 'Martin Splitt',
    tags: ['Virtual Reality', 'Web Performance'],
    social: {
      twitter: 'g33konaut',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Switzerland',
        emoji: '',
      },
      city: 'Zurich',
    },
  },
  {
    fullName: 'Sebastian Siemssen',
    tags: ['React', 'GraphQL', 'Tooling'],
    social: {
      twitter: 'thefubhy',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Switzerland',
        emoji: '',
      },
      city: 'Zurich',
    },
  },
  {
    fullName: 'Denys Dovhan',
    tags: ['JavaScript', 'DevTools', 'Shell scripting'],
    social: {
      twitter: 'denysdovhan',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Ukraine',
        emoji: '',
      },
      city: 'Chernivtsi',
    },
  },
  {
    fullName: 'Illya Klymov',
    tags: ['Teaching', 'Coaching', 'JavaScript'],
    social: {
      twitter: 'xanf_ua',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Ukraine',
        emoji: '',
      },
      city: 'Kharkiv',
    },
  },
  {
    fullName: 'Aleksey Shvayka',
    tags: [
      'Browsers',
      'Web Standards',
      'Open Source',
      'Front End',
      'Smalltalk',
    ],
    social: {
      twitter: 'shvaikalesh',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Ukraine',
        emoji: '',
      },
      city: 'Kyiv',
    },
  },
  {
    fullName: 'Andrey Listochkin',
    tags: ['Rust', 'JavaScript', 'Skills', 'Architecture'],
    social: {
      twitter: 'listochkin',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Ukraine',
        emoji: '',
      },
      city: 'Kyiv',
    },
  },
  {
    fullName: 'Andrii Shumada',
    tags: ['JavaScript', 'Node.js', 'Streams'],
    social: {
      twitter: 'eagleeye_s',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Ukraine',
        emoji: '',
      },
      city: 'Kyiv',
    },
  },
  {
    fullName: 'Anton Nemtsev',
    tags: ['HTML', 'CSS', 'Web Standards'],
    social: {
      twitter: 'SilentImp',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Ukraine',
        emoji: '',
      },
      city: 'Kyiv',
    },
  },
  {
    fullName: 'Artem Yavorsky',
    tags: ['Babel', 'ECMAScript', 'Compilers'],
    social: {
      twitter: 'yavorsky',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Ukraine',
        emoji: '',
      },
      city: 'Kyiv',
    },
  },
  {
    fullName: 'Roman Liutikov',
    tags: ['ClojureScript', 'React', 'Compilers'],
    social: {
      twitter: 'roman01la',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Ukraine',
        emoji: '',
      },
      city: 'Kyiv',
    },
  },
  {
    fullName: 'Vladimir Agafonkin',
    tags: ['Maps', 'Algorithms'],
    social: {
      twitter: 'mourner',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Ukraine',
        emoji: '',
      },
      city: 'Kyiv',
    },
  },
  {
    fullName: 'Yuri Artyukh',
    tags: ['HTML', 'CSS', 'JavaScript', 'WebGL'],
    social: {
      twitter: 'akella',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Ukraine',
        emoji: '',
      },
      city: 'Kyiv',
    },
  },
  {
    fullName: 'Artem Zakharchenko',
    tags: ['React', 'Forms', 'CSS Grid'],
    social: {
      twitter: 'kettanaito',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Ukraine',
        emoji: '',
      },
      city: 'Poltava',
    },
  },
  {
    fullName: 'Artem Denysov',
    tags: ['Performance', 'Dev Tools'],
    social: {
      twitter: 'denar90',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Ukraine',
        emoji: '',
      },
      city: 'Vinnytsia',
    },
  },
  {
    fullName: 'Timofey Lavrenyuk',
    tags: ['Progressive Web Apps', 'Modern Browser APIs'],
    social: {
      twitter: 'geek_timofey',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'Ukraine',
        emoji: '',
      },
      city: 'Odessa',
    },
  },
  {
    fullName: 'Bruce Lawson',
    tags: ['Standards', 'Performance'],
    social: {
      twitter: 'brucel',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'United Kingdom',
        emoji: '',
      },
      city: 'Birmingham',
    },
  },
  {
    fullName: 'Jeremy Keith',
    tags: [
      'Standards',
      'Web Development',
      'Web Design',
      'CSS',
      'Accessibility',
    ],
    social: {
      twitter: 'adactio',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'United Kingdom',
        emoji: '',
      },
      city: 'Brighton',
    },
  },
  {
    fullName: 'Paul Robert Lloyd',
    tags: ['Design', 'Web Design', 'Architecture', 'Design Systems', 'Trains'],
    social: {
      twitter: 'paulrobertlloyd',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'United Kingdom',
        emoji: '',
      },
      city: 'Brighton',
    },
  },
  {
    fullName: 'Léonie Watson',
    tags: ['Accessibility', 'Web Standards', 'Screen Readers'],
    social: {
      twitter: 'LeonieWatson',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'United Kingdom',
        emoji: '',
      },
      city: 'Bristol',
    },
  },
  {
    fullName: 'Rachel Andrew',
    tags: ['CSS'],
    social: {
      twitter: 'rachelandrew',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'United Kingdom',
        emoji: '',
      },
      city: 'Bristol',
    },
  },
  {
    fullName: 'Ruth John',
    tags: ['Browser Technologies', 'Web Audio', 'Web MIDI'],
    social: {
      twitter: 'Rumyra',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'United Kingdom',
        emoji: '',
      },
      city: 'Bristol',
    },
  },
  {
    fullName: 'Caroline Jarrett',
    tags: ['Forms Usability', 'User Research'],
    social: {
      twitter: 'cjforms',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'United Kingdom',
        emoji: '',
      },
      city: 'Leighton Buzzard',
    },
  },
  {
    fullName: 'Luke Bonaccorsi',
    tags: ['Node', 'JavaScript', 'Automation'],
    social: {
      twitter: 'LukeB_UK',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'United Kingdom',
        emoji: '',
      },
      city: 'Leeds',
    },
  },
  {
    fullName: 'Ada Rose Cannon',
    tags: [
      'HTML',
      'CSS',
      'JavaScript',
      'WebVR',
      'Web Technologies',
      'Progressive Web Apps',
    ],
    social: {
      twitter: 'lady_ada_king',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'United Kingdom',
        emoji: '',
      },
      city: 'London',
    },
  },
  {
    fullName: 'Alessandro Cinelli',
    tags: ['JavaScript'],
    social: {
      twitter: 'cirpo',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'United Kingdom',
        emoji: '',
      },
      city: 'London',
    },
  },
  {
    fullName: 'Alex Lobera',
    tags: ['JavaScript', 'React', 'Redux', 'GraphQL'],
    social: {
      twitter: 'alex_lobera',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'United Kingdom',
        emoji: '',
      },
      city: 'London',
    },
  },
  {
    fullName: 'Alexandra Deschamps-Sonsino',
    tags: ['Internet of Things', 'Smart Homes', 'Connected Devices'],
    social: {
      twitter: 'iotwatch',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'United Kingdom',
        emoji: '',
      },
      city: 'London',
    },
  },
  {
    fullName: 'Alla Kholmatova',
    tags: ['Design Systems'],
    social: {
      twitter: 'craftui',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'United Kingdom',
        emoji: '',
      },
      city: 'London',
    },
  },
  {
    fullName: 'Andrew Betts',
    tags: ['Networks', 'Performance', 'Web'],
    social: {
      twitter: 'triblondon',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'United Kingdom',
        emoji: '',
      },
      city: 'London',
    },
  },
  {
    fullName: 'Anna Doubková',
    tags: ['React', 'Testing'],
    social: {
      twitter: 'lithinn',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'United Kingdom',
        emoji: '',
      },
      city: 'London',
    },
  },
  {
    fullName: 'Bodil Stokke',
    tags: ['Programming', 'Functional Programming'],
    social: {
      twitter: 'bodil',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'United Kingdom',
        emoji: '',
      },
      city: 'London',
    },
  },
  {
    fullName: 'Chris Noring',
    tags: ['JavaScript', 'RxJS', 'Angular', 'React'],
    social: {
      twitter: 'chris_noring',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'United Kingdom',
        emoji: '',
      },
      city: 'London',
    },
  },
  {
    fullName: 'Cristiano Rastelli',
    tags: ['CSS', 'CSS-in-JS'],
    social: {
      twitter: 'areaweb',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'United Kingdom',
        emoji: '',
      },
      city: 'London',
    },
  },
  {
    fullName: 'Dan Abramov',
    tags: ['JavaScript', 'React', 'Redux', 'Tooling'],
    social: {
      twitter: 'dan_abramov',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'United Kingdom',
        emoji: '',
      },
      city: 'London',
    },
  },
  {
    fullName: 'Davide "Folletto" Casali',
    tags: ['Design', 'User Experience', 'Management', 'Leadership', 'Startups'],
    social: {
      twitter: 'Folletto',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'United Kingdom',
        emoji: '',
      },
      city: 'London',
    },
  },
  {
    fullName: 'Gerard Sans',
    tags: ['Angular', 'React', 'GraphQL', 'CSS Animations', 'RxJS'],
    social: {
      twitter: 'gerardsans',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'United Kingdom',
        emoji: '',
      },
      city: 'London',
    },
  },
  {
    fullName: 'Gojko Adzic',
    tags: ['Testing', 'Requirements', 'Serverless'],
    social: {
      twitter: 'gojkoadzic',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'United Kingdom',
        emoji: '',
      },
      city: 'London',
    },
  },
  {
    fullName: 'Michele Bertoli',
    tags: ['React', 'Testing'],
    social: {
      twitter: 'MicheleBertoli',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'United Kingdom',
        emoji: '',
      },
      city: 'London',
    },
  },
  {
    fullName: 'Phil Plückthun',
    tags: ['React', 'CSS-in-JS'],
    social: {
      twitter: '_philpl',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'United Kingdom',
        emoji: '',
      },
      city: 'London',
    },
  },
  {
    fullName: 'Sani Yusuf',
    tags: ['Ionic', 'Angular', 'JavaScript', 'Progressive Web Apps'],
    social: {
      twitter: 'saniyusuf',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'United Kingdom',
        emoji: '',
      },
      city: 'London',
    },
  },
  {
    fullName: 'Sebastian Witalec',
    tags: ['NativeScript', 'Angular', 'Bots', 'JavaScript'],
    social: {
      twitter: 'sebawita',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'United Kingdom',
        emoji: '',
      },
      city: 'London',
    },
  },
  {
    fullName: 'Inayaili de León',
    tags: [
      'Design Systems',
      'Responsive Web Design',
      'Design Leadership',
      'UI',
    ],
    social: {
      twitter: 'yaili',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'United Kingdom',
        emoji: '',
      },
      city: 'London',
    },
  },
  {
    fullName: 'Heydon Pickering',
    tags: ['Accessibility', 'Performance', 'Web'],
    social: {
      twitter: 'heydonworks',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'United Kingdom',
        emoji: '',
      },
      city: 'Norwich',
    },
  },
  {
    fullName: 'Seren Davies',
    tags: ['Accessibility'],
    social: {
      twitter: 'ninjanails',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'Europe',
        emoji: '🇪🇺',
      },
      country: {
        name: 'United Kingdom',
        emoji: '',
      },
      city: 'Oxford',
    },
  },
  {
    fullName: 'Scott Vinkle',
    tags: ['Accessibility'],
    social: {
      twitter: 'svinkle',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'Canada',
        emoji: '',
      },
      city: 'Kingston',
    },
  },
  {
    fullName: 'Aurélien Loyer',
    tags: ['JavaScript', 'Angular', 'Vue.js', 'Node.js', 'TypeScript', 'IoT'],
    social: {
      twitter: 'AurelienLoyer',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'Canada',
        emoji: '',
      },
      city: 'Montréal',
    },
  },
  {
    fullName: 'Tanya Janca',
    tags: ['InfoSec', 'Web App Security'],
    social: {
      twitter: 'shehackspurple',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'Canada',
        emoji: '',
      },
      city: 'Ottawa',
    },
  },
  {
    fullName: "Brenna O'Brien",
    tags: ['Motivation', 'Psychology', 'Developer Culture', 'Public Speaking'],
    social: {
      twitter: 'brnnbrn',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'Canada',
        emoji: '',
      },
      city: 'Toronto',
    },
  },
  {
    fullName: 'Hala Anwar',
    tags: ['Accessibility'],
    social: {
      twitter: 'halathinkeths',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'Canada',
        emoji: '',
      },
      city: 'Toronto',
    },
  },
  {
    fullName: 'Tiff Nogueira',
    tags: ['CSS Grids', 'React', 'Redux', 'Firebase', 'Flexbox'],
    social: {
      twitter: 'tiffcodes',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'Canada',
        emoji: '',
      },
      city: 'Toronto',
    },
  },
  {
    fullName: 'Wes Bos',
    tags: ['Fullstack Dev', 'JavaScript', 'CSS', 'Node', 'React'],
    social: {
      twitter: 'wesbos',
      github: 'wesbos',
      blog: null,
      slides: null,
      website: 'https://wesbos.com',
      linkedin: null,
      email: 'hey@wesbos.com',
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'Canada',
        emoji: '',
      },
      city: 'Hamilton',
    },
  },
  {
    fullName: 'Eric Bailey',
    tags: ['Accessibility'],
    social: {
      twitter: 'ericwbailey',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'Boston',
    },
  },
  {
    fullName: 'Gleb Bahmutov',
    tags: ['Computer Science', 'JavaScript', 'Reactive Programming'],
    social: {
      twitter: 'bahmutov',
      github: null,
      blog: null,
      slides: 'https://slides.com/bahmutov',
      website: 'https://glebbahmutov.com',
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'Boston',
    },
  },
  {
    fullName: 'Lea Verou',
    tags: ['CSS', 'HTML'],
    social: {
      twitter: 'leaverou',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'Boston',
    },
  },
  {
    fullName: 'Adrian Roselli',
    tags: ['Accessibility'],
    social: {
      twitter: 'aardrian',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'Buffalo',
    },
  },
  {
    fullName: 'Addy Osmani',
    tags: [
      'Google Chrome devtool',
      'TodoMVC',
      'Yeoman',
      'Material Design Lite',
    ],
    social: {
      twitter: 'addyosmani',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'Mountain View',
    },
  },
  {
    fullName: 'Michael Jackson',
    tags: ['React', 'JavaScript', 'React Router'],
    social: {
      twitter: 'mjackson',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'Carlsbad',
    },
  },
  {
    fullName: 'Levi Bostian',
    tags: [
      'Android',
      'RxJava',
      'Kotlin',
      'Freelancing',
      'Swift',
      'iOS',
      'Productivity',
      'Startups',
      'Bootstrapping',
    ],
    social: {
      twitter: 'levibostian',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'Cedar Rapids',
    },
  },
  {
    fullName: 'Carin Meier',
    tags: ['Clojure', 'Machine Learning', 'Programming'],
    social: {
      twitter: 'gigasquid',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'Cincinnati',
    },
  },
  {
    fullName: 'Doug Schepers',
    tags: ['Data visualization', 'Accessibility', 'SVG'],
    social: {
      twitter: 'shepazu',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'Chapel Hill',
    },
  },
  {
    fullName: 'Karl Hughes',
    tags: ['Microservices', 'PHP', 'JavaScript', 'Docker'],
    social: {
      twitter: 'KarlLHughes',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'Chicago',
    },
  },
  {
    fullName: 'Miriam Suzanne',
    tags: ['CSS', 'Sass', 'Architecture', 'Design Systems'],
    social: {
      twitter: 'mirisuzanne',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'Denver',
    },
  },
  {
    fullName: 'Carie Fisher',
    tags: ['Accessibility'],
    social: {
      twitter: 'cariefisher',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'Madison',
    },
  },
  {
    fullName: 'Aimee Knight',
    tags: ['JavaScript', 'CSS', 'Angular', 'Growing Junior Developers'],
    social: {
      twitter: 'Aimee_Knight',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'Nashville',
    },
  },
  {
    fullName: 'Ken Wheeler',
    tags: ['React', 'React Native', 'ReasonML'],
    social: {
      twitter: 'ken_wheeler',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'New Jersey',
    },
  },
  {
    fullName: 'Gant Laborde',
    tags: [
      'JavaScript',
      'React Native',
      'Leadership',
      'Redux',
      'Open Source',
      'Tooling',
      'Public Speaking',
    ],
    social: {
      twitter: 'GantLaborde',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'New Orleans',
    },
  },
  {
    fullName: 'Sia Karamalegos',
    tags: ['React', 'JavaScript', 'React Native', 'Front-End Performance'],
    social: {
      twitter: 'thegreengreek',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'New Orleans',
    },
  },
  {
    fullName: 'Andrey Sitnik',
    tags: ['PostCSS', 'CRDT'],
    social: {
      twitter: 'sitnikcode',
      github: 'ai',
      blog: null,
      slides: null,
      website: 'https://sitnik.ru/en',
      linkedin: null,
      email: 'andrey@sitnik.ru',
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'New York',
    },
  },
  {
    fullName: 'David Nolen',
    tags: [
      'Clojure',
      'ClojureScript',
      'Om',
      'Functional Programming',
      'Computer Science',
    ],
    social: {
      twitter: 'swannodette',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'New York',
    },
  },
  {
    fullName: 'Diana Mounter',
    tags: ['Design Systems', 'CSS', 'Product Design'],
    social: {
      twitter: 'broccolini',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'New York',
    },
  },
  {
    fullName: 'Henry Zhu',
    tags: ['Open Source', 'Babel'],
    social: {
      twitter: 'left_pad',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'New York',
    },
  },
  {
    fullName: 'Jen Simmons',
    tags: ['Design', 'CSS', 'HTML', 'Web'],
    social: {
      twitter: 'jensimmons',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'New York',
    },
  },
  {
    fullName: 'Lara Hogan',
    tags: [
      'Design',
      'Performance',
      'Engineering Management',
      'Public Speaking',
    ],
    social: {
      twitter: 'lara_hogan',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'New York',
    },
  },
  {
    fullName: 'Kurtis Kemple',
    tags: ['React', 'React Native', 'GraphQL', 'Universal Components'],
    social: {
      twitter: 'kurtiskemple',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'New York',
    },
  },
  {
    fullName: 'Mariko Kosaka',
    tags: ['HTML', 'CSS', 'JavaScript', 'Web'],
    social: {
      twitter: 'kosamari',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'New York',
    },
  },
  {
    fullName: 'Peggy Rayzis',
    tags: [
      'React',
      'React Native',
      'GraphQL',
      'Apollo',
      'Apollo Client',
      'Apollo Server',
    ],
    social: {
      twitter: 'peggyrayzis',
      github: 'peggyrayzis',
      blog: 'https://blog.apollographql.com/@peggyrayzis',
      slides: null,
      website: null,
      linkedin: 'https://www.linkedin.com/in/peggyrayzis',
      email: 'peggyrayzis@gmail.com',
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'New York',
    },
  },
  {
    fullName: 'Una Kravets',
    tags: ['CSS', 'Web'],
    social: {
      twitter: 'una',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'New York',
    },
  },
  {
    fullName: 'Jared Palmer',
    tags: [
      'React',
      'React Native',
      'Developer Tools',
      'Forms',
      'TypeScript',
      'CSS',
    ],
    social: {
      twitter: 'jaredpalmer',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'New York',
    },
  },
  {
    fullName: 'Courtney Heitman',
    tags: ['UX Development', 'Usability', 'Accessibility', 'Scrum', 'Agile'],
    social: {
      twitter: 'courtneyxann',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'Omaha',
    },
  },
  {
    fullName: 'Paul Irish',
    tags: ['Developer Tools'],
    social: {
      twitter: 'paul_irish',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'Palo Alto',
    },
  },
  {
    fullName: 'Cheng Lou',
    tags: ['ReasonML', 'React', 'Software Philosophy'],
    social: {
      twitter: '_chenglou',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'Palo Alto',
    },
  },
  {
    fullName: 'Lis Pardi',
    tags: ['Web'],
    social: {
      twitter: 'lispardi',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'Philadelphia',
    },
  },
  {
    fullName: 'Richard Feldman',
    tags: ['Elm'],
    social: {
      twitter: 'rtfeldman',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'Philadelphia',
    },
  },
  {
    fullName: 'Brad Frost',
    tags: ['Web Design', 'Atomic Design', 'Web Development'],
    social: {
      twitter: 'brad_frost',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'Pittsburgh',
    },
  },
  {
    fullName: 'Lin Clark',
    tags: ['React', 'WebAssembly', 'Browsers Internals'],
    social: {
      twitter: 'linclark',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'Pittsburgh',
    },
  },
  {
    fullName: 'Scott Hanselman',
    tags: ['.NET', 'Azure'],
    social: {
      twitter: 'linclark',
      github: 'shanselman',
      blog: 'https://hanselman.com/blog',
      slides: null,
      website: 'https://hanselman.com',
      linkedin: 'https://linkedin.com/in/scotthanselman',
      email: 'scott@hanselman.com',
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'Portland',
    },
  },
  {
    fullName: 'Kyle Shevlin',
    tags: ['React', 'Redux', 'JavaScript'],
    social: {
      twitter: 'kyleshevlin',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'Portland',
    },
  },
  {
    fullName: 'Micah Godbolt',
    tags: ['Front-End Architecture', 'CSS', 'Design Systems'],
    social: {
      twitter: 'micahgodbolt',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'Portland',
    },
  },
  {
    fullName: 'Violet Peña',
    tags: ['React', 'Socket.IO', 'Storybook', 'Accessibility'],
    social: {
      twitter: 'micahgodbolt',
      github: 'vgpena',
      blog: 'https://vgpena.github.io/',
      slides: null,
      website: 'https://violet.is',
      linkedin: 'https://linkedin.com/in/violet-peña-b02b0163',
      email: 'violetpena@gmail.com',
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'Portland',
    },
  },
  {
    fullName: 'Jesse Beach',
    tags: ['Accessibility', 'React'],
    social: {
      twitter: 'jessebeach',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'Redwood City',
    },
  },
  {
    fullName: 'Kent C. Dodds',
    tags: ['OSS', 'React', 'Testing'],
    social: {
      twitter: 'kentcdodds',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'Salt Lake City',
    },
  },
  {
    fullName: 'Anjana Vakil',
    tags: [
      'Programming Language Paradigms',
      'Functional Programming (with JavaScript)',
    ],
    social: {
      twitter: 'AnjanaVakil',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'San Francisco',
    },
  },
  {
    fullName: 'Beth Dean',
    tags: ['Design', 'Illustration'],
    social: {
      twitter: 'bethdean',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'San Francisco',
    },
  },
  {
    fullName: 'Adam Menges',
    tags: ['Artificial Intelligence', 'Design', 'Computer Science'],
    social: {
      twitter: 'adammenges',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'San Francisco',
    },
  },
  {
    fullName: 'Boris Cherny',
    tags: ['TypeScript', 'React', 'Computer Science'],
    social: {
      twitter: 'bcherny',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'San Francisco',
    },
  },
  {
    fullName: 'Brynn Evans',
    tags: ['Design', 'Management'],
    social: {
      twitter: 'brynn',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'San Francisco',
    },
  },
  {
    fullName: 'Cordelia Dillon',
    tags: ['Accessibility'],
    social: {
      twitter: 'cordeliadillon',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'San Francisco',
    },
  },
  {
    fullName: 'Estelle Weyl',
    tags: ['CSS', 'Performance', 'Responsive Web Design'],
    social: {
      twitter: 'standardista',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'San Francisco',
    },
  },
  {
    fullName: 'Gregory Shehet',
    tags: ['Functional Reactive Programming', 'MobX', 'CSS-in-JS', 'React'],
    social: {
      twitter: 'AGambit95',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'San Francisco',
    },
  },
  {
    fullName: 'Jafar Husain',
    tags: [
      'JavaScript',
      'ES7',
      'Observables',
      'Reactive Programming',
      'Falcor',
    ],
    social: {
      twitter: 'jhusain',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'San Francisco',
    },
  },
  {
    fullName: 'Jennifer Wong',
    tags: ['Design Systems'],
    social: {
      twitter: 'mybluewristband',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'San Francisco',
    },
  },
  {
    fullName: 'Jon Gold',
    tags: ['Design', 'Design Systems', 'React', 'Artificial Intelligence'],
    social: {
      twitter: 'jongold',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'San Francisco',
    },
  },
  {
    fullName: 'Lisa Huang',
    tags: ['AMP', 'Offline-First Mobile Apps', 'React'],
    social: {
      twitter: 'lisaychuang',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'San Francisco',
    },
  },
  {
    fullName: 'Mike Matas',
    tags: ['Human Interface Design'],
    social: {
      twitter: 'mike_matas',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'San Francisco',
    },
  },
  {
    fullName: 'Mina Markham',
    tags: ['CSS Architecture', 'Sass', 'Community', 'Design Systems'],
    social: {
      twitter: 'MinaMarkham',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'San Francisco',
    },
  },
  {
    fullName: 'Monica Dinculescu',
    tags: ['Web Components', 'Polymer', 'Emoji'],
    social: {
      twitter: 'notwaldorfStapleton',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'San Francisco',
    },
  },
  {
    fullName: 'Patrick Stapleton',
    tags: [
      'OSS',
      'Serverless',
      'GraphQL',
      'Vue.js',
      'React',
      'Angular',
      'TypeScript',
    ],
    social: {
      twitter: 'gdi2290',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'San Francisco',
    },
  },
  {
    fullName: 'Preethi Kasireddy',
    tags: ['Machine Learning', 'Natural Language Processing', 'React'],
    social: {
      twitter: 'iam_preethi',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'San Francisco',
    },
  },
  {
    fullName: 'Sarah Drasner',
    tags: ['CSS', 'SVG', 'Animations', 'Vue.js', 'React'],
    social: {
      twitter: 'sarah_edo',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'San Francisco',
    },
  },
  {
    fullName: 'Sean Grove',
    tags: ['GraphQL', 'ReasonML', 'OCaml'],
    social: {
      twitter: 'sgrove',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'San Francisco',
    },
  },
  {
    fullName: 'Stephanie Rewis',
    tags: ['Design Systems', 'CSS'],
    social: {
      twitter: 'stefsull',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'San Francisco',
    },
  },
  {
    fullName: 'Tracy Lee',
    tags: ['Reactive Programming', 'Angular', 'Ember.js'],
    social: {
      twitter: 'ladyleet',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'San Francisco',
    },
  },
  {
    fullName: 'Guillermo Rauch',
    tags: ['Zeit', 'Now.sh', 'Next.js', 'Serverless'],
    social: {
      twitter: 'rauchg',
      github: 'rauchg',
      blog: 'https://rauchg.com/essays',
      slides: null,
      website: 'https://rauchg.com/',
      linkedin: null,
      email: 'rauchg@gmail.com',
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'San Francisco',
    },
  },
  {
    fullName: 'Jaime Lopez',
    tags: ['iOS', 'Swift', 'Software Architecture', 'Development Processes'],
    social: {
      twitter: 'DevWithTheHair',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'Seattle',
    },
  },
  {
    fullName: 'Shell Little',
    tags: ['Accessibility'],
    social: {
      twitter: 'ShellELittle',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'North America',
        emoji: '🌎',
      },
      country: {
        name: 'United States',
        emoji: '',
      },
      city: 'Seattle',
    },
  },
  {
    fullName: 'Evangelina Ferreira',
    tags: ['CSS', 'Animations'],
    social: {
      twitter: 'evaferreira92',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'South America',
        emoji: '☀️',
      },
      country: {
        name: 'Argentina',
        emoji: '',
      },
      city: 'Buenos Aires',
    },
  },
  {
    fullName: 'Beto Muniz',
    tags: [
      'React',
      'JavaScript',
      'Progressive Web Apps',
      'Polymer',
      'Community',
    ],
    social: {
      twitter: 'obetomuniz',
      github: 'obetomuniz',
      blog: 'https://betomuniz.com/blog',
      slides: null,
      website: 'https://betomuniz.com',
      linkedin: 'https://linkedin.com/in/obetomuniz',
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'South America',
        emoji: '☀️',
      },
      country: {
        name: 'Brazil',
        emoji: '',
      },
      city: 'Belo Horizonte',
    },
  },
  {
    fullName: 'Fernando Daciuk',
    tags: ['React', 'JavaScript'],
    social: {
      twitter: 'fdaciuk',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'South America',
        emoji: '☀️',
      },
      country: {
        name: 'Brazil',
        emoji: '',
      },
      city: 'Curitiba',
    },
  },
  {
    fullName: 'Marcelo Camargo',
    tags: [
      'Functional Programming',
      'Compilers',
      'Type Theory',
      'Category Theory',
      'Lambda Calculus',
    ],
    social: {
      twitter: 'nexwire',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'South America',
        emoji: '☀️',
      },
      country: {
        name: 'Brazil',
        emoji: '',
      },
      city: 'Joinville',
    },
  },
  {
    fullName: 'Raphael Amorim',
    tags: ['React', 'JavaScript', 'jQuery'],
    social: {
      twitter: 'raphamorims',
      github: 'raphamorim',
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'South America',
        emoji: '☀️',
      },
      country: {
        name: 'Brazil',
        emoji: '',
      },
      city: 'Rio de Janeiro',
    },
  },
  {
    fullName: 'Caroline Soares',
    tags: ['Frontend development', "Woman's inspiration", 'JavaScript', 'CSS'],
    social: {
      twitter: 'carolcode',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'South America',
        emoji: '☀️',
      },
      country: {
        name: 'Brazil',
        emoji: '',
      },
      city: 'São Paulo',
    },
  },
  {
    fullName: 'Fernanda Bernardo',
    tags: ['CSS', 'JavaScript', 'HTML'],
    social: {
      twitter: 'Feh_Bernardo',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'South America',
        emoji: '☀️',
      },
      country: {
        name: 'Brazil',
        emoji: '',
      },
      city: 'São Paulo',
    },
  },
  {
    fullName: 'João Victor Dias',
    tags: ['Computer Vision', 'Keras', 'CNN', 'R', 'Data Science path'],
    social: {
      twitter: 'JoaoVictor_AC',
      github: null,
      blog: null,
      slides: null,
      website: null,
      linkedin: null,
      email: null,
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'South America',
        emoji: '☀️',
      },
      country: {
        name: 'Brazil',
        emoji: '',
      },
      city: 'São Paulo',
    },
  },
  {
    fullName: 'Sibelius Seraphini',
    tags: [
      'React',
      'React Native',
      'Node.js',
      'GraphQL',
      'Relay Modern',
      'Open Source',
      'Machine Learning',
      'Blockchain',
    ],
    social: {
      twitter: 'sseraphini',
      github: 'sibelius',
      blog: 'https://medium.com/@sibelius',
      slides: null,
      website: null,
      linkedin: null,
      email: 'sibeliusseraphini@gmail.com',
    },
    availableForHire: null,
    currentLocation: {
      continent: {
        name: 'South America',
        emoji: '☀️',
      },
      country: {
        name: 'Brazil',
        emoji: '',
      },
      city: 'São Paulo',
    },
  },
];
