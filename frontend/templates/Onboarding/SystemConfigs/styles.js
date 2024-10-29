const styles = {
  titleGrid: {
    textAlign: 'center',
    marginTop: '20%',
    marginBottom: '10%',
  },
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
  buttonProps: {
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
  mainGrid: {
    display: 'flex',
    marginBottom: '20px',
    alignItems: 'center',
  },
  labelProps: {
    variant: 'h6',
    marginRight: 'auto',
  },
  divider: {
    sx: {
      marginTop: '10px',
      marginBottom: '10px',
      height: '4px',
    },
  },
  boxSwitch: {
    height: '30px',
    width: '50px',
    backgroundColor: 'rgba(58,50,98,1)',
    borderRadius: '44%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px double rgba(58,50,98,1)',
  },
  switch: {
    size: 'large',
    sx: {
      '& .MuiSwitch-switchBase.Mui-checked': {
        color: 'rgba(128,101,266,1)',
      },
      '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
        backgroundColor: 'rgba(128,101,266,1)',
      },
      '& .MuiSwitch-switchBase': {
        color: 'rgba(103,99,129,1)',
      },
      '& .MuiSwitch-track': {
        backgroundColor: 'rgba(68,65,84,1)',
      },
    },
  },
};

export default styles;
