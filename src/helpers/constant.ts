import GithubOutlined from '../assets/icons/GithubOutlined';
import Linkedin from '../assets/icons/LinkedIn';

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
