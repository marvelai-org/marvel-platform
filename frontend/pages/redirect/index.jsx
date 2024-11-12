import { CircularProgress, Grid } from '@mui/material';

import sharedStyles from '@/styles/shared/sharedStyles';

const Redirect = () => {
  return (
    <Grid {...sharedStyles.secondaryLoaderGridProps}>
      <CircularProgress color="secondary" size={50} />
    </Grid>
  );
};

export default Redirect;
