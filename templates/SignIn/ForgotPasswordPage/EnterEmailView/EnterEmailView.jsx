import { useState } from 'react';

import { Grid, Link, Typography, useTheme } from '@mui/material';

import AuthTextField from '@/components/AuthTextField';
import GradientOutlinedButton from '@/components/GradientOutlinedButton';

import styles from './styles';

import { FORGOT_PASSWORD_STEPS } from '@/libs/constants/auth';

import useWatchFields from '@/libs/hooks/useWatchFields';

import { auth } from '@/libs/redux/store';
import AUTH_REGEX from '@/libs/regex/auth';
import { sendPasswordReset } from '@/libs/services/user/manageUser';

const DEFAULT_ERR_STATE = {
  email: false,
};

const WATCH_FIELDS = [
  {
    fieldName: 'email',
    regexPattern: AUTH_REGEX.email.regex,
  },
];

const EnterEmailView = (props) => {
  const { goBack, setEnteredEmail, setStep } = props;

  const theme = useTheme();

  const [error, setError] = useState(DEFAULT_ERR_STATE);
  const [loading, setLoading] = useState(false);

  const { control, fieldStates } = useWatchFields(WATCH_FIELDS);
  const { email } = fieldStates;

  const handleSubmit = () => {
    setLoading(true);
    return sendPasswordReset(auth, email.value)
      .then(() => {
        setEnteredEmail(email.value);
        setStep(FORGOT_PASSWORD_STEPS.CHECK_INBOX);
      })
      .catch(() => {
        setError({ email: { message: 'Could not send password reset' } });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const renderHeader = () => {
    return (
      <Grid {...styles.headerGridProps}>
        <Typography {...styles.headerProps}>Forgot Password</Typography>
      </Grid>
    );
  };

  const renderMessage = () => {
    return (
      <Grid {...styles.messageGridProps}>
        <Grid {...styles.textGridProps}>
          <Typography {...styles.bodyMsgProps}>
            🙌 Oops! Happens to the best of us. Type in the email you use for
            Marvel AI, and we&apos;ll swiftly send over a reset link.
          </Typography>
        </Grid>
      </Grid>
    );
  };

  const renderEmailInput = () => {
    return (
      <Grid {...styles.emailInputGridProps}>
        <AuthTextField
          id="email"
          label="Email Address"
          placeholderText="Email address"
          error={!!error.email}
          helperText={error.email?.message}
          control={control}
          state="text"
        />
      </Grid>
    );
  };

  const renderResendButton = () => {
    return (
      <Grid {...styles.buttonGridProps}>
        <GradientOutlinedButton
          bgcolor={theme.palette.Dark_Colors.Dark[1]}
          text="Request Password Reset"
          disabled={!email.valid || loading}
          loading={loading}
          clickHandler={handleSubmit}
          {...styles.submitButtonProps}
        />
      </Grid>
    );
  };

  const renderContactHelp = () => {
    return (
      <Grid {...styles.contentHelpGridProps}>
        <Typography>
          Having trouble logging in?{' '}
          <Link {...styles.linkProps}>Contact Help Center</Link>
        </Typography>
      </Grid>
    );
  };

  return (
    <Grid {...styles.mainGridProps}>
      {goBack}
      <Grid {...styles.innerGridProps}>
        {renderHeader()}
        {renderMessage()}
        {renderEmailInput()}
        {renderResendButton()}
        {renderContactHelp()}
      </Grid>
    </Grid>
  );
};

export default EnterEmailView;
