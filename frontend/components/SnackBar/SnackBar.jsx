import { Alert, Snackbar } from '@mui/material';

/**
 * Renders a Snackbar component with alert messages.
 *
 * @return {ReactElement} The rendered Snackbar component.
 */
const SnackBar = (props) => {
  const { open, handleClose, message, severity, customStyles } = props;

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert 
        severity={severity} 
        onClose={handleClose} 
        sx={customStyles ? customStyles.alertStyles : {}}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackBar;