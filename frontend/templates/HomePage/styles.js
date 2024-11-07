const styles = {
  // Existing styles for the HomePage component
  mainGridProps: {
    container: true,
    item: true,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    rowGap: 5,
    px: { laptop: 4, desktop: 5, desktopMedium: 6 },
    py: { laptop: 1, desktop: 1.5, desktopMedium: 2 },
  },
  titleGridProps: {
    container: true,
    item: true,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  titleProps: {
    fontFamily: 'Satoshi Bold',
    fontSize: '36px',
  },
  subtitleProps: {
    fontFamily: 'Satoshi Regular',
    fontSize: '18px',
  },
  highlightTextProps: {
    component: 'span',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    color: (theme) => theme.palette.primary.main,
  },

  // Styles specific to the signup success notification
  snackBarContentRoot: {
    display: 'flex',
    alignItems: 'center',
    width: 'auto',
    minWidth: 'auto',
    padding: 0,
    position: 'relative', // Ensure relative positioning for the close button
  },
  alertStyles: {
    backgroundColor: '#E6E6FA', // Light lavender background
    border: '2px solid #6b3dbf', // Lavender border
    color: 'black', // Default text color set to black
    fontWeight: '500', // Medium bold letters
    padding: '16px 24px',
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    position: 'relative', // Position relative to place the close button correctly
  },
  signupTitleProps: {
    fontWeight: 'bold',
    color: '#6b3dbf', // Lavender color for the title
    margin: 0,
  },
  signupSubtitleProps: {
    color: 'black', // Black color for the subtitle
    margin: 0,
  },
  closeIconButton: {
    color: 'black', // Set the cross button color to black
    position: 'absolute',
    top: '8px',
    right: '8px', // Move the close button to the top right
    zIndex: 1, // Ensure the close button is on top
  },
  // Hide the default icon (green tick mark)
  alertStylesNoIcon: {
    '& .MuiAlert-icon': {
      display: 'none',
    },
  },
};

export default styles;