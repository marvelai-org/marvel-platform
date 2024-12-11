import { Grid, List, ListItem, Typography } from '@mui/material';

import styles from '../styles';

const QuizOutput = ({ data }) => {
  const panelData = data?.response || [];

  const renderExplanation = (explanation) => {
    return (
      <Typography {...styles.explanationProps} sx={{ marginTop: '4px' }}>
        <strong>Explanation:</strong> {explanation}
      </Typography>
    );
  };

  const renderCorrectAnswer = (answer) => {
    return (
      <Typography {...styles.answerProps} sx={{ marginTop: '8px' }}>
        <strong>Correct Answer:</strong> {answer}
      </Typography>
    );
  };

  const renderChoices = (choices) => {
    return (
      <List>
        {choices?.map((choice, choiceIndex) => (
          <ListItem key={choiceIndex} sx={{ py: 0 }}>
            <Typography {...styles.optionProps}>
              {choice.key}. {choice.value}
            </Typography>
          </ListItem>
        ))}
      </List>
    );
  };

  return (
    <Grid container direction="column">
      {panelData.map((item, index) => (
        <Grid key={index} sx={{ marginBottom: '16px' }}>
          <Typography {...styles.questionProps}>
            {index + 1}. {item?.question}
          </Typography>
          {renderChoices(item?.choices)}
          {renderCorrectAnswer(item?.answer)}
          {item?.explanation && renderExplanation(item?.explanation)}
        </Grid>
      ))}
    </Grid>
  );
};

export default QuizOutput;
