// styles.js

const styles = {
  dropzoneBox: {
    p: 2,
    textAlign: 'center',
    cursor: 'pointer',
    border: '2px dashed',
    borderColor: '#D7D7D7',
    borderRadius: 2,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '150px',
    backgroundColor: 'transparent',
  },
  previewImageContainer: (hasImage) => ({
    mt: 2,
    width: '100%',
    height: hasImage ? '200px' : 'auto', // Maintain height when image is loading/displayed, auto otherwise
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }),
  previewImage: {
    maxWidth: '100%',
    maxHeight: '200px',
    borderRadius: '50%',
  },
  loaderBox: {
    width: '100%',
    height: '200px', // Same height as the image container during loading
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorMessage: {
    mt: 2,
  },
  typographyLabel: {
    marginLeft: '.5rem',
    fontSize: '14px',
    fontFamily: 'Satoshi Bold',
    color: '#D7D7D7',
    fontWeight: 500,
    mb: 1,
  },
  uploadInstructions: {
    uploadLink: {
      cursor: 'pointer',
      textDecoration: 'underline',
      color: '#8065FF',
    },
  },
  modalStyle: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
    overflow: 'hidden',
  },
  cropContainer: {
    position: 'relative',
    width: '100%',
    height: 300,
    background: '#333',
    borderRadius: '50%',
    overflow: 'hidden',
  },
};

export default styles;
