import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";

interface ThemeContext {
    theme: string,
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContext | undefined>(undefined);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};

export const ThemeProvider = ({ children } : { children: ReactNode }) => {
    const [  theme, setTheme ] = useState<string>("light");

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
    };

    useEffect(() => {
        document.body.className = theme === 'dark' ? 'bg-[#26292B]' : 'bg-[#EDEDED]';
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};