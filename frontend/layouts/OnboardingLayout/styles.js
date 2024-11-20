// styles.js

const styles = {
  mainContainer: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: '80px',
    paddingBottom: '80px',
    sx: {
      background: (theme) => {
        return theme.palette.Background.primary;
      },
    },
  },
  headerContainer: {
    width: '100%',
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
  },
  contentContainer: {
    paddingTop: '50px',
    paddingBottom: '80px',
    margin: '0 auto',
    paddingLeft: '15%',
    paddingRight: '15%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    textAlign: 'center',
    background: 'transparent',
    boxSizing: 'border-box',
  },
};

export default styles;
