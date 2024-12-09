const styles = {
  mainGridProps: {
    sx: {
      width: '100%',
    },
  },
  inputProps: (error, extraInputProps, multiline) => ({
    notched: false,
    error,
    autoComplete: 'off',
    sx: (theme) => ({
      fontFamily: 'Satoshi Bold',
      fontSize: { laptop: '14px', desktopMedium: '16px' },
      ...(!multiline && {
        background: '#23252A',
        borderRadius: '15px',
        color: '#AC92FF',
      }),
      px: !multiline ? 1.5 : 0,
      height: '50px',
      ...extraInputProps,
      transition: theme.transitions.create('all'),
      fieldset: {
        transition: theme.transitions.create('all'),
      },
      textarea: {
        background: '#23252A',
        borderRadius: '15px',
        color: '#AC92FF',
        px: 3,
        pt: 1,
      },
      '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
      },
      [`& ${multiline ? 'textarea' : 'input'}::placeholder`]: {
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
  inputLabelProps: (error, extraInputLabelProps, multiline) => ({
    error,
    shrink: true,
    sx: {
      top: multiline ? '-24px' : '-8px',
      color: 'white !important',
      fontFamily: 'Satoshi Bold',
      overflow: 'visible',
      '.MuiTypography-root': {
        fontSize: { laptop: '18px', desktop: '20px' },
      },
      ...extraInputLabelProps,
    },
  }),
  helperTextProps: (isDescription, error) => ({
    error,
    sx: {
      hidden: !isDescription,
      fontFamily: 'Satoshi Regular',
      fontSize: { laptop: '12px', desktop: '14px' },
      ...(isDescription && {
        position: 'absolute',
        top: '-60px',
        left: '-10px',
        color: (theme) => theme.palette.Common.Black['100p'],
      }),
    },
  }),
};

export default styles;
