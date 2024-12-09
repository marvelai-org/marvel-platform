const styles = {
  labelGridProps: {
    container: true,
    justifyContent: 'flex-start',
    alignItems: 'center',
    rowGap: 4,
    ml: 0,
  },
  labelProps: (error) => ({
    color: (theme) => (error ? theme.palette.error.main : 'inherit'),
    fontSize: { laptop: '24px', desktop: '26px' },
    fontFamily: 'Satoshi Bold',
  }),
  inputGridProps: {
    container: true,
    item: true,
    mobileSmall: 12,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
};

export default styles;
