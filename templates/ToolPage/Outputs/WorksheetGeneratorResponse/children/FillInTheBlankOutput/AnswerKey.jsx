import { Grid, Typography } from '@mui/material';

import styles from './styles';

const AnswerKey = ({ questions }) => {
  if (!questions) return null;

  const formatToGetAnswers = (questionToFormat) => {
    const { question: questionToReplace, blanks } = questionToFormat;

    let question = questionToReplace;

    blanks?.forEach((blank) => {
      const key = `{${blank.key}}`;
      const { value } = blank;
      question = question.replace(key, value);
    });

    return question;
  };

  const renderAnswer = (question, questionNo) => {
    return (
      <Typography {...styles.questionTextProps}>
        {questionNo}. {question}
      </Typography>
    );
  };

  return (
    <Grid {...styles.questionsGridProps}>
      <Typography fontFamily="Satoshi Bold" fontSize="20px">
        Fill in the blanks:
      </Typography>
      {Object.values(questions).map((item, i) => (
        <Grid item key={i} mobileSmall={12} {...styles.questionGridProps}>
          {renderAnswer(formatToGetAnswers(item), i + 1)}
        </Grid>
      ))}
    </Grid>
  );
};

export default AnswerKey;
