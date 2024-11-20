/* eslint-disable no-dupe-keys */
// import { createContext, useEffect, useMemo, useState } from 'react';

import { createTheme } from '@mui/material/styles';
import SvgIcon from '@mui/material/SvgIcon';
// import { useSelector } from 'react-redux';

// import { useThemeSync } from '@/hooks/useThemeSync';

import CheckBoxFilled from '@/assets/svg/_CheckBoxFilled.svg';
import CheckBoxOutlineBlank from '@/assets/svg/_CheckBoxOutlineBlankOutlined.svg';
import CheckCircleOutlined from '@/assets/svg/_CheckCircleOutlined.svg';
import ErrorOutline from '@/assets/svg/_ErrorOutline.svg';
import IndeterminateCheckBo from '@/assets/svg/_IndeterminateCheckBoxFilled.svg';
import InfoOutlined from '@/assets/svg/_InfoOutlined.svg';
import WarningAmberOutlined from '@/assets/svg/_WarningAmberOutlined.svg';

export const globalThemeCallback = (palette) => {
  return createTheme({
    palette: {
      ...palette,
    },
    typography: {
      h1: {
        fontStyle: 'normal',
        fontFamily: 'Satoshi Black',
        fontWeight: 300,
        fontSize: '96px',
        letterSpacing: '-1.44px',
        textDecoration: 'none',
        lineHeight: '116.70000553131104%',
        textTransform: 'none',
      },
      h2: {
        fontStyle: 'normal',
        fontFamily: 'Satoshi Bold',
        fontWeight: 300,
        fontSize: '60px',
        letterSpacing: '-0.3px',
        textDecoration: 'none',
        lineHeight: '120.00000476837158%',
        textTransform: 'none',
      },
      h3: {
        fontStyle: 'normal',
        fontFamily: 'Satoshi Medium',
        fontWeight: 400,
        fontSize: '48px',
        letterSpacing: '0px',
        textDecoration: 'none',
        lineHeight: '116.70000553131104%',
        textTransform: 'none',
      },
      h4: {
        fontStyle: 'normal',
        fontFamily: 'Satoshi Bold',
        fontWeight: 400,
        fontSize: '34px',
        letterSpacing: '0.085px',
        textDecoration: 'none',
        lineHeight: '123.50000143051147%',
        textTransform: 'none',
      },
      h5: {
        fontStyle: 'normal',
        fontFamily: 'Molde Semi Expanded Bold',
        fontWeight: 400,
        fontSize: '24px',
        letterSpacing: '0px',
        textDecoration: 'none',
        lineHeight: '133.39999914169312%',
        textTransform: 'none',
      },
      h6: {
        fontStyle: 'normal',
        fontFamily: 'Satoshi Black',
        fontWeight: 500,
        fontSize: '20px',
        letterSpacing: '0.030000001192092896px',
        textDecoration: 'none',
        lineHeight: '160.0000023841858%',
        textTransform: 'none',
      },
      h7: {
        fontStyle: 'normal',
        fontFamily: 'Molde Semi Expanded Medium',
        fontWeight: 400,
        fontSize: '24px',
        letterSpacing: '0px',
        textDecoration: 'none',
        lineHeight: '133.39999914169312%',
        textTransform: 'none',
      },
      'Body 1': {
        fontStyle: 'normal',
        fontFamily: 'Satoshi Regular',
        fontWeight: 400,
        fontSize: '16px',
        letterSpacing: '0.024000000953674317px',
        textDecoration: 'none',
        lineHeight: '150%',
        textTransform: 'none',
      },
      'Body 2': {
        fontStyle: 'normal',
        fontFamily: 'Satoshi Regular',
        fontWeight: 400,
        fontSize: '14px',
        letterSpacing: '0.023800000250339508px',
        textDecoration: 'none',
        lineHeight: '142.99999475479126%',
        textTransform: 'none',
      },
      'Subtitle 1': {
        fontStyle: 'normal',
        fontFamily: 'Satoshi Bold',
        fontWeight: 400,
        fontSize: '16px',
        letterSpacing: '0.024000000953674317px',
        textDecoration: 'none',
        lineHeight: '175%',
        textTransform: 'none',
      },
      'Subtitle 2': {
        fontStyle: 'normal',
        fontFamily: 'Satoshi Medium',
        fontWeight: 700,
        fontSize: '14px',
        letterSpacing: '0.2px',
        textDecoration: 'none',
        lineHeight: '157.00000524520874%',
        textTransform: 'none',
      },
      Overline: {
        fontStyle: 'normal',
        fontFamily: 'Satoshi Black',
        fontWeight: 400,
        fontSize: '12px',
        letterSpacing: '0.12px',
        textDecoration: 'none',
        lineHeight: '266.00000858306885%',
        textTransform: 'uppercase',
      },
      Caption: {
        fontStyle: 'normal',
        fontFamily: 'Satoshi Black',
        fontWeight: 400,
        fontSize: '12px',
        letterSpacing: '0.04800000071525574px',
        textDecoration: 'none',
        lineHeight: '165.9999966621399%',
        textTransform: 'none',
      },
      Components: {
        'Alert Title': {
          fontStyle: 'normal',
          fontFamily: 'Satoshi Regular',
          fontWeight: 500,
          fontSize: '16px',
          letterSpacing: '0.024000000953674317px',
          textDecoration: 'none',
          lineHeight: '150%',
          textTransform: 'none',
        },
        'Avatar Initials': {
          fontStyle: 'normal',
          fontFamily: 'Satoshi Regular',
          fontWeight: 400,
          fontSize: '20px',
          letterSpacing: '0.02800000011920929px',
          textDecoration: 'none',
          lineHeight: '20px',
          textTransform: 'none',
        },
        'Badge Label': {
          fontStyle: 'normal',
          fontFamily: 'Satoshi Regular',
          fontWeight: 500,
          fontSize: '12px',
          letterSpacing: '0.016800000071525573px',
          textDecoration: 'none',
          lineHeight: '20px',
          textTransform: 'none',
        },
        'Button Large': {
          fontStyle: 'normal',
          fontFamily: 'Satoshi Black',
          fontWeight: 900,
          fontSize: '15px',
          letterSpacing: '0.06900000125169754px',
          textDecoration: 'none',
          lineHeight: '26px',
          textTransform: 'uppercase',
        },
        'Button Medium': {
          fontStyle: 'normal',
          fontFamily: 'Satoshi Medium',
          fontWeight: 500,
          fontSize: '14px',
          letterSpacing: '0.056000000834465026px',
          textDecoration: 'none',
          lineHeight: '24px',
          textTransform: 'uppercase',
        },
        'Button Small': {
          fontStyle: 'normal',
          fontFamily: 'Satoshi Regular',
          fontWeight: 500,
          fontSize: '13px',
          letterSpacing: '0.05980000108480454px',
          textDecoration: 'none',
          lineHeight: '22px',
          textTransform: 'uppercase',
        },
        'Input Label': {
          fontStyle: 'normal',
          fontFamily: 'Satoshi Regular',
          fontWeight: 400,
          fontSize: '12px',
          letterSpacing: '0.01800000071525574px',
          textDecoration: 'none',
          lineHeight: '12px',
          textTransform: 'none',
        },
        'Helper Text': {
          fontStyle: 'normal',
          fontFamily: 'Satoshi Regular',
          fontWeight: 400,
          fontSize: '12px',
          letterSpacing: '0.04800000071525574px',
          textDecoration: 'none',
          lineHeight: '20px',
          textTransform: 'none',
        },
        'Input Text': {
          fontStyle: 'normal',
          fontFamily: 'Satoshi Regular',
          fontWeight: 400,
          fontSize: '16px',
          letterSpacing: '0.024000000953674317px',
          textDecoration: 'none',
          lineHeight: '24px',
          textTransform: 'none',
        },
        'Default Chip': {
          fontStyle: 'normal',
          fontFamily: 'Satoshi Medium',
          fontWeight: 700,
          fontSize: '14px',
          letterSpacing: '0.2px',
          textDecoration: 'none',
          lineHeight: '18px',
          textTransform: 'none',
        },
        'Primary Chip': {
          fontStyle: 'normal',
          fontFamily: 'Satoshi Medium',
          fontWeight: 700,
          fontSize: '16px',
          letterSpacing: '0.020799999535083772px',
          textDecoration: 'none',
          lineHeight: '18px',
          textTransform: 'none',
        },
        Tooltip: {
          fontStyle: 'normal',
          fontFamily: 'Satoshi Regular',
          fontWeight: 500,
          fontSize: '10px',
          letterSpacing: '0px',
          textDecoration: 'none',
          lineHeight: '14px',
          textTransform: 'none',
        },
        'Table Header': {
          fontStyle: 'normal',
          fontFamily: 'Satoshi Regular',
          fontWeight: 500,
          fontSize: '14px',
          letterSpacing: '0.023800000250339508px',
          textDecoration: 'none',
          lineHeight: '24px',
          textTransform: 'none',
        },
        'Menu Item': {
          fontStyle: 'normal',
          fontFamily: 'Satoshi Regular',
          fontWeight: 400,
          fontSize: '16px',
          letterSpacing: '0.024000000953674317px',
          textDecoration: 'none',
          lineHeight: '150%',
          textTransform: 'none',
        },
        'Custom Menu Item': {
          fontStyle: 'normal',
          fontFamily: 'Satoshi Bold',
          fontWeight: 400,
          fontSize: '16px',
          letterSpacing: '0.024000000953674317px',
          textDecoration: 'none',
          lineHeight: '200%',
          textTransform: 'capitalize',
        },
        'Menu Item Dense': {
          fontStyle: 'normal',
          fontFamily: 'Satoshi Regular',
          fontWeight: 700,
          fontSize: '14px',
          letterSpacing: '0.023800000250339508px',
          textDecoration: 'none',
          lineHeight: '24px',
          textTransform: 'none',
        },
        'List Subheader': {
          fontStyle: 'normal',
          fontFamily: 'Satoshi Medium',
          fontWeight: 500,
          fontSize: '14px',
          letterSpacing: '0.014000000208616257px',
          textDecoration: 'none',
          lineHeight: '48px',
          textTransform: 'none',
        },
        'Bottom Navigation Active Label': {
          fontStyle: 'normal',
          fontFamily: 'Satoshi Bold',
          fontWeight: 400,
          fontSize: '14px',
          letterSpacing: '0.056000000834465026px',
          textDecoration: 'none',
          lineHeight: '165.9999966621399%',
          textTransform: 'none',
        },
      },
    },
    customShadows: {
      Elevation: {
        1: { boxShadow: '8px 8px 0px rgb(38, 42, 53, 0.65)' },
        2: { boxShadow: '4px 4px 0px rgb(38, 42, 53, 0.65)' },
        // Custom Primary box shadow
        Primary: { boxShadow: '2px 2px 0px rgba(105, 73, 255, 0.65)' },
        Blue: { boxShadow: '2px 2px 0px rgb(30, 162, 228)' },
        Error: { boxShadow: '2px 2px 0px rgb(255, 90, 95)' },
        Quest: { boxShadow: '4px 4px 0px #dac9c833' },
        LoadMore: { boxShadow: '3px 3px 0px #dac9c833' },
        MobilePrimary: { boxShadow: '2px 2px 0px rgba(105, 73, 255, 0.65)' },
        3: {
          boxShadow:
            '0px 1px 8px rgba(0, 0, 0, 0.12), 0px 3px 4px rgba(0, 0, 0, 0.14), 0px 3px 3px rgba(0, 0, 0, 0.2)',
        },
        4: {
          boxShadow:
            '0px 1px 10px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 2px 4px rgba(0, 0, 0, 0.2)',
        },
        // Custom Primary box shadow
        PrimaryHover: {
          boxShadow:
            '0px 1px 10px rgba(105, 73, 255, 0.12), 0px 4px 5px rgba(105, 73, 255, 0.14), 0px 2px 4px rgba(105, 73, 255, 0.2)',
        },
        BlueHover: {
          boxShadow:
            '0px 1px 10px rgba(30, 162, 228, 0.12), 0px 4px 5px rgba(30, 162, 228, 0.14), 0px 2px 4px rgba(30, 162, 228, 0.2)',
        },
        ErrorHover: {
          boxShadow:
            '0px 1px 10px rgba(255, 90, 95, 0.12), 0px 4px 5px rgba(255, 90, 95, 0.14), 0px 2px 4px rgba(255, 90, 95, 0.2)',
        },
        5: {
          boxShadow:
            '0px 1px 14px rgba(0, 0, 0, 0.12), 0px 5px 8px rgba(0, 0, 0, 0.14), 0px 3px 5px rgba(0, 0, 0, 0.2)',
        },
        6: {
          boxShadow:
            '0px 1px 18px rgba(0, 0, 0, 0.12), 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 3px 5px rgba(0, 0, 0, 0.2)',
        },
        7: {
          boxShadow:
            '0px 2px 16px rgba(0, 0, 0, 0.12), 0px 7px 10px rgba(0, 0, 0, 0.14), 0px 4px 5px rgba(0, 0, 0, 0.2)',
        },
        8: {
          boxShadow:
            '0px 3px 14px rgba(0, 0, 0, 0.12), 0px 8px 10px rgba(0, 0, 0, 0.14), 0px 5px 5px rgba(0, 0, 0, 0.2)',
        },
        9: {
          boxShadow:
            '0px 3px 16px rgba(0, 0, 0, 0.12), 0px 9px 12px rgba(0, 0, 0, 0.14), 0px 5px 6px rgba(0, 0, 0, 0.2)',
        },
        10: {
          boxShadow:
            '0px 4px 18px rgba(0, 0, 0, 0.12), 0px 10px 14px rgba(0, 0, 0, 0.14), 0px 6px 6px rgba(0, 0, 0, 0.2)',
        },
        11: {
          boxShadow:
            '0px 4px 20px rgba(0, 0, 0, 0.12), 0px 11px 15px rgba(0, 0, 0, 0.14), 0px 6px 7px rgba(0, 0, 0, 0.2)',
        },
        12: {
          boxShadow:
            '0px 5px 22px rgba(0, 0, 0, 0.12), 0px 12px 17px rgba(0, 0, 0, 0.14), 0px 7px 8px rgba(0, 0, 0, 0.2)',
        },
        13: {
          boxShadow:
            '0px 5px 24px rgba(0, 0, 0, 0.12), 0px 13px 19px rgba(0, 0, 0, 0.14), 0px 7px 8px rgba(0, 0, 0, 0.2)',
        },
        14: {
          boxShadow:
            '0px 5px 26px rgba(0, 0, 0, 0.12), 0px 14px 21px rgba(0, 0, 0, 0.14), 0px 7px 9px rgba(0, 0, 0, 0.2)',
        },
        15: {
          boxShadow:
            '0px 6px 28px rgba(0, 0, 0, 0.12), 0px 15px 22px rgba(0, 0, 0, 0.14), 0px 8px 9px rgba(0, 0, 0, 0.2)',
        },
        16: {
          boxShadow:
            '0px 6px 30px rgba(0, 0, 0, 0.12), 0px 16px 24px rgba(0, 0, 0, 0.14), 0px 8px 10px rgba(0, 0, 0, 0.2)',
        },
        17: {
          boxShadow:
            '0px 6px 32px rgba(0, 0, 0, 0.12), 0px 17px 26px rgba(0, 0, 0, 0.14), 0px 8px 11px rgba(0, 0, 0, 0.2)',
        },
        18: {
          boxShadow:
            '0px 7px 34px rgba(0, 0, 0, 0.12), 0px 18px 28px rgba(0, 0, 0, 0.14), 0px 9px 11px rgba(0, 0, 0, 0.2)',
        },
        19: {
          boxShadow:
            '0px 7px 36px rgba(0, 0, 0, 0.12), 0px 19px 29px rgba(0, 0, 0, 0.14), 0px 9px 12px rgba(0, 0, 0, 0.2)',
        },
        20: {
          boxShadow:
            '0px 8px 38px rgba(0, 0, 0, 0.12), 0px 20px 31px rgba(0, 0, 0, 0.14), 0px 10px 13px rgba(0, 0, 0, 0.2)',
        },
        21: {
          boxShadow:
            '0px 8px 40px rgba(0, 0, 0, 0.12), 0px 21px 33px rgba(0, 0, 0, 0.14), 0px 10px 13px rgba(0, 0, 0, 0.2)',
        },
        22: {
          boxShadow:
            '0px 8px 42px rgba(0, 0, 0, 0.12), 0px 22px 35px rgba(0, 0, 0, 0.14), 0px 10px 14px rgba(0, 0, 0, 0.2)',
        },
        23: {
          boxShadow:
            '0px 9px 44px rgba(0, 0, 0, 0.12), 0px 23px 36px rgba(0, 0, 0, 0.14), 0px 11px 14px rgba(0, 0, 0, 0.2)',
        },
        24: {
          boxShadow:
            '0px 9px 46px rgba(0, 0, 0, 0.12), 0px 24px 38px rgba(0, 0, 0, 0.14), 0px 11px 15px rgba(0, 0, 0, 0.2)',
        },
        'Outlined Light': { boxShadow: '0px 0px 0px rgba(224, 224, 224, 1)' },
        'Outlined Dark': { boxShadow: '0px 0px 0px rgba(255, 255, 255, 0.12)' },
      },
    },
    breakpoints: {
      values: {
        mobileSmall: 320,
        mobileSmallPlus: 360,
        mobile: 576.5,
        tablet: 767.5,
        laptop: 1024,
        desktop: 1280,
        desktopMedium: 1440,
        desktopLarge: 1536,
        desktopExtraLarge: 1921,
      },
    },
  });
};

