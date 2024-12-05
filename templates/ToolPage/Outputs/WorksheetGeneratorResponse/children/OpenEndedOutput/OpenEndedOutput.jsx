import { Grid, Typography } from '@mui/material';

import styles from './styles';

/**
 * Renders a list of open-ended questions.
 *
 * @param {Object} props - Component properties.
 * @param {Array} props.questions - Array of open-ended questions.
 * Each question object should contain:
 *   - question: The question text.
 *   - answer: The answer to the question.
 *   - feedback: An array of strings of feedback for the question.
 *
 * If no questions are provided, the component returns null.
 * The quiz displays a title and iterates over the questions array,
 * rendering each question along with its feedback.
 */
const OpenEndedOutput = ({ questions }) => {
  if (!questions) return null;

  const renderTitle = () => {
    return (
      <Typography sx={{ fontSize: '20px' }}>
        <Typography {...styles.sectionTitle}>Open Ended Questions: </Typography>
        Answer the following questions in complete sentences
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

export default OpenEndedOutput;
