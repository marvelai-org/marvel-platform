const ONBOARDING_ERROR_CODES = {
  INVALID_ARGUMENT: 'invalid-argument',
  INTERNAL: 'internal',
  USER_NOT_FOUND: 'user-not-found',
};

const ONBOARDING_ERROR_MESSAGES = {
  [ONBOARDING_ERROR_CODES.INVALID_ARGUMENT]:
    'Invalid user ID. Please try again.',
  [ONBOARDING_ERROR_CODES.INTERNAL]:
    'An internal error occurred. Please try again later.',
  [ONBOARDING_ERROR_CODES.USER_NOT_FOUND]:
    'User not found. Please ensure you are logged in.',
  ONBOARDING_COMPLETED: 'Onboarding is already completed.',
  SAVE_FORM_FIRST: 'Please complete the required steps before progressing.',
};
