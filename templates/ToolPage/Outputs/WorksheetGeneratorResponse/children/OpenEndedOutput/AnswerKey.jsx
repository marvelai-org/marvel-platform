import { Grid, Typography } from '@mui/material';

import styles from './styles';

const AnswerKey = ({ questions }) => {
  if (!questions) return null;

  const renderText = (text, questionNo) => {
    return (
      <Typography
        key={questionNo}
        ml={!questionNo && 3}
        {...styles.questionTextProps}
      >
        {questionNo && `${questionNo}.`} {text}
      </Typography>
    );
  };

  return (
    <Grid {...styles.questionsGridProps}>
      <Typography fontFamily="Satoshi Bold" fontSize="20px">
        Open Ended Questions:
      </Typography>
      {questions?.map((question, i) => (
        <Grid
          key={`Question ${i}`}
          item
          mobileSmall={12}
          {...styles.questionGridProps}
        >
          {renderText('Feedback: ', i + 1)}
          {question?.feedback?.map((questionFeedback) =>
            renderText(questionFeedback)
          )}
        </Grid>
      ))}
    </Grid>
  );
};

export default AnswerKey;
