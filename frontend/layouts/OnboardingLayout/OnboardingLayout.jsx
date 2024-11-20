import { useEffect } from 'react';

import { Grid, useMediaQuery } from '@mui/material';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';

import AppDisabled from '@/components/AppDisabled';
import Loader from '@/components/Loader';
import ProgressBarMenu from '@/layouts/OnboardingLayout/ProgressBarMenu';

import styles from './styles';

import { setLoading } from '@/redux/slices/authSlice';

/**
 * Renders the onboarding layout.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {ReactNode} props.children - The child components to render.
 * @param {number} props.currentStep - The current step in the onboarding process.
 * @return {ReactNode} The rendered onboarding layout.
 */
const OnboardingLayout = ({ children, currentStep }) => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);

  const isTabletScreen = useMediaQuery((theme) =>
    theme.breakpoints.down('laptop')
  );

  const isLoading = auth.loading || !user.data || !auth.data;

  useEffect(() => {
    dispatch(setLoading(false));
  }, []);

  if (isLoading) return <Loader />;

  const renderHead = () => (
    <Head>
      <title>Marvel AI Onboarding</title>
    </Head>
  );

  const renderOnboardingContent = () => (
    <>
      <Grid item xs={12} sx={styles.headerContainer}>
        <ProgressBarMenu activeStep={currentStep} />
      </Grid>
      <Grid item xs={12} sx={styles.contentContainer}>
        {children}
      </Grid>
    </>
  );

  if (isTabletScreen) return <AppDisabled head={renderHead()} />;

  return (
    <Grid {...styles.mainContainer}>
      {renderHead()}
      {!isTabletScreen && renderOnboardingContent()}
    </Grid>
  );
};
export default OnboardingLayout;
