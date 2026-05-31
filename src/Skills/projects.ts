export type Technology =
  | 'React'
  | 'Next'
  | 'Vue'
  | 'BE'
  | 'JS'
  | 'Html'
  | 'CSS'
  | 'Redux'
  | 'Graphql'
  | 'Node';

export type PortfolioFilter = 'All' | Technology;

export const TECHNOLOGY_FILTERS: Technology[] = [
  'React',
  'Next',
  'Vue',
  'BE',
  'JS',
  'Html',
];

export interface ProjectLinks {
  primary: string;
  overview?: string;
  platform?: string;
}

export interface PortfolioProject {
  id: string;
  subtitle: string;
  technologies: Technology[];
  links: ProjectLinks;
  description: string;
  isFeatured?: boolean;
  isCommercial?: boolean;
  isCommercialHero?: boolean;
  summary?: string;
  highlights?: string[];
}

export interface CommercialCaseData {
  title: string;
  summary: string;
  overviewLink: string;
  platformLink: string;
  highlights: string[];
}

export const TECHNOLOGY_LABELS: Record<Technology, string> = {
  React: 'React.js',
  Next: 'Next.js',
  Vue: 'Vue.js',
  BE: 'BE',
  JS: 'JS',
  Html: 'Html',
  CSS: 'CSS',
  Redux: 'Redux',
  Graphql: 'Graphql',
  Node: 'Node',
};

