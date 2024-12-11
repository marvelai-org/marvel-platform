import { Grid, Link, Typography, useTheme } from '@mui/material';

import GradientOutlinedButton from '@/components/GradientOutlinedButton';

import CartoonLetter from '@/assets/svg/CartoonLetter.svg';

import styles from './styles';

import { auth } from '@/libs/redux/store';

import { sendPasswordReset } from '@/libs/services/user/manageUser';

const CheckInbox = (props) => {
  const { goBack, enteredEmail } = props;

  const theme = useTheme();

  const handleResendEmail = () => {
    sendPasswordReset(auth, enteredEmail);
  };

  const renderResendButton = () => {
    return (
      <Grid {...styles.resendButtonGridProps}>
        <GradientOutlinedButton
          bgcolor={theme.palette.Dark_Colors.Dark[1]}
          text="Resend Email"
          clickHandler={handleResendEmail}
          {...styles.buttonProps}
        />
      </Grid>
    );
  };

  const renderResendText = () => {
    return (
      <Grid item>
        <Typography {...styles.resendTextProps}>
          Can’t find your email? If you can’t find the email in your inbox or
          spam folder, click below and we will send you a new one.
        </Typography>
      </Grid>
    );
  };

  const renderHeader = () => {
    return (
      <Grid {...styles.headerGridProps}>
        <Typography {...styles.headerProps}>Check Your Inbox</Typography>
      </Grid>
    );
  };

  const renderIcon = () => {
    return (
      <Grid {...styles.iconGridProps}>
        <Grid {...styles.iconContainerProps}>
          <CartoonLetter />
        </Grid>
      </Grid>
    );
  };

  const renderMessage = () => {
    return (
      <Grid {...styles.messageGridProps}>
        <Grid {...styles.textGridProps}>
          <Typography {...styles.bodyMsgProps}>
            We sent instructions to change your password to
            <Typography {...styles.emailTextProps}>{enteredEmail}</Typography>
          </Typography>
        </Grid>
      </Grid>
    );
  };

  const renderResend = () => {
    return (
      <Grid {...styles.resendGridProps}>
        {renderResendText()}
        {renderResendButton()}
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
        {renderIcon()}
        {renderMessage()}
        {renderResend()}
        {renderContactHelp()}
      </Grid>
    </Grid>
  );
};

export default CheckInbox;
