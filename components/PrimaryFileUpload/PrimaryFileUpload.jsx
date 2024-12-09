import { forwardRef, useRef, useState } from 'react';

import { FileUploadOutlined } from '@mui/icons-material';
import { Chip, Grid, IconButton, Typography } from '@mui/material';
import { MultiSelectElement } from 'react-hook-form-mui';

import styles from './styles';

/**
 * Generates a reusable input text field component with a required title and an optional description.
 *
 * @param {object} props - The properties for the component.
 * @param {string} props.id - The id of the input field.
 * @param {string} props.placeholder - The placeholder text.
 * @param {string} props.title - The label on the input.
 * @param {string} props.color - The theme color of the input field.
 * @param {string} props.bgColor - The background color of the input component.
 * @param {array} props.menuList- The array of menu items that are needed in the drop down menu.
 * @param {boolean} props.showCheckbox - The flag to tell the component if the drop down menu has checkboxes.
 * @param {boolean} props.showChips - Determines whether to show chips.
 * @param {boolean} props.preserveOrder - Determines whether to preserve order.
 * @param {boolean} props.displayEmpty - Determines whether to display a value even if no items are selected..
 *
 * @return {JSX.Element} - The rendered profile input field component.
 */
const PrimaryFileUpload = forwardRef((props, ref) => {
  const {
    id,
    name,
    placeholder,
    title,
    color,
    bgColor,
    control,
    setValue,
    showCheckbox = false,
    showChips = true,
    multiple,
    error,
  } = props;

  const fileInputRef = useRef();

  const [files, setFiles] = useState([]);

  const handleCarouselFiles = (e) => {
    const selectedFiles = e.target.files;
    if (multiple) {
      setFiles((prevFiles) => {
        const arrayFiles = [...prevFiles, ...selectedFiles];
        setValue(name, Array.from(arrayFiles));
        return arrayFiles;
      });
    } else {
      setFiles(selectedFiles);
      setValue(name, Array.from(selectedFiles));
    }
  };

  const handleOnDelete = (fileIndex) => {
    const newFiles = files?.filter((file, index) => index !== fileIndex);
    setFiles(newFiles);
    setValue(name, newFiles);
  };

  const renderLabel = () => {
    return (
      <Grid id={`${id}-label`} {...styles.labelGridProps}>
        <Typography {...styles.labelProps(error)}>{title}</Typography>
      </Grid>
    );
  };

  const handleCarouselInput = () => {
    fileInputRef.current.click();
  };

  const renderPlaceholder = () => {
    const arrayFiles = Array.from(files);
    if (arrayFiles?.length === 0)
      return (
        <Typography {...styles.placeholderProps}>{placeholder}</Typography>
      );

    return (
      <Grid {...styles.chipGroupProps}>
        {arrayFiles?.map((value, i) => {
          return (
            <Chip
              key={i}
              label={value?.name}
              onDelete={() => handleOnDelete(i)}
              {...styles.chipProps}
            />
          );
        })}
      </Grid>
    );
  };

  const renderEndIcon = () => {
    return (
      <IconButton
        onClick={handleCarouselInput}
        sx={{
          ':hover': { bgcolor: (theme) => theme.palette.Common.Black['30p'] },
        }}
      >
        <FileUploadOutlined
          sx={{ color: (theme) => theme.palette.Common.Black['100p'] }}
        />
      </IconButton>
    );
  };

  return (
    <>
      {renderLabel()}
      <MultiSelectElement
        ref={ref}
        name={name}
        error={error}
        options={[]}
        renderValue={(value) => renderPlaceholder(value)}
        labelId={`${id}-label`}
        endAdornment={renderEndIcon()}
        multiple
        control={control}
        displayEmpty
        showCheckbox={showCheckbox}
        showChips={showChips}
        preserveOrder={false}
        formControlProps={{
          disabled: true,
        }}
        {...styles.selectInputProps(color, bgColor)}
      />
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleCarouselFiles}
        multiple={multiple}
      />
    </>
  );
});

export default PrimaryFileUpload;
