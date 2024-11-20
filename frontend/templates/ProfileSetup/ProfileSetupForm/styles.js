const styles = {
  mainContainer: {
    width: '100%',
    mb: 4,
  },
  title: {
    mb: 1,
    color: 'text.primary',
  },
  subtitle: {
    color: 'text.primary',
  },
  formSection: {
    display: 'flex',
    gap: 2,
    mb: 3,
  },
  fieldContainer: {
    flex: 1,
  },
  socialLinksSection: {
    mb: 3,
  },
  socialLinkErrorMessage: {
    mb: 2,
  },
  bioContainer: {
    position: 'relative',
    mb: 3,
  },
  bioTextField: {
    '& .MuiInputBase-root': {
      borderRadius: '8px',
      padding: '14px',
      minHeight: '150px',
    },
    '& .MuiOutlinedInput-root': {
      alignItems: 'flex-start',
      overflow: 'visible',
    },
    '& .MuiFormHelperText-root': {
      minHeight: '24px',
      marginTop: '4px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  },
  errorMessageBox: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    mt: 1,
  },
  errorMessage: {
    maxWidth: '70%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  charCount: {
    color: 'text.secondary',
    marginLeft: 'auto',
  },
  generalErrorMessage: {
    mb: 2,
  },
  submitButtonProps: {
    type: 'submit',
    color: 'purple',
    inverted: true,
    extraProps: {
      padding: '2px',
      height: { laptop: '54px', desktopMedium: '60px' },
      width: '100%',
    },
    extraButtonProps: {
      fontFamily: 'Satoshi Bold',
      fontSize: '16px',
      px: 4,
    },
  },
  typographyLabel: {
    marginLeft: '.5rem',
    fontSize: '14px',
    fontFamily: 'Satoshi Bold',
    color: '#D7D7D7',
    fontWeight: 500,
    mb: 1,
  },
};

export default styles;
