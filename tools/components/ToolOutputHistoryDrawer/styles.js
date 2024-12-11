const styles = {
  drawerProps: {
    sx: {
      '& .MuiDrawer-paper': {
        width: '45%',
        background: (theme) => theme.palette.common.white,
      },
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      flexDirection: 'column',
      rowGap: 3,
    },
    anchor: 'right',
  },
  mainGridProps: {
    container: true,
    item: true,
    mobileSmall: true,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    rowGap: 3,
    padding: 3,
  },
  titleProps: {
    fontFamily: 'Satoshi Bold',
    fontSize: '36px',
    color: 'black',
  },
  categoryTitleProps: {
    fontFamily: 'Satoshi Bold',
    fontSize: '24px',
    color: 'black',
    mt: '10px',
  },
  categoryContentProps: {
    fontFamily: 'Satoshi',
    fontSize: '18px',
    color: 'black',
    mt: '5px',
  },
  questionProps: {
    fontFamily: 'Satoshi Bold',
    fontSize: '20px',
    color: 'black',
  },
  optionProps: {
    fontFamily: 'Satoshi',
    fontSize: '20px',
    color: 'black',
  },
  answerProps: {
    fontFamily: 'Satoshi',
    fontSize: '18px',
    color: 'black',
  },
  explanationProps: {
    fontFamily: 'Satoshi',
    fontSize: '18px',
    color: 'black',
  },
  flashCardsGridProps: {
    container: true,
    item: true,
    mobileSmall: 12,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 3,
  },
  flashCardGridProps: {
    container: true,
    item: true,
    gap: 2,
    mobileSmall: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    px: 6,
    py: 10,
    sx: {
      background: (theme) => theme.palette.common.white,
      borderRadius: '10px',
      border: (theme) => `2px solid ${theme.palette.grey[400]}`,
    },
  },
  conceptTitleProps: {
    fontFamily: 'Satoshi Bold',
    fontSize: { laptop: '18px', desktop: '20px' },
    color: 'black',
  },
  definitionProps: {
    fontFamily: 'Satoshi Regular',
    fontSize: { laptop: '18px', desktop: '20px' },
    textAlign: 'center',
    color: 'black',
  },
  containerGridProps: {
    item: true,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  headerGridProps: {
    container: true,
    item: true,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    pb: 1.5,
    sx: {
      borderBottom: (theme) => `2px solid ${theme.palette.grey[400]}`,
    },
  },
  dateProps: {
    fontFamily: 'Satoshi Regular',
    fontSize: '14px',
    backgroundColor: '#E0DFFB',
    borderRadius: '12px',
    color: '#4900E4',
    padding: '5px 10px',
    textTransform: 'none',
    marginBottom: '10px',
    display: 'inline-block',
    marginTop: '5px',
    alignSelf: 'flex-start',
    fontWeight: 'bold',
  },
  copyButton: {
    sx: {
      backgroundColor: '#EAE5F3',
      color: '#742696',
      borderRadius: '30px',
      marginRight: '8px',
      marginLeft: '8px',
      width: '120px',
    },
  },
  exportButton: {
    sx: {
      backgroundColor: '#EAE5F3',
      color: '#742696',
      borderRadius: '30px',
      marginLeft: '8px',
      marginRight: '8px',
      width: '120px',
    },
  },
  CopyIcon: {
    sx: {
      marginRight: '8px',
    },
  },
  downloadIcon: {
    sx: {
      marginRight: '8px',
    },
  },
};

export default styles;
