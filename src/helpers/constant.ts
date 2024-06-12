import CSSIcon from '../assets/icons/CSSIcon';
import GithubOutlined from '../assets/icons/GithubOutlined';
import HTMLIcon from '../assets/icons/HtmlIcon';
import JSIcon from '../assets/icons/JsIcon';
import Linkedin from '../assets/icons/LinkedIn';
import MUIIcon from '../assets/icons/MuiIcon';
import NextJSIcon from '../assets/icons/NextIcon';
import PythonIcon from '../assets/icons/PythonIcon';
import ReactIcon from '../assets/icons/ReactIcon';
import SASSIcon from '../assets/icons/SASSIcon';
import TailwindIcon from '../assets/icons/TailwindIcon';
import TSIcon from '../assets/icons/TsIcon';

export const alertIconMapping: Record<string, string> = {
  error: 'alertError',
  info: 'alertInfo',
  success: 'alertSuccess',
  warning: 'alertWarning'
};

export const crossIconMapping: Record<string, string> = {
  error: 'crossRed',
  info: 'crossBlue',
  success: 'crossGreen',
  warning: 'crossYellow',
  none: 'crossBlack'
};

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
  { id: 3, link: 'projects-section', label: 'Projects' }
];

export const secondaryNavigation = [
  { id: 1, link: 'https://github.com/saurabhchauhan15599', component: GithubOutlined, label: "Github" },
  { id: 2, link: 'https://linkedin.com/in/saurabh-chauhan-091221195', component: Linkedin, label: "LinkedIn" },
];

export const DARK_MODE_MAP = {
  dark: 'dark',
  light: 'light'
};

export const skillsArray = [
  { id: 1, label: 'React', element: ReactIcon },
  { id: 2, label: 'Next', element: NextJSIcon },
  { id: 3, label: 'Typescript', element: TSIcon },
  { id: 4, label: 'Javascript', element: JSIcon },
  { id: 5, label: 'HTML5', element: HTMLIcon },
  { id: 6, label: 'CSS3', element: CSSIcon },
  { id: 7, label: 'SASS', element: SASSIcon },
  { id: 8, label: 'Material UI', element: MUIIcon },
  { id: 9, label: 'Tailwind CSS', element: TailwindIcon },
  { id: 10, label: 'Python', element: PythonIcon }
];

export const CAROUSEL_IMAGES = [
  { src: '/assets/elchemy-ss1.png', alt: 'Image 1' },
  { src: '/assets/elchemy-ss2.png', alt: 'Image 2' },
  { src: '/assets/mitsu-ss2.png', alt: 'Image 3' },
  { src: '/assets/mitsu-ss3.png', alt: 'Image 4' },
  { src: '/assets/coditas.jpg', alt: 'Image 5' }
];

export const PROJECTS_MAP = [
  {
    id: 1,
    label: 'Vendor Management System',
    client: 'Elchemy',
    desc: "As a part of team, we developed an application to automate the manual process of registration, validation, and approval of an order for export/import. This was achieved using a combination of React Hook Form, APIs, and Data Grid. I utilized React Hook Form to create and manage forms in the application. The application followed a proper folder structure that helped in storing the common components at one place. This approach promotes code reusability and scalability, making the code cleaner and more maintainable. I maintained regular communications with the client about the scope of particular features, backend dependencies, bug fixes, and estimations. This ensured that the application was built according to the client's requirements and expectations.",
    image: '/assets/elchemy.webp',
    link: null,
    repo: null
  },
  {
    id: 2,
    label: 'Patient Management System',
    client: 'Mitsu Care',
    desc: "Leveraging my expertise in React and web development, I played a key role in the creation and maintenance of Mitsu, a guided self- therapy app designed to empower individuals struggling with anxiety or depression.I spearheaded the development of a comprehensive React - based admin dashboard, meticulously crafted to streamline data management, user authentication, and authorization.This intricate dashboard served as the backbone of the app's administrative operations, ensuring seamless user management and secure access control. Additionally, I crafted a dedicated therapist dashboard, complete with detailed patient user profiles, empowering mental health professionals to effectively track and manage their clients' progress.Furthermore, I meticulously optimized all components to ensure seamless compatibility across diverse browsers and devices, guaranteeing an exceptional user experience for all Mitsu users.",
    image: '/assets/mitsu.png',
    link: null,
    repo: null
  },
  {
    id: 3,
    label: 'A NextGen Video Creation & Editor App',
    client: 'VideoVerse TITAN',
    desc: 'In a recent project, I was part of a team that developed a cutting-edge sports event highlight generation platform. This platform was designed to orchestrate a skilled team and leverage AWS infrastructure to deliver dynamic, shareable highlights for live sporting events. The platform was designed to ingest broadcast streams, identify valuable match moments through AI-trained computer vision, and then encode delivery streams with metadata across user devices. I also collaborated with the team on resolving major priority functional and UI bugs in the project. This collaborative effort ensured that the platform was bug-free and provided a seamless user experience.',
    image: '/assets/videoverse.png',
    link: null,
    repo: null
  },
  {
    id: 4,
    label: 'Widefield',
    client: 'Widefield',
    desc: "Widefield is an security management system which aims at providing security solutions for users connected across different devices. To guarantee the integrity and reliability of the application's codebase, I meticulously crafted Jest test cases for both individual components and overarching main views. These comprehensive test cases thoroughly examined every facet of the application's functionality, ensuring that each component and view behaved as intended. By implementing a rigorous testing methodology, I effectively safeguarded the application's stability and robustness, preventing potential issues from reaching production and impacting user experience. My dedication to comprehensive testing practices contributed significantly to the delivery of a high-quality, bug-free application.",
    image: '/assets/widefield-logo.jpg',
    link: null,
    repo: null
  },
  {
    id: 5,
    label: 'Connect',
    client: 'Coditas',
    desc: 'To explore the potential of real-time chat capabilities, I embarked on the development of a proof-of-concept (POC) web application utilizing Next.js and Web Sockets. This project involved integrating the application with the WhatsApp API, enabling seamless communication with WhatsApp accounts. To achieve this integration, I conducted thorough research on Web Sockets, gaining a comprehensive understanding of their implementation and application. By leveraging this knowledge, I successfully integrated the WhatsApp API into the POC, enabling users to effortlessly send and receive messages directly from their WhatsApp accounts within the web application. This innovative approach not only enhanced the user experience but also demonstrated the feasibility of incorporating real-time chat features into web applications.',
    image: '/assets/coditas.jpg',
    link: null,
    repo: null
  },
  {
    id: 6,
    label: 'Components Library',
    client: '@saurabh-chauhan/sc-components-library',
    desc: 'Aspiring to create a foundational resource for React developers, I embarked on the development of a high-quality, generic React components library and published library to npmjs. Guided by principles of accessibility and code quality, I meticulously crafted components that are not only flexible and customizable but also adhere to the highest standards of accessibility. Each component was meticulously designed and extensively tested to ensure seamless integration and optimal performance, empowering developers to build a wide variety of applications with ease and efficiency. By prioritizing accessibility and code quality, I created a valuable asset for the React community, enabling developers to create accessible and robust applications with minimal effort.',
    image: '/assets/coditas.jpg',
    link: 'https://www.npmjs.com/package/@saurabh-chauhan/sc-components-library',
    repo: null
  }
];
