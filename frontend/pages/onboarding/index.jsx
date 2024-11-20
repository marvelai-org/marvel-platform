import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import SlideTransition from '@/components/SlideTransition';
import FinalSteps from '@/templates/FinalSteps';
import ProfileSetupForm from '@/templates/ProfileSetup/ProfileSetupForm';
import ResultPageTemplate from '@/templates/ResultPage';
import SystemConfiguration from '@/templates/SystemConfig';
import WelcomeScreen from '@/templates/WelcomeScreen';

import ROUTES from '@/constants/routes';

const ONBOARDING_STEPS = {
  1: WelcomeScreen,
  2: ProfileSetupForm,
  3: SystemConfiguration,
  4: FinalSteps,
  5: ResultPageTemplate,
};

const Onboarding = ({ updateCurrentStep }) => {
  const user = useSelector((state) => state.user.data);
  const router = useRouter();

  // Calculate the current step when the onboarding state changes
  const calculateStep = useCallback((onboarding) => {
    if (!onboarding) return 1;
    const step =
      Object.values(onboarding).findIndex(
        (onboarding_step) => !onboarding_step
      ) + 1;
    return step > 0 ? step : Object.keys(onboarding).length + 1;
  }, []);

  const [currentStep, setCurrentStep] = useState(() =>
    calculateStep(user?.onboarding)
  );

  useEffect(() => {
    const newStep = calculateStep(user?.onboarding);
    setCurrentStep(newStep);
  }, [user, calculateStep]);

  useEffect(() => {
    if (updateCurrentStep) {
      updateCurrentStep(currentStep - 1);
    }
  }, [currentStep, updateCurrentStep]);

  const handleAdvanceOnboarding = useCallback(() => {
    setCurrentStep((prevStep) => {
      const newStep = prevStep + 1;
      const calculatedStep = calculateStep(user?.onboarding);
      return Math.max(newStep, calculatedStep);
    });
  }, [user, calculateStep]);

  const renderedStep = useMemo(() => {
    const StepComponent = ONBOARDING_STEPS[currentStep];

    if (StepComponent) {
      return <StepComponent user={user} onAdvance={handleAdvanceOnboarding} />;
    }
    router.push(ROUTES.HOME);
    return null;
  }, [currentStep, user, handleAdvanceOnboarding, router]);

  return <SlideTransition key={currentStep}>{renderedStep}</SlideTransition>;
};

export default Onboarding;
