import { Fade, Grid, Typography } from '@mui/material';

import { useSelector } from 'react-redux';

import styles from './styles';

const FlashCardList = () => {
  const { response } = useSelector((state) => state.tools);

  const renderQuestion = (concept, definition, cardNo) => {
    return (
      <Grid key={`flashCard-${cardNo}`} {...styles.questionGridProps}>
        <Typography {...styles.questionTitleProps}>{concept}</Typography>
        <Typography {...styles.choiceProps}>{definition}</Typography>
      </Grid>
    );
  };

  const renderCards = () => {
    return (
      <Grid {...styles.questionsGridProps}>
        {response?.map((item, i) =>
          renderQuestion(item?.concept, item?.definition, i + 1)
        )}
      </Grid>
    );
  };

  return (
    <Fade in>
      <Grid {...styles.mainGridProps}>{renderCards()}</Grid>
    </Fade>
  );
};
export default FlashCardList;
