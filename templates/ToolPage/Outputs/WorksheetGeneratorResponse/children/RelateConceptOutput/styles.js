const styles = {
  sectionHighlightTitleProps: {
    component: 'span',
    fontFamily: 'Satoshi Bold',
    fontSize: 'inherit',
  },
  sectionTitle: {
    component: 'span',
    fontFamily: 'Satoshi Bold',
    fontSize: 'inherit',
  },
  questionTextProps: {
    fontFamily: 'Satoshi Regular',
    fontSize: 'inherit',
  },
  titleProps: {
    fontSize: '20px',
    display: 'flex',
    flexDirection: 'column',
  },
  questionGridProps: {
    container: true,
    item: true,
    gap: 1.5,
    ml: 2.5,
    mobileSmall: 12,
    fontSize: '16px',
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
  pairGroupProps: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
};

export default styles;
