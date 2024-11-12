import { httpsCallable } from 'firebase/functions';

import { ONBOARDING_ERROR_MESSAGES } from '@/constants/onboarding';

import { functions } from '@/redux/store';

const setupUserProfile = async (profileData) => {
  try {
    const updatePreferences = httpsCallable(functions, 'setupUserProfile');
    const response = await updatePreferences(profileData);

    return response.data;
  } catch (error) {
    const errorCode = error.code || error.status || 'internal';
    const errorMessage =
      error.message ||
      ONBOARDING_ERROR_MESSAGES[errorCode] ||
      'Failed to setup User Profile';
    throw new Error(`Error Code: ${errorCode}, Message: ${errorMessage}`);
  }
};

export { setupUserProfile };
