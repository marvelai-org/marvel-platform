import { httpsCallable } from 'firebase/functions';

import { ONBOARDING_ERROR_MESSAGES } from '@/constants/onboarding';

import { functions } from '@/redux/store';

const setupUserSystemConfig = async (systemConfig) => {
  try {
    const sysConfig = httpsCallable(functions, 'setupUserSystemConfig');
    const response = await sysConfig(systemConfig);
    return response.data;
  } catch (error) {
    const errorCode = error.code || error.status || 'internal';
    const errorMessage =
      error.message ||
      ONBOARDING_ERROR_MESSAGES[errorCode] ||
      'Failed to setup User System Configuration';
    throw new Error(errorMessage);
  }
};

export { setupUserSystemConfig };
