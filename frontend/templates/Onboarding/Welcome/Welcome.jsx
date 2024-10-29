import { Button, Grid, Typography } from '@mui/material';

import styles from '../styles.js';

const Welcome = ({ onNext }) => {
  const handleStart = () => {
    onNext();
  };

  return (
    <Grid {...styles.mainGrid}>
      <Typography {...styles.titleProps}>Welcome to Kai 👋</Typography>
      <Typography {...styles.descriptionProps}>
        Let&lsquo;s get started with your onboarding process.
      </Typography>
      <Button {...styles.buttonProps} onClick={handleStart}>
        Start Here
      </Button>
    </Grid>
  );
};

export default Welcome;
