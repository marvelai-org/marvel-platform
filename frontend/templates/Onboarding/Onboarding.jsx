import { useEffect } from 'react';

import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import Complete from './Complete';
import FinalSteps from './FinalSteps';
import ProfileSetupForm from './ProfileSetupForm';
import SystemConfigs from './SystemConfigs/SystemsConfig';
import Welcome from './Welcome';

import {
  setCompleted,
  setStep,
  setTempData,
} from '@/redux/slices/onboardingSlice';
import { firestore } from '@/redux/store';
import { updateUserData } from '@/redux/thunks/user';

const onboardingComponents = {
  0: Welcome,
  1: ProfileSetupForm,
  2: SystemConfigs,
  3: FinalSteps,
  4: Complete,
};

/** .
 * The onboarding page component that renders specific screends depending on the users current steps.
 *
 * @param {object} onboardingData - The data for the current onboarding step
 * @return {JSX.Element} The JSX element for the current onboarding step
 */
const OnboardingPage = ({ onboardingData }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { step, tempData } = useSelector((state) => state.onboarding);

  useEffect(() => {
    if (onboardingData.id !== step) {
      dispatch(setStep(onboardingData.id));
    }
  }, [dispatch, onboardingData.id, step]);

  const handleNext = async (formData = {}) => {
    if (onboardingComponents?.[onboardingData.id] === ProfileSetupForm) {
      dispatch(setTempData(formData));
    }

    if (onboardingComponents?.[onboardingData.id] === Complete) {
      let downloadURL = null;
      const file = tempData.profileImage;
      if (file) {
        const storage = getStorage();
        const storageRef = ref(storage, `profile_images/${file.name}`);
        await uploadBytes(storageRef, file);
        downloadURL = await getDownloadURL(storageRef);
      }

      dispatch(
        updateUserData({
          firestore,
          data: {
            ...tempData,
            needsBoarding: false,
            profileImage: downloadURL,
          },
        })
      );
      dispatch(setCompleted(true));
      return;
    }

    dispatch(setStep(onboardingData.id + 1));
    router.push(`/onboarding/${onboardingData.id + 1}`);
  };

  const SpecificOnboardingScreen =
    onboardingComponents[onboardingData.id] || Welcome;

  return <SpecificOnboardingScreen onNext={handleNext} tempData={tempData} />;
};

export default OnboardingPage;
