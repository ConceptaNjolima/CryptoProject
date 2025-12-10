import { useContext, useState, type ReactNode } from "react"
import { createContext } from "react";

export const ThemeContext = createContext(
    {
        darkMode: false,
        toggleDarkMode: () => {}
    }
);

type ThemeProviderProps = {
    children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [darkMode, setDarkMode] = useState(false);
    
    const toggleDarkMode = () => setDarkMode((prev) => !prev);
    
    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);