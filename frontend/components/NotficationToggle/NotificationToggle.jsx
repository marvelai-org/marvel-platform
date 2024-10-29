import { Box, Divider, Grid, Switch, Typography } from '@mui/material';

import styles from './styles';

/**
 * A toggle component that displays a label and a switch.
 *
 * @param {string} label - The text to be displayed as the label.
 * @param {boolean} checked - The initial state of the switch.
 * @param {function} onChange - A callback function that is called when the switch is toggled.
 * @param {object} [labelStyle=styles.labelProps] - The styles to be applied to the label.
 * @param {object} [currentStyles=styles] - The styles to be applied to the component.
 * @param {boolean} [showDivider=true] - Whether to display a divider below the component.
 * @return {JSX.Element} The JSX element representing the toggle component.
 */
const NotificationToggle = (props) => {
  const {
    label,
    checked,
    onChange,
    labelStyle = styles.labelProps,
    currentStyles = styles,
    showDivider = true,
  } = props;
  return (
    <>
      <Grid {...currentStyles.mainGrid}>
        <Typography {...labelStyle}>{label}</Typography>
        <Box {...currentStyles.boxSwitch}>
          <Switch
            checked={checked}
            onChange={onChange}
            {...currentStyles.switch}
          />
        </Box>
      </Grid>
      {showDivider && <Divider {...currentStyles.divider} />}
    </>
  );
};

export default NotificationToggle;
