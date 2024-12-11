import { Grid, useMediaQuery } from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/router';

import AppDisabled from '@/components/AppDisabled';

import ProgressBar from './ProgressBar';
import styles from './styles';

import { onboardingSteps } from '@/libs/constants/onboarding';

/**
 * OnboardingLayout component that wraps the onboarding flow of the application.
 *
 * @param {object} props - The properties passed to the component.
 * @param {React.ReactNode} props.children - The child components that will be rendered inside the layout.
 *
 * @returns {JSX.Element} The OnboardingLayout component.
 */
const OnboardingLayout = (props) => {
  const router = useRouter();
  const { children } = props;
  const isTabletScreen = useMediaQuery((theme) =>
    theme.breakpoints.down('laptop')
  );

  const { onboardingId } = router.query;

  const shouldHideProgressBar = Number(onboardingId) === onboardingSteps.length;

  const renderHead = () => (
    <Head>
      <title>Marvel AI</title>
    </Head>
  );

  const renderApp = () => <Grid {...styles.contentGrid}>{children}</Grid>;

  return (
    <Grid {...styles.mainGrid}>
      <Grid {...styles.progressBarContainer}>
        {!shouldHideProgressBar && (
          <ProgressBar onboardingSteps={onboardingSteps} />
        )}
      </Grid>
      {renderHead()}
      {isTabletScreen && <AppDisabled head={renderHead()} />}
      {!isTabletScreen && renderApp()}
    </Grid>
  );
};

export default OnboardingLayout;
