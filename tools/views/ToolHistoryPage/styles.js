const styles = {
  mainGridProps: {
    container: true,
    item: true,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    rowGap: 5,
    px: { laptop: 4, desktop: 5, desktopMedium: 6 },
    py: { laptop: 1, desktop: 1.5, desktopMedium: 2 },
  },
  titleGridProps: {
    container: true,
    item: true,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  titleProps: {
    fontFamily: 'Satoshi Bold',
    fontSize: '36px',
  },
  emptyMessageGridProps: {
    container: true,
    item: true,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
    gap: 1,
  },
  emptyMessageProps: {
    fontFamily: 'Satoshi Regular',
    fontSize: '24px',
    textAlign: 'center',
    marginBottom: '30px',
  },
  emptyMessageButtonProps: {
    fontFamily: 'Satoshi Regular',
    fontSize: '28px',
    textAlign: 'center',
  },
  emptyMessageLinkProps: {
    fontFamily: 'Satoshi Regular',
    fontSize: '24px',
    textAlign: 'center',
    textTransform: 'none',
    color: (theme) => theme.palette.Greyscale[600],
    sx: {
      '&:hover': {
        cursor: 'pointer',
      },
    },
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