export const PROJECTS: PortfolioProject[] = [
  {
    id: 'learning-space',
    subtitle: '"Learning Space"',
    technologies: ['React','Graphql','Redux'],
    links: {
      primary: 'https://learningspace.app/en/',
      overview: 'https://learningspace.app/en/',
      platform: 'https://my.learningspace.app/',
    },
    description:
      'Large EdTech platform for educational organizations. Frontend Engineer in the product team.',
    isFeatured: true,
    isCommercial: true,
    isCommercialHero: true,
    summary:
      'Large EdTech platform for educational organizations. I contributed as a Frontend Engineer in the product team.',
    highlights: [
      'Commercial product with multi-year team development.',
      'Frontend implementation in collaboration with product and engineering teams.',
      'Public platform overview and product access links are available below.',
    ],
  },
  {
    id: 'shape-up',
    subtitle: '"Shape Up"',
    technologies: ['React', 'Next'],
    links: { primary: 'https://shape-up-gamma.vercel.app/' },
    description: 'Smart Meal & Workout Planner. [Feb 2025]',
    isFeatured: true,
  },
  {
    id: 'dom-rem-bud',
    subtitle: '"Dom Rem Bud"',
    technologies: ['React', 'Next'],
    links: { primary: 'https://dom-rem-bud.vercel.app/' },
    description:
      'Commercial website. Apartment renovations. [Jul 2025 in progress]',
    isFeatured: true,
    isCommercial: true,
  },
  {
    id: 'navigation-list',
    subtitle: '"Navigation list"',
    technologies: ['React', 'Next'],
    links: { primary: 'https://navigation-list.vercel.app/' },
    description: 'Navigation links management and display. [Dec 2024]',
  },
  {
    id: 'centrum-migranta',
    subtitle: '"Centrum Migranta"',
    technologies: ['React', 'Next'],
    links: { primary: 'https://migrant-center.vercel.app/' },
    description: 'Commercial website. Migrant Center. [Oct 2024 in progress]',
    isFeatured: true,
    isCommercial: true,
  },
  {
    id: 'auto-service',
    subtitle: '"Auto-Service"',
    technologies: ['React', 'Next'],
    links: { primary: 'https://auto-service-vm.vercel.app/' },
    description: 'Commercial website. Auto service. [Aug 2024 in progress]',
    isFeatured: true,
    isCommercial: true,
  },
  {
    id: 'imdb-clone',
    subtitle: '"IMDb-Clone"',
    technologies: ['React', 'Next'],
    links: { primary: 'https://imdb-next-orcin.vercel.app/' },
    description: 'IMDb clone using Next.js and Tailwind CSS. [Jul 2024]',
    isFeatured: true,
  },
  {
    id: 'crm-for-vendors',
    subtitle: '"CRM-for-vendors"',
    technologies: ['React', 'Next'],
    links: { primary: 'https://crm-seven-gold.vercel.app' },
    description: 'Admin panel for food delivery company. [May 2024]',
    isFeatured: true,
  },
  {
    id: 'irregular-verbs',
    subtitle: '"Irregular-verbs"',
    technologies: ['React'],
    links: { primary: 'https://zhm-irregular-verbs.netlify.app' },
    description: 'Educational app for learning irregular verbs. [Oct 2022]',
    isFeatured: true,
  },
  {
    id: 'courses',
    subtitle: '"Courses"',
    technologies: ['React'],
    links: { primary: 'https://zhm-courses.netlify.app' },
    description: 'Courses platform template. [May 2022]',
  },
  {
    id: 'filmoteka',
    subtitle: '"Filmoteka"',
    technologies: ['JS'],
    links: { primary: 'https://mishanyazh.github.io/-team-project-JS-Filmoteka/' },
    description: 'Team project. [Aug 2021]',
    isFeatured: true,
  },
  {
    id: 'hellen',
    subtitle: '"Hellen"',
    technologies: ['Html', 'CSS'],
    links: { primary: 'https://bogdanbon.github.io/team-project/' },
    description:
      'Team project. My role: Create sections Hero and Guarantee. [Apr 2021]',
    isFeatured: true,
  },
  {
    id: 'phonebook',
    subtitle: '"Phonebook"',
    technologies: ['React', 'Redux'],
    links: { primary: 'https://zhm-goit-react-hw-08-phonebook.netlify.app' },
    description: 'Phonebook service. [Oct 2021]',
  },
  {
    id: 'movies',
    subtitle: '"Movies"',
    technologies: ['React'],
    links: { primary: 'https://zhm-goit-react-hw-04-movies.netlify.app' },
    description: 'Movie search service. [Sep 2021]',
  },
  {
    id: 'images',
    subtitle: '"Images"',
    technologies: ['React'],
    links: { primary: 'https://mishanyazh.github.io/goit-react-hw-04-hooks-images/' },
    description: 'Image search service. [Sep 2021]',
  },
  {
    id: 'patients',
    subtitle: '"Patients"',
    technologies: ['Vue'],
    links: { primary: 'https://zhm-vue-patient-and-medication.netlify.app' },
    description: 'Patients and medical care. [Nov 2021]',
  },
  {
    id: 'posts',
    subtitle: '"Posts"',
    technologies: ['Vue'],
    links: { primary: 'https://vue-test-posts.netlify.app' },
    description: 'User publications. [Nov 2021]',
  },
  {
    id: 'template-rest-api',
    subtitle: '"Template-rest-api"',
    technologies: ['JS', 'BE', 'Node'],
    links: {
      primary:
        'https://github.com/MishanyaZh/nodejs-homework-template-rest-api/tree/hw06-email',
    },
    description: 'Users contact data. [Feb 2021]',
  },
  {
    id: 'graphql-project-db',
    subtitle: '"Graphql-project-db"',
    technologies: ['JS', 'BE', 'Graphql'],
    links: { primary: 'https://github.com/MishanyaZh/graph-project' },
    description: 'Library database built with GraphQL and Apollo. [Jun 2022]',
  },
  {
    id: 'webstudio',
    subtitle: '"WebStudio"',
    technologies: ['Html', 'CSS'],
    links: { primary: 'https://mishanyazh.github.io/goit-markup-hw-08/' },
    description: 'IT company website. [Mar 2021]',
  },
  {
    id: 'dashboard',
    subtitle: '"Dashboard"',
    technologies: ['React', 'Redux'],
    links: { primary: 'https://zhm-dashboard.netlify.app' },
    description: 'User information panel. [Feb 2022]',
  },
  {
    id: 'mogo',
    subtitle: '"MoGo"',
    technologies: ['Html', 'CSS'],
    links: { primary: 'https://kind-perlman-82972e.netlify.app' },
    description: 'Company website. [Jul 2020]',
  },
  {
    id: 'activebox',
    subtitle: '"ActiveBox"',
    technologies: ['Html', 'CSS'],
    links: { primary: 'https://suspicious-khorana-a831fb.netlify.app' },
    description: 'Company website. [Dec 2020]',
  },
  {
    id: 'alex-tur',
    subtitle: '"Alex Tur"',
    technologies: ['JS', 'Html', 'CSS'],
    links: { primary: 'https://mishanyazh.github.io/my-resyme-js/' },
    description: 'Frontend Developer website. [Dec 2020]',
    isFeatured: true,
  },
  {
    id: 'personal-library',
    subtitle: '"Personal-library"',
    technologies: ['React', 'Graphql'],
    links: {
      primary: 'https://github.com/MishanyaZh/personal-library/tree/main/src',
    },
    description: 'Personal library app. (Heroku DB) [Jun 2022]',
  },
  {
    id: 'kapusta',
    subtitle: '"Kapu$ta"',
    technologies: ['JS', 'React', 'Redux'],
    links: {
      primary: 'https://github.com/MishanyaZh/project-smart-finance-frontend',
    },
    description: 'Team project "smart finance". [Jan 2022]',
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter(project => project.isFeatured);

export const COMMERCIAL_PROJECTS = PROJECTS.filter(
  project => project.isCommercial && !project.isCommercialHero,
);

const learningSpaceCaseProject = PROJECTS.find(project => project.isCommercialHero);

export const LEARNING_SPACE_CASE: CommercialCaseData | null = learningSpaceCaseProject
  ? {
      title: learningSpaceCaseProject.subtitle.replace(/"/g, ''),
      summary:
        learningSpaceCaseProject.summary ?? learningSpaceCaseProject.description,
      overviewLink:
        learningSpaceCaseProject.links.overview ??
        learningSpaceCaseProject.links.primary,
      platformLink:
        learningSpaceCaseProject.links.platform ??
        learningSpaceCaseProject.links.primary,
      highlights: learningSpaceCaseProject.highlights ?? [],
    }
  : null;

export const getVisibleTechnologyFilters = (
  projects: PortfolioProject[],
): Technology[] =>
  TECHNOLOGY_FILTERS.filter(filter =>
    projects.some(project => project.technologies.includes(filter)),
  );
