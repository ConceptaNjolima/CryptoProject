import { useTheme } from '../context/ThemeProvide';
import { useEffect } from 'react';

export const ThemeToggle = () => {
    const { darkMode, toggleDarkMode } = useTheme();
    
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [darkMode]);

    return (
        <button
            onClick={toggleDarkMode}
            className={`
                px-4 py-2 rounded-lg font-semibold transition-colors duration-200
                ${darkMode 
                    ? 'bg-green-500 hover:bg-green-600 text-gray-900' 
                    : 'bg-gray-800 hover:bg-gray-900 text-white'
                }
            `}
        >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
    );
};
