import { httpsCallable } from 'firebase/functions';

import { ONBOARDING_ERROR_MESSAGES } from '@/constants/onboarding';

import { functions } from '@/redux/store';

const advanceOnboardingStatus = async (uid, step) => {
  try {
    const advanceStatus = httpsCallable(functions, 'advanceOnboardingStatus');
    const response = await advanceStatus({ uid, step });

    return response.data;
  } catch (error) {
    const errorCode = error.code || error.status || 'internal';
    const errorMessage =
      error.message ||
      ONBOARDING_ERROR_MESSAGES[errorCode] ||
      'Failed to advance onboarding status';
    throw new Error(`Error Code: ${errorCode}, Message: ${errorMessage}`);
  }
};

export { advanceOnboardingStatus };
