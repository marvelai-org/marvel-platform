import { Fade, Grid, List, ListItem, Typography } from '@mui/material';

import { useSelector } from 'react-redux';

import styles from './styles';

const RubricGeneratorResponse = () => {
  const { response } = useSelector((state) => state.tools);

  const renderTitle = () => {
    return (
      <Grid {...styles.titleGridProps}>
        <Typography {...styles.titleProps}>{response?.title}</Typography>
      </Grid>
    );
  };

  const renderGradeLevel = () => {
    return (
      <Grid {...styles.titleGridProps}>
        <Typography {...styles.gradeLevelProps}>
          {response?.grade_level}
        </Typography>
      </Grid>
    );
  };

  const renderCriteriaDescription = (description, descIndex) => {
    return (
      <Grid key={`description-${descIndex}`} {...styles.gridProps}>
        <Typography marginLeft={4} {...styles.keyTitleProps}>
          {description.points}
        </Typography>
        <List>
          {description.description.map((point, index) => (
            <ListItem key={index}>{point}</ListItem>
          ))}
        </List>
      </Grid>
    );
  };

  const renderRubricCriteria = (criteria, criteriaIndex) => {
    return (
      <Grid key={`criteria-${criteriaIndex}`} {...styles.gridProps}>
        <List {...styles.keyTitleProps}>{criteria.criteria}</List>
        {criteria.criteria_description.map((description, index) =>
          renderCriteriaDescription(description, index)
        )}
      </Grid>
    );
  };

  return (
    <Fade in>
      <Grid {...styles.mainGridProps}>
        {renderTitle()}
        {renderGradeLevel()}
        {response.criterias.map((criteria, index) =>
          renderRubricCriteria(criteria, index)
        )}
        <Typography {...styles.feedbackProps}>{response.feedback}</Typography>
      </Grid>
    </Fade>
  );
};
export default RubricGeneratorResponse;
