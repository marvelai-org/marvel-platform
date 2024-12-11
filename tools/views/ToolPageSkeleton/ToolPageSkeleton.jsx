import { Grid, Skeleton, useTheme } from '@mui/material';

import styles from '../../styles';

/**
 * A skeleton component for the ToolPage.
 *
 * This component renders a skeleton loading component for the tool page.
 * It uses a Grid component with specified properties and two Skeleton components with customized styling.
 * The first Skeleton component renders a skeleton loading component for the back button.
 * The second Skeleton component renders a skeleton loading component for the tool form.
 * @returns {JSX.Element} React element representing the tool page skeleton.
 */
const ToolPageSkeleton = () => {
  const theme = useTheme();

  const renderBackButton = () => {
    return (
      <Grid {...styles.backButtonGridProps}>
        <Skeleton
          animation="wave"
          variant="rectangular"
          sx={{
            borderRadius: '50px',
            bgcolor: theme.palette.Common.Black['30p'],
            height: { laptop: '40px', desktop: '42px', desktopMedium: '45px' },
            width: '120px',
          }}
        />
      </Grid>
    );
  };

  const renderForm = () => {
    return (
      <Grid {...styles.formGridProps}>
        <Skeleton
          animation="wave"
          variant="rectangular"
          sx={{
            borderRadius: '50px',
            bgcolor: theme.palette.Common.Black['30p'],
            height: '500px',
            width: '100%',
          }}
        />
      </Grid>
    );
  };

  return (
    <Grid {...styles.mainGridProps}>
      {renderBackButton()}
      {renderForm()}
    </Grid>
  );
};

export default ToolPageSkeleton;
