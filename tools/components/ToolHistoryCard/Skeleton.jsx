import { Grid, Skeleton } from '@mui/material';

import styles from './styles';

/**
 * Renders a skeleton loading component for the tool history card.
 * Uses a Grid component with specified properties and a Skeleton component with customized styling.
 * @returns {JSX.Element} React element representing the tool card skeleton.
 */
const ToolCardSkeleton = () => {
  return (
    <Grid {...styles.mainGridProps}>
      <Skeleton
        variant="rectangular"
        animation="wave"
        height={150}
        width="100%"
        sx={{
          borderRadius: '10px',
          bgcolor: (theme) => theme.palette.Common.Black['30p'],
        }}
      />
    </Grid>
  );
};

export default ToolCardSkeleton;
