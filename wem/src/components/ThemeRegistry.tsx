"use client";
import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { darkTheme, lightTheme } from "../theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// These are the possible themes, we could add more here
export type ThemeMode = "light" | "dark";

interface ThemeContextType {
    mode: ThemeMode;
    toggleTheme: () => void;
}

const ThemeModeContext = createContext<ThemeContextType>({
    mode: 'light',
    toggleTheme: () => {},
});

export function useThemeMode() {
    return useContext(ThemeModeContext);
}

export default function ThemeRegistry({ 
    children,
    defaultMode = 'light', 
}: { 
    children: React.ReactNode;
    defaultMode?: ThemeMode 
}) {
    const [mode, setMode] = useState<ThemeMode>(defaultMode);

    // If there is a theme cookie, use that as the theme, otherwise we fall back to the default
    useEffect(() => {
        const savedMode = Cookies.get('theme') as ThemeMode | undefined;
        if (savedMode) setMode(savedMode);
    }, []);

    // This is just a toggle function, if we wanted more themes, we'd have to change how this works
    const toggleTheme = () => {
        setMode((prevMode) => {
            const newMode = prevMode === 'light' ? 'dark' : 'light';
            Cookies.set('theme', newMode);
            return newMode;
        });
    };

    return (
        <ThemeModeContext.Provider value={{ mode, toggleTheme }}>
            {/* The theme provider is responsible for how MUI components are styled */}
            <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
                {/* CssBaseline is a MUI component that resets the CSS, this gets rid of stuff like background colours */}
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeModeContext.Provider>
    );
}