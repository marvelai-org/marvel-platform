import { Grid, Typography } from '@mui/material';

import styles from './styles';

const AnswerKey = ({ questions }) => {
  if (!questions) return null;

  const renderText = (text) => {
    return <Typography {...styles.questionTextProps}>{text}</Typography>;
  };

  return (
    <Grid {...styles.questionsGridProps}>
      <Typography fontFamily="Satoshi Bold" fontSize="20px">
        Math Exercise Questions:
      </Typography>
      {questions?.map((question, i) => (
        <Grid item key={i} mobileSmall={12} {...styles.questionGridProps}>
          {renderText(`${i + 1}. Answer: ${question?.correct_answer}`)}
          {renderText(`Explanation: ${question?.explanation}`)}
        </Grid>
      ))}
    </Grid>
  );
};

export default AnswerKey;
