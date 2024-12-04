const styles = {
  sectionTitle: {
    fontFamily: 'Satoshi Medium',
    fontSize: { laptop: '20px', desktop: '24px' },
  },
  questionTextProps: {
    fontFamily: 'Satoshi Regular',
    fontSize: 'inherit',
  },
  questionGridProps: {
    container: true,
    item: true,
    gap: 1.5,
    ml: 2.5,
    mobileSmall: 12,
    fontSize: { laptop: '16px', desktop: '18px' },
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  questionsGridProps: {
    container: true,
    item: true,
    mobileSmall: 12,
    justifyContent: 'flex-start',
    alignItems: 'center',
    rowGap: 1.5,
  },
  highlightTextProps: {
    component: 'span',
    sx: { fontFamily: 'Satoshi Bold', fontSize: 'inherit' },
  },
};

export default styles;
