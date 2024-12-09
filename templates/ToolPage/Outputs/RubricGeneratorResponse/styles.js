const styles = {
  mainGridProps: {
    container: true,
    item: true,
    mobileSmall: 12,
    rowGap: 4,
    px: 6,
    py: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '20px',
    sx: {
      background: '#0F0E14',
      border: '2px solid #1C1233',
      color: 'white',
    },
  },
  titleGridProps: {
    container: true,
    item: true,
    mobileSmall: 12,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  titleProps: {
    fontFamily: 'Satoshi Bold',
    fontSize: { laptop: '20px', desktop: '24px' },
  },
  gradeLevelProps: {
    fontFamily: 'Satoshi Medium',
    fontSize: { laptop: '18px', desktop: '20px' },
  },
  gridProps: {
    container: true,
    item: true,
    mobileSmall: 12,
    justifyContent: 'flex-start',
    alignItems: 'center',
    rowGap: 1.5,
  },
  questionGridProps: {
    container: true,
    item: true,
    gap: 1.5,
    mobileSmall: 12,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  questionTitleProps: {
    fontFamily: 'Satoshi Bold',
    fontSize: { laptop: '18px', desktop: '20px' },
  },
  choiceProps: {
    fontFamily: 'Satoshi Regular',
    fontSize: { laptop: '18px', desktop: '20px' },
  },
  keyTitleProps: {
    sx: {
      width: '100%',
      fontSize: '20px',
      fontFamily: 'Satoshi Bold',
    },
  },
  ideaTitleProps: {
    sx: {
      fontSize: '20px',
      fontWeight: 'bold',
      fontFamily: 'Satoshi Bold',
    },
  },
  listItemProps: {
    sx: {
      fontFamily: 'Satoshi Regular',
      '&::before': { content: '"•"', marginRight: 1 },
    },
  },
};

export default styles;
