import { useState } from 'react';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Grid,
  IconButton,
  InputAdornment,
  Link,
  Typography,
  useTheme,
} from '@mui/material';
import { confirmPasswordReset } from 'firebase/auth';
import { useRouter } from 'next/router';

import GradientOutlinedButton from '@/components/GradientOutlinedButton';
import Loader from '@/components/Loader';
import ProfileInputField from '@/components/ProfileInputField';

import styles from './styles';

import ROUTES from '@/libs/constants/routes';

import useWatchFields from '@/libs/hooks/useWatchFields';

import { auth } from '@/libs/redux/store';
import AUTH_REGEX from '@/libs/regex/auth';

const WATCH_FIELDS = [
  {
    fieldName: 'password',
    regexPattern: AUTH_REGEX.password.regex,
  },
];

const DEFAULT_ERR_STATE = {
  password: false,
};

const ResetPassword = (props) => {
  const { handleSwitch } = props;

  const theme = useTheme();

  const router = useRouter();
  const {
    query: { oobCode },
  } = router;

  const [error, setError] = useState(DEFAULT_ERR_STATE);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { register, control, fieldStates } = useWatchFields(WATCH_FIELDS);
  const { password } = fieldStates;

  if (!oobCode) {
    router.push(ROUTES.HOME);
    return <Loader />;
  }

  const handleSubmit = () => {
    setLoading(true);
    return confirmPasswordReset(auth, oobCode, password.value)
      .then(() => {
        handleSwitch();
      })
      .catch(() => {
        setError({ email: { message: 'Could not reset password' } });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const renderVisibilityIcon = () => {
    return (
      <InputAdornment position="end">
        <IconButton
          aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
          edge="end"
        >
          {showPassword ? <Visibility /> : <VisibilityOff />}
        </IconButton>
      </InputAdornment>
    );
  };

  const renderTitle = () => {
    return (
      <Grid {...styles.titleGridProps}>
        <Typography {...styles.titleProps}>Reset Password</Typography>
      </Grid>
    );
  };

  const renderPasswordInput = () => {
    return (
      <Grid {...styles.inputGridProps}>
        <ProfileInputField
          id="password"
          label="Enter a New Password"
          name="password"
          placeholderText="New Password"
          error={!!error.password}
          helperText={error.password?.message}
          icon={renderVisibilityIcon()}
          showPassword={showPassword}
          control={control}
          ref={register}
          state={password.status}
          focused
        />
      </Grid>
    );
  };

  const renderResendButton = () => {
    return (
      <Grid {...styles.buttonGridProps}>
        <GradientOutlinedButton
          bgcolor={theme.palette.Dark_Colors.Dark[1]}
          text="Reset Password"
          disabled={!password.valid || loading}
          textColor={theme.palette.Common.White['100p']}
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
      <Grid {...styles.innerGridProps}>
        {renderTitle()}
        {renderPasswordInput()}
        {renderResendButton()}
        {renderContactHelp()}
      </Grid>
    </Grid>
  );
};

export default ResetPassword;
