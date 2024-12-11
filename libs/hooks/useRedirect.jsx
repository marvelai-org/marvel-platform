import { useEffect } from 'react';

import { applyActionCode } from 'firebase/auth';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import { AUTH_MODES } from '@/libs/constants/auth';
import ALERT_COLORS from '@/libs/constants/notification';
import ROUTES from '@/libs/constants/routes';

import {
  setLoading as setAuthLoading,
  setEmailVerified,
} from '@/libs/redux/slices/authSlice';
import { setLoading as setUserLoading } from '@/libs/redux/slices/userSlice';
import { auth } from '@/libs/redux/store';
import fetchUserData from '@/libs/redux/thunks/user';
import { homeRegex, onboardingRegex } from '@/libs/regex/routes';
import { fetchToolHistory } from '@/tools/data';

const redirectRegex = /\/redirect.*/;

const useRedirect = (firestore, functions, handleOpenSnackBar) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { route, asPath, query } = router;
  const { data: authData, loading } = useSelector((state) => state.auth);
  const { data: userData } = useSelector((state) => state.user);
  const fetchUserRelatedData = async (id) => {
    dispatch(fetchUserData({ firestore, id }));
    dispatch(fetchToolHistory());
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check if the current route is an authentication route
    const isAuthUrl = [
      ROUTES.SIGNIN,
      ROUTES.SIGNUP,
      ROUTES.PRIVACY,
      ROUTES.TERMS,
      ROUTES.PASSWORD_RESET,
    ].includes(route);

    const isRedirectRoute = redirectRegex.test(asPath);
    const isAuthRoute = isAuthUrl || isRedirectRoute;
    // If a authUser is authed, set the currentUser in the store
    if (auth.currentUser) {
      if (isRedirectRoute) {
        dispatch(setAuthLoading(false));
        return;
      }

      // If email is not verified, redirect to sign in
      if (!auth.currentUser.emailVerified) {
        if (!isAuthUrl) {
          router.push(ROUTES.SIGNIN);
          return;
        }
        return;
      }

      fetchUserRelatedData(auth.currentUser.uid);

      if (route === ROUTES.CREATE_AVATAR || route === ROUTES.PASSWORD_RESET) {
        return;
      }

      if (isAuthUrl) {
        router.push(ROUTES.HOME);
        return;
      }
      return;
    }

    if (!isAuthRoute && !loading) router.push(ROUTES.SIGNIN);
  }, [authData]);

  useEffect(() => {
    // redirect based on onboarding status, provided that the user is already authed
    if (auth.currentUser) {
      const isOnboardingUrl = onboardingRegex.test(asPath);
      const isHomeUrl = homeRegex.test(asPath);
      const onboardingStatus = userData?.needsBoarding;

      // If already logged in and onboarding is required, redirect to onboarding
      if (
        !isOnboardingUrl &&
        (onboardingStatus ||
          (onboardingStatus === undefined && userData !== false))
      ) {
        dispatch(setUserLoading(true));
        router.push(ROUTES.ONBOARDING.replace('[onboardingId]', '0'));
        return;
      }

      // If users who have already completed onboarding wrongly enter the onboarding page or just completed the last onboarding task.
      if (isOnboardingUrl) {
        dispatch(setUserLoading(false));
        if (onboardingStatus === false) {
          dispatch(setUserLoading(true));
          router.push(ROUTES.HOME);
          return;
        }
        return;
      }

      // If users are coming from the onboarding page
      if (isHomeUrl && !onboardingStatus) {
        dispatch(setUserLoading(false));
      }
    }
  }, [userData, router]);

  useEffect(() => {
    const isRedirectRoute = redirectRegex.test(asPath);

    if (isRedirectRoute) {
      const handleVerifyEmail = async () => {
        try {
          const { oobCode } = query;

          await applyActionCode(auth, oobCode);

          dispatch(setEmailVerified(true));
          router.push(`${ROUTES.HOME}`);
        } catch (error) {
          handleOpenSnackBar(ALERT_COLORS.ERROR, 'Unable to verify email');
          router.push(`${ROUTES.SIGNUP}`);
          throw new Error(error);
        }
      };

      const { mode, oobCode } = query;

      if (mode === AUTH_MODES.PASSWORD_RESET) {
        router.push(`${ROUTES.PASSWORD_RESET}?oobCode=${oobCode}`);
        return;
      }

      if (mode === AUTH_MODES.VERIFY_EMAIL) {
        if (auth.currentUser?.emailVerified) {
          router.push(ROUTES.HOME);
          return;
        }

        handleVerifyEmail();
      }
    }
  }, [query]);
};

export default useRedirect;
