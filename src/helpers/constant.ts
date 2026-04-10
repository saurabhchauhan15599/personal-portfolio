import { Github, Linkedin } from 'lucide-react';

export const typographyVariantsMapping: Record<string, string> = {
  h1: 'h1',
  h2: 'h2',
  h2mid: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subheading1: 'p',
  subheading2: 'h6',
  subheading3: 'h6',
  body: 'p',
  body2: 'p',
  span: 'span',
  p: 'p',
  ptext: 'span',
  pdoc: 'span',
  label: 'label',
  label2: 'label',
  inherit: 'span'
};

export const MAX_FILE_SIZE = 10485760; // 10 MB

export const DIGIT_REGEX = new RegExp(/^\d+$/);

export const ASCII_KEYS = {
  backspace: 'Backspace',
  arrowRight: 'ArrowRight',
  arrowLeft: 'ArrowLeft',
  arrowUp: 'ArrowUp',
  arrowDown: 'ArrowDown',
  space: 'Space',
  escape: 'Escape',
  enter: 'Enter'
};

export const SERVER_CONFIG = {
  users: 'users',
  otpSend: 'otp/send',
  otpVerify: 'otp/verify',
  emailVerification: 'email/isverified',
  sendEmailVerification: 'send/email'
};

export const PHONE_NUMBER_REGEX = /^[6-9]\d{9}$/;

export const primaryNavigation = [
  { id: 2, link: 'description-section', label: 'About' },
  { id: 3, link: 'skills-section', label: 'Skills' },
  { id: 4, link: 'projects-section', label: 'Projects' }
];

export const secondaryNavigation = [
  { id: 1, link: 'https://github.com/saurabhchauhan15599', component: Github, label: 'Github' },
  {
    id: 2,
    link: 'https://linkedin.com/in/saurabh-chauhan-091221195',
    component: Linkedin,
    label: 'LinkedIn'
  }
];

export const DARK_MODE_MAP = {
  dark: 'dark',
  light: 'light'
};

export const skillsArray = [
  { id: 1, label: 'React', iconUrl: 'https://cdn.simpleicons.org/react' },
  { id: 2, label: 'Next.js', iconUrl: 'https://cdn.simpleicons.org/nextdotjs' },
  { id: 3, label: 'Astro.js', iconUrl: 'https://cdn.simpleicons.org/astro' },
  { id: 4, label: 'TypeScript', iconUrl: 'https://cdn.simpleicons.org/typescript' },
  { id: 5, label: 'JavaScript', iconUrl: 'https://cdn.simpleicons.org/javascript' },
  { id: 6, label: 'Redux', iconUrl: 'https://cdn.simpleicons.org/redux' },
  { id: 7, label: 'Jest', iconUrl: 'https://cdn.simpleicons.org/jest' },
  { id: 8, label: 'Playwright', iconUrl: 'https://cdn.simpleicons.org/playwright' },
  { id: 9, label: 'HTML5', iconUrl: 'https://cdn.simpleicons.org/html5' },
  { id: 10, label: 'CSS3', iconUrl: 'https://cdn.simpleicons.org/css' },
  { id: 11, label: 'SASS', iconUrl: 'https://cdn.simpleicons.org/sass' },
  { id: 12, label: 'Tailwind CSS', iconUrl: 'https://cdn.simpleicons.org/tailwindcss' },
  { id: 13, label: 'Node.js', iconUrl: 'https://cdn.simpleicons.org/nodedotjs' },
  { id: 14, label: 'Express.js', iconUrl: 'https://cdn.simpleicons.org/express' },
  { id: 15, label: 'MongoDB', iconUrl: 'https://cdn.simpleicons.org/mongodb' },
  { id: 16, label: 'Java', iconUrl: 'https://cdn.simpleicons.org/openjdk' },
  { id: 17, label: 'GraphQL', iconUrl: 'https://cdn.simpleicons.org/graphql' },
  { id: 18, label: 'Material UI', iconUrl: 'https://cdn.simpleicons.org/mui' }
];

export const CAROUSEL_IMAGES = [
  { src: '/assets/images/elchemy-ss1.png', alt: 'NDA project preview 1' },
  { src: '/assets/images/elchemy-ss2.png', alt: 'NDA project preview 2' },
  { src: '/assets/images/mitsu-ss2.png', alt: 'NDA project preview 3' },
  { src: '/assets/images/mitsu-ss3.png', alt: 'NDA project preview 4' },
  { src: '/assets/images/mitsu-ss4.png', alt: 'NDA project preview 5' },
  { src: '/assets/images/coditas.jpg', alt: 'Component library preview' }
];

export const PROJECTS_MAP = [
  {
    id: 1,
    label: 'THG Storefront Migration Suite',
    client: 'THG',
    desc: 'Migrated high-traffic e-commerce storefronts to Altitude architecture and shipped personalization, performance, and checkout improvements across luxury and nutrition portfolios.',
    image: '/assets/images/lookfantastic.webp',
    link: 'https://www.lookfantastic.com',
    repo: null,
    impact:
      'Migration across Lookfantastic, Dermstore, Cult Beauty, and Myprotein with measurable performance improvements.',
    stack: ['Astro.js', 'TypeScript', 'Tailwind', 'GraphQL', 'i18n'],
    isNda: false
  },
  {
    id: 2,
    label: 'AI Virtual Makeup Assistant',
    client: 'Hackathon Build',
    desc: 'Built an AI assistant for lipstick shade recommendations using facial analysis and personalization prompts, focused on reducing decision friction in beauty shopping.',
    image: '/assets/images/mitsu.png',
    link: null,
    repo: null,
    impact: 'Delivered personalized recommendations and secured 2nd place in hackathon.',
    stack: ['React.js', 'Computer Vision APIs', 'AI Personalization'],
    isNda: false
  },
  {
    id: 3,
    label: 'Healthcare Admin Dashboard',
    client: 'Mitsu Care',
    desc: 'Developed React-based admin workflows for managing users, records, and role-based access with forms and data-table heavy views.',
    image: '/assets/images/mitsu.png',
    link: null,
    repo: null,
    impact: 'Improved operational efficiency by centralizing workflows into one secure dashboard.',
    stack: ['React.js', 'React Hook Form', 'TanStack Table', 'RBAC'],
    isNda: true
  },
  {
    id: 4,
    label: 'Kanban Task Management App',
    client: 'Personal Project',
    desc: 'Created a lightweight Kanban app with drag-and-drop interactions and optimized state updates for smooth task movement across multiple stages.',
    image: '/assets/images/kanban.webp',
    link: 'https://kanban-task-management-saurabh.vercel.app/',
    repo: null,
    impact:
      'Improved usability and responsiveness of board interactions under frequent state changes.',
    stack: ['React.js', 'Zustand', 'Tailwind CSS', 'DnD'],
    isNda: false
  },
  {
    id: 5,
    label: 'Components Library',
    client: '@saurabh-chauhan/sc-components-library',
    desc: 'Designed and published a reusable React component library focused on flexibility, accessibility, and scalable design-system patterns.',
    image: '/assets/images/coditas.jpg',
    link: 'https://www.npmjs.com/package/@saurabh-chauhan/sc-components-library',
    repo: null,
    impact: 'Accelerated UI delivery by standardizing reusable components and patterns.',
    stack: ['React.js', 'TypeScript', 'Storybook-style patterns', 'Accessibility'],
    isNda: false
  }
];
