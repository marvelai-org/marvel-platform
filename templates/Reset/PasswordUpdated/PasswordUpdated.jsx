import { Grid, Link, Typography, useTheme } from '@mui/material';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/router';

import GradientOutlinedButton from '@/components/GradientOutlinedButton';

import styles from './styles';

import ROUTES from '@/libs/constants/routes';

import { auth } from '@/libs/redux/store';

const PasswordUpdated = () => {
  const router = useRouter();
  const theme = useTheme();

  const handleGoToSignIn = () => {
    router.push(ROUTES.SIGNIN).then(() => {
      if (auth.currentUser) signOut(auth);
    });
  };

  const renderTitle = () => {
    return (
      <Grid {...styles.titleGridProps}>
        <Typography {...styles.titleProps}>Password Updated</Typography>
      </Grid>
    );
  };

  const renderMessage = () => {
    return (
      <Grid {...styles.messageGridProps}>
        <Typography {...styles.bodyMsgProps}>
          Your password has been changed successfully.
        </Typography>
      </Grid>
    );
  };

  const renderResendButton = () => {
    return (
      <Grid {...styles.buttonGridProps}>
        <GradientOutlinedButton
          bgcolor={theme.palette.Dark_Colors.Dark[1]}
          textColor={theme.palette.Common.White['100p']}
          text="Login"
          clickHandler={handleGoToSignIn}
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
      <Grid {...styles.contentGridProps}>
        {renderTitle()}
        {renderMessage()}
        {renderResendButton()}
        {renderContactHelp()}
      </Grid>
    </Grid>
  );
};

export default PasswordUpdated;
