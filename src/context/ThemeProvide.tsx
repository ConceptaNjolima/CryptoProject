import { useContext, useState, useEffect } from "react"
import { createContext } from "react";

export const ThemeContext = createContext(
    {
        darkMode: false,
        toggleDarkMode: () => {}
    }
);

export const ThemeProvider = ({ children }: any) => {
    const [darkMode, setDarkMode] = useState(false);
    
    const toggleDarkMode = () => setDarkMode((prev) => !prev);
    
    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);