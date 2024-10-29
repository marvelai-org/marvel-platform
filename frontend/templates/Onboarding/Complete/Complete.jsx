import { Button, Grid, Typography } from '@mui/material';

import CircleCheckFilled from '@/assets/svg/CircleCheckFilled.svg';

import styles from './styles';

const Complete = ({ onNext }) => {
  const handleGoHome = () => {
    onNext();
  };

  return (
    <Grid {...styles.mainGrid}>
      <CircleCheckFilled />
      <Typography {...styles.titleProps}>Onboarding Complete!</Typography>
      <Typography {...styles.descriptionProps}>
        Congrats! the onboarding is complete, continue to go to homepage
      </Typography>
      <Button {...styles.buttonProps} onClick={handleGoHome}>
        Continue
      </Button>
    </Grid>
  );
};

export default Complete;
