import { Fade, Grid, Typography } from '@mui/material';

import { useSelector } from 'react-redux';

import FillInTheBlankOutput, {
  AnswerKey as AnswerKeyFillInTheBlank,
} from './children/FillInTheBlankOutput';
import MathExerciseOutput, {
  AnswerKey as AnswerKeyMath,
} from './children/MathExerciseOutput';
import MultipleChoiceQuizOutput, {
  AnswerKey as AnswerKeyMultipleChoice,
} from './children/MultipleChoiceQuizOutput';
import OpenEndedOutput, {
  AnswerKey as AnswerKeyOpenEnded,
} from './children/OpenEndedOutput';

import styles from './styles';

const WorksheetGeneratorResponse = () => {
  const { response } = useSelector((state) => state.tools);

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
        <FillInTheBlankOutput questions={response?.fill_in_the_blank} />
        <MultipleChoiceQuizOutput
          questions={response?.multiple_choice_question}
        />
        <OpenEndedOutput questions={response?.open_ended} />
        <MathExerciseOutput questions={response?.math_exercises} />
      </Grid>
    );
  };

  const renderAnswerKeys = () => {
    return (
      <Grid {...styles.questionsGridProps}>
        <Typography {...styles.keyTitleProps}>Answer Key</Typography>
        <AnswerKeyFillInTheBlank questions={response?.fill_in_the_blank} />
        <AnswerKeyMultipleChoice
          questions={response?.multiple_choice_question}
        />
        <AnswerKeyOpenEnded questions={response?.open_ended} />
        <AnswerKeyMath questions={response?.math_exercises} />
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
