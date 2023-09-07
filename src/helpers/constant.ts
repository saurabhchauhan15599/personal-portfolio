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

export const OnBoardingData = [
  {
    description: 'Learn About the Program',
    link: '/onboarding/learn-about-mitsu',
    reviewLink: '/onboarding/learn-about-mitsu?isReview=true'
  },
  {
    description: 'Complete Mood Check-In',
    link: '/onboarding/mood-check-in/mood-check-in-instructions'
  },
  {
    description: 'Set Up Free Therapist Call',
    link: '/onboarding/setup_free_call/scheduled_call'
  },
  {
    description: 'Get to Know Your Therapist',
    link: '/onboarding/setup_free_call/get_to_know'
  },
  {
    description: 'Enrol in Program',
    link: `/onboarding/enroll-in-program`
  }
];

export const MixPanelEvents: Record<string, string> = {
  mpinCreated: 'Mpin',
  signUp: 'Sign-up',
  introVideo: 'Intro video',
  fillProfile: 'Profile fill',
  checkInCompleted: 'Check In Completed',
  scheduleCall: 'Schedule Call',
  reScheduleCall: 'Reschedule Call',
  cancelCall: 'Cancel Call',
  paymentEntered: 'Payment Entered'
};

export const cancellationReasons = [
  {
    label: 'I changed my mind',
    value: 0
  },
  {
    label: "I'm feeling better",
    value: 1
  },
  {
    label: "I'd prefer conventional therapy",
    value: 2
  },
  {
    label: "I can't afford Mitsu.Care",
    value: 3
  },
  {
    label: 'I booked by mistake',
    value: 4
  },
  {
    label: 'Other',
    value: 5
  }
];

export const genderOptionsList = [
  {
    label: 'Woman',
    value: 'Woman'
  },
  {
    label: 'Man',
    value: 'Man'
  },
  {
    label: 'Transgender Man',
    value: 'Transgender Man'
  },
  {
    label: 'Transgender Woman',
    value: 'Transgender Woman'
  },
  {
    label: 'Non-binary/Other Gender',
    value: 'Non-binary/Other Gender'
  },
  {
    label: 'Prefer not to answer',
    value: 'Prefer not to answer'
  }
];

export const educationOptionsList = [
  {
    label: 'Completed high school (12th std)',
    value: 'Completed high school (12th std)'
  },
  {
    label: 'Graduate',
    value: 'Graduate'
  },
  {
    label: 'Post Graduate',
    value: 'Post Graduate'
  },
  {
    label: 'Other',
    value: 'Other'
  }
];

export const relationshipOptionsList = [
  {
    label: 'Single',
    value: 'Single'
  },
  {
    label: 'In a relationship',
    value: 'In a relationship'
  },
  {
    label: 'Married',
    value: 'Married'
  },
  {
    label: 'In an open relationship/marriage',
    value: 'In an open relationship/marriage'
  },
  {
    label: 'Divorced/Separated',
    value: 'Divorced/Separated'
  },
  {
    label: 'Widowed',
    value: 'Widowed'
  },
  {
    label: 'Prefer not to answer',
    value: 'Prefer not to answer'
  }
];

export const occupationOptionsList = [
  {
    label: 'Salaried Employee',
    value: 'Salaried Employee'
  },
  {
    label: 'Self-employed',
    value: 'Self-employed'
  },
  {
    label: 'Business Owner',
    value: 'Business Owner'
  },
  {
    label: 'Student',
    value: 'Student'
  },
  {
    label: 'Not Employed',
    value: 'Not Employed'
  }
];

export const CALL_MAP = {
  RescheduleCall: 'Reschedule Call',
  ScheduleCall: 'Schedule Call'
};

export const EXTERNAL_LINKS = {
  phq_9:
    'https://www.apa.org/pi/about/publications/caregivers/practice-settings/assessment/tools/patient-health',
  gad_7:
    'https://www.apaservices.org/practice/reimbursement/health-registry/anxiety-disorder-response.pdf'
};

export const OPTION_CONSTANTS = {
  Others: 'Others',
  Multiple: 'Multiple'
};
