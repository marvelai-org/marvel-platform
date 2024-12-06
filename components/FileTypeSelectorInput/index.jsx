import { forwardRef } from 'react';

import { Help } from '@mui/icons-material';
import { Grid, Tooltip, Typography } from '@mui/material';
import { useWatch } from 'react-hook-form-mui';

import PrimaryFileUpload from '@/components/PrimaryFileUpload';
import PrimarySelectorInput from '@/components/PrimarySelectorInput';
import PrimaryTextFieldInput from '@/components/PrimaryTextFieldInput';

import styles from './styles';

const URL_ONLY_TYPES = [
  'GOOGLE_DOCS',
  'GOOGLE_SHEETS',
  'GOOGLE_SLIDES',
  'GOOGLE_DRIVE',
  'URL',
  'youtube_url',
];

/**
 * FileTypeSelectorInput is a component that renders a file type selector input.
 *
 * @param {string} name - The name of the input field.
 * @param {string} label - The label for the input field.
 * @param {array} fileTypes - The array of file types that are available for selection.
 * @param {string} tooltip - The tooltip text that appears when the user hovers over the label.
 * @param {string} error - The error message that appears when the user has not selected a file type.
 * @param {string} helperText - The helper text that appears below the input field.
 * @param {function} setValue - The function that sets the value of the input field.
 * @param {function} getValues - The function that returns the values of the input fields.
 * @param {object} ref - The ref object that is passed to the input field.
 * @param {object} control - The control object that is passed to the input field.
 *
 * @returns A JSX element that renders a file type selector input.
 */
const FileTypeSelectorInput = forwardRef((props, ref) => {
  const {
    name,
    label,
    fileTypes,
    tooltip,
    error,
    helperText,
    setValue,
    getValues,
    control,
  } = props;

  const selectedFileType = useWatch({ control });
  const isUrlOnlyType = URL_ONLY_TYPES.includes(selectedFileType[name]);

  const renderLabel = (text) => (
    <Grid {...styles.labelGridProps}>
      <Typography {...styles.labelProps(error)}>{text}</Typography>
      {tooltip && (
        <Tooltip placement="top" title={tooltip} sx={{ ml: 1 }}>
          <Help />
        </Tooltip>
      )}
    </Grid>
  );

  const renderInputField = () => {
    if (isUrlOnlyType) {
      return (
        <Grid item {...styles.inputGridProps} mt={3}>
          <PrimaryTextFieldInput
            name={`${name}_url`}
            id={`${name}_url`}
            title={renderLabel('Type URL')}
            placeholder="Enter URL e.g http://..."
            control={control}
            error={error}
            helperText={helperText}
          />
        </Grid>
      );
    }

    return (
      <Grid item {...styles.inputGridProps}>
        <PrimaryFileUpload
          name={`${name}_file`}
          id={`${name}_file`}
          title={renderLabel('Upload File')}
          control={control}
          setValue={setValue}
          error={error}
          helperText={helperText}
          multiple
          placeholder="Choose Files to Upload"
          showChips
          showCheckbox
          displayEmpty
          ref={ref}
          getValues={() => getValues()}
          color="purple"
          bgColor="#23252A"
        />
      </Grid>
    );
  };

  return (
    <Grid container direction="column" rowGap={2}>
      <Grid item {...styles.inputGridProps}>
        <PrimarySelectorInput
          name={name}
          label={renderLabel(`Select ${label} Type`)}
          control={control}
          menuList={fileTypes.map((type) => ({
            id: type.key,
            label: type.label,
          }))}
        />
      </Grid>
      {renderInputField()}
    </Grid>
  );
});

export default FileTypeSelectorInput;
