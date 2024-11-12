import { SvgIcon } from '@mui/material';

const CustomCheckCircleIcon = ({
  stroke,
  fill,
  tickColor,
  tickSize,
  ...props
}) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke={stroke || 'currentColor'}
      strokeWidth="1"
      fill={fill || 'none'}
    />
    <path
      d="M9 12l2 2l4 -4"
      stroke={tickColor || 'currentColor'}
      strokeWidth={tickSize || '2'} // Adjust tick thickness
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SvgIcon>
);

export default CustomCheckCircleIcon;
