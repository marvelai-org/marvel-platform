import { Fade, Grid, Typography } from '@mui/material';

// import { useSelector } from 'react-redux';

import { useSelector } from 'react-redux';

import FillInTheBlankOutput, {
  AnswerKey as AnswerKeyFillInTheBlank,
} from './children/FillInTheBlankOutput';
import styles from './styles';

const WorksheetGeneratorResponse = () => {
  const { response } = useSelector((state) => state.tools);

  const fillInTheBlanks = response?.fill_in_the_blank;

  const hasTitle = false;

  const renderTitle = () => {
    return (
      <Grid {...styles.titleGridProps}>
        <Typography {...styles.titleProps}>No Title</Typography>
      </Grid>
    );
  };

  const renderQuestions = () => {
    return (
      <Grid {...styles.questionsGridProps}>
        <FillInTheBlankOutput questions={fillInTheBlanks} />
      </Grid>
    );
  };

  const renderAnswerKeys = () => {
    return (
      <Grid {...styles.questionsGridProps}>
        <Typography {...styles.keyTitleProps}>Answer Key:</Typography>
        <AnswerKeyFillInTheBlank questions={fillInTheBlanks} />
      </Grid>
    );
  };

  return (
    <Fade in>
      <Grid {...styles.mainGridProps}>
        {hasTitle && renderTitle()}
        {renderQuestions()}
        {renderAnswerKeys()}
      </Grid>
    </Fade>
  );
};
export default WorksheetGeneratorResponse;
