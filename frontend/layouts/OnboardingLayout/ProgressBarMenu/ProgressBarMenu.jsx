import { useState } from 'react';

import {
  Divider,
  Grid,
  List,
  ListItem,
  Step,
  StepLabel,
  Stepper,
  Typography,
  useTheme,
} from '@mui/material';
import StepConnector, {
  stepConnectorClasses,
} from '@mui/material/StepConnector';

import { styled } from '@mui/material/styles';

import StatusIcon from '@/templates/WelcomeScreen/StatusIcon';

import ArrowDropDown from '@/assets/svg/DropDown.svg';

import styles from './styles.js';

const getStatus = (activeStep, index) => {
  if (activeStep > index) return 'done';
  if (activeStep === index) return 'doing';
  return 'undo';
};

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    width: 140,
    position: 'static',
    marginRight: 8,
    marginLeft: 8,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.mode === 'dark' ? '#444154' : '#D4D4D7',
    borderTopWidth: 8,
    borderRadius: 11,
  },
}));
const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
  display: 'flex',
  height: 22,
  alignItems: 'center',
}));
function QontoStepIcon(props) {
  const { active, completed, className } = props;

  let status;
  if (completed) {
    status = 'done';
  } else if (active) {
    status = 'doing';
  } else {
    status = 'undo';
  }

  return (
    <QontoStepIconRoot className={className}>
      <StatusIcon status={status} />
    </QontoStepIconRoot>
  );
}

/**
 * Renders Stepmenu List
 *
 */
const ProgressBarMenu = (props) => {
  const { steps: propsSteps, activeStep } = props;

  const theme = useTheme();
  const [steps] = useState(
    propsSteps || [
      'Welcome',
      'Profile Setup',
      'System Configuration',
      'Final Steps',
    ]
  );
  const [isExpand, setIsExpand] = useState(false);

  const renderProgressBarExpand = () => {
    return (
      <Grid {...styles.progressBarExpandProps(isExpand)}>
        <List {...styles.expandListProps}>
          {steps.map((item, index) => (
            <div key={`expand-${index}`}>
              {' '}
              {/* Unique key for each item */}
              <Divider component="li" />
              <ListItem {...styles.listItemPros}>
                <StatusIcon status={getStatus(activeStep, index)} />
                &emsp;
                <Typography sx={{ color: 'text.primary' }}>{item}</Typography>
              </ListItem>
            </div>
          ))}
        </List>
      </Grid>
    );
  };

  return (
    <Grid {...styles.mainGridProps(isExpand)}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<QontoConnector />}
      >
        {steps.map((label, index) => (
          <Step key={`step-${index}`} {...styles.stepItemProps}>
            {' '}
            {/* Unique key for each Step */}
            <StepLabel
              StepIconComponent={QontoStepIcon}
              {...styles.stepLabelProps}
            />
          </Step>
        ))}
      </Stepper>
      &emsp;
      <ArrowDropDown
        {...styles.arrowIconProps(isExpand)}
        onClick={() => setIsExpand(!isExpand)}
      />
      {renderProgressBarExpand()}
    </Grid>
  );
};

export default ProgressBarMenu;
