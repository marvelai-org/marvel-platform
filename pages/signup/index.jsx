import { useState } from 'react';

import { ArrowBack } from '@mui/icons-material';
import { IconButton } from '@mui/material';

import AuthForm from '@/components/AuthForm';
import AuthLayout from '@/layouts/AuthLayout';

import SignUpForm from '@/templates/SignUp/SignUpForm';
import VerifyEmailPage from '@/templates/SignUp/VerifyEmailPage';

import sharedStyles from '@/styles/shared/sharedStyles';

import { AUTH_STEPS } from '@/libs/constants/auth';
import ROUTES from '@/libs/constants/routes';

const TITLE_CONFIG = {
  main: 'sign up 🌟',
  subtitle: 'Already have an account?',
  linklabel: 'Sign in',
  route: ROUTES.SIGNIN,
};

/**
 * Renders a sign-up form with email and password inputs,
 * and submits the data to Firebase authentication.
 *
 * @return {JSX.Element} Returns a JSX element of the AuthForm component.
 */
const SignUp = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [authStep, setAuthStep] = useState(AUTH_STEPS.EMAIL);
  const [email, setEmail] = useState('');

  const handleSwitchScreen = () => {
    setIsSignUp((prev) => !prev);
  };

  const handleGoBack = () => {
    setAuthStep(AUTH_STEPS.EMAIL);
  };

  const renderGoBack = () => {
    if (authStep === AUTH_STEPS.PASSWORD) {
      return (
        <IconButton
          size="large"
          {...sharedStyles.backButtonProps}
          onClick={handleGoBack}
        >
          <ArrowBack />
        </IconButton>
      );
    }

    return null;
  };

  const renderForm = () => {
    return (
      <AuthForm
        form={
          <SignUpForm
            step={authStep}
            setStep={setAuthStep}
            setEmail={setEmail}
            handleSwitch={handleSwitchScreen}
          />
        }
        goBack={renderGoBack()}
        title={TITLE_CONFIG}
      />
    );
  };

  const renderVerifyEmail = () => {
    return <VerifyEmailPage email={email} />;
  };

  return (
    <>
      {isSignUp && renderForm()}
      {!isSignUp && renderVerifyEmail()}
    </>
  );
};

SignUp.getLayout = function getLayout(page) {
  return <AuthLayout isAuthScreen>{page}</AuthLayout>;
};

export default SignUp;
