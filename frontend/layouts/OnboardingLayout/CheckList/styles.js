const styles = {
  gridProps: {
    item: true,
    display: 'flex',
    alignItems: 'center',
  },

  containerProps: {
    container: true,
    direction: 'column',
    display: 'flex',
    alignItems: 'center',
  },

  stepLabelProps: {
    marginTop: '8px',
    fontSize: '16px',
    color: '#fff',
  },

  stpConnector: (active, completed) => ({
    sx: {
      width: '100%',
      '&.MuiStepConnector-alternativeLabel': {
        top: 10,
        left: 'calc(-50% + 15px)',
        right: 'calc(50% + 15px)',
      },
      '& .MuiStepConnector-line': {
        borderColor: active || completed ? '#8653FF' : '#656277',
        borderTopWidth: 3,
        borderRadius: 1,
        width: '100%',
      },
    },
  }),

  stepperProps: {
    sx: { width: '100%' },
  },

  expandMoreProps: {
    sx: {
      backgroundColor: '#444154',
      borderRadius: '10px',
    },
  },

  accordionProps: {
    sx: {
      backgroundColor: '#181A20',
      width: '100%',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '#8653FF',
      borderRadius: '50px',
    },
  },

  accordionSummaryProps: {
    sx: {
      width: '614px',
      height: '50px',
      display: 'flex',
      borderTopLeftRadius: 'inherit',
      borderTopRightRadius: 'inherit',
    },
  },

  accordionDetailsProps: {
    sx: {
      borderBottomLeftRadius: 'inherit',
      borderBottomRightRadius: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: '16px',
    },
  },

  accordionDetailsGridProps: {
    rowGap: 5,
    sx: {
      borderTop: '1px solid #444154',
      display: 'flex',
      alignItems: 'center',
      columnGap: 1.5,
    },
  },

  stepCircle: {
    width: '21px',
    height: '21px',
    borderRadius: '50%',
    display: 'flex',
  },

  stepCircleCompleted: {
    width: '21px',
    height: '21px',
    borderRadius: '50%',
    display: 'flex',
    backgroundColor: '#8653FF',
  },

  stepCircleActive: {
    width: '21px',
    height: '21px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: '#8653FF',
    backgroundColor: '#444154',
  },

  stepCircleInactiveColor: '#656277',

  getStepCircleStyle: (isActive) => ({
    ...styles.stepCircle,
    backgroundColor: isActive
      ? styles.stepCircleActive
      : styles.stepCircleInactiveColor,
  }),
};

export default styles;
