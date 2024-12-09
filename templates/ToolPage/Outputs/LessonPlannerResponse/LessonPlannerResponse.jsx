import {
  Container,
  Fade,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';

import { useSelector } from 'react-redux';

import styles from './styles';

const DEFAULT_RESPONSE = {
  title: {
    title: 'Lesson Plan Example',
  },
  objective: {
    objective: 'Students will understand the concept of fractions.',
  },
  assessment: {
    assessment: 'Quiz on fractions',
  },
  key_points: {
    key_points: [
      {
        title: 'What are fractions?',
        description: 'Fractions are a way to represent part of a whole.',
      },
      {
        title: 'Types of fractions',
        description:
          'There are three types of fractions: proper, improper, and mixed.',
      },
    ],
  },
  opening: {
    title: 'Introduction to Fractions',
    content: [
      'Fractions are used to represent part of a whole.',
      'They are written as a numerator over a denominator.',
    ],
  },
  introduction_to_new_material: {
    title: 'Understanding Fractions',
    content: [
      'Fractions can be used to represent real-world situations.',
      'For example, 1/2 of a pizza is a fraction.',
    ],
  },
  guided_practice: {
    title: 'Practice with Fractions',
    content: ['Simplify the fraction 2/4.', 'Add the fractions 1/2 and 1/4.'],
  },
  independent_practice: {
    description: 'Complete the worksheet on fractions.',
    tasks: [
      'Simplify the fraction 3/6.',
      'Subtract the fractions 2/3 and 1/6.',
    ],
  },
  closing: {
    title: 'Conclusion',
    content: [
      'Fractions are an important concept in math.',
      'Remember to simplify fractions whenever possible.',
    ],
  },
  extension_activity: {
    description: 'Create a real-world example of a fraction.',
    additional_instructions: 'Use a diagram to illustrate the fraction.',
  },
  homework: {
    description: 'Complete the homework worksheet on fractions.',
    submission_instructions:
      'Submit the worksheet to the teacher by the end of the week.',
  },
  standards_addressed: {
    standards_addressed: [
      {
        name: 'CCSS.Math.Content.4.NF.A.1',
        description:
          'Explain why a fraction a/b is equivalent to a fraction (n × a)/(n × b) by using visual fraction models, with an emphasis on using the number of equal parts to show equivalence.',
      },
    ],
  },
};

const LessonPlannerResponse = () => {
  const { response: responseOutput } = useSelector((state) => state.tools);

  const response = responseOutput || DEFAULT_RESPONSE;

  console.log(response);

  const renderTitle = () => {
    return (
      <Grid {...styles.titleGridProps}>
        <Typography {...styles.titleProps}>{response?.title?.title}</Typography>
      </Grid>
    );
  };

  const renderObjectives = () => {
    return (
      <Grid {...styles.titleGridProps}>
        <Typography {...styles.subTitleProps}>
          {response?.objective?.objective}
        </Typography>
      </Grid>
    );
  };

  const renderKeyPoints = (keyPoints) => {
    return (
      <Grid {...styles.titleGridProps}>
        <Typography {...styles.subTitleProps} gutterBottom>
          Key Points
        </Typography>
        <List>
          {keyPoints?.key_points?.map((keyPoint, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={keyPoint.title}
                secondary={keyPoint.description}
              />
            </ListItem>
          ))}
        </List>
      </Grid>
    );
  };

  const renderSection = (section) => {
    return (
      <Grid {...styles.titleGridProps}>
        <Typography {...styles.subTitleProps} gutterBottom>
          {section.title}
        </Typography>
        <Container maxWidth="lg">
          <Typography variant="body1" gutterBottom>
            {section.content}
          </Typography>
        </Container>
      </Grid>
    );
  };

  const renderIndependentPractice = (practice) => {
    return (
      <Grid {...styles.titleGridProps}>
        <Typography {...styles.subTitleProps} gutterBottom>
          Independent Practice
        </Typography>
        <Typography variant="body1" gutterBottom>
          {practice.description}
        </Typography>
        <List>
          {practice.tasks.map((task, index) => (
            <ListItem key={index}>
              <ListItemText primary={task} />
            </ListItem>
          ))}
        </List>
      </Grid>
    );
  };

  const renderExtensionActivity = (extensionActivity) => {
    return (
      <Grid {...styles.titleGridProps}>
        <Typography {...styles.subTitleProps} gutterBottom>
          Extension Activity
        </Typography>
        <Typography variant="body1" gutterBottom>
          {extensionActivity.description}
        </Typography>
        {extensionActivity.additionalInstructions && (
          <Typography variant="body1" gutterBottom>
            {extensionActivity.additionalInstructions}
          </Typography>
        )}
      </Grid>
    );
  };

  const renderHomework = (homework) => {
    return (
      <Grid {...styles.titleGridProps}>
        <Typography {...styles.subTitleProps} gutterBottom>
          Homework
        </Typography>
        <Typography variant="body1" gutterBottom>
          {homework.description}
        </Typography>
        {homework?.submissionInstructions && (
          <Typography variant="body1" gutterBottom>
            {homework.submissionInstructions}
          </Typography>
        )}
      </Grid>
    );
  };

  const renderStandardsAddressed = (standards) => {
    return (
      <Grid {...styles.titleGridProps}>
        <Typography {...styles.subTitleProps} gutterBottom>
          Standards Addressed
        </Typography>
        <List>
          {standards.standards_addressed.map((standard, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={standard.name}
                secondary={standard.description}
              />
            </ListItem>
          ))}
        </List>
      </Grid>
    );
  };

  return (
    <Fade in>
      <Grid {...styles.mainGridProps}>
        {renderTitle()}
        {renderObjectives()}
        {renderKeyPoints(response?.key_points)}
        {renderSection(response?.opening)}
        {renderSection(response?.introduction_to_new_material)}
        {renderSection(response?.guided_practice)}
        {renderIndependentPractice(response?.independent_practice)}
        {renderSection(response?.closing)}
        {renderExtensionActivity(response?.extension_activity)}
        {renderHomework(response?.homework)}
        {renderStandardsAddressed(response?.standards_addressed)}
      </Grid>
    </Fade>
  );
};
export default LessonPlannerResponse;
