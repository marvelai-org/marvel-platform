import {
  Fade,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import { useSelector } from 'react-redux';

import styles from './styles';

const SyllabusGeneratorResponse = () => {
  const { response } = useSelector((state) => state.tools);

  if (!response) return null;

  const renderCourseTitle = () => {
    return (
      <TableRow>
        <TableCell sx={{ minWidth: '200px' }}>Course Title</TableCell>
        <TableCell>{response?.course_information.course_title}</TableCell>
      </TableRow>
    );
  };

  const renderGradeLevel = () => {
    return (
      <TableRow>
        <TableCell>Grade Level</TableCell>
        <TableCell>{response?.course_information.grade_level}</TableCell>
      </TableRow>
    );
  };

  const renderDescription = () => {
    return (
      <TableRow>
        <TableCell>Description</TableCell>
        <TableCell>{response?.course_information.description}</TableCell>
      </TableRow>
    );
  };

  const renderObjectives = () => {
    return (
      <TableRow>
        <TableCell>Objectives</TableCell>
        <TableCell>
          <ul>
            {response?.course_description_objectives.objectives.map(
              (objective, index) => (
                <li key={index}>{objective}</li>
              )
            )}
          </ul>
        </TableCell>
      </TableRow>
    );
  };

  const renderPolicyProcedure = () => {
    return (
      <TableRow>
        <TableCell>Police Procedures</TableCell>
        <TableCell sx={{ p: 0, borderLeft: '1px solid rgba(81, 81, 81, 1)' }}>
          <TableRow>
            <TableCell>Attendance Police</TableCell>
            <TableCell>
              {response?.policies_procedures?.attendance_policy}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Late Submission Policy</TableCell>
            <TableCell>
              {response?.policies_procedures?.late_submission_policy}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={styles.lastRowCellProps}>Academic Honesty</TableCell>
            <TableCell sx={styles.lastRowCellProps}>
              {response?.policies_procedures?.academic_honesty}
            </TableCell>
          </TableRow>
        </TableCell>
      </TableRow>
    );
  };

  const renderCourseContent = () => {
    return (
      <TableRow>
        <TableCell>Course Content</TableCell>
        <TableCell sx={{ p: 0, borderLeft: '1px solid rgba(81, 81, 81, 1)' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Unit Time</TableCell>
                <TableCell>Unit Time Value</TableCell>
                <TableCell>Topic</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {response?.course_content?.map((row, index) => (
                <TableRow key={index}>
                  <TableCell
                    sx={
                      index + 1 === response?.course_content?.length && {
                        ...styles.lastRowCellProps,
                      }
                    }
                    style={{ textTransform: 'capitalize' }}
                  >
                    {row.unit_time}
                  </TableCell>
                  <TableCell
                    sx={
                      index + 1 === response?.course_content?.length &&
                      styles.lastRowCellProps
                    }
                  >
                    {row.unit_time_value}
                  </TableCell>
                  <TableCell
                    sx={
                      index + 1 === response?.course_content?.length &&
                      styles.lastRowCellProps
                    }
                  >
                    {row.topic}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableCell>
      </TableRow>
    );
  };

  const renderLearningOutcomes = () => {
    return (
      <TableRow>
        <TableCell>Learning Outcomes</TableCell>
        <TableCell>
          <ul>
            {response?.course_description_objectives.intended_learning_outcomes.map(
              (outcome, index) => (
                <li key={index}>{outcome}</li>
              )
            )}
          </ul>
        </TableCell>
      </TableRow>
    );
  };

  const renderGradingCriteria = () => {
    return (
      <TableRow>
        <TableCell>Assessment Grading Criteria</TableCell>
        <TableCell sx={{ p: 0, borderLeft: '1px solid rgba(81, 81, 81, 1)' }}>
          <TableRow sx={{ p: 0 }}>
            <TableCell>Assessment Methods</TableCell>
            <TableCell>
              <ul>
                {response?.assessment_grading_criteria.assessment_methods.map(
                  (method, index) => (
                    <li key={index}>
                      {method?.type_assessment}: Weight {method?.weight}
                    </li>
                  )
                )}
              </ul>
            </TableCell>
          </TableRow>
          <TableRow sx={{ p: 0 }}>
            <TableCell>Grading Scale</TableCell>
            <TableCell>
              <ul>
                {Object.keys(
                  response?.assessment_grading_criteria.grading_scale
                ).map((scale, index) => (
                  <li key={index}>
                    {scale}:{' '}
                    {response?.assessment_grading_criteria.grading_scale[scale]}
                  </li>
                ))}
              </ul>
            </TableCell>
          </TableRow>
        </TableCell>
      </TableRow>
    );
  };

  const renderLearningResources = () => {
    return (
      <TableRow>
        <TableCell>Learning Resources</TableCell>
        <TableCell>
          <ul>
            {response?.learning_resources.map((resource, index) => (
              <li key={index}>
                {resource?.title} {`(${resource?.year})`} - {resource?.author}
              </li>
            ))}
          </ul>
        </TableCell>
      </TableRow>
    );
  };

  const renderCourseSchedule = () => {
    return (
      <TableRow>
        <TableCell sx={styles.lastRowCellProps}>Course Schedule</TableCell>
        <TableCell
          sx={{
            ...styles.lastRowCellProps,
            p: 0,
            borderLeft: '1px solid rgba(81, 81, 81, 1)',
          }}
        >
          {response?.course_schedule.map((schedule, index) => (
            <TableRow key={index}>
              <TableCell
                style={{ textAlign: 'center' }}
                sx={
                  index + 1 === response?.course_schedule?.length &&
                  styles.lastRowCellProps
                }
              >
                Week {schedule.unit_time_value}
              </TableCell>
              <TableCell
                style={{
                  padding: 0,
                  borderLeft: '1px solid rgba(81, 81, 81, 1)',
                }}
                sx={
                  index + 1 === response?.course_schedule?.length &&
                  styles.lastRowCellProps
                }
              >
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>{schedule.date}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Topic</TableCell>
                  <TableCell>{schedule.topic}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={styles.lastRowCellProps}>
                    Activity Description
                  </TableCell>
                  <TableCell sx={styles.lastRowCellProps}>
                    {schedule.activity_desc}
                  </TableCell>
                </TableRow>
              </TableCell>
            </TableRow>
          ))}
        </TableCell>
      </TableRow>
    );
  };

  return (
    <Fade in>
      <Grid {...styles.mainGridProps}>
        <TableContainer
          component={Paper}
          sx={{ background: 'none', boxShadow: 'none' }}
        >
          <Table sx={{ background: 'none' }}>
            <TableHead>
              <TableRow>
                <TableCell>Section</TableCell>
                <TableCell>Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {renderCourseTitle()}
              {renderGradeLevel()}
              {renderDescription()}
              {renderObjectives()}
              {renderLearningOutcomes()}
              {renderCourseContent()}
              {renderPolicyProcedure()}
              {renderGradingCriteria()}
              {renderLearningResources()}
              {renderCourseSchedule()}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Fade>
  );
};

export default SyllabusGeneratorResponse;
