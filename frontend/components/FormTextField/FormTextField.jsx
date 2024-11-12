import { forwardRef } from 'react';

import { InputAdornment } from '@mui/material';
import { TextFieldElement } from 'react-hook-form-mui';

import styles from './styles';

/**
 * Renders a custom input text field component with configurable props.
 *
 * @param {object} props - The props object containing id, label, placeholderText, icon, error, and otherProps.
 * @return {JSX.Element} - Returns a TextFieldElement wrapped with additional input configuration.
 */
const FormTextField = forwardRef((props, ref) => {
  const {
    id,
    label,
    placeholderText,
    icon,
    helperText,
    error,
    control,
    state,
    ...otherProps
  } = props;

  const setFieldType = () => 'text';

  const renderPrimaryIcon = () => {
    return icon ? (
      <InputAdornment position="start" sx={styles.inputPrimaryIcon.sx}>
        {icon}
      </InputAdornment>
    ) : null;
  };

  const TextFieldElementConfig = {
    id,
    control,
    name: id,
    color: state,
    InputProps: {
      ...styles.inputProps(error, setFieldType, renderPrimaryIcon, state, icon),
      startAdornment: renderPrimaryIcon(),
    },
    InputLabelProps: styles.inputLabelProps(error, state),
    fullWidth: true,
    label,
    autoComplete: 'off',
    placeholder: placeholderText,
    FormHelperTextProps: { error },
    helperText: error ? helperText : null,
  };

  return (
    <TextFieldElement
      inputRef={ref}
      {...TextFieldElementConfig}
      {...otherProps}
    />
  );
});

export default FormTextField;
