const styles = {
  iconButtonProps: {
    sx: {
      padding: '8px',
    },
  },
  buttonTextProps: {
    sx: {
      padding: '8px',
    },
  },
  menuListProps: {
    sx: {
      display: 'flex',
      flexDirection: 'row',
      padding: 1,
      margin: '15px',
    },
  },
  paperProps: {
    sx: {
      backgroundColor: 'transparent !important',
      boxShadow: 'none',
    },
  },
  menuItemProps: (disabled) => ({
    sx: (theme) => ({
      borderRadius: '18px',
      margin: '0 5px',

      borderColor: theme.palette.Background.purple3,
      background: theme.palette.Background.purple3,
      color: theme.palette.Common.White['100p'],
      textTransform: 'none',
      ':hover': {
        backgroundColor: disabled ? 'none' : '#B791FF',
        borderColor: disabled
          ? theme.palette.Background.purple3
          : theme.palette.Background.purple,
        color: disabled
          ? theme.palette.Common.White['60p']
          : theme.palette.Common.White['100p'],
      },
      padding: '5px 20px',
      opacity: disabled ? 0.5 : 1,
      cursor: disabled ? 'not-allowed' : 'pointer',

      fontSize: { laptop: '13px', desktop: '12px', desktopMedium: '14px' },
      pl: { laptop: 1, desktop: 1, desktopMedium: 1 },
      pr: { laptop: 1, desktop: 1, desktopMedium: 1 },
    }),
  }),
  discoveryContainerGrid: (show) => ({
    container: true,
    item: true,
    mobileSmall: true,
    position: 'absolute',
    top: -80,
    // left: 20,
    left: { laptop: -35, desktop: 20 },
    height: '90%',
    width: 'fit-content',
    display: show ? 'block' : 'none',
    backgroundColor: 'transparent !important',
  }),
  discoveryGridProps: {
    container: true,
    item: true,
    mobileSmall: true,
    rowGap: { laptop: 2, desktop: 4 },
    flexDirection: 'column',

    width: { desktopMedium: '37%', desktop: '37.5%', laptop: '100%' },
    sx: {
      transform: {
        laptop: 'scale(0.8 )',
        desktop: 'scale(0.8)',
        desktopMedium: 'scale(0.8)',
      },
      borderRadius: '15px',
      borderColor: '#B791FF',
    },
  },
  discoveryPanelProps: {
    sx: (theme) => ({
      px: 2,
      py: 2,
      background: theme.palette.Common.Black['100p'],
      borderRadius: '16px 16px 0 0',
      width: { desktop: '350px', mobile: '338px', mobileSmall: '330px' },
    }),
  },
  unionIconGridProps: {
    container: true,
    alignItems: 'center',
    sx: {
      width: { desktop: '350px', mobile: '338px', mobileSmall: '330px' },
      mt: { laptop: -1, desktop: -3 },
      px: 2,
      py: 2,
    },
  },
  unionIconTextProps: {
    sx: {
      mb: 1,
      color: '#9E94A5',
    },
  },
  discoveryIconProps: {
    sx: {
      fontSize: '24px',
    },
  },
  discoveryPanelTextProps: {
    sx: (theme) => ({
      mt: 1,
      mb: 1,
      color: theme.palette.Common.White['100p'],
    }),
  },
  avatarGridProps: {
    container: true,
    item: true,
    positive: 'relative',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    sx: (theme) => ({
      ml: 2,
      px: 2,
      py: 2,
      mt: { laptop: 1, desktop: -1 },
      background: theme.palette.Background.gradient.purple,
      borderRadius: '16px',
      width: { desktop: '320px', mobile: '308px', mobileSmall: '130px' },
      height: { desktop: '190px', mobile: '178px', mobileSmall: '170px' },
    }),
  },
  avatarHeaderTextProps: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  avatarSubTextProps: {
    fontSize: '11px',
  },
  avatarTextBoxProps: {
    item: true,
    alignItems: 'center',
    sx: (theme) => ({
      background: theme.palette.Background.gradient.grey,
      borderRadius: '5px',
      padding: '10px 15px 10px 25px',
      color: theme.palette.Common.White['100p'],
    }),
    right: { laptop: 240, desktop: 241 },
    top: { laptop: 40, desktop: 44 },
    position: 'relative',
    zIndex: 2,
    width: { laptop: '280px', desktop: '300px' },
    height: { laptop: '70px', desktop: '80px' },
  },

  avatarImageGridProps: {
    item: true,
    sx: {
      position: 'relative',
      top: { laptop: -14, desktop: -17 },
      right: { laptop: 3, desktop: -3 },
      svg: {
        transform: { laptop: 'scale(1.2)', desktop: 'scale(1.30)' },
      },
    },
  },
  starGroupIconGridProps: {
    item: true,
    sx: {
      position: 'relative',
      top: { laptop: -40, desktop: -44 },
      left: { laptop: 50, desktop: 60 },
    },
  },
  cardGridProps: {
    container: true,
    display: 'flex',
    alignItems: 'center',
    spacing: 1,
    width: { desktop: '320px', mobile: '308px', mobileSmall: '130px' },
    height: { laptop: '44vh', desktop: '42vh' },
    overflow: 'scroll',
    sx: {
      position: 'relative',
      top: { laptop: -5, desktop: -20, desktopMedium: -20 },
      right: { laptop: -25, desktop: -25, desktopMedium: -25 },
      pb: 1,
    },
  },
  cardProps: {
    sx: {
      backgroundColor: 'transparent',
      color: (theme) => `${theme.palette.Common.White['100p']}`,
      border: '2px solid #9E86FF',
      borderRadius: '8px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
      transition: '0.3s',
      '&:hover': {
        boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.2)',
      },
      width: { laptop: '142px', desktop: '148px' },
      height: { laptop: '150px', desktop: '150px' },
    },
  },
  cardTitleProps: {
    sx: {
      alignItems: 'center',
      fontSize: '11px',
      fontWeight: 'bold',
    },
  },
  cardDescriptionProps: {
    sx: (theme) => ({
      fontSize: '12px',
      color: theme.palette.Greyscale[400],
    }),
  },
  backImageProps: {
    width: '100%', // Adjust width as needed
    height: '100%', // Adjust height as needed
  },
  chatBoxGridProps: {
    container: true,
    item: true,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  chatBoxProps: {
    width: {
      laptop: '59%',
      desktop: '64%',
      desktopMedium: '70%',
      desktopLarge: '75%',
    },
    sx: {
      position: 'relative',
      top: { laptop: 80, desktop: 70, desktopMedium: 60 },
      left: { laptop: 340, desktop: 350, desktopMedium: 350 },
    },
  },
  CenterChatContentGridProps: {
    sx: {
      overflow: 'scroll',
      height: { laptop: '500px', desktop: '700px' },
      width: {
        laptop: '50%',
        desktop: '60%',
        desktopMedium: '65%',
        desktopLarge: '72%',
      },
      left: { laptop: 200, desktop: 200 },
    },
  },
  starIconProps: {
    item: true,
    sx: {
      position: 'relative',
      top: { laptop: 62, desktop: 64 },
      left: { laptop: 95, desktop: 105 },
    },
  },
};
export default styles;
