import { Fade, Grid, List, Typography } from '@mui/material';

import { useSelector } from 'react-redux';

import styles from './styles';

const ConnectWithThemResponse = () => {
  const { response } = useSelector((state) => state.tools);

  const renderTitle = () => {
    return (
      <Grid {...styles.titleGridProps}>
        <Typography {...styles.titleProps}>Recommendations</Typography>
      </Grid>
    );
  };

  const renderRecommendations = (recommendation, id) => {
    return (
      <Grid key={`recommendation-${id}`} {...styles.gridProps}>
        <Typography {...styles.keyTitleProps}>
          {recommendation?.title}
        </Typography>
        <List>
          <Typography {...styles.listItemProps}>
            <Typography component="span" fontFamily="Satoshi Bold">
              Project Overview:
            </Typography>{' '}
            {recommendation?.project_overview}
          </Typography>
          <Typography {...styles.listItemProps}>
            <Typography component="span" fontFamily="Satoshi Bold">
              Rationale:
            </Typography>{' '}
            {recommendation?.rationale}
          </Typography>
          <Typography {...styles.listItemProps}>
            <Typography component="span" fontFamily="Satoshi Bold">
              Difficulty Level:
            </Typography>{' '}
            {recommendation?.difficulty_level}
          </Typography>
          <Typography {...styles.listItemProps}>
            <Typography component="span" fontFamily="Satoshi Bold">
              Required Tools:{' '}
            </Typography>{' '}
            {recommendation?.required_tools?.join(', ')}
          </Typography>
          <Typography {...styles.listItemProps}>
            <Typography component="span" fontFamily="Satoshi Bold">
              Estimated Time:{' '}
            </Typography>{' '}
            {recommendation?.estimated_time}
          </Typography>
        </List>
      </Grid>
    );
  };

  return (
    <Fade in>
      <Grid {...styles.mainGridProps}>
        {renderTitle()}
        {response?.map((recommendation) =>
          renderRecommendations(recommendation)
        )}
      </Grid>
    </Fade>
  );
};
export default ConnectWithThemResponse;
