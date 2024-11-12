import { useState } from 'react';

import AuthForm from '@/components/AuthForm';

import ForgotPasswordPage from '@/templates/SignIn/ForgotPasswordPage';
import SignInForm from '@/templates/SignIn/SignInForm';

import ROUTES from '@/constants/routes';

const TITLE_CONFIG = {
  main: 'Sign in 🚀',
  subtitle: 'Don\u0027t have an account?',
  linklabel: 'Create Account',
  route: ROUTES.SIGNUP,
};

/**
 * Renders a sign in form for the user to authenticate with Firebase.
 *
 * @return {JSX.Element} The rendered sign in form component.
 */
const SignIn = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSwitchScreen = () => {
    setIsSignIn((prev) => !prev);
  };

  return (
    <>
      {isSignIn && (
        <AuthForm
          form={<SignInForm handleSwitch={handleSwitchScreen} />}
          title={TITLE_CONFIG}
        />
      )}
      {!isSignIn && <ForgotPasswordPage handleSwitch={handleSwitchScreen} />}
    </>
  );
};

export default SignIn;
