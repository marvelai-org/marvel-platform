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
    fontSize: { laptop: '24px', desktop: '28px' },
  },
  subTitleProps: {
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
  keyTitleProps: {
    fontSize: '20px',
    fontFamily: 'Satoshi Bold',
  },
  listItemProps: {
    sx: {
      fontFamily: 'Satoshi Regular',
      px: 2,
      py: 1,
      '&::before': { content: '"•"', marginRight: 1 },
    },
  },
};

export default styles;
