import React, { forwardRef } from 'react';

import { Facebook, LinkedIn, Twitter } from '@mui/icons-material';
import { Controller } from 'react-hook-form';

import FormTextField from '@/components/FormTextField';

import { iconStyle } from './styles';

const iconMap = {
  facebook: <Facebook sx={iconStyle} />,
  linkedin: <LinkedIn sx={iconStyle} />,
  twitter: <Twitter sx={iconStyle} />,
};

const SocialLinkInput = forwardRef(
  ({ icon, control, name, validation, error, ...props }, ref) => {
    const Icon = iconMap[icon];

    // Function to handle URL changes with masking
    const handleUrlChange = (value) => {
      let updatedValue = value;

      // Remove duplicate 'https://'
      if (updatedValue.startsWith('https://https://')) {
        updatedValue = updatedValue.replace('https://https://', 'https://');
      }

      // Add 'https://' if not present and value is not empty
      if (updatedValue && !updatedValue.startsWith('https://')) {
        updatedValue = `https://${updatedValue}`;
      }

      return updatedValue;
    };

    return (
      <Controller
        name={name}
        control={control}
        rules={validation}
        render={({ field, fieldState }) => {
          const { onChange, onBlur, value, ref: fieldRef } = field;
          const hasError = error || !!fieldState.error;

          const handleChange = (e) => {
            let inputValue = e.target.value;
            inputValue = handleUrlChange(inputValue);
            onChange(inputValue);
          };

          return (
            <FormTextField
              name={name}
              value={value || ''}
              onChange={handleChange}
              onBlur={onBlur}
              ref={fieldRef}
              placeholderText={`| Paste ${
                icon.charAt(0).toUpperCase() + icon.slice(1)
              } Link`}
              fullWidth
              icon={Icon}
              error={hasError}
              helperText={fieldState.error ? fieldState.error.message : ''}
              sx={{
                mb: 1,
                color: 'text.primary',
                paddingBottom: '5px',
              }}
              {...props}
            />
          );
        }}
      />
    );
  }
);

export default SocialLinkInput;
