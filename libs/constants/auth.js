const AUTH_STEPS = {
  EMAIL: 'email',
  PASSWORD: 'password',
};

// Auth Error Codes - https://firebase.google.com/docs/reference/js/v8/firebase.auth.Error#code
const AUTH_ERR_CODES = {
  ACC_EXISTS_WITH_DIFF_CRED: 'auth/account-exists-with-different-credential',
  CRED_ALREADY_IN_USE: 'auth/credential-already-in-use',
  EMAIL_ALREADY_IN_USE: 'auth/email-already-in-use',
  NETWORK_REQ_FAIL: 'auth/network-request-failed',
  USER_DISABLED: 'auth/user-disabled',
  TOO_MANY_ATTEMPTS_TRY_LATER: 'auth/too-many-requests',
  WRONG_PASSWORD: 'auth/wrong-password',
  USER_NOT_FOUND: 'auth/user-not-found',
  INVALID_LOGIN_CREDENTIALS: 'auth/invalid-login-credentials',
};

const AUTH_ERROR_MESSAGES = {
  [AUTH_ERR_CODES.TOO_MANY_ATTEMPTS_TRY_LATER]:
    'Too many attempts. Please try again later.',
  [AUTH_ERR_CODES.NETWORK_REQ_FAIL]:
    'A network error has occurred. Please try again.',
  [AUTH_ERR_CODES.INVALID_LOGIN_CREDENTIALS]: 'Invalid email or password',
  // For Sign-in
  [AUTH_ERR_CODES.USER_NOT_FOUND]: 'Email not found',
  [AUTH_ERR_CODES.WRONG_PASSWORD]: 'Wrong password',
  [AUTH_ERR_CODES.USER_DISABLED]: 'The user is currently disabled',
  // For Sign-up
  [AUTH_ERR_CODES.EMAIL_ALREADY_IN_USE]: 'This email address is already in use',
};

const VALIDATION_STATES = {
  DEFAULT: 'text',
  SUCCESS: 'success',
  ERROR: 'error',
  DISABLED: 'disabled',
  WARNING: 'warning',
};

const FORGOT_PASSWORD_STEPS = {
  EMAIL: 'email',
  CHECK_INBOX: 'check-inbox',
};

const AUTH_MODES = {
  PASSWORD_RESET: 'resetPassword',
  VERIFY_EMAIL: 'verifyEmail',
};

const APP_ENV = {
  SANDBOX: 'sandbox',
  PRODUCTION: 'production',
};

export {
  AUTH_STEPS,
  AUTH_ERR_CODES,
  FORGOT_PASSWORD_STEPS,
  AUTH_ERROR_MESSAGES,
  VALIDATION_STATES,
  AUTH_MODES,
  APP_ENV,
};
