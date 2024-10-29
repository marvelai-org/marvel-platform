import { useState } from 'react';

import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';

import CheckList from '../CheckList';

import styles from './styles';

/**
 * A component that renders a progress bar for the onboarding process that keeps track of steps completed.
 *
 * @param {Array} onboardingSteps - An array of steps in the onboarding process.
 * @return {JSX.Element} The JSX element representing the progress bar.
 */
const ProgressBar = ({ onboardingSteps }) => {
  const currentStep = useSelector((state) => state.onboarding?.step ?? 1);
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      {expanded && <div style={{ ...styles.blurredBackground }} />}
      <Grid {...styles.mainGridProps}>
        <CheckList
          expanded={expanded}
          handleChange={handleChange}
          currentStep={currentStep}
          onboardingSteps={onboardingSteps}
        />
      </Grid>
    </>
  );
};

export default ProgressBar;
