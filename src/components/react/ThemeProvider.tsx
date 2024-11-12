import React, { createContext, useContext, useEffect, useState } from 'react';
import type { Theme } from '../../lib/theme';

declare global {
  interface Window {
    theme: {
      get: () => string;
      set: (theme: string) => void;
    };
  }
}

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'system',
  setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>('system');

  useEffect(() => {
    // Sincronizar con el estado inicial
    const currentTheme = window.theme.get() as Theme;
    setTheme(currentTheme);
  }, []);

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    window.theme.set(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
};
