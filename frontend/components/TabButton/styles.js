const styles = {
  buttonProps: (isActive) => ({
    sx: {
      height: '34px',
      fontSize: '13px',
      borderRadius: '20px',
      border: `1.63px solid ${isActive ? '#FFF' : '#9D74FF'}`,
      color: isActive ? '#FFF' : '#9F86FF',
      background: isActive ? '#9E86FF' : '#24272F',
      textTransform: 'none',
      fontFamily: 'Satoshi Bold',
      padding: '6px 12px',
      '&:hover': {
        borderColor: isActive ? '#FFF' : '#9D74FF',
        color: isActive ? '#FFF' : '#9F86FF',
        background: isActive ? '#9E86FF' : '#24272F',
      },
    },
  }),
};

export default styles;
