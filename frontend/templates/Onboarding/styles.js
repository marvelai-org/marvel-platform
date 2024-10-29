const styles = {
  mainGrid: {
    maxWidth: 600,
    py: 4,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flexGrow: 1,
  },
  titleProps: {
    variant: 'h4',
    gutterBottom: true,
    fontSize: '32px',
  },
  descriptionProps: { mb: 4, fontSize: '20px', fontWeight: '300' },
  buttonProps: {
    type: 'submit',
    variant: 'contained',
    sx: {
      backgroundColor: '#8653FF',
      borderRadius: '30px',
      padding: '16px 82px',
      textTransform: 'none',
      fontSize: 20,
      color: '#fff',
      '&:hover': {
        backgroundColor: '#6e3aef',
      },
    },
  },
};

export default styles;
