import AxiosIcon from '../assets/icons/AxiosIcon';
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
import ViteIcon from '../assets/icons/ViteIcon';

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
  subheading1: 'h6',
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
  { id: 1, link: 'https://www.youtube.com/feed/subscriptions', label: 'Youtube' },
  { id: 2, link: 'https://www.linkedin.com/feed/', label: 'Linkedin' },
  { id: 3, link: 'https://people.zoho.in/coditassolutionsllp/zp#home/dashboard', label: 'Zoho' }
];

export const secondaryNavigation = [
  { id: 1, link: 'https://www.linkedin.com/feed/', component: GithubOutlined },
  { id: 1, link: 'https://www.linkedin.com/feed/', component: Linkedin }
];

export const DARK_MODE_MAP = {
  dark: 'dark',
  light: 'light'
};

export const skillsArray = [
  { id: 1, label: 'React', element: ReactIcon },
  { id: 2, label: 'Next', element: NextJSIcon },
  { id: 3, label: 'Vite', element: ViteIcon },
  { id: 4, label: 'Typescript', element: TSIcon },
  { id: 5, label: 'Javascript', element: JSIcon },
  { id: 6, label: 'HTML5', element: HTMLIcon },
  { id: 7, label: 'CSS3', element: CSSIcon },
  { id: 8, label: 'SASS', element: SASSIcon },
  { id: 9, label: 'Material UI', element: MUIIcon },
  { id: 10, label: 'Tailwind CSS', element: TailwindIcon },
  { id: 11, label: 'Axios', element: AxiosIcon },
  { id: 11, label: 'Python', element: PythonIcon }
];
