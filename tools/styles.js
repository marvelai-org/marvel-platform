const styles = {
  mainGridProps: {
    container: true,
    item: true,
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: 'auto',
    rowGap: 5,
    py: { laptop: 1, desktop: 1.5, desktopMedium: 2 },
    sx: {
      width: '800px',
    },
  },
  backButtonGridProps: {
    container: true,
    item: true,
    mobileSmall: 12,
    height: 'auto',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  titleProps: {
    fontFamily: 'Satoshi Bold',
    fontSize: '36px',
  },
  subtitleProps: {
    fontFamily: 'Satoshi Regular',
    fontSize: '18px',
  },
  highlightTextProps: {
    component: 'span',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    color: (theme) => theme.palette.primary.main,
  },
  outlinedButtonProps: {
    color: 'purple',
    extraProps: {
      padding: '2px',
      height: { laptop: '40px', desktop: '42px', desktopMedium: '45px' },
      borderRadius: '8px',
    },
    extraButtonProps: {
      fontFamily: 'Satoshi Bold',
      fontSize: { laptop: '14px', desktop: '15px', desktopMedium: '16px' },
      px: { laptop: 1, desktop: 2, desktopMedium: 3 },
      color: '#AC92FF !important',
      borderRadius: '6px',
    },
  },
};

export default styles;
