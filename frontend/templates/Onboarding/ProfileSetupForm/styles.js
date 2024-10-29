const styles = {
  mainGrid: {
    width: 600,
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  flexContainer: {
    display: 'flex',
    gap: '24px',
    sx: {
      '& > div': {
        flex: 1,
      },
    },
  },
  socialLinksContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  imageUploadContainer: {
    sx: (theme) => ({
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: '10px',
      borderRadius: '24px',
      color: '#BDBDBD',
      height: '100px',
      width: '100%',
      border: '1px solid #D7D7D7',
      fontFamily: 'Satoshi Bold',
      'p, span': {
        fontFamily: 'Satoshi Bold',
        fontSize: '18px',
      },
      span: {
        color: theme.palette.primary.main,
      },
      'p:nth-of-type(2)': {
        fontSize: '14px',
      },
      '&:hover p': {
        color: '#BDBDBD',
      },
      input: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        opacity: '0',
        cursor: 'pointer',
      },
      '& > div > span': {
        marginRight: '20px',
        color: 'white',
        fontSize: '16px',
      },
    }),
  },
  imageUploadContainerFlex: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageProps: {
    width: 80,
    height: 80,
    objectFit: 'cover',
    style: { borderRadius: '10px' },
  },
  textarea: {
    sx: {
      width: '100%',
      fontSize: { laptop: '16px', desktopMedium: '18px' },
      border: '1px solid #D7D7D7',
      borderRadius: '24px',
      background: 'transparent',
      color: '#D7D7D7',
      justifyContent: 'center',
      '.MuiInputBase-root': {
        padding: '17px 20px',
      },
      textarea: {
        padding: '0',
        fontSize: '18px',
      },
      fieldset: {
        border: 'none',
      },
    },
  },
  wordLimit: {
    fontFamily: 'Satoshi Bold',
    fontWeight: 700,
    textAlign: 'right',
    mt: '12px',
    color: '#444154',
  },
  wordLimitError: (isError) => ({
    component: 'span',
    sx: {
      color: isError ? 'rgba(244, 67, 54, 1)' : 'white',
    },
  }),
};
export default styles;
