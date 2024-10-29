import { Grid, InputLabel } from '@mui/material';

import styles from './styles';

/**
 * Renders a wrapper component for input elements that provides a label and optional asterisk for required fields.
 *
 * @param {Object} props - The props for the component.
 * @param {string} props.label - The label text to be displayed above the input field.
 * @param {boolean} props.required - Indicates if the input field is required. An asterisk will be displayed if true.
 * @param {React.ReactNode} props.children
 *
 * @returns {JSX.Element} The rendered `InputWrapper` component.
 */
const InputWrapper = (props) => {
  const { label, required, children } = props;
  return (
    <Grid>
      <InputLabel {...styles.label}>
        {label} {required && '*'}
      </InputLabel>
      {children}
    </Grid>
  );
};

export default InputWrapper;
