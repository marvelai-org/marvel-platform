const styles = {
  textFieldLabelGridProps: {
    sx: {
      display: 'flex',
      alignItems: 'center',
    },
  },
  labelProps: (error) => ({
    error,
    sx: {
      color: error ? 'red' : 'white',
      fontFamily: 'Satoshi Bold',
      fontSize: { laptop: '14px', desktop: '16px' },
    },
  }),
  inputProps: (error, extraInputProps) => ({
    notched: false,
    error,
    autoComplete: 'off',
    sx: (theme) => ({
      fontFamily: 'Satoshi Bold',
      fontSize: { laptop: '14px', desktopMedium: '16px' },
      background: '#23252A',
      borderRadius: '15px',
      color: '#AC92FF',
      height: '50px',
      ...extraInputProps,
      transition: theme.transitions.create('all'),
      px: 1.5,
      fieldset: {
        transition: theme.transitions.create('all'),
      },
      '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
      },
      '& input::placeholder': {
        fontStyle: 'italic',
        color: theme.palette.Background.gray,
      },
      '& input::-webkit-input-placeholder': {
        fontStyle: 'italic',
        color: theme.palette.Background.gray,
      },
      'label + &': {
        marginTop: '10px',
      },
    }),
  }),
  inputLabelProps: (error) => ({
    error,
    shrink: true,
    sx: {
      top: '-14px',
      color: 'white !important',
      fontFamily: 'Satoshi Bold',
      overflow: 'visible',
      '.MuiTypography-root': {
        fontSize: { laptop: '18px', desktop: '20px' },
      },
    },
  }),
  helperTextProps: (isDescription, error) => ({
    error,
    sx: {
      hidden: !isDescription,
      fontFamily: 'Satoshi Regular',
      fontSize: { laptop: '12px', desktop: '14px' },
    },
  }),
};

export default styles;