export const mainTheme = (globalTheme) => {
  return createTheme(
    {
      components: {
        MuiButtonBase: { defaultProps: { disableRipple: true } },
        MuiMenuItem: {
          variants: [
            {
              props: { variant: 'customMenuItem' },
              style: {
                position: 'relative',
                borderRadius: '16px',
                color: globalTheme.palette.Common.White['100p'],
                fontFamily:
                  globalTheme.typography.Components['Custom Menu Item']
                    .fontFamily,
                fontWeight:
                  globalTheme.typography.Components['Custom Menu Item']
                    .fontWeight,
                lineHeight:
                  globalTheme.typography.Components['Custom Menu Item']
                    .lineHeight,
                letterSpacing:
                  globalTheme.typography.Components['Custom Menu Item']
                    .letterSpacing,
                textTransform:
                  globalTheme.typography.Components['Custom Menu Item']
                    .textTransform,
                transition: 'background 5s ease-out',
                '&:hover': {
                  background: globalTheme.palette.Background.gradient.purple2,
                },
              },
            },
            {
              props: { variant: 'customMenuItem', active: 'true' },
              style: {
                background: globalTheme.palette.Background.gradient.purple2,
              },
            },
          ],
        },
        MuiAlert: {
          defaultProps: {
            iconMapping: {
              error: <SvgIcon component={ErrorOutline} />,
              warning: <SvgIcon component={WarningAmberOutlined} />,
              info: <SvgIcon component={InfoOutlined} />,
              success: <SvgIcon component={CheckCircleOutlined} />,
            },
          },
          styleOverrides: {
            filledError: {
              backgroundColor: globalTheme.palette.Error.Main,
              borderRadius: '4px',
            },
            filledWarning: {
              backgroundColor: globalTheme.palette.Warning.Main,
              borderRadius: '4px',
            },
            filledInfo: {
              backgroundColor: globalTheme.palette.Info.Main,
              borderRadius: '4px',
            },
            filledSuccess: {
              backgroundColor: globalTheme.palette.Success.Main,
              borderRadius: '4px',
            },
          },
        },
        MuiAvatar: {
          styleOverrides: {
            circular: {},
            square: {},
            rounded: { borderRadius: '4px' },
            colorDefault: {
              color: globalTheme.palette.Background.Paper,
              fontStyle:
                globalTheme.typography.Components['Avatar Initials'].fontStyle,
              fontFamily:
                globalTheme.typography.Components['Avatar Initials'].fontFamily,
              fontWeight:
                globalTheme.typography.Components['Avatar Initials'].fontWeight,
              fontSize:
                globalTheme.typography.Components['Avatar Initials'].fontSize,
              letterSpacing:
                globalTheme.typography.Components['Avatar Initials']
                  .letterSpacing,
              lineHeight:
                globalTheme.typography.Components['Avatar Initials'].lineHeight,
              textDecoration:
                globalTheme.typography.Components['Avatar Initials']
                  .textDecoration,
              textTransform:
                globalTheme.typography.Components['Avatar Initials']
                  .textTransform,
            },
          },
        },
        MuiButton: {
          variants: [
            {
              props: { variant: 'mission' },
              style: {
                background: globalTheme.palette.Tertiary.Main,
                boxShadow:
                  globalTheme.customShadows.Elevation.Primary.boxShadow,
                color: 'rgba(255, 255, 255, 0.87)',
                transition: globalTheme.transitions.create('all'),
                '&:hover': {
                  background: globalTheme.palette.Tertiary.Dark,
                  boxShadow:
                    globalTheme.customShadows.Elevation.PrimaryHover.boxShadow,
                  color: 'rgba(255, 255, 255, 0.87)',
                },
                '&:disabled': {
                  backgroundColor: 'none',
                  background:
                    globalTheme.palette.Action['Disabled Background (12p)'],
                  boxShadow: globalTheme.customShadows.Elevation[2].boxShadow,
                },
              },
            },
            {
              props: { variant: 'payment-btn' },
              style: {
                background: globalTheme.palette.Background.gradient.blue2,
                color: 'rgba(0, 0, 0)',
                transition: globalTheme.transitions.create('all'),
                '&:hover': {
                  background: globalTheme.palette.Tertiary.Dark,
                  boxShadow:
                    globalTheme.customShadows.Elevation.PrimaryHover.boxShadow,
                  color: 'rgba(255, 255, 255, 0.87)',
                },
                '&:disabled': {
                  backgroundColor: 'none',
                  background:
                    globalTheme.palette.Action['Disabled Background (12p)'],
                  boxShadow: globalTheme.customShadows.Elevation[2].boxShadow,
                },
              },
            },
            {
              props: {
                variant: 'mission',
                active: 'true',
                complete: 'false',
              },
              style: {
                background: globalTheme.palette.Background.gradient.green,
                boxShadow: '2px 2px 0px rgba(18, 209, 142, 0.65)',
                color: 'rgba(255, 255, 255, 0.87)',
                '&:hover': {
                  background:
                    'linear-gradient(286.17deg, #004C41 0%, #0D7D68 100%)',
                  boxShadow:
                    '0px 1px 10px rgba(18, 209, 142, 0.12), 0px 4px 5px rgba(18, 209, 142, 0.14), 0px 2px 4px rgba(18, 209, 142, 0.2)',
                  color: 'rgba(255, 255, 255, 0.87)',
                  [globalTheme.breakpoints.down('tablet')]: {
                    boxShadow: '2px 2px 0px rgba(18, 209, 142, 0.65)',
                  },
                },
                '&:disabled': {
                  background:
                    globalTheme.palette.Action['Disabled Background (12p)'],
                  boxShadow: globalTheme.customShadows.Elevation[2].boxShadow,
                },
              },
            },
            {
              props: { variant: 'mission', complete: 'true' },
              style: {
                background: globalTheme.palette.Background.gradient.darkBlue,
                boxShadow: '4px 4px 0px rgba(67, 67, 67, 0.65)',
                color: 'rgba(255, 255, 255, 0.87)',
                '&:hover': {
                  background:
                    'linear-gradient(286.17deg, #003A74 0%, #00031D 100%)',
                  boxShadow:
                    '0px 1px 10px rgba(67, 67, 67, 0.12), 0px 4px 5px rgba(67, 67, 67, 0.14), 0px 2px 4px rgba(67, 67, 67, 0.2)',
                  color: 'rgba(255, 255, 255, 0.87)',
                  [globalTheme.breakpoints.down('tablet')]: {
                    boxShadow: '2px 2px 0px rgba(67, 67, 67, 0.65)',
                  },
                },
                '&:disabled': {
                  background:
                    globalTheme.palette.Action['Disabled Background (12p)'],
                  boxShadow: globalTheme.customShadows.Elevation[2].boxShadow,
                },
              },
            },
            {
              props: {
                variant: 'mission',
                pre_enroll: 'true',
                registered: 'true',
              },
              style: {
                background: globalTheme.palette.Dark_Colors.Dark[1],
                border: '1px solid rgba(216, 216, 216, 0.40)',
                boxShadow: 'none',
                color: 'rgba(255, 255, 255, 0.87)',
                '&:hover': {
                  background: globalTheme.palette.Dark_Colors.Dark[1],
                  boxShadow: 'none',
                  cursor: 'default',
                },
                '&:disabled': {
                  background:
                    globalTheme.palette.Action['Disabled Background (12p)'],
                  boxShadow: globalTheme.customShadows.Elevation[2].boxShadow,
                },
              },
            },
            {
              props: {
                variant: 'mission',
                is_full: 'true',
              },
              style: {
                background: globalTheme.palette.Dark_Colors.Dark[1],
                border: '1px solid rgba(216, 216, 216, 0.40)',
                boxShadow: 'none',
                color: 'rgba(255, 255, 255, 0.87)',
                '&:hover': {
                  background: globalTheme.palette.Dark_Colors.Dark[1],
                  boxShadow: 'none',
                  cursor: 'default',
                },
                '&:disabled': {
                  background:
                    globalTheme.palette.Action['Disabled Background (12p)'],
                  boxShadow: globalTheme.customShadows.Elevation[2].boxShadow,
                },
              },
            },
            {
              props: { variant: 'white' },
              style: {
                background: globalTheme.palette.Common.White['100p'],
                borderRadius: '100px',
                textTransform: 'capitalize',
                transition: globalTheme.transitions.create('all'),
                '&:hover': {
                  background: globalTheme.palette.Common.White['90p'],
                  cursor: 'pointer',
                },
                '&:disabled': {
                  backgroundColor: 'none',
                  background: globalTheme.palette.Common.White['100p'],
                  color: globalTheme.palette.Greyscale[700],
                },
              },
            },
            {
              props: { variant: 'white', completed: 'true' },
              style: {
                background: globalTheme.palette.Common.White['100p'],
                borderRadius: '100px',
                textTransform: 'capitalize',
                boxShadow: '0px 7px 25px #3A1E5D',
                color: globalTheme.palette.Greyscale[498],
                transition: globalTheme.transitions.create('all'),
                '&:hover': {
                  background: globalTheme.palette.Common.White['100p'],
                  cursor: 'default',
                },
                '&:disabled': {
                  backgroundColor: 'none',
                  background: globalTheme.palette.Common.White['100p'],
                  color: globalTheme.palette.Greyscale[700],
                },
              },
            },
            {
              props: { variant: 'white', registered: 'true' },
              style: {
                background: globalTheme.palette.Greyscale[780],
                borderRadius: '100px',
                textTransform: 'capitalize',
                color: globalTheme.palette.Common.White['100p'],
                transition: globalTheme.transitions.create('all'),
                '&:hover': {
                  background: globalTheme.palette.Greyscale[780],
                  cursor: 'default',
                },
              },
            },
            {
              props: { variant: 'green-btn-2' },
              style: {
                background: globalTheme.palette.Background.gradient.green,
                boxShadow: '0px 7px 25px #3A1E5D',
                height: '45px',
                color: 'rgba(0, 0, 0)',
                transition: globalTheme.transitions.create('all'),
                '&:hover': {
                  background:
                    'linear-gradient(286deg, #40856C 0%, #53AD8E 100%)',
                  boxShadow: 'none',
                  color: 'white',
                },
                '&:disabled': {
                  backgroundColor: 'none',
                  background:
                    globalTheme.palette.Action['Disabled Background (12p)'],
                  boxShadow: globalTheme.customShadows.Elevation[2].boxShadow,
                },
              },
            },
            {
              props: { variant: 'explain' },
              style: {
                background: globalTheme.palette.Background.gradient.blue,
                boxShadow: globalTheme.customShadows.Elevation.Blue.boxShadow,
                color: 'rgba(255, 255, 255, 0.87)',
                '&:hover': {
                  background: globalTheme.palette.Background.gradient.blueDark,
                  boxShadow:
                    globalTheme.customShadows.Elevation.BlueHover.boxShadow,
                  color: 'rgba(255, 255, 255, 0.87)',
                },
                '&:disabled': {
                  backgroundColor: 'none',
                  background:
                    globalTheme.palette.Action['Disabled Background (12p)'],
                  boxShadow: globalTheme.customShadows.Elevation[2].boxShadow,
                },
              },
            },
            {
              props: { variant: 'error' },
              style: {
                background: globalTheme.palette.Background.gradient.error,
                boxShadow: globalTheme.customShadows.Elevation.Error.boxShadow,
                color: 'rgba(255, 255, 255, 0.87)',
                '&:hover': {
                  background: globalTheme.palette.Background.gradient.errorDark,
                  boxShadow:
                    globalTheme.customShadows.Elevation.ErrorHover.boxShadow,
                  color: 'rgba(255, 255, 255, 0.87)',
                },
                '&:disabled': {
                  backgroundColor: 'none',
                  background:
                    globalTheme.palette.Action['Disabled Background (12p)'],
                  boxShadow: globalTheme.customShadows.Elevation[2].boxShadow,
                },
              },
            },
            {
              props: {
                variant: 'green-btn-1',
                active: 'true',
              },
              style: {
                background: globalTheme.palette.Common.White['100p'],
                color: '#3A1E5D',
                '&:hover': {
                  background:
                    'linear-gradient(286.17deg, #004C41 0%, #0D7D68 100%)',
                  boxShadow:
                    '0px 1px 10px rgba(18, 209, 142, 0.12), 0px 4px 5px rgba(18, 209, 142, 0.14), 0px 2px 4px rgba(18, 209, 142, 0.2)',
                  color: 'rgba(0, 0, 0)',
                },
                '&:disabled': {
                  background:
                    globalTheme.palette.Action['Disabled Background (12p)'],
                  boxShadow: globalTheme.customShadows.Elevation[2].boxShadow,
                },
              },
            },
            {
              props: { variant: 'green-btn-1', complete: 'true' },
              style: {
                background: globalTheme.palette.Background.gradient.darkBlue,
                boxShadow: '4px 4px 0px rgba(67, 67, 67, 0.65)',
                color: 'rgba(255, 255, 255, 0.87)',
                '&:hover': {
                  background:
                    'linear-gradient(286.17deg, #003A74 0%, #00031D 100%)',
                  boxShadow:
                    '0px 1px 10px rgba(67, 67, 67, 0.12), 0px 4px 5px rgba(67, 67, 67, 0.14), 0px 2px 4px rgba(67, 67, 67, 0.2)',
                  color: 'rgba(255, 255, 255, 0.87)',
                  [globalTheme.breakpoints.down('tablet')]: {
                    boxShadow: '2px 2px 0px rgba(67, 67, 67, 0.65)',
                  },
                },
                '&:disabled': {
                  background:
                    globalTheme.palette.Action['Disabled Background (12p)'],
                  boxShadow: globalTheme.customShadows.Elevation[2].boxShadow,
                },
              },
            },
            {
              props: {
                variant: 'green-btn-1',
                pre_enroll: 'true',
                registered: 'true',
              },
              style: {
                background: globalTheme.palette.Dark_Colors.Dark[1],
                border: '1px solid rgba(216, 216, 216, 0.40)',
                boxShadow: 'none',
                color: 'rgba(255, 255, 255, 0.87)',
                '&:hover': {
                  background: globalTheme.palette.Dark_Colors.Dark[1],
                  boxShadow: 'none',
                  cursor: 'default',
                },
                '&:disabled': {
                  background:
                    globalTheme.palette.Action['Disabled Background (12p)'],
                  boxShadow: globalTheme.customShadows.Elevation[2].boxShadow,
                },
              },
            },
            {
              props: {
                variant: 'green-btn-1',
                is_full: 'true',
              },
              style: {
                background: globalTheme.palette.Dark_Colors.Dark[1],
                border: '1px solid rgba(216, 216, 216, 0.40)',
                boxShadow: 'none',
                color: 'rgba(255, 255, 255, 0.87)',
                '&:hover': {
                  background: globalTheme.palette.Dark_Colors.Dark[1],
                  boxShadow: 'none',
                  cursor: 'default',
                },
                '&:disabled': {
                  background:
                    globalTheme.palette.Action['Disabled Background (12p)'],
                  boxShadow: globalTheme.customShadows.Elevation[2].boxShadow,
                },
              },
            },
          ],
          styleOverrides: {
            containedSizeLarge: {
              fontStyle:
                globalTheme.typography.Components['Button Large'].fontStyle,
              fontFamily:
                globalTheme.typography.Components['Button Large'].fontFamily,
              fontWeight:
                globalTheme.typography.Components['Button Large'].fontWeight,
              fontSize:
                globalTheme.typography.Components['Button Large'].fontSize,
              letterSpacing:
                globalTheme.typography.Components['Button Large'].letterSpacing,
              lineHeight:
                globalTheme.typography.Components['Button Large'].lineHeight,
              textDecoration:
                globalTheme.typography.Components['Button Large']
                  .textDecoration,
              textTransform:
                globalTheme.typography.Components['Button Large'].textTransform,
              padding: '8px 22px',
              borderRadius: '4px',
              height: '60px',
            },
            containedSizeMedium: {
              fontStyle:
                globalTheme.typography.Components['Button Medium'].fontStyle,
              fontFamily:
                globalTheme.typography.Components['Button Medium'].fontFamily,
              fontWeight:
                globalTheme.typography.Components['Button Medium'].fontWeight,
              fontSize:
                globalTheme.typography.Components['Button Medium'].fontSize,
              letterSpacing:
                globalTheme.typography.Components['Button Medium']
                  .letterSpacing,
              lineHeight:
                globalTheme.typography.Components['Button Medium'].lineHeight,
              textDecoration:
                globalTheme.typography.Components['Button Medium']
                  .textDecoration,
              textTransform:
                globalTheme.typography.Components['Button Medium']
                  .textTransform,
              padding: '6px 16px',
              borderRadius: '4px',
              height: '36px',
            },
            containedSizeSmall: {
              fontStyle:
                globalTheme.typography.Components['Button Small'].fontStyle,
              fontFamily:
                globalTheme.typography.Components['Button Small'].fontFamily,
              fontWeight:
                globalTheme.typography.Components['Button Small'].fontWeight,
              fontSize:
                globalTheme.typography.Components['Button Small'].fontSize,
              letterSpacing:
                globalTheme.typography.Components['Button Small'].letterSpacing,
              lineHeight:
                globalTheme.typography.Components['Button Small'].lineHeight,
              textDecoration:
                globalTheme.typography.Components['Button Small']
                  .textDecoration,
              textTransform:
                globalTheme.typography.Components['Button Small'].textTransform,
              padding: '4px 10px',
              borderRadius: '4px',
              height: '30px',
            },
            containedPrimary: {
              backgroundColor: globalTheme.palette.Primary.Main,
              boxShadow: globalTheme.customShadows.Elevation['2'].boxShadow,
              color: 'rgba(255, 255, 255, 0.87)',
              '&:hover': {
                backgroundColor: globalTheme.palette.Primary.Dark,
                boxShadow: globalTheme.customShadows.Elevation['4'].boxShadow,
                color: 'rgba(255, 255, 255, 0.87)',
              },
              '&:disabled': {
                backgroundColor:
                  globalTheme.palette.Action['Disabled Background (12p)'],
              },
            },
            containedSecondary: {
              backgroundColor: globalTheme.palette.Secondary.Main,
              boxShadow: globalTheme.customShadows.Elevation['2'].boxShadow,
              color: 'rgba(0, 0, 0, 0.87)',
              '&:hover': {
                backgroundColor: globalTheme.palette.Secondary.Dark,
                boxShadow: globalTheme.customShadows.Elevation['4'].boxShadow,
                color: 'rgba(0, 0, 0, 0.87)',
              },
              '&:disabled': {
                backgroundColor:
                  globalTheme.palette.Action['Disabled Background (12p)'],
              },
            },
            containedError: {
              backgroundColor: globalTheme.palette.Error.Main,
              boxShadow: globalTheme.customShadows.Elevation['2'].boxShadow,
              color: 'rgba(255, 255, 255, 1)',
              '&:hover': {
                backgroundColor: globalTheme.palette.Error.Dark,
                boxShadow: globalTheme.customShadows.Elevation['4'].boxShadow,
                color: 'rgba(255, 255, 255, 1)',
              },
              '&:disabled': {
                backgroundColor:
                  globalTheme.palette.Action['Disabled Background (12p)'],
              },
            },
            containedSuccess: {
              backgroundColor: globalTheme.palette.Success.Main,
              boxShadow: globalTheme.customShadows.Elevation['2'].boxShadow,
              color: 'rgba(0, 0, 0, 0.87)',
              '&:hover': {
                backgroundColor: globalTheme.palette.Success.Dark,
                boxShadow: globalTheme.customShadows.Elevation['4'].boxShadow,
                color: 'rgba(0, 0, 0, 0.87)',
              },
              '&:disabled': {
                backgroundColor:
                  globalTheme.palette.Action['Disabled Background (12p)'],
              },
            },
            containedInfo: {
              backgroundColor: globalTheme.palette.Info.Main,
              boxShadow: globalTheme.customShadows.Elevation['2'].boxShadow,
              color: 'rgba(0, 0, 0, 0.87)',
              '&:hover': {
                backgroundColor: globalTheme.palette.Info.Dark,
                boxShadow: globalTheme.customShadows.Elevation['4'].boxShadow,
                color: 'rgba(0, 0, 0, 0.87)',
              },
              '&:disabled': {
                backgroundColor:
                  globalTheme.palette.Action['Disabled Background (12p)'],
              },
            },
            containedWarning: {
              backgroundColor: globalTheme.palette.Warning.Main,
              boxShadow: globalTheme.customShadows.Elevation['2'].boxShadow,
              color: 'rgba(0, 0, 0, 0.87)',
              '&:hover': {
                backgroundColor: globalTheme.palette.Warning.Dark,
                boxShadow: globalTheme.customShadows.Elevation['4'].boxShadow,
                color: 'rgba(0, 0, 0, 0.87)',
              },
              '&:disabled': {
                backgroundColor:
                  globalTheme.palette.Action['Disabled Background (12p)'],
              },
            },
            textSizeMedium: {
              fontStyle:
                globalTheme.typography.Components['Button Medium'].fontStyle,
              fontFamily:
                globalTheme.typography.Components['Button Medium'].fontFamily,
              fontWeight:
                globalTheme.typography.Components['Button Medium'].fontWeight,
              fontSize:
                globalTheme.typography.Components['Button Medium'].fontSize,
              letterSpacing:
                globalTheme.typography.Components['Button Medium']
                  .letterSpacing,
              lineHeight:
                globalTheme.typography.Components['Button Medium'].lineHeight,
              textDecoration:
                globalTheme.typography.Components['Button Medium']
                  .textDecoration,
              textTransform:
                globalTheme.typography.Components['Button Medium']
                  .textTransform,
              padding: '6px 8px',
              borderRadius: '4px',
              height: '36px',
            },
            textSizeLarge: {
              fontStyle:
                globalTheme.typography.Components['Button Large'].fontStyle,
              fontFamily:
                globalTheme.typography.Components['Button Large'].fontFamily,
              fontWeight:
                globalTheme.typography.Components['Button Large'].fontWeight,
              fontSize:
                globalTheme.typography.Components['Button Large'].fontSize,
              letterSpacing:
                globalTheme.typography.Components['Button Large'].letterSpacing,
              lineHeight:
                globalTheme.typography.Components['Button Large'].lineHeight,
              textDecoration:
                globalTheme.typography.Components['Button Large']
                  .textDecoration,
              textTransform:
                globalTheme.typography.Components['Button Large'].textTransform,
              padding: '8px 11px',
              borderRadius: '4px',
              height: '42px',
            },
            textSizeSmall: {
              fontStyle:
                globalTheme.typography.Components['Button Small'].fontStyle,
              fontFamily:
                globalTheme.typography.Components['Button Small'].fontFamily,
              fontWeight:
                globalTheme.typography.Components['Button Small'].fontWeight,
              fontSize:
                globalTheme.typography.Components['Button Small'].fontSize,
              letterSpacing:
                globalTheme.typography.Components['Button Small'].letterSpacing,
              lineHeight:
                globalTheme.typography.Components['Button Small'].lineHeight,
              textDecoration:
                globalTheme.typography.Components['Button Small']
                  .textDecoration,
              textTransform:
                globalTheme.typography.Components['Button Small'].textTransform,
              padding: '4px 5px',
              borderRadius: '4px',
              height: '30px',
            },
            textPrimary: {
              color: 'rgba(144, 202, 249, 1)',
              '&:hover': {
                backgroundColor: globalTheme.palette.Primary.Shades['8p'],
                color: 'rgba(144, 202, 249, 1)',
              },
              '&:disabled': { color: 'rgba(255, 255, 255, 0.3)' },
            },
            textSecondary: {
              color: 'rgba(206, 147, 216, 1)',
              '&:hover': {
                backgroundColor: globalTheme.palette.Secondary.Shades['8p'],
                color: 'rgba(206, 147, 216, 1)',
              },
              '&:disabled': { color: 'rgba(255, 255, 255, 0.3)' },
            },
            textError: {
              color: 'rgba(244, 67, 54, 1)',
              '&:hover': {
                backgroundColor: 'rgba(244, 67, 54, 0.08)',
                color: 'rgba(244, 67, 54, 1)',
              },
              '&:disabled': { color: 'rgba(255, 255, 255, 0.3)' },
            },
            textSuccess: {
              color: 'rgba(102, 187, 106, 1)',
              '&:hover': {
                backgroundColor: 'rgba(102, 187, 106, 0.08)',
                color: 'rgba(102, 187, 106, 1)',
              },
              '&:disabled': { color: 'rgba(255, 255, 255, 0.3)' },
            },
            textInfo: {
              color: 'rgba(41, 182, 246, 1)',
              '&:hover': {
                backgroundColor: 'rgba(2, 136, 209, 0.08)',
                color: 'rgba(41, 182, 246, 1)',
              },
              '&:disabled': { color: 'rgba(255, 255, 255, 0.3)' },
            },
            textWarning: {
              color: 'rgba(255, 167, 38, 1)',
              '&:hover': {
                backgroundColor: 'rgba(255, 167, 38, 0.08)',
                color: 'rgba(255, 167, 38, 1)',
              },
              '&:disabled': { color: 'rgba(255, 255, 255, 0.3)' },
            },
            outlinedSizeLarge: {
              fontStyle:
                globalTheme.typography.Components['Button Large'].fontStyle,
              fontFamily:
                globalTheme.typography.Components['Button Large'].fontFamily,
              fontWeight:
                globalTheme.typography.Components['Button Large'].fontWeight,
              fontSize:
                globalTheme.typography.Components['Button Large'].fontSize,
              letterSpacing:
                globalTheme.typography.Components['Button Large'].letterSpacing,
              lineHeight:
                globalTheme.typography.Components['Button Large'].lineHeight,
              textDecoration:
                globalTheme.typography.Components['Button Large']
                  .textDecoration,
              textTransform:
                globalTheme.typography.Components['Button Large'].textTransform,
              padding: '8px 22px',
              borderRadius: '4px',
              height: '42px',
            },
            outlinedSizeMedium: {
              fontStyle:
                globalTheme.typography.Components['Button Medium'].fontStyle,
              fontFamily:
                globalTheme.typography.Components['Button Medium'].fontFamily,
              fontWeight:
                globalTheme.typography.Components['Button Medium'].fontWeight,
              fontSize:
                globalTheme.typography.Components['Button Medium'].fontSize,
              letterSpacing:
                globalTheme.typography.Components['Button Medium']
                  .letterSpacing,
              lineHeight:
                globalTheme.typography.Components['Button Medium'].lineHeight,
              textDecoration:
                globalTheme.typography.Components['Button Medium']
                  .textDecoration,
              textTransform:
                globalTheme.typography.Components['Button Medium']
                  .textTransform,
              padding: '6px 16px',
              borderRadius: '4px',
              height: '36px',
            },
            outlinedSizeSmall: {
              fontStyle:
                globalTheme.typography.Components['Button Small'].fontStyle,
              fontFamily:
                globalTheme.typography.Components['Button Small'].fontFamily,
              fontWeight:
                globalTheme.typography.Components['Button Small'].fontWeight,
              fontSize:
                globalTheme.typography.Components['Button Small'].fontSize,
              letterSpacing:
                globalTheme.typography.Components['Button Small'].letterSpacing,
              lineHeight:
                globalTheme.typography.Components['Button Small'].lineHeight,
              textDecoration:
                globalTheme.typography.Components['Button Small']
                  .textDecoration,
              textTransform:
                globalTheme.typography.Components['Button Small'].textTransform,
              padding: '4px 10px',
              borderRadius: '4px',
              height: '30px',
            },
            outlinedPrimary: {
              border: `1px solid ${globalTheme.palette.Dark_Colors.Dark[4]}`,
              boxSizing: 'border-box',
              color: globalTheme.palette.Common.White['100p'],
              '&:hover': {
                backgroundColor: globalTheme.palette.Common.Black['12p'],
                border: `1px solid ${globalTheme.palette.Dark_Colors.Dark[4]}`,
                boxSizing: 'border-box',
                color: globalTheme.palette.Common.White['100p'],
              },
              '&:disabled': {
                border: '1px solid rgba(0, 0, 0, 0.12)',
                boxSizing: 'border-box',
                color: 'rgba(255, 255, 255, 0.3)',
              },
            },
            outlinedSecondary: {
              border: '1px solid rgba(156, 39, 176, 0.5)',
              boxSizing: 'border-box',
              color: 'rgba(206, 147, 216, 1)',
              '&:hover': {
                backgroundColor: globalTheme.palette.Secondary.Shades['8p'],
                border: '1px solid rgba(156, 39, 176, 0.5)',
                boxSizing: 'border-box',
                color: 'rgba(206, 147, 216, 1)',
              },
              '&:disabled': {
                border: '1px solid rgba(0, 0, 0, 0.12)',
                boxSizing: 'border-box',
                color: 'rgba(255, 255, 255, 0.3)',
              },
            },
            outlinedError: {
              border: '1px solid rgba(211, 47, 47, 0.5)',
              boxSizing: 'border-box',
              color: 'rgba(244, 67, 54, 1)',
              '&:hover': {
                backgroundColor: 'rgba(244, 67, 54, 0.08)',
                border: '1px solid rgba(211, 47, 47, 0.5)',
                boxSizing: 'border-box',
                color: 'rgba(244, 67, 54, 1)',
              },
              '&:disabled': {
                border: '1px solid rgba(0, 0, 0, 0.12)',
                boxSizing: 'border-box',
                color: 'rgba(255, 255, 255, 0.3)',
              },
            },
            outlinedSuccess: {
              border: '1px solid rgba(46, 125, 50, 0.5)',
              boxSizing: 'border-box',
              color: 'rgba(102, 187, 106, 1)',
              '&:hover': {
                backgroundColor: 'rgba(102, 187, 106, 0.08)',
                border: '1px solid rgba(46, 125, 50, 0.5)',
                boxSizing: 'border-box',
                color: 'rgba(102, 187, 106, 1)',
              },
              '&:disabled': {
                border: '1px solid rgba(0, 0, 0, 0.12)',
                boxSizing: 'border-box',
                color: 'rgba(255, 255, 255, 0.3)',
              },
            },
            outlinedInfo: {
              border: '1px solid rgba(2, 136, 209, 0.5)',
              boxSizing: 'border-box',
              color: 'rgba(41, 182, 246, 1)',
              '&:hover': {
                backgroundColor: 'rgba(2, 136, 209, 0.08)',
                border: '1px solid rgba(2, 136, 209, 0.5)',
                boxSizing: 'border-box',
                color: 'rgba(41, 182, 246, 1)',
              },
              '&:disabled': {
                border: '1px solid rgba(0, 0, 0, 0.12)',
                boxSizing: 'border-box',
                color: 'rgba(255, 255, 255, 0.3)',
              },
            },
            outlinedWarning: {
              border: '1px solid rgba(237, 108, 2, 0.5)',
              boxSizing: 'border-box',
              color: 'rgba(255, 167, 38, 1)',
              '&:hover': {
                backgroundColor: 'rgba(255, 167, 38, 0.08)',
                border: '1px solid rgba(237, 108, 2, 0.5)',
                boxSizing: 'border-box',
                color: 'rgba(255, 167, 38, 1)',
              },
              '&:disabled': {
                border: '1px solid rgba(0, 0, 0, 0.12)',
                boxSizing: 'border-box',
                color: 'rgba(255, 255, 255, 0.3)',
              },
            },
          },
        },
        MuiCheckbox: {
          defaultProps: {
            icon: <SvgIcon component={CheckBoxOutlineBlank} />,
            indeterminateIcon: <SvgIcon component={IndeterminateCheckBo} />,
            checkedIcon: <SvgIcon component={CheckBoxFilled} />,
          },
          styleOverrides: {
            root: {
              '&:hover': {
                backgroundColor: globalTheme.palette.Primary.Shades['8p'],
                borderRadius: '19px',
              },
            },
          },
        },
        MuiChip: {
          styleOverrides: {
            label: {
              fontStyle:
                globalTheme.typography.Components['Default Chip'].fontStyle,
              fontFamily:
                globalTheme.typography.Components['Default Chip'].fontFamily,
            },
          },
        },
        MuiFormControlLabel: {
          styleOverrides: {
            label: {
              color: globalTheme.palette.Text.Primary,
              fontStyle: globalTheme.typography['Body 1'].fontStyle,
              fontFamily: globalTheme.typography['Body 1'].fontFamily,
              fontWeight: globalTheme.typography['Body 1'].fontWeight,
              fontSize: globalTheme.typography['Body 1'].fontSize,
              letterSpacing: globalTheme.typography['Body 1'].letterSpacing,
              lineHeight: globalTheme.typography['Body 1'].lineHeight,
              textDecoration: globalTheme.typography['Body 1'].textDecoration,
              textTransform: globalTheme.typography['Body 1'].textTransform,
              '&.Mui-disabled': {
                color: 'rgba(255, 255, 255, 0.3)',
                fontStyle: globalTheme.typography['Body 1'].fontStyle,
                fontFamily: globalTheme.typography['Body 1'].fontFamily,
                fontWeight: globalTheme.typography['Body 1'].fontWeight,
                fontSize: globalTheme.typography['Body 1'].fontSize,
                letterSpacing: globalTheme.typography['Body 1'].letterSpacing,
                lineHeight: globalTheme.typography['Body 1'].lineHeight,
                textDecoration: globalTheme.typography['Body 1'].textDecoration,
                textTransform: globalTheme.typography['Body 1'].textTransform,
              },
            },
            root: { marginLeft: '0px' },
          },
        },
        MuiDialog: {
          styleOverrides: {
            root: {
              borderRadius: '4px',
              boxShadow: globalTheme.customShadows.Elevation['24'].boxShadow,
              padding: '8px 24px',
            },
            paper: {
              background:
                'linear-gradient(180deg, rgba(255, 255, 255, 0.16) -3.0616171314629196e-15%, rgba(255, 255, 255, 0.16) 99.99999999999997%)',
            },
          },
        },
        MuiRadio: {
          styleOverrides: {
            root: {
              '&.MuiRadio-colorPrimary': {
                color: 'rgba(255, 255, 255, 0.7)',
                '&.Mui-checked': { color: 'rgba(144, 202, 249, 1)' },
                '&:hover': { backgroundColor: 'rgba(144, 202, 249, 0.08)' },
              },
              '&.MuiRadio-colorSecondary': {
                color: 'rgba(255, 255, 255, 0.7)',
                '&.Mui-checked': { color: 'rgba(206, 147, 216, 1)' },
                '&:hover': { backgroundColor: 'rgba(206, 147, 216, 0.08)' },
              },
              '&.MuiRadio-colorError': {
                color: 'rgba(255, 255, 255, 0.7)',
                '&.Mui-checked': { color: 'rgba(244, 67, 54, 1)' },
                '&:hover': { backgroundColor: 'rgba(244, 67, 54, 0.08)' },
              },
              '&.MuiRadio-colorWarning': {
                color: 'rgba(255, 255, 255, 0.7)',
                '&.Mui-checked': { color: 'rgba(255, 167, 38, 1)' },
                '&:hover': { backgroundColor: 'rgba(255, 167, 38, 0.08)' },
              },
              '&.MuiRadio-colorSuccess': {
                color: 'rgba(255, 255, 255, 0.7)',
                '&.Mui-checked': { color: 'rgba(102, 187, 106, 1)' },
                '&:hover': { backgroundColor: 'rgba(102, 187, 106, 0.08)' },
              },
              '&.MuiRadio-colorInfo': {
                color: 'rgba(255, 255, 255, 0.7)',
                '&.Mui-checked': { color: 'rgba(41, 182, 246, 1)' },
                '&:hover': { backgroundColor: 'rgba(2, 136, 209, 0.08)' },
              },
              '&.Mui-disabled': { color: 'rgba(255, 255, 255, 0.3)' },
            },
          },
        },
        MuiSwitch: {
          styleOverrides: {
            switchBase: {
              '&.MuiSwitch-colorPrimary': {
                color: 'rgba(224, 224, 224, 1)',
                borderRadius: '100px',
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.08)' },
                '&.Mui-checked': {
                  color: 'rgba(144, 202, 249, 1)',
                  '&:hover': { backgroundColor: 'rgba(144, 202, 249, 0.08)' },
                },
              },
              '&.MuiSwitch-colorSecondary': {
                color: 'rgba(224, 224, 224, 1)',
                borderRadius: '100px',
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.08)' },
                '&.Mui-checked': {
                  color: 'rgba(206, 147, 216, 1)',
                  '&:hover': { backgroundColor: 'rgba(206, 147, 216, 0.08)' },
                },
              },
              '&.MuiSwitch-colorError': {
                color: 'rgba(224, 224, 224, 1)',
                borderRadius: '100px',
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.08)' },
                '&.Mui-checked': {
                  color: 'rgba(244, 67, 54, 1)',
                  '&:hover': { backgroundColor: 'rgba(244, 67, 54, 0.08)' },
                },
              },
              '&.MuiSwitch-colorWarning': {
                color: 'rgba(224, 224, 224, 1)',
                borderRadius: '100px',
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.08)' },
                '&.Mui-checked': {
                  color: 'rgba(255, 167, 38, 1)',
                  '&:hover': { backgroundColor: 'rgba(255, 167, 38, 0.08)' },
                },
              },
              '&.MuiSwitch-colorSuccess': {
                color: 'rgba(224, 224, 224, 1)',
                borderRadius: '100px',
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.08)' },
                '&.Mui-checked': {
                  color: 'rgba(102, 187, 106, 1)',
                  '&:hover': { backgroundColor: 'rgba(102, 187, 106, 0.08)' },
                },
              },
              '&.MuiSwitch-colorInfo': {
                color: 'rgba(224, 224, 224, 1)',
                borderRadius: '100px',
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.08)' },
                '&.Mui-checked': {
                  color: 'rgba(41, 182, 246, 1)',
                  '&:hover': { backgroundColor: 'rgba(2, 136, 209, 0.08)' },
                },
              },
            },
            track: {
              '.MuiSwitch-colorPrimary + &': {
                borderRadius: '10px',
                backgroundColor: 'rgba(255, 255, 255, 1)',
              },
              '.Mui-checked.MuiSwitch-colorPrimary.Mui-checked + &': {
                backgroundColor: 'rgba(144, 202, 249, 1)',
              },
              '.Mui-checked.MuiSwitch-colorPrimary.Mui-checked + &': {
                backgroundColor: 'rgba(144, 202, 249, 1)',
              },
              '.MuiSwitch-colorSecondary + &': {
                borderRadius: '10px',
                backgroundColor: 'rgba(255, 255, 255, 1)',
              },
              '.Mui-checked.MuiSwitch-colorSecondary.Mui-checked + &': {
                backgroundColor: 'rgba(206, 147, 216, 1)',
              },
              '.Mui-checked.MuiSwitch-colorSecondary.Mui-checked + &': {
                backgroundColor: 'rgba(206, 147, 216, 1)',
              },
              '.MuiSwitch-colorError + &': {
                borderRadius: '10px',
                backgroundColor: 'rgba(255, 255, 255, 1)',
              },
              '.Mui-checked.MuiSwitch-colorError.Mui-checked + &': {
                backgroundColor: 'rgba(244, 67, 54, 1)',
              },
              '.Mui-checked.MuiSwitch-colorError.Mui-checked + &': {
                backgroundColor: 'rgba(244, 67, 54, 1)',
              },
              '.MuiSwitch-colorWarning + &': {
                borderRadius: '10px',
                backgroundColor: 'rgba(255, 255, 255, 1)',
              },
              '.Mui-checked.MuiSwitch-colorWarning.Mui-checked + &': {
                backgroundColor: 'rgba(255, 167, 38, 1)',
              },
              '.Mui-checked.MuiSwitch-colorWarning.Mui-checked + &': {
                backgroundColor: 'rgba(255, 167, 38, 1)',
              },
              '.MuiSwitch-colorSuccess + &': {
                borderRadius: '10px',
                backgroundColor: 'rgba(255, 255, 255, 1)',
              },
              '.Mui-checked.MuiSwitch-colorSuccess.Mui-checked + &': {
                backgroundColor: 'rgba(102, 187, 106, 1)',
              },
              '.Mui-checked.MuiSwitch-colorSuccess.Mui-checked + &': {
                backgroundColor: 'rgba(102, 187, 106, 1)',
              },
              '.MuiSwitch-colorInfo + &': {
                borderRadius: '10px',
                backgroundColor: 'rgba(255, 255, 255, 1)',
              },
              '.Mui-checked.MuiSwitch-colorInfo.Mui-checked + &': {
                backgroundColor: 'rgba(41, 182, 246, 1)',
              },
              '.Mui-checked.MuiSwitch-colorInfo.Mui-checked + &': {
                backgroundColor: 'rgba(41, 182, 246, 1)',
              },
            },
          },
        },
        MuiFilledInput: {
          styleOverrides: {
            root: {
              color: globalTheme.palette.Text.Primary,
              fontStyle:
                globalTheme.typography.Components['Input Text'].fontStyle,
              fontFamily:
                globalTheme.typography.Components['Input Text'].fontFamily,
              fontWeight:
                globalTheme.typography.Components['Input Text'].fontWeight,
              fontSize:
                globalTheme.typography.Components['Input Text'].fontSize,
              letterSpacing:
                globalTheme.typography.Components['Input Text'].letterSpacing,
              lineHeight:
                globalTheme.typography.Components['Input Text'].lineHeight,
              textDecoration:
                globalTheme.typography.Components['Input Text'].textDecoration,
              textTransform:
                globalTheme.typography.Components['Input Text'].textTransform,
            },
            sizeSmall: {
              color: globalTheme.palette.Text.Primary,
              fontStyle:
                globalTheme.typography.Components['Input Text'].fontStyle,
              fontFamily:
                globalTheme.typography.Components['Input Text'].fontFamily,
              fontWeight:
                globalTheme.typography.Components['Input Text'].fontWeight,
              fontSize:
                globalTheme.typography.Components['Input Text'].fontSize,
              letterSpacing:
                globalTheme.typography.Components['Input Text'].letterSpacing,
              lineHeight:
                globalTheme.typography.Components['Input Text'].lineHeight,
              textDecoration:
                globalTheme.typography.Components['Input Text'].textDecoration,
              textTransform:
                globalTheme.typography.Components['Input Text'].textTransform,
            },
          },
        },
        MuiInput: {
          styleOverrides: {
            root: {
              color: globalTheme.palette.Text.Primary,
              fontStyle:
                globalTheme.typography.Components['Input Text'].fontStyle,
              fontFamily:
                globalTheme.typography.Components['Input Text'].fontFamily,
              fontWeight:
                globalTheme.typography.Components['Input Text'].fontWeight,
              fontSize:
                globalTheme.typography.Components['Input Text'].fontSize,
              letterSpacing:
                globalTheme.typography.Components['Input Text'].letterSpacing,
              lineHeight:
                globalTheme.typography.Components['Input Text'].lineHeight,
              textDecoration:
                globalTheme.typography.Components['Input Text'].textDecoration,
              textTransform:
                globalTheme.typography.Components['Input Text'].textTransform,
            },
            sizeSmall: {
              color: globalTheme.palette.Text.Primary,
              fontStyle:
                globalTheme.typography.Components['Input Text'].fontStyle,
              fontFamily:
                globalTheme.typography.Components['Input Text'].fontFamily,
              fontWeight:
                globalTheme.typography.Components['Input Text'].fontWeight,
              fontSize:
                globalTheme.typography.Components['Input Text'].fontSize,
              letterSpacing:
                globalTheme.typography.Components['Input Text'].letterSpacing,
              lineHeight:
                globalTheme.typography.Components['Input Text'].lineHeight,
              textDecoration:
                globalTheme.typography.Components['Input Text'].textDecoration,
              textTransform:
                globalTheme.typography.Components['Input Text'].textTransform,
            },
          },
        },
        MuiFormHelperText: {
          styleOverrides: {
            root: {
              fontSize: 'undefinedpx',
              letterSpacing: 'normal',
              textDecoration: 'none',
              textTransform: 'none',
              '&.MuiError': {
                fontSize: 'undefinedpx',
                letterSpacing: 'normal',
                textDecoration: 'none',
                textTransform: 'none',
              },
            },
          },
        },
        MuiInputLabel: {
          styleOverrides: {
            root: {
              color: globalTheme.palette.Text.Secondary,
              fontStyle:
                globalTheme.typography.Components['Input Text'].fontStyle,
              fontFamily:
                globalTheme.typography.Components['Input Text'].fontFamily,
              fontWeight:
                globalTheme.typography.Components['Input Text'].fontWeight,
              fontSize:
                globalTheme.typography.Components['Input Text'].fontSize,
              letterSpacing:
                globalTheme.typography.Components['Input Text'].letterSpacing,
              lineHeight:
                globalTheme.typography.Components['Input Text'].lineHeight,
              textDecoration:
                globalTheme.typography.Components['Input Text'].textDecoration,
              textTransform:
                globalTheme.typography.Components['Input Text'].textTransform,
            },
            sizeSmall: {
              color: globalTheme.palette.Text.Secondary,
              fontStyle:
                globalTheme.typography.Components['Input Text'].fontStyle,
              fontFamily:
                globalTheme.typography.Components['Input Text'].fontFamily,
              fontWeight:
                globalTheme.typography.Components['Input Text'].fontWeight,
              fontSize:
                globalTheme.typography.Components['Input Text'].fontSize,
              letterSpacing:
                globalTheme.typography.Components['Input Text'].letterSpacing,
              lineHeight:
                globalTheme.typography.Components['Input Text'].lineHeight,
              textDecoration:
                globalTheme.typography.Components['Input Text'].textDecoration,
              textTransform:
                globalTheme.typography.Components['Input Text'].textTransform,
            },
          },
        },
        MuiOutlinedInput: {
          styleOverrides: {
            root: {
              color: globalTheme.palette.Text.Primary,
              fontStyle:
                globalTheme.typography.Components['Input Text'].fontStyle,
              fontFamily:
                globalTheme.typography.Components['Input Text'].fontFamily,
              fontWeight:
                globalTheme.typography.Components['Input Text'].fontWeight,
              fontSize:
                globalTheme.typography.Components['Input Text'].fontSize,
              letterSpacing:
                globalTheme.typography.Components['Input Text'].letterSpacing,
              lineHeight:
                globalTheme.typography.Components['Input Text'].lineHeight,
              textDecoration:
                globalTheme.typography.Components['Input Text'].textDecoration,
              textTransform:
                globalTheme.typography.Components['Input Text'].textTransform,
            },
            sizeSmall: {
              color: globalTheme.palette.Text.Primary,
              fontStyle:
                globalTheme.typography.Components['Input Text'].fontStyle,
              fontFamily:
                globalTheme.typography.Components['Input Text'].fontFamily,
              fontWeight:
                globalTheme.typography.Components['Input Text'].fontWeight,
              fontSize:
                globalTheme.typography.Components['Input Text'].fontSize,
              letterSpacing:
                globalTheme.typography.Components['Input Text'].letterSpacing,
              lineHeight:
                globalTheme.typography.Components['Input Text'].lineHeight,
              textDecoration:
                globalTheme.typography.Components['Input Text'].textDecoration,
              textTransform:
                globalTheme.typography.Components['Input Text'].textTransform,
            },
          },
        },
        MuiTooltip: {
          styleOverrides: {
            tooltip: {
              backgroundColor: 'rgba(97, 97, 97, 0.9)',
              borderRadius: '4px',
              color: globalTheme.palette.Common.White['100p'],
              fontStyle: globalTheme.typography.Components.Tooltip.fontStyle,
              fontFamily: globalTheme.typography.Components.Tooltip.fontFamily,
              fontWeight: globalTheme.typography.Components.Tooltip.fontWeight,
              fontSize: globalTheme.typography.Components.Tooltip.fontSize,
              letterSpacing:
                globalTheme.typography.Components.Tooltip.letterSpacing,
              lineHeight: globalTheme.typography.Components.Tooltip.lineHeight,
              textDecoration:
                globalTheme.typography.Components.Tooltip.textDecoration,
              textTransform:
                globalTheme.typography.Components.Tooltip.textTransform,
            },
            arrow: { color: 'rgba(97, 97, 97, 0.9)' },
          },
        },
      },
    },
    globalTheme
  );
};
