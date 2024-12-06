import { Fade, Grid, List, ListItem, Typography } from '@mui/material';

import { useSelector } from 'react-redux';

import styles from './styles';

const AIResistantResponse = () => {
  const { response } = useSelector((state) => state.tools);

  const renderTitle = () => {
    return (
      <Grid {...styles.titleGridProps}>
        <Typography {...styles.titleProps}>{response?.topic}</Typography>
      </Grid>
    );
  };

  const renderGradeLevel = () => {
    return (
      <Grid {...styles.gridProps}>
        <Typography {...styles.keyTitleProps}>
          {response?.gradeLevel}
        </Typography>
      </Grid>
    );
  };

  const renderIdeas = () => {
    return (
      <Grid {...styles.gridProps}>
        <Typography {...styles.keyTitleProps}>Ideas</Typography>
        <Grid {...styles.gridProps} rowGap={0}>
          {response?.ideas?.map((idea, i) => (
            <List key={`idea-${i}`}>
              <ListItem {...styles.ideaTitleProps}>
                {i + 1}. {idea?.title}
              </ListItem>
              <ListItem {...styles.listItemProps}>
                {idea?.assignment_description}
              </ListItem>
              <ListItem {...styles.listItemProps}>{idea?.explanation}</ListItem>
            </List>
          ))}
        </Grid>
      </Grid>
    );
  };

  return (
    <Fade in>
      <Grid {...styles.mainGridProps}>
        {renderTitle()}
        {renderGradeLevel()}
        {renderIdeas()}
      </Grid>
    </Fade>
  );
};
export default AIResistantResponse;
