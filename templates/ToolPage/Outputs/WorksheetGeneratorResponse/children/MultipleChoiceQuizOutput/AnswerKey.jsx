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
        Multiple Choice Questions:
      </Typography>
      {Object.values(questions).map((mcq, i) => (
        <Grid item key={i} mobileSmall={12} {...styles.questionGridProps}>
          {renderText(`${i + 1}. ${mcq?.answer}`)}
          {renderText(`Explanation: ${mcq?.explanation}`)}
        </Grid>
      ))}
    </Grid>
  );
};

export default AnswerKey;
