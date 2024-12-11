import { useContext, useEffect, useState } from 'react';

import { Grid, Typography, useTheme } from '@mui/material';
import { useSelector } from 'react-redux';

import GradientOutlinedButton from '@/components/GradientOutlinedButton';

import RocketIcon from '@/assets/svg/rocket.svg';

import styles from './styles';

import ALERT_COLORS from '@/libs/constants/notification';

import { AuthContext } from '@/libs/providers/GlobalProvider';
import { sendVerification } from '@/libs/services/user/manageUser';

const VerifyEmailPage = (props) => {
  const { email } = props;

  const theme = useTheme();

  const [loading, setLoading] = useState(false);
  const [seconds, setSeconds] = useState(60);
  const { handleOpenSnackBar } = useContext(AuthContext);
  const { data: authData } = useSelector((state) => state.auth);

  useEffect(() => {
    let interval;

    if (authData && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (seconds <= 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [seconds]);

  const handleResend = async () => {
    try {
      setLoading(true);
      await sendVerification(authData);
      handleOpenSnackBar(ALERT_COLORS.SUCCESS, 'Email verification sent');
    } catch (error) {
      handleOpenSnackBar(
        ALERT_COLORS.ERROR,
        'Error sending email verification'
      );
    } finally {
      setLoading(false);
      setSeconds(60);
    }
  };

  const renderHeader = () => {
    return (
      <Grid {...styles.headerGridProps}>
        <Typography {...styles.headerProps}>Confirm Your Email</Typography>
      </Grid>
    );
  };

  const renderMainMsg = () => {
    return (
      <Grid {...styles.textGridProps}>
        <Typography {...styles.mainMsgProps}>
          We sent an email to{' '}
          <Typography {...styles.emailProps}>{email}</Typography>
        </Typography>
      </Grid>
    );
  };

  const renderBodyMsg = () => {
    return (
      <Grid desktopMedium={9} desktop={8} laptop={7} {...styles.textGridProps}>
        <Typography {...styles.bodyMsgProps}>
          Please confirm your email address by clicking the link we just sent to
          your inbox.
        </Typography>
      </Grid>
    );
  };

  const renderIcon = () => {
    return (
      <Grid item container justifyContent="center" alignItems="center">
        <RocketIcon />
      </Grid>
    );
  };

  const renderMessage = () => {
    return (
      <Grid {...styles.messageGridProps}>
        {renderMainMsg()}
        {renderBodyMsg()}
      </Grid>
    );
  };

  const renderResendButton = () => {
    return (
      <Grid {...styles.buttonGridProps}>
        <GradientOutlinedButton
          bgcolor={theme.palette.Dark_Colors.Dark[1]}
          text={`Resend Verification Email ${
            authData && seconds > 0 ? `${seconds}s` : ''
          }`}
          textColor={theme.palette.Common.White['100p']}
          disabled={seconds > 0 || !authData}
          loading={loading}
          clickHandler={handleResend}
          {...styles.submitButtonProps}
        />
      </Grid>
    );
  };

  return (
    <Grid {...styles.mainGridProps}>
      <Grid {...styles.innerGridProps}>
        {renderHeader()}
        {renderIcon()}
        {renderMessage()}
        {renderResendButton()}
      </Grid>
    </Grid>
  );
};

export default VerifyEmailPage;
