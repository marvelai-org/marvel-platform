const styles = {
  selectInputProps: (
    expandMoreIcon,
    bgColor,
    color,
    renderPlaceholder,
    displayEmpty,
    extraInputProps
  ) => ({
    fullWidth: true,
    SelectProps: {
      displayEmpty,
      notched: false,
      IconComponent: expandMoreIcon,
      renderValue: (value) => renderPlaceholder(value),
      MenuProps: {
        MenuListProps: {
          sx: {
            background: '#23252A',
            color: 'white',
            columnGap: 1,
            maxHeight: '400px',
            li: {
              pl: 3,
            },
          },
        },
        PaperProps: {
          sx: (theme) => ({
            background: bgColor,
            color: 'black',
            '& .MuiMenuItem-root': {
              fontFamily: 'Satoshi Bold',
              fontSize: { laptop: '14px', desktop: '18px' },
              paddingLeft: '32px !important',
              '&:hover': {
                background: `${theme.palette.Background[color]}60`,
              },
            },
            '& .Mui-selected': {
              background: `${theme.palette.Background.gradient[color]} !important`,
              color: 'white',
            },
          }),
        },
      },
      sx: {
        svg: {
          display: 'block',
          mr: 1.8,
          color: (theme) => theme.palette.Greyscale[700],
          fontSize: '32px !important',
        },
        color: 'black',
      },
    },
    inputProps: {
      sx: {
        alignItems: 'flex-start',
        fontFamily: 'Satoshi Bold',
        pl: 3,
      },
    },
    sx: {
      fontSize: { laptop: '16px', desktopMedium: '18px' },
      '& .MuiOutlinedInput-root': {
        backgroundColor: bgColor,
        borderRadius: '5px',
      },
      '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        border: 'none',
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        border: 'none',
      },
      '& .MuiInputBase-root': {
        fontSize: { laptop: '14px', desktopMedium: '16px' },
        background: '#23252A',
        borderRadius: '15px',
        color: '#AC92FF',
        height: '50px',
        mt: 1,
      },
      '& .MuiSvgIcon-root': {
        color: '#AC92FF',
      },
      width: '100%',
      '& input::placeholder': {
        fontStyle: 'italic',
        color: (theme) => `${theme.palette.Background.gray} !important`,
        sx: {
          WebkitTextFillColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
      '& input::-webkit-input-placeholder': {
        fontStyle: 'italic',
        color: (theme) => `${theme.palette.Background.gray} !important`,
        sx: {
          WebkitTextFillColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
      notched: false,
      ...extraInputProps,
    },
  }),
  inputLabelProps: {
    shrink: true,
    sx: {
      position: 'relative',
      top: '8px',
      color: (theme) => `${theme.palette.Common.White['100p']} !important`,
      overflow: 'visible',
      transformOrigin: 'left',
      '.MuiTypography-root': {
        fontSize: { laptop: '18px', desktop: '20px' },
      },
    },
  },
  helperTextProps: (error) => ({
    error,
    sx: {
      fontFamily: 'Satoshi Regular',
      fontSize: { laptop: '12px', desktop: '14px' },
      color: (theme) => theme.palette.Common.Black['100p'],
    },
  }),
  placeholderProps: {
    fontStyle: 'italic',
    color: (theme) => theme.palette.Background.gray,
    fontFamily: 'Satoshi Bold',
    sx: {
      opacity: 0.5,
    },
  },
  selectedTextProps: {
    fontFamily: 'Satoshi Regular',
    fontSize: '16px',
  },
};

export default styles;
