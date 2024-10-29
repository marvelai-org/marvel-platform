const styles = {
  titleProps: {
    variant: 'h4',
    gutterBottom: true,
    fontSize: '32px',
  },
  descriptionProps: {
    mb: 4,
    fontSize: '20px',
    fontWeight: '300',
  },
  titleGrid: {
    textAlign: 'center',
    marginTop: '20%',
    marginBottom: '10%',
  },
  topGrid: {
    display: 'flex',
  },
  bottomGrid: {
    display: 'flex',
    marginBottom: '20px',
  },
  continueButton: {
    type: 'submit',
    variant: 'contained',
    fullWidth: true,
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
  labelProps: {
    variant: 'h6',
    marginLeft: '10%',
    color: 'white',
  },
  checkbox: {
    height: '30px',
    width: '30px',
    marginBottom: '2%',
    color: '#8065ff',
    border: '2px solid white',
    boxSizing: 'border-box',
    borderRadius: '50%',
  },
  uncheckBox: {
    height: '30px',
    width: '30px',
    marginBottom: '2%',
    color: '#444154',
    backgroundColor: '#444154',
    border: '2px solid #8065ff',
    boxSizing: 'border-box',
    borderRadius: '50%',
  },
  divider: {
    sx: {
      marginTop: '10px',
      marginBottom: '10px',
      color: 'gray',
      height: '4px',
    },
  },
};

export default styles;
