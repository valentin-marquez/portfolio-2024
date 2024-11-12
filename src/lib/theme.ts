import React from 'react';

// theme.ts
export type Theme = 'light' | 'dark' | 'system';

// Hook personalizado para el tema
export function useTheme() {
  const [currentTheme, setCurrentTheme] = React.useState<Theme>('system');

  React.useEffect(() => {
    // Obtener el tema inicial
    const savedTheme = (localStorage.getItem('theme') as Theme) || 'system';
    setCurrentTheme(savedTheme);

    // Aplicar el tema inicial
    updateTheme(savedTheme);

    // Escuchar cambios en el tema del sistema
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (currentTheme === 'system') {
        updateTheme('system');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const setTheme = React.useCallback((theme: Theme) => {
    setCurrentTheme(theme);
    localStorage.setItem('theme', theme);
    updateTheme(theme);
  }, []);

  return { theme: currentTheme, setTheme };
}

// Función para actualizar el tema
function updateTheme(theme: Theme) {
  const isDark =
    theme === 'dark' ||
    (theme === 'system' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches);

  document.documentElement.classList.toggle('dark', isDark);
}

// Script inicial para el manejo del tema
export const themeScript = `
  function getThemePreference() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function updateTheme(theme) {
    const isDark = 
      theme === 'dark' || 
      (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    document.documentElement.classList.toggle('dark', isDark);
  }

  // Aplicar tema inicial
  const theme = getThemePreference();
  updateTheme(theme);

  // Escuchar cambios en el tema del sistema
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (localStorage.getItem('theme') === 'system') {
      updateTheme('system');
    }
  });
`;
