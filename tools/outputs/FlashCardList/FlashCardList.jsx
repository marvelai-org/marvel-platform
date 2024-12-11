import { Fade, Grid, Typography } from '@mui/material';

import { useSelector } from 'react-redux';

import styles from './styles';

/**
 * FlashCardList component renders a list of flashcards.
 * It uses the response from the Redux store to generate each flashcard,
 * displaying the concept and definition in a styled grid layout.
 * The component leverages Material-UI's Grid, Typography, and Fade components
 * for styling and animations.
 */
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
