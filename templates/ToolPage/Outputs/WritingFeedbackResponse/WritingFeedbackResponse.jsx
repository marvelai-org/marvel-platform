import { Fade, Grid, List, ListItem, Typography } from '@mui/material';

import { useSelector } from 'react-redux';

import styles from './styles';

const WritingFeedbackResponse = () => {
  const { response } = useSelector((state) => state.tools);

  const renderTitle = () => {
    return (
      <Grid {...styles.titleGridProps}>
        <Typography {...styles.titleProps}>{response?.title}</Typography>
      </Grid>
    );
  };

  const renderSection = (section) => {
    if (!section) return null;
    return (
      <Grid {...styles.gridProps}>
        <Typography {...styles.keyTitleProps}>{section.title}</Typography>
        <List>
          {section.points.map((point, index) => (
            <ListItem key={index} {...styles.listItemProps}>
              {point}
            </ListItem>
          ))}
        </List>
      </Grid>
    );
  };

  return (
    <Fade in>
      <Grid {...styles.mainGridProps}>
        {renderTitle()}
        {renderSection(response?.areas_of_strength)}
        {renderSection(response?.areas_for_growth)}
        {renderSection(response?.general_feedback)}
      </Grid>
    </Fade>
  );
};
export default WritingFeedbackResponse;
