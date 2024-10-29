const styles = {
  input: {
    sx: (theme) => ({
      width: '100%',
      fontSize: { laptop: '16px', desktopMedium: '18px' },
      '.MuiInputBase-root': {
        height: { laptop: '50px', desktopMedium: '52px' },
        border: '1px solid #D7D7D7',
        borderRadius: '999px',
        background: 'transparent',
        color: '#BDBDBD',
        justifyContent: 'center',
        padding: '0 20px',
        gap: '10px',
      },
      span: {
        color: '#BDBDBD',
      },
      svg: {
        color: '#8065FF',
      },
      input: {
        fontFamily: 'Satoshi Bold',
        fontWeight: 700,
        padding: 0,
      },
      fieldset: {
        border: 'none',
      },
      '.MuiFormHelperText-root': {
        color: theme.palette.error.main,
        margin: '10px 20px 0',
        ...theme.typography.Components['Helper Text'],
      },
    }),
  },
  label: {
    sx: {
      fontFamily: 'Satoshi Bold',
      color: 'white',
      fontWeight: 700,
      textAlign: 'left',
      margin: '0 0 12px 20px',
    },
  },
};

export default styles;
