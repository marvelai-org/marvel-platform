const styles = {
  quickActionsMain: {
    sx: {
      marginBottom: '10px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '8px',
      gap: '12px',
      background: 'rgba(24, 26, 32, 0.87)',
      boxShadow: '0px 4px 144px rgba(172, 146, 255, 0.24)',
      borderRadius: '10px',
    },
  },
  quickActionsGridContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: '0px',
    gap: '8px',
  },
  quickAction: {
    item: true,
    sx: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '8px 12px',
      gap: '12px',
      background: '#24272F',
      border: '1px solid #24272F',
      borderRadius: '8px',
      flex: 'none',
      order: '0',
      flexGrow: '0',
      color: '#9E94A5',
      cursor: 'pointer',
      transition: 'all 0.2s ease-in',
      '&:hover': {
        color: '#9E86FF',
        borderColor: '#9E86FF',
        transform: 'scale(1.05)',
      },
    },
  },
  quickActionText: {
    sx: {
      fontFamily: 'Satoshi Medium',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '16px',
      lineHeight: '150%',
      display: 'flex',
      alignItems: 'center',
      flex: 'none',
      order: '0',
      flexGrow: '0',
    },
  },
};

export default styles;
