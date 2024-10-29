const styles = {
  mainGridProps: {
    container: true,
    width: '100%',
    padding: '12px',
    zIndex: 1001,
  },

  blurredBackground: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(15px)',
    zIndex: 1000,
  },
};

export default styles;
