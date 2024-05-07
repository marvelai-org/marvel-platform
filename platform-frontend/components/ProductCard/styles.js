const styles = {
  mainGridProps: (isMiddleCard) => ({
    item: true,
    desktopLarge: 4,
    desktop: 4,
    laptop: 6,
    tablet: 6,
    ...(isMiddleCard && { mt: { desktop: 6, laptop: 0 } }),
    minWidth: { mobileSmall: 290, laptop: 0 },
    maxWidth: { mobileSmall: 330, tablet: 'none' },
    height: 'auto',
  }),
  outerCardGridProps: (isActive) => ({
    container: true,
    item: true,
    justifyContent: 'center',
    alignItems: 'center',
    mobileSmall: 12,
    padding: '3.5px',
    borderRadius: '20px',
    sx: {
      background: (theme) =>
        isActive ? theme.palette.Background.gradient.blue2 : 'transparent',
    },
  }),
  mainCardGridProps: {
    container: true,
    position: 'relative',
    borderRadius: '18px',
    height: '100%',
    overflow: 'hidden',
    sx: {
      background: '#0D1014',
    },
  },
  imageGridProps: {
    position: 'relative',
    container: true,
    item: true,
    mobileSmall: 12,
    height: { mobileSmall: 220 },
    overflow: 'hidden',
  },
  imageProps: {
    layout: 'fill',
    objectFit: 'cover',
  },
  contentGridProps: {
    container: true,
    item: true,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    mobileSmall: 12,
    padding: 3,
  },
  titleGridProps: {
    container: true,
    item: true,
    flexDirection: 'column',
    mobileSmall: 12,
    mb: 2,
  },
  titleProps: (title) => ({
    fontSize: { laptop: 22, desktop: 18, desktopMedium: 22 },
    lineHeight: '32px',
    fontFamily: 'Ethnocentric Regular Italics',
    textTransform: 'uppercase',
    sx: {
      position: 'absolute',
      top: 185,
      left: 24,
      transform: 'translateY(50%)',
      zIndex: 2,
      '::before': {
        content: `"${title}"`,
        position: 'absolute',
        WebkitTextStroke: '10px #000',
        left: 0,
        zIndex: '-1',
      },
    },
  }),
  descriptionProps: {
    fontFamily: 'Satoshi Regular',
    fontSize: '14px',
    lineHeight: '25px',
    color: (theme) => theme.palette.Greyscale[600],
  },
  priceGridProps: {
    container: true,
    item: true,
    mobileSmall: 12,
    my: 2,
  },
  priceProps: {
    fontFamily: 'Ethnocentric Regular Italics',
    fontSize: 24,
    lineHeight: '120%',
    sx: {
      color: (theme) => theme.palette.Background.green,
      width: '100%',
      span: {
        fontFamily: 'Satoshi Bold',
        fontSize: 16,
        color: (theme) => theme.palette.Greyscale[600],
      },
    },
  },
  descriptionGridProps: {
    container: true,
    item: true,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    mobileSmall: 12,
    padding: 3,
    rowGap: 4,
    sx: {
      border: '1px solid #999',
      borderRadius: '12px',
    },
  },
  descriptionTitleGridProps: {
    container: true,
    item: true,
    mobileSmall: 12,
  },
  descriptionTitleProps: {
    fontFamily: 'Satoshi Bold',
    fontSize: { mobileSmall: 22, desktop: 18, desktopMedium: 22 },
    lineHeight: '20px',
  },
  detailTextProps: {
    fontFamily: 'Satoshi Bold',
    fontSize: { mobileSmall: 16, desktopMedium: 18 },
    lineHeight: '20px',
    width: { laptop: 'auto', desktop: '80%', desktopMedium: 'auto' },
    whiteSpace: 'pre-wrap',
  },
  detailGridProps: {
    container: true,
    item: true,
    justifyContent: 'flex-start',
    alignItems: 'center',
    mobileSmall: 12,
    columnGap: '12px',
  },
  buttonGridProps: {
    container: true,
    item: true,
    justifyContent: 'center',
    alignItems: 'center',
    mobileSmall: 12,
  },
  buttonProps: {
    fullWidth: true,
    color: 'blue2',
    inverted: true,
    extraProps: { padding: '2px', height: 'auto' },
    extraButtonProps: {
      fontFamily: 'Satoshi Bold',
      fontSize: { mobileSmall: '14px', laptop: '16px' },
      textTransform: 'capitalize',
      minWidth: '220px',
      px: 4,
    },
  },
  freePlanButtonProps: {
    bgcolor: '#181A20',
    color: 'blue2',
    extraProps: {
      width: '100%',
      height: {
        laptop: '38px',
        tablet: '28px',
        mobileSmall: '26px',
      },
    },
    extraButtonProps: {
      fontSize: { mobileSmall: '14px', laptop: '16px' },
      fontFamily: 'Satoshi Black',
      ':hover': {
        background: '#181A20 !important',
        cursor: 'default',
      },
    },
  },
};

export default styles;