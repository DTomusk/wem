"use client";
import { FormControlLabel, Switch } from "@mui/material";
import { useThemeMode } from "./ThemeRegistry";

export default function ThemeToggle() {
    const { mode, toggleTheme } = useThemeMode();

    return (
        <FormControlLabel control={
            <Switch onClick={toggleTheme} checked={mode === 'dark'} />} 
            label={mode === 'dark' ? 'Light Mode' : 'Dark Mode'} />
    )
}