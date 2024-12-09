const styles = {
  mainGridProps: {
    container: true,
    item: true,
    mobileSmall: 12,
    rowGap: 4,
    justifyContent: 'center',
    alignItems: 'center',
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
  questionsGridProps: {
    container: true,
    item: true,
    mobileSmall: 12,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 3,
  },
  questionGridProps: {
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
      background: '#0F0E14',
      border: '2px solid #1C1233',
      borderRadius: '20px',
      color: 'white',
    },
  },
  questionTitleProps: {
    fontFamily: 'Satoshi Bold',
    fontSize: { laptop: '18px', desktop: '20px' },
  },
  choiceProps: {
    fontFamily: 'Satoshi Regular',
    fontSize: { laptop: '18px', desktop: '20px' },
    textAlign: 'center',
  },
};

export default styles;
