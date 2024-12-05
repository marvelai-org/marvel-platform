import { Grid, Typography } from '@mui/material';

import styles from './styles';

/**
 * Renders a multiple choice quiz with a list of questions.
 *
 * @param {Object} props - Component properties.
 * @param {Array} props.questions - Array of multiple choice questions.
 * Each question object should contain:
 *   - question: The question text.
 *   - choices: An array of answer choices.
 *
 * If no questions are provided, the component returns null.
 * The quiz displays a title and iterates over the questions array,
 * rendering each question along with its choices.
 */
const MultipleChoiceQuiz = ({ questions }) => {
  if (!questions) return null;

  const renderTitle = () => {
    return (
      <Typography sx={{ fontSize: '20px' }}>
        <Typography {...styles.sectionTitle}>
          Multiple Choice Questions
        </Typography>
        : Choose the correct answer from the choices for each question.
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

  const renderChoices = (choices, questionNo) => {
    return (
      <Typography ml={2} {...styles.questionTextProps}>
        {choices?.map((choice, choiceIndex) => (
          <Typography
            key={`Q${questionNo}-${choiceIndex}`}
            sx={{ width: '100%' }}
          >
            <Typography {...styles.highlightTextProps}>
              {`${choice?.key}) `}
            </Typography>
            {choice?.value}
          </Typography>
        ))}
      </Typography>
    );
  };

  return (
    <Grid {...styles.questionsGridProps}>
      {renderTitle()}
      {Object.values(questions).map((mcq, i) => (
        <Grid item key={i} mobileSmall={12} {...styles.questionGridProps}>
          {renderQuestion(mcq?.question, i + 1)}
          {renderChoices(mcq?.choices, i + 1)}
        </Grid>
      ))}
    </Grid>
  );
};

export default MultipleChoiceQuiz;
