/* eslint-disable no-dupe-keys */
import { createContext, useEffect, useMemo, useState } from 'react';

import { ThemeProvider } from '@mui/material/styles';
import { useSelector } from 'react-redux';

import { useThemeSync } from '@/hooks/useThemeSync';

import { globalThemeCallback, mainTheme } from './componentsTheme';
import { darkPalette, lightPalette } from './palette';

export const useMode = (initialMode = 'dark') => {
  const [mode, setMode] = useState(initialMode);
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light')),
      setMode: (newMode) => setMode(newMode),
    }),
    []
  );

  const updatedPalette = useMemo(() => {
    if (mode === 'light') {
      return {
        ...darkPalette,
        ...lightPalette,
      };
    }
    return darkPalette;
  }, [mode]);

  return [updatedPalette, colorMode, mode];
};

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
  setMode: () => {},
});

const AppThemeProvider = ({ children }) => {
  useThemeSync();
  const userTheme = useSelector(
    (state) => state.user.data?.systemConfig?.theme
  );
  const [updatedPalette, colorMode, mode] = useMode(
    userTheme ? 'light' : 'dark'
  );

  const globalTheme = globalThemeCallback(updatedPalette);

  const theme = useMemo(() => {
    return mainTheme(globalTheme);
  }, [globalTheme]);

  useEffect(() => {
    if (userTheme !== undefined) {
      colorMode.setMode(userTheme ? 'light' : 'dark');
    }
  }, [userTheme, colorMode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default AppThemeProvider;
