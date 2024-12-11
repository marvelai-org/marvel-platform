import { useContext, useState } from 'react';

import { Button, Grid, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';

import NotficationToggle from '@/components/NotficationToggle';

import styles from './styles';

import ALERT_COLORS from '@/libs/constants/notification.js';

import { AuthContext } from '@/libs/providers/GlobalProvider.jsx';
import { setTempData } from '@/libs/redux/slices/onboardingSlice.js';

const SystemConfigs = ({ onNext }) => {
  const dispatch = useDispatch();
  const { handleOpenSnackBar } = useContext(AuthContext);

  const [emailNotifications, setEmailNotifications] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [reminders, setReminders] = useState(false);
  const [theme, setTheme] = useState(false);

  const handleNext = () => {
    const notificationSettings = {
      emailNotifications,
      pushNotifications,
      reminders,
    };

    const systemConfigData = {
      theme,
      notificationSettings,
    };

    try {
      dispatch(setTempData(systemConfigData));
      onNext(systemConfigData);
    } catch (error) {
      handleOpenSnackBar(ALERT_COLORS.ERROR, 'Error saving configurations');
    }
  };

  const handleSwitchChange = (setState) => {
    setState((prev) => !prev);
  };

  const renderTitle = () => (
    <Grid {...styles.titleGrid}>
      <Typography {...styles.titleProps}>System Configurations</Typography>
      <Typography {...styles.descriptionProps}>
        We need some permissions to get you started
      </Typography>
    </Grid>
  );

  const renderSubmitButton = () => (
    <Grid>
      <Button onClick={handleNext} {...styles.buttonProps}>
        Finish
      </Button>
    </Grid>
  );

  return (
    <Grid>
      {renderTitle()}
      <NotficationToggle
        label="Enable Email Notifications"
        checked={emailNotifications}
        onChange={() => handleSwitchChange(setEmailNotifications)}
      />
      <NotficationToggle
        label="Enable Push Notifications"
        checked={pushNotifications}
        onChange={() => handleSwitchChange(setPushNotifications)}
      />
      <NotficationToggle
        label="Enable Reminders"
        checked={reminders}
        onChange={() => handleSwitchChange(setReminders)}
      />
      <NotficationToggle
        label="Theme Selection"
        checked={theme}
        onChange={() => handleSwitchChange(setTheme)}
        showDivider={false}
      />
      {renderSubmitButton()}
    </Grid>
  );
};

export default SystemConfigs;
