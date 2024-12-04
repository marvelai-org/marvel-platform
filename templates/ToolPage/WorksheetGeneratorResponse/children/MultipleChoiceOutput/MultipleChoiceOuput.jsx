import { Grid, Typography } from '@mui/material';

import styles from './styles';

const DEFAULT_VALUE = [
  {
    question:
      'Samantha has {0} apples. She gives {1} to her friend and eats {2}. How many apples does Samantha have {3}?  She then buys another {4} apples. How many does she have now?',
    blanks: [
      { key: '0', value: '12' },
      { key: '1', value: '3' },
      { key: '2', value: '2' },
      { key: '3', value: 'left' },
      { key: '4', value: '5' },
    ],
    word_bank: ['12', '3', '2', 'left', '5'],
    explanation:
      'Samantha starts with 12 apples. She gives away 3, leaving her with 12 - 3 = 9 apples. Then she eats 2, leaving her with 9 - 2 = 7 apples. Finally, she buys 5 more, resulting in 7 + 5 = 12 apples.',
  },
  {
    question:
      'Samantha has {0} apples. She gives {1} to her friend and eats {2}. How many apples does Samantha have {3}?  She then buys another {4} apples. How many does she have now?',
    blanks: [
      { key: '0', value: '12' },
      { key: '1', value: '3' },
      { key: '2', value: '2' },
      { key: '3', value: 'left' },
      { key: '4', value: '5' },
    ],
    word_bank: ['12', '3', '2', 'left', '5'],
    explanation:
      'Samantha starts with 12 apples. She gives away 3, leaving her with 12 - 3 = 9 apples. Then she eats 2, leaving her with 9 - 2 = 7 apples. Finally, she buys 5 more, resulting in 7 + 5 = 12 apples.',
  },
];

/**
 * A React component that displays a series of fill-in-the-blank questions.
 *
 * @param {Object[]} questions - An array of question objects to display.
 * @param {string} questions[].question - The question text with placeholders for blanks.
 * @param {Object[]} questions[].blanks - An array of key-value pairs for the blanks.
 * @param {string} questions[].word_bank - An array of words to fill in the blanks.
 * @param {string} questions[].explanation - An explanation of the answer.
 *
 * @returns {JSX.Element|null} A grid layout containing formatted questions and word banks,
 */
const FillInTheBlankOutput = ({ questions }) => {
  if (!questions) return null;

  const formatQuestion = (questionToFormat) => {
    const {
      question: questionToReplace,
      word_bank,
      ...otherProps
    } = questionToFormat;

    const question = questionToReplace?.replace(/\{(\d+)\}/g, '__');
    const wordBank = word_bank?.join(', ');

    return { wordBank, question, ...otherProps };
  };

  const renderTitle = () => {
    return (
      <Typography sx={{ fontSize: '20px' }}>
        <Typography
          component="span"
          sx={{ fontFamily: 'Satoshi Bold', fontSize: 'inherit' }}
        >
          Fill in the Blank
        </Typography>
        : Fill in the blank with the correct words.
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

  const renderWordBank = (wordBank) => {
    return (
      <Typography {...styles.questionTextProps}>
        <Typography {...styles.highlightTextProps}>Word bank: </Typography>
        {wordBank}
      </Typography>
    );
  };

  return (
    <Grid {...styles.questionsGridProps}>
      {renderTitle()}
      {Object.values(questions).map((item, i) => {
        const { wordBank, question } = formatQuestion(item);
        return (
          <Grid item key={i} mobileSmall={12} {...styles.questionGridProps}>
            {renderQuestion(question, i + 1)}
            {renderWordBank(wordBank)}
          </Grid>
        );
      })}
    </Grid>
  );
};

export default FillInTheBlankOutput;
