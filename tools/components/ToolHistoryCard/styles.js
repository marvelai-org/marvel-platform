const styles = {
  mainGridProps: {
    container: true,
    item: true,
    desktopLarge: 6,
    laptop: 8,
  },
  cardProps: {
    elevation: 1,
    sx: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      position: 'relative',
      height: '150px',
      width: '600px',
      borderRadius: '15px',
      overflow: 'hidden',
      flexDirection: 'column',
      background: (theme) => theme.palette.Common.White['100p'],
    },
  },
  toolDetailsGridProps: {
    position: 'relative',
    container: true,
    item: true,
    mobileSmall: 12,
    height: '100%',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  titleProps: {
    fontFamily: 'Satoshi Bold',
    fontSize: '18px',
    color: (theme) => theme.palette.Common.Black['100p'],
    sx: {
      display: '-webkit-box',
      WebkitLineClamp: 1,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
      width: 'calc(100% - 160px)',
    },
  },
  contentGridProps: {
    container: true,
    item: true,
    mobileSmall: true,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    px: 2.5,
    py: 1.5,
  },
  descriptionProps: {
    fontFamily: 'Satoshi Regular',
    fontSize: '12px',
    color: (theme) => theme.palette.Common.Black['100p'],
    sx: {
      display: '-webkit-box',
      WebkitLineClamp: 1,
      overflow: 'hidden',
      WebkitBoxOrient: 'vertical',
      width: 'calc(100% - 160px)',
    },
  },
  imageProps: {
    width: 60,
    height: 60,
  },
  imageGridProps: (backgroundImageUrl) => ({
    position: 'relative',
    container: true,
    item: true,
    alignItems: 'center',
    justifyContent: 'center',
    sx: {
      backgroundColor: '#007BFF',
      backgroundImage: backgroundImageUrl
        ? `url(${backgroundImageUrl})`
        : 'none',
      backgroundSize: 'cover',
      width: '160px',
      height: '100%',
    },
  }),
  previewButtonProps: {
    sx: {
      fontFamily: 'Satoshi Regular',
      fontSize: '12px',
      backgroundColor: '#4900E4',
      borderRadius: '58px',
      color: 'white',
      textTransform: 'none',
      marginTop: '10px',
      '&:hover': {
        backgroundColor: '#5E3CFF',
        color: 'white',
      },
    },
  },
  dateProps: {
    fontFamily: 'Satoshi Regular',
    fontSize: '8px',
    backgroundColor: '#AFF2DA',
    borderRadius: '58px',
    color: '#00976C',
    padding: '7px',
    textTransform: 'none',
  },
};

export default styles;
