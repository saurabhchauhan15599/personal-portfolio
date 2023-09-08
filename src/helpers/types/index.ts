export type typographyVariantType =
  | 'h1'
  | 'h2'
  | 'h2mid'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'h6'
  | 'subheading1'
  | 'subheading2'
  | 'subheading3'
  | 'body'
  | 'body2'
  | 'span'
  | 'p'
  | 'ptext'
  | 'pdoc'
  | 'label'
  | 'label2'
  | 'inherit';

export type buttonVariantType = 'contained' | 'outlined' | 'outlined-secondary' | 'text';
export type chipVariantType =
  | 'filled'
  | 'outlined'
  | 'filled-blue'
  | 'filled-red'
  | 'filled-yellow'
  | 'filled-green';
export type chipPriorityType = 'High' | 'Low' | 'Medium' | 'Critical';
export type severityType = 'error' | 'info' | 'success' | 'warning' | 'none';
export type statusChipVariantType = 'filled-yellow' | 'filled-green' | 'filled-red';

export interface IUserSliceState {
  accessToken: string | null;
  refreshToken: string | null;
}

export interface IEmailField {
  email: string;
}

export interface ILoginCredential {
  email: string;
  password: string;
}

export interface IPasswordSetup extends ILoginCredential {
  confirmPassword: string;
}

export interface IPasswordResetParam {
  password: string;
  token: string;
  uidb64: string;
}

export interface ISelect {
  label: string;
  value: string;
}

export type SVGProps = JSX.IntrinsicElements['svg'];
