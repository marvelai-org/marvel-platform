import { Grid, Typography } from '@mui/material';

import styles from './styles';

/**
 * A React component that displays a series of relate concept questions.
 *
 * @param {Object[]} questions - An array of question objects to display.
 * @param {string} questions[].question - The question text.
 * @param {Object[]} questions[].choices - An array of choice objects to display.
 * @param {string} questions[].choices[].term - The term to match with a meaning.
 * @param {string} questions[].choices[].meaning - The meaning of the term.
 *
 * @returns {JSX.Element|null} A grid layout containing formatted questions and
 *   pairs of terms and meanings to match.
 */
const RelateConceptOutput = ({ questions }) => {
  if (!questions) return null;

  const renderTitle = () => {
    return (
      <Typography {...styles.titleProps}>
        <Typography {...styles.sectionTitle}>
          Relate Concepts Questions
        </Typography>
        : Match the given terms with their correct meanings from a set of pairs.
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

  const renderPairs = (pairs, questionNo) => {
    return (
      <Typography ml={2} {...styles.questionTextProps}>
        {pairs?.map((choice, choiceIndex) => (
          <Typography
            key={`Q${questionNo}-${choiceIndex}`}
            {...styles.pairGroupProps}
          >
            <Typography {...styles.highlightTextProps}>
              {`${choice?.term}) `}
            </Typography>
            {choice?.meaning}
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
          {renderPairs(mcq?.choices, i + 1)}
        </Grid>
      ))}
    </Grid>
  );
};

export default RelateConceptOutput;
