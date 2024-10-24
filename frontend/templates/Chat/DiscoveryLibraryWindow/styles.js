const transition = 'all 0.2s ease-in';
const styles = {
  discoveryWindowContainer: {},

  chatInterface: {
    container: true,

    height: '100%',
    width: '100%',
    direction: 'row',
    alignItems: 'flex-end',
    sx: {
      flexWrap: 'nowrap',
      position: 'relative',
    },
  },

  discoveryLibrary: (isDiscoveryOpen) => ({
    item: true,
    flexGrow: isDiscoveryOpen ? 0.4 : 0,
  }),

  chatGridProps: (isDiscoveryOpen) => ({
    item: true,
    flexGrow: isDiscoveryOpen ? 0.7 : 1,
    transition: 'flex-grow 0.3s ease',
    width: isDiscoveryOpen ? '40%' : '100%',
    // transition: 'width 0.3s ease',
    // height:'100%', // to be commented
  }),

  centerChat: {
    centerChatGridProps: {
      position: 'relative',
      container: true,
      mobileSmall: true,
      flexDirection: 'column',
      // height: '80%', // to be removed
      justifyContent: 'center',
      zIndex: 0,
      px: { laptop: 2, desktop: 2.5, desktopMedium: 3 },
      sx: {
        overflowY: 'auto',
      },
    },

    messagesGridProps: {
      container: true,
      item: true,
      mobileSmall: 12,
      px: '3px',
      pb: '3px',
      mt: 0.5,
      height: '100%',
      justifyContent: 'flex-start',
      alignContent: 'flex-start',
      sx: {
        overflowY: 'auto',
      },
    },
  },

  bottomChatContent: {
    bottomChatContentGridProps: {
      container: true,
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      pt: { laptop: 2, desktop: 2.5, desktopMedium: 3 },
      px: { laptop: 2, desktop: 2.5, desktopMedium: 3 },
    },

    chatInputGridProps: (error) => ({
      position: 'relative',
      container: true,
      mobileSmall: 12,
      justifyContent: 'center',
      alignItems: 'center',
      height: '65px',
      padding: '2px',
      sx: {
        fieldSet: {
          display: 'none',
        },
        background: (theme) =>
          error ? theme.palette.error.main : 'transparent',
        borderRadius: '50px',
      },
    }),
    chatInputProps: (renderQuicKAction, renderSendIcon, error) => ({
      type: 'text',
      placeholder: !error && 'Send a message',
      autoComplete: 'off',
      sx: { width: '100%', height: '100%' },
      InputProps: {
        notched: false,
        sx: () => ({
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: '0px',
          gap: '20px',
          bgcolor: '#181A20',
          borderRadius: '50px',
          color: '#9E94A5',
          pl: { laptop: '6px', desktop: '10px' },
          pr: { laptop: '8px', desktop: '10px' },
          height: '100%',
          fontFamily: 'Satoshi Medium',
          fontSize: { laptop: '16px', desktop: '18px', desktopMedium: '20px' },
          whiteSpace: 'pre-wrap',
          lineHeight: '35px',
        }),
        endAdornment: renderSendIcon(),
        startAdornment: renderQuicKAction(),
      },
      FormHelperTextProps: {
        sx: {
          position: 'absolute',
          transform: 'translate(150px, 30%)',
          fontFamily: 'Satoshi Medium',
          fontSize: { mobileSmall: '16px', desktopMedium: '20px' },
          lineHeight: '35px',
        },
      },
    }),

    iconButtonProps: (disabled) => ({
      edge: 'end',
      'aria-label': 'toggle password visibility',
      sx: {
        width: { mobileSmall: 36, desktopMedium: 42 },
        height: { mobileSmall: 36, desktopMedium: 42 },
        mr: '2px',
        path: {
          fill: (theme) =>
            disabled
              ? `${theme.palette.Greyscale[700]} !important`
              : `${theme.palette.Background.green} !important`,
        },
        ':hover': {
          background: (theme) =>
            disabled
              ? 'none !important'
              : `${theme.palette.Common.Black['30p']} !important`,
        },
      },
    }),
  },

  newMessageButtonProps: {
    sx: (theme) => ({
      position: 'absolute',
      bottom: {
        laptop: theme.spacing(15),
        desktop: theme.spacing(17),
        desktopMedium: theme.spacing(18),
      },
      right: {
        laptop: theme.spacing(4),
        desktop: theme.spacing(6),
        desktopMedium: theme.spacing(8),
      },
      textTransform: 'capitalize',
      borderRadius: '50px',
      minWidth: '0px',
      color: 'white',
      border: '1px solid white',
      boxShadow: theme.customShadows.Elevation[4].boxShadow,
      background: theme.palette.primary.main,
      span: {
        marginRight: '0px',
        marginLeft: '0px',
      },
      ':hover': {
        boxShadow: 'none',
        color: 'white',
      },
    }),
  },

  quickActionButton: {
    sx: {
      padding: '12px 20px',
      cursor: 'pointer',
      background: '#AC92FF',
      borderRadius: '40px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '6px',
      flex: 'none',
      order: '0',
      flexGrow: '0',
      '&:hover': {
        backgroundColor: 'rgb(88,20,244)',
      },
    },
  },
  quickActionButtonAddIcon: {
    sx: {
      border: '2px solid white',
      borderRadius: '50%',
    },
  },

  cardGridProps: {
    container: true,
    item: true,
    mobileSmall: 12,
    mt: 6,
    // ml:15,
    // mr:15,
    width: { laptop: '442px', desktop: '448px' },
    // height: { laptop: '42px', desktop: '48px' },
    ml: { laptop: 5, desktop: 15 },
    mr: { laptop: 5, desktop: 15 },

    justifyContent: 'center',
    alignContent: 'flex-start',
    sx: {
      overflowY: 'auto',
    },
  },

  cardContent: {
    display: 'flex',
    container: true,
    mobileSmall: true,
    alignContent: 'center',
    justifyContent: 'space-between',
    height: { laptop: '75px', desktop: '80px' },
    px: '20px',
    py: '20px',
    ml: 3,
    mr: 3,
    sx: (theme) => ({
      borderRadius: '25px',
      border: '2px solid #9E86FF',
      background:
        'linear-gradient(180deg, rgba(169, 138, 244, 0.34) 0%, rgba(229, 192, 232, 0.34) 100%)',
      boxShadow: 'none',
      // transition: '0.3s',
      '&:hover': {
        boxShadow: 'none',
      },

      backgroundColor: 'transparent',
      color: theme.palette.Common.White['100p'],
    }),
  },

  cardTitleProps: {
    sx: {
      mt: 5,
      mb: 5,
      fontSize: '24px',
      fontWeight: 'bold',
    },
  },
  unionPurpleIcon: {
    item: true,
    sx: {
      position: 'relative',
      top: { laptop: 44, desktop: 44 },
      left: { laptop: -20, desktop: -10 },
    },
  },
};
export default styles;
