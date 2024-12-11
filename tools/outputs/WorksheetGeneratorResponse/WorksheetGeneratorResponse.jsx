import { Fade, Grid, Typography } from '@mui/material';

// import { useSelector } from 'react-redux';

import styles from './styles';

const WorksheetGeneratorResponse = () => {
  // const { response } = useSelector((state) => state.tools);

  const hasTitle = false;

  const renderTitle = () => {
    return (
      <Grid {...styles.titleGridProps}>
        <Typography {...styles.titleProps}>No Title</Typography>
      </Grid>
    );
  };

  const renderQuestions = () => {
    return <Grid {...styles.questionsGridProps}>Hello World !</Grid>;
  };

  return (
    <Fade in>
      <Grid {...styles.mainGridProps}>
        {hasTitle && renderTitle()}
        {renderQuestions()}
      </Grid>
    </Fade>
  );
};
export default WorksheetGeneratorResponse;
