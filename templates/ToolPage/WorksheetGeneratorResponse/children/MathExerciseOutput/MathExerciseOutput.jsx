import { Grid, Typography } from '@mui/material';

import styles from './styles';

const MathExerciseOutput = ({ questions }) => {
  if (!questions) return null;

  const renderTitle = () => {
    return (
      <Typography sx={{ fontSize: '20px' }}>
        <Typography {...styles.sectionTitle}>
          Math Exercise Questions:
        </Typography>
        Answer the following questions
      </Typography>
    );
  };

  const renderQuestion = (question, questionNo) => {
    return (
      <Typography {...styles.questionTextProps}>
        {questionNo}. {question}
      </Typography>
    );
  };

  return (
    <Grid {...styles.questionsGridProps}>
      {renderTitle()}
      {Object.values(questions).map((mcq, i) => (
        <Grid item key={i} mobileSmall={12} {...styles.questionGridProps}>
          {renderQuestion(mcq?.question, i + 1)}
        </Grid>
      ))}
    </Grid>
  );
};

export default MathExerciseOutput;
