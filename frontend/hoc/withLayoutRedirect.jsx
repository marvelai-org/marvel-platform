import React, { useState } from 'react';

import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import Loader from '@/components/Loader';
import AuthLayout from '@/layouts/AuthLayout';
import MainAppLayout from '@/layouts/MainAppLayout';
import OnboardingLayout from '@/layouts/OnboardingLayout';

import ROUTES from '@/constants/routes';

const AUTH_PAGES = [
  ROUTES.SIGNIN,
  ROUTES.SIGNUP,
  ROUTES.PASSWORD_RESET,
  ROUTES.PRIVACY,
];

const ONBOARDING_PAGES = [ROUTES.ONBOARDING];

const withLayoutRedirect = (PageComponent) => {
  const LayoutWrapper = (props) => {
    const router = useRouter();
    const [currentOnboardingStep, setCurrentOnboardingStep] = useState(0);

    const currentRoute = router.pathname;
    const isAuthPage = AUTH_PAGES.includes(currentRoute);
    const isOnboardingPage = ONBOARDING_PAGES.includes(currentRoute);
    const { isLoading } = useSelector((state) => state.loading);

    if (isLoading) return <Loader />;

    if (isAuthPage) {
      return (
        <AuthLayout isAuthScreen={isAuthPage}>
          <PageComponent {...props} />
        </AuthLayout>
      );
    }

    if (isOnboardingPage) {
      return (
        <OnboardingLayout currentStep={currentOnboardingStep}>
          <PageComponent
            {...props}
            updateCurrentStep={setCurrentOnboardingStep}
          />
        </OnboardingLayout>
      );
    }

    return (
      <MainAppLayout>
        <PageComponent {...props} />
      </MainAppLayout>
    );
  };

  if (PageComponent.getInitialProps) {
    LayoutWrapper.getInitialProps = PageComponent.getInitialProps;
  }

  return LayoutWrapper;
};

export default withLayoutRedirect;
